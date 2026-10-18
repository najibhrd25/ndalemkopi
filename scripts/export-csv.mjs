import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { menuItems } from '../src/data/menu.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const headers = [
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

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

function itemsToCsv(items) {
  const rows = [headers.join(',')];
  const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

  for (const item of items) {
    const row = [
      escapeCsv(item.id),
      escapeCsv(item.name),
      escapeCsv(item.type),
      escapeCsv(item.category),
      escapeCsv(item.categoryName),
      item.price || 0,
      escapeCsv(item.image || ''),
      escapeCsv(item.description || ''),
      escapeCsv(item.notes || ''),
      escapeCsv('Tersedia'),
      Boolean(item.favorite),
      Boolean(item.signature),
      escapeCsv(now)
    ];
    rows.push(row.join(','));
  }
  return rows.join('\n');
}

const minumanItems = menuItems.filter(i => i.type === 'minuman');
const makananItems = menuItems.filter(i => i.type === 'makanan');

const outDir = path.join(rootDir, 'public', 'database');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'Minuman.csv'), itemsToCsv(minumanItems), 'utf8');
fs.writeFileSync(path.join(outDir, 'Makanan.csv'), itemsToCsv(makananItems), 'utf8');
fs.writeFileSync(path.join(outDir, 'Semua_Menu.json'), JSON.stringify(menuItems, null, 2), 'utf8');

console.log(`Berhasil mengekspor:
- ${minumanItems.length} menu minuman -> public/database/Minuman.csv
- ${makananItems.length} menu makanan -> public/database/Makanan.csv
- ${menuItems.length} semua menu -> public/database/Semua_Menu.json`);
