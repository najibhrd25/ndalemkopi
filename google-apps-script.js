/**
 * ============================================================================
 * NDALEM KOPI — GOOGLE APPS SCRIPT DATABASE ENGINE
 * Spreadsheet ID: 144rFHF79vDRl2n9TMRU9zwWDhRF4czLkoa7hTuJK5GU
 * 
 * PANDUAN PEMASANGAN (DEPLOI):
 * 1. Buka spreadsheet: https://docs.google.com/spreadsheets/d/144rFHF79vDRl2n9TMRU9zwWDhRF4czLkoa7hTuJK5GU/edit
 * 2. Klik menu "Extensions" (Ekstensi) > "Apps Script".
 * 3. Hapus kode default di editor, lalu salin dan tempel (paste) seluruh isi file ini.
 * 4. Klik icon "Save" (Simpan).
 * 5. Jalankan fungsi "setupDatabaseSheets" sekali untuk membuat tab 'Minuman' & 'Makanan' secara otomatis.
 * 6. (Opsional) Jalankan fungsi "seedInitialData" jika ingin langsung mengisi 84 menu bawaan Ndalem Kopi ke sheet!
 * 7. Klik tombol biru "Deploy" (Terapkan) di kanan atas > "New deployment" (Penerapan baru).
 * 8. Pilih jenis: "Web app" (Aplikasi Web).
 * 9. Konfigurasi:
 *    - Description: "Ndalem Kopi Database API"
 *    - Execute as: "Me" (Saya)
 *    - Who has access: "Anyone" (Siapa saja / Anonim) -> AGAR ADMIN DASHBOARD BISA POST/GET TANPA LOGIN GOOGLE
 * 10. Klik "Deploy", beri izin (Authorize Access), lalu salin URL Web App yang dihasilkan.
 * 11. Masukkan URL tersebut ke Dashboard Admin Ndalem Kopi (Pengaturan Google Sheet).
 * ============================================================================
 */

const SPREADSHEET_ID = '144rFHF79vDRl2n9TMRU9zwWDhRF4czLkoa7hTuJK5GU';
const SHEET_MINUMAN = 'Minuman';
const SHEET_MAKANAN = 'Makanan';

const HEADERS = [
  'ID',
  'Nama Menu',
  'Tipe',
  'Kategori ID',
  'Nama Kategori',
  'Harga',
  'Foto URL',
  'Deskripsi',
  'Catatan / Opsi',
  'Status',
  'Favorit',
  'Signature',
  'Waktu Update'
];

/**
 * Setup lembar kerja (sheets) Minuman dan Makanan dengan header rapi
 */
function setupDatabaseSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  [SHEET_MINUMAN, SHEET_MAKANAN].forEach(sheetName => {
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Set Header
    const range = sheet.getRange(1, 1, 1, HEADERS.length);
    range.setValues([HEADERS]);
    range.setBackground('#2B1C14');
    range.setFontColor('#FAF7F2');
    range.setFontWeight('bold');
    range.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
    
    // Auto resize
    sheet.setColumnWidth(1, 140); // ID
    sheet.setColumnWidth(2, 200); // Nama
    sheet.setColumnWidth(3, 100); // Tipe
    sheet.setColumnWidth(4, 130); // Kat ID
    sheet.setColumnWidth(5, 160); // Kat Nama
    sheet.setColumnWidth(6, 100); // Harga
    sheet.setColumnWidth(7, 250); // Foto URL
    sheet.setColumnWidth(8, 260); // Deskripsi
    sheet.setColumnWidth(9, 220); // Catatan
    sheet.setColumnWidth(10, 100); // Status
    sheet.setColumnWidth(11, 80); // Favorit
    sheet.setColumnWidth(12, 80); // Signature
    sheet.setColumnWidth(13, 160); // Waktu Update
  });

  // Hapus Sheet1 bawaan kosong jika ada dan sudah ada tab lain
  const defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 1) {
    try {
      ss.deleteSheet(defaultSheet);
    } catch(e) {}
  }

  Logger.log('Berhasil setup sheet Minuman & Makanan!');
}

/**
 * Format Response JSON dengan CORS
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * GET Handler: Mengambil data menu dari Google Sheet
 */
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const targetType = e && e.parameter ? e.parameter.type : null; // 'minuman' | 'makanan' | null (all)

    let items = [];

    if (!targetType || targetType.toLowerCase() === 'minuman') {
      const sheetMinuman = ss.getSheetByName(SHEET_MINUMAN);
      if (sheetMinuman) {
        items = items.concat(readSheetItems(sheetMinuman, 'minuman'));
      }
    }

    if (!targetType || targetType.toLowerCase() === 'makanan') {
      const sheetMakanan = ss.getSheetByName(SHEET_MAKANAN);
      if (sheetMakanan) {
        items = items.concat(readSheetItems(sheetMakanan, 'makanan'));
      }
    }

    return createJsonResponse({
      status: 'success',
      total: items.length,
      data: items,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

/**
 * Membaca baris-baris sheet menjadi array of object
 */
function readSheetItems(sheet, defaultType) {
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];

  const values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  return values.map(row => {
    return {
      id: String(row[0] || ''),
      name: String(row[1] || ''),
      type: (String(row[2] || defaultType)).toLowerCase(),
      category: String(row[3] || ''),
      categoryName: String(row[4] || ''),
      price: Number(row[5] || 0),
      image: String(row[6] || ''),
      description: String(row[7] || ''),
      notes: String(row[8] || ''),
      status: String(row[9] || 'Tersedia'),
      favorite: String(row[10]).toLowerCase() === 'true',
      signature: String(row[11]).toLowerCase() === 'true',
      updatedAt: String(row[12] || '')
    };
  }).filter(item => item.id && item.name);
}

/**
 * POST Handler: Membuat / Mengupdate / Menghapus menu di Google Sheet
 */
function doPost(e) {
  try {
    setupDatabaseSheets();
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    let payload = {};
    if (e && e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      payload = e.parameter;
    }

    const action = payload.action || 'create';
    const item = payload.item || payload;
    const itemType = (item.type || 'minuman').toLowerCase();
    const targetSheetName = itemType === 'makanan' ? SHEET_MAKANAN : SHEET_MINUMAN;
    const targetSheet = ss.getSheetByName(targetSheetName);

    if (!targetSheet) {
      throw new Error('Sheet ' + targetSheetName + ' tidak ditemukan');
    }

    const now = Utilities.formatDate(new Date(), 'Asia/Jakarta', 'yyyy-MM-dd HH:mm:ss');

    if (action === 'create') {
      const id = item.id || ('menu-' + Date.now());
      const newRow = [
        id,
        item.name || '',
        itemType,
        item.category || '',
        item.categoryName || '',
        Number(item.price || 0),
        item.image || '',
        item.description || '',
        item.notes || '',
        item.status || 'Tersedia',
        Boolean(item.favorite),
        Boolean(item.signature),
        now
      ];
      targetSheet.appendRow(newRow);

      return createJsonResponse({
        status: 'success',
        action: 'create',
        message: 'Menu berhasil ditambahkan ke Google Sheet!',
        id: id,
        sheet: targetSheetName
      });
    }

    if (action === 'update') {
      const id = item.id;
      if (!id) throw new Error('ID menu wajib ada untuk update');

      const found = findRowById(targetSheet, id);
      if (found > 0) {
        targetSheet.getRange(found, 2).setValue(item.name || '');
        targetSheet.getRange(found, 3).setValue(itemType);
        targetSheet.getRange(found, 4).setValue(item.category || '');
        targetSheet.getRange(found, 5).setValue(item.categoryName || '');
        targetSheet.getRange(found, 6).setValue(Number(item.price || 0));
        targetSheet.getRange(found, 7).setValue(item.image || '');
        targetSheet.getRange(found, 8).setValue(item.description || '');
        targetSheet.getRange(found, 9).setValue(item.notes || '');
        targetSheet.getRange(found, 10).setValue(item.status || 'Tersedia');
        targetSheet.getRange(found, 11).setValue(Boolean(item.favorite));
        targetSheet.getRange(found, 12).setValue(Boolean(item.signature));
        targetSheet.getRange(found, 13).setValue(now);

        return createJsonResponse({
          status: 'success',
          action: 'update',
          message: 'Menu berhasil diperbarui!',
          id: id
        });
      } else {
        // Cek sheet seberang jika ada perpindahan tipe makanan <-> minuman
        const altSheetName = targetSheetName === SHEET_MINUMAN ? SHEET_MAKANAN : SHEET_MINUMAN;
        const altSheet = ss.getSheetByName(altSheetName);
        const altFound = altSheet ? findRowById(altSheet, id) : -1;
        if (altFound > 0) {
          altSheet.deleteRow(altFound);
          targetSheet.appendRow([
            id, item.name || '', itemType, item.category || '', item.categoryName || '',
            Number(item.price || 0), item.image || '', item.description || '', item.notes || '',
            item.status || 'Tersedia', Boolean(item.favorite), Boolean(item.signature), now
          ]);
          return createJsonResponse({
            status: 'success',
            action: 'move_and_update',
            message: 'Menu dipindahkan ke sheet ' + targetSheetName + ' dan diperbarui!'
          });
        }
        throw new Error('Menu dengan ID ' + id + ' tidak ditemukan');
      }
    }

    if (action === 'delete') {
      const id = item.id;
      if (!id) throw new Error('ID menu wajib ada untuk menghapus');

      let deleted = false;
      [SHEET_MINUMAN, SHEET_MAKANAN].forEach(sName => {
        const sh = ss.getSheetByName(sName);
        if (sh) {
          const row = findRowById(sh, id);
          if (row > 0) {
            sh.deleteRow(row);
            deleted = true;
          }
        }
      });

      return createJsonResponse({
        status: deleted ? 'success' : 'not_found',
        action: 'delete',
        message: deleted ? 'Menu berhasil dihapus dari Google Sheet' : 'Menu tidak ditemukan'
      });
    }

    if (action === 'sync_all' && Array.isArray(payload.items)) {
      // Membersihkan data lama dan mengisi ulang seluruh data
      const minumanItems = payload.items.filter(i => (i.type || '').toLowerCase() === 'minuman');
      const makananItems = payload.items.filter(i => (i.type || '').toLowerCase() === 'makanan');

      writeEntireSheet(ss.getSheetByName(SHEET_MINUMAN), minumanItems, now);
      writeEntireSheet(ss.getSheetByName(SHEET_MAKANAN), makananItems, now);

      return createJsonResponse({
        status: 'success',
        action: 'sync_all',
        totalMinuman: minumanItems.length,
        totalMakanan: makananItems.length,
        message: 'Seluruh menu berhasil disinkronisasi ke Google Sheet!'
      });
    }

    throw new Error('Action tidak dikenal: ' + action);

  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

function findRowById(sheet, id) {
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return -1;
  const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) {
    if (String(ids[i][0]).trim() === String(id).trim()) {
      return i + 2;
    }
  }
  return -1;
}

function writeEntireSheet(sheet, items, now) {
  if (!sheet) return;
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  if (items.length === 0) return;

  const rows = items.map(item => [
    item.id,
    item.name,
    item.type,
    item.category,
    item.categoryName,
    Number(item.price || 0),
    item.image || '',
    item.description || '',
    item.notes || '',
    item.status || 'Tersedia',
    Boolean(item.favorite),
    Boolean(item.signature),
    now
  ]);

  sheet.getRange(2, 1, rows.length, HEADERS.length).setValues(rows);
}
