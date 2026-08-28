# Product Requirements Document (PRD)
# Ndalem Kopi Website — MVP

**Document Status:** Final MVP  
**Product:** Ndalem Kopi Website  
**Brand:** Ndalem Kopi  
**Platform:** Responsive Web  
**Primary Purpose:** Informasi cafe dan katalog menu  
**Tech Stack:** Astro + TypeScript + Native CSS + Vanilla JavaScript  
**Scope:** Home, Menu, Tentang  

---

## 1. Product Overview

Ndalem Kopi membutuhkan website sederhana, ringan, cepat, dan mudah digunakan untuk memperkenalkan cafe serta menampilkan menu makanan dan minuman.

Website tidak diarahkan menjadi aplikasi pemesanan, sistem reservasi, atau e-commerce. Fokus utama MVP adalah:

1. memperkenalkan identitas Ndalem Kopi,
2. menampilkan menu dengan jelas,
3. menonjolkan beberapa menu favorit,
4. memperlihatkan suasana cafe,
5. memberikan informasi dasar seperti alamat, jam buka, dan tautan kontak.

Karakter visual website harus membawa nuansa **Jawa yang hangat, teduh, sederhana, dan kontemporer**, tanpa terasa seperti website restoran tradisional yang terlalu penuh ornamen.

---

## 2. Product Vision

Website Ndalem Kopi harus terasa seperti sebuah **menu cafe digital sekaligus pintu masuk menuju suasana Ndalem**.

Pengunjung harus dapat memahami tiga hal dalam waktu singkat:

- Ndalem Kopi itu tempat seperti apa,
- apa saja yang bisa dipesan,
- dan apakah mereka tertarik untuk datang.

Prinsip utama:

> **Menu first, ambience second, story third.**

Website harus sederhana dan tidak dibuat panjang hanya untuk terlihat lengkap.

---

## 3. Goals

### 3.1 Primary Goals

- Menampilkan daftar menu makanan dan minuman secara jelas.
- Menampilkan harga dan deskripsi singkat setiap menu.
- Menonjolkan menu favorit Ndalem Kopi.
- Memberikan kesan pertama yang kuat melalui hero dan fotografi.
- Memperkenalkan identitas Ndalem Kopi secara singkat.
- Membantu pengunjung menemukan informasi lokasi dan jam buka.
- Memberikan pengalaman mobile yang cepat dan nyaman.

### 3.2 Secondary Goals

- Mendorong pengunjung membuka halaman menu lengkap.
- Mendorong pengunjung membuka Google Maps.
- Mendorong pengunjung mengunjungi Instagram atau WhatsApp.
- Menjadi landing page resmi yang dapat ditautkan dari media sosial.

---

## 4. Non-Goals

Hal-hal berikut **tidak termasuk MVP**:

- Login atau akun pengguna.
- Pemesanan makanan online.
- Checkout.
- Payment gateway.
- Reservasi meja.
- Dashboard admin.
- Database.
- CMS.
- Sistem loyalty.
- Blog.
- Event management.
- Review pelanggan.
- Multi-language system.
- User-generated content.
- Integrasi delivery platform.
- Dynamic server rendering.

Jika suatu saat dibutuhkan, fitur tersebut dapat dipertimbangkan pada fase berikutnya.

---

## 5. Target Users

### 5.1 Pengunjung yang ingin melihat menu

Kebutuhan utama:

- melihat makanan dan minuman,
- mengetahui harga,
- mengetahui pilihan menu,
- menemukan menu favorit atau signature.

Primary flow:

```text
Homepage
→ Menu Favorit
→ Menu Lengkap
→ Menentukan pilihan
```

### 5.2 Calon pengunjung cafe

Kebutuhan utama:

- melihat suasana,
- memahami karakter cafe,
- mengetahui lokasi,
- mengetahui jam buka.

Primary flow:

```text
Homepage
→ Suasana / Tentang
→ Informasi Lokasi
→ Google Maps
```

### 5.3 Pengunjung dari Instagram atau social media

Kebutuhan utama:

- mendapatkan informasi dengan cepat,
- mengecek harga sebelum datang,
- membuka website dengan nyaman dari smartphone.

Karena itu, website harus mengutamakan **mobile-first experience**.

---

## 6. Brand Direction

### 6.1 Brand Personality

Ndalem Kopi harus terasa:

- hangat,
- tenang,
- teduh,
- sederhana,
- bersahaja,
- membumi,
- berbudaya,
- ramah,
- tidak tergesa-gesa.

### 6.2 Cultural Direction

Nuansa Jawa digunakan sebagai identitas dan aksen, bukan sebagai dekorasi berlebihan.

Referensi suasana:

- rumah Jawa,
- pendopo,
- kayu,
- halaman,
- tanaman,
- keramik,
- kopi,
- tekstur alami,
- suasana sore,
- pencahayaan hangat,
- material yang terasa lived-in.

Hindari:

- motif batik di setiap section,
- ornamentasi Jawa berlebihan,
- visual seperti museum,
- kombinasi terlalu banyak font dekoratif,
- warna emas berlebihan,
- gaya kerajaan atau formal.

Target akhirnya adalah:

> **Jawa kontemporer, hangat, dan editorial.**

---

## 7. Tone of Voice

Bahasa utama website adalah **Bahasa Indonesia**.

Bahasa Jawa digunakan sebagai aksen brand agar tetap mudah dipahami pengguna dari berbagai latar belakang.

Contoh:

```text
Sugeng Rawuh
Delok Menu
Critane Ndalem
Suguhan Favorit
Mampir Nang Ndalem
```

Untuk informasi penting seperti nama menu, harga, alamat, jam buka, dan deskripsi produk, gunakan bahasa yang sederhana dan mudah dipahami.

### Prinsip copywriting

- pendek,
- hangat,
- natural,
- tidak terlalu puitis,
- tidak terlalu formal,
- tidak memaksakan bahasa Jawa di seluruh interface.

---

# 8. Information Architecture

MVP memiliki tiga route utama.

```text
/
├── menu
└── tentang
```

Detail:

```text
/          → Home
/menu      → Menu lengkap
/tentang   → Tentang Ndalem Kopi
```

Tidak diperlukan route khusus untuk:

```text
/lokasi
/kontak
/gallery
/blog
/acara
```

Informasi lokasi, kontak, jam buka, dan social media diletakkan pada footer dan/atau section terakhir homepage.

---

# 9. Global Navigation

## Desktop

```text
NDALEM KOPI

Beranda
Menu
Tentang

[ Delok Menu ]
```

CTA utama navbar mengarah ke:

```text
/menu
```

## Mobile

```text
NDALEM KOPI                ☰
```

Menu:

```text
Beranda
Menu
Tentang

Delok Menu →
```

Navbar harus:

- sederhana,
- mudah dibaca,
- tidak memiliki terlalu banyak item,
- tetap ringan,
- mobile friendly.

Sticky navbar bersifat opsional.

---

# 10. Page Requirements

# 10.1 Home — `/`

## Purpose

Homepage berfungsi sebagai:

- first impression,
- showcase menu favorit,
- pengantar identitas cafe,
- pintu menuju menu lengkap.

Homepage tidak perlu terlalu panjang.

Recommended structure:

```text
Navbar
↓
Hero
↓
Menu Favorit
↓
Tentang Singkat
↓
Suasana Ndalem
↓
Final CTA
↓
Footer
```

---

## 10.1.1 Hero Section

### Goal

Mengenalkan Ndalem Kopi dalam beberapa detik pertama.

### Content

- Brand name.
- Headline.
- Deskripsi pendek.
- CTA menuju menu.
- Hero photography.

Contoh arah copy:

```text
SUGENG RAWUH

Ndalem Kopi

Ngopi, mangan, lan crita
tanpa perlu kesusu.

[ Delok Menu ]
```

Secondary CTA opsional:

```text
[ Critane Ndalem ]
```

### Visual Requirement

Hero sebaiknya menggunakan foto asli cafe.

Prioritas:

- suasana cafe,
- material kayu,
- meja,
- kopi,
- tanaman,
- pencahayaan alami atau hangat.

Hero tidak harus menggunakan slider.

**MVP hanya membutuhkan satu hero image yang kuat.**

---

# 10.1.2 Menu Favorit

## Goal

Memberikan preview menu dan mendorong pengguna membuka halaman `/menu`.

Ini adalah section utama homepage setelah Hero.

### Structure

Dibagi menjadi dua kelompok:

```text
OMBEYAN
3 menu favorit

PANGANAN
3 menu favorit
```

### Total

- 3 minuman favorit.
- 3 makanan favorit.
- Maksimal 6 menu.

### Each Item

Minimal menampilkan:

- nama,
- deskripsi pendek,
- harga.

Foto bersifat opsional untuk setiap item.

Lebih disarankan menggunakan 1–2 foto besar sebagai visual pendamping daripada memberikan foto pada seluruh menu.

Example:

```text
SUGUHAN FAVORIT

OMBEYAN

Kopi Susu Ndalem                    22K
Espresso, susu segar, gula aren.

Kopi Tubruk                         15K
Kopi hitam tradisional.

Wedang Uwuh                         18K
Jahe, secang, dan rempah.


PANGANAN

Pisang Goreng Ndalem                20K
Pisang hangat dengan gula jawa.

Mendoan                             18K
Tempe tipis dengan sambal kecap.

Nasi Goreng Ndalem                  28K
Nasi goreng racikan Ndalem.


[ Delok Kabeh Menu → ]
```

### Visual Direction

Menu favorit sebaiknya lebih terasa seperti:

> **menu booklet / restaurant editorial layout**

daripada grid card seperti aplikasi delivery.

Hindari terlalu banyak:

- shadow,
- rounded card,
- badge,
- container bertingkat.

Gunakan:

- whitespace,
- typography,
- garis tipis,
- foto,
- hierarchy harga dan nama.

---

# 10.1.3 Tentang Singkat

## Goal

Memberikan konteks mengenai nama dan filosofi Ndalem Kopi.

Content cukup sekitar 2–4 kalimat.

Example direction:

```text
CRITANE NDALEM

Ndalem berarti rumah.

Kami ingin membuat ruang sederhana untuk
ngopi, mangan, berbagi cerita, dan berhenti
sejenak dari ramainya hari.

[ Critane Ndalem → ]
```

CTA menuju:

```text
/tentang
```

### Layout

Recommended:

```text
[ Foto Cafe ]   [ Copy ]
```

Pada mobile berubah menjadi:

```text
[ Foto Cafe ]

[ Copy ]
```

---

# 10.1.4 Suasana Ndalem

## Goal

Menjual ambience tanpa membutuhkan halaman gallery terpisah.

### Content

Gunakan sekitar:

- 2–4 foto,
- satu headline,
- satu copy pendek.

Example:

```text
NGASO SEDHELA

Esuk kanggo miwiti.
Sore kanggo crita.
Wengi kanggo ngaso.
```

### Layout

Bisa menggunakan asymmetric image grid.

Contoh:

```text
┌───────────────────────────┐ ┌─────────────┐
│                           │ │             │
│      FOTO CAFE BESAR      │ │ FOTO KOPI   │
│                           │ │             │
└───────────────────────────┘ └─────────────┘
                             ┌─────────────┐
                             │ FOTO DETAIL │
                             └─────────────┘
```

Tidak dibutuhkan:

- slider,
- carousel library,
- lightbox,
- gallery plugin.

---

# 10.1.5 Final CTA

## Goal

Mengembalikan fokus pengunjung menuju menu.

Example:

```text
Wis nemu sing arep dipesen?

Delok kabeh suguhan saka
pawon lan bar Ndalem Kopi.

[ Delok Menu → ]
```

CTA menuju:

```text
/menu
```

---

# 10.1.6 Footer

Footer menampung informasi operasional sehingga tidak perlu route tambahan.

Content:

```text
NDALEM KOPI

Alamat cafe
Kota

Jam buka

Instagram
WhatsApp
Google Maps

© Ndalem Kopi
```

### External Links

- Instagram.
- WhatsApp.
- Google Maps.

External link sebaiknya membuka tab baru apabila sesuai.

---

# 10.2 Menu — `/menu`

## Purpose

Halaman Menu adalah **core feature** website.

Ini harus menjadi halaman yang:

- cepat,
- mudah discan,
- mudah dibaca,
- nyaman digunakan di smartphone.

---

## 10.2.1 Header

Example:

```text
MENU NDALEM

Suguhan kanggo ngancani critamu.
```

Tidak perlu hero besar seperti homepage.

Tujuannya agar pengguna cepat mencapai daftar menu.

---

## 10.2.2 Main Filter

Filter utama:

```text
Kabeh
Ombenan
Panganan
```

Filter dilakukan di client menggunakan JavaScript sederhana.

Tidak memerlukan:

- React,
- state management,
- API,
- query parameter,
- server request.

Default:

```text
Kabeh
```

---

## 10.2.3 Menu Category

Recommended category:

### Ombenan

```text
Kopi
Non-Kopi
Wedangan
```

### Panganan

```text
Panganan Abot
Kudapan
```

Kategori dapat diubah sesuai menu asli Ndalem Kopi.

---

## 10.2.4 Menu Item

Setiap menu minimal memiliki:

```text
name
description
price
type
category
favorite
```

Optional:

```text
image
availability
label
```

### Display Example

```text
Kopi Susu Ndalem                   22K
Espresso, susu segar, dan gula aren.
```

Menu harus tetap jelas meskipun tidak menggunakan foto.

---

## 10.2.5 Menu Interaction

MVP hanya membutuhkan:

### Required

- filter Semua / Minuman / Makanan.

### Optional

- category navigation,
- smooth scroll menuju kategori.

Tidak diperlukan:

- search,
- sorting,
- modal menu detail,
- cart,
- quantity,
- order button per item.

---

# 10.3 Tentang — `/tentang`

## Purpose

Memberikan cerita singkat mengenai Ndalem Kopi.

Halaman ini mendukung branding tetapi bukan feature utama MVP.

Recommended structure:

```text
Hero / Intro
↓
Cerita Ndalem
↓
Filosofi
↓
Foto Suasana
↓
CTA Menu
```

---

## 10.3.1 Intro

Example direction:

```text
NDalem iku papan kanggo mulih.
```

atau copy lain yang nantinya ditentukan saat proses branding.

---

## 10.3.2 Cerita Ndalem

Konten dapat menjelaskan:

- arti nama Ndalem,
- alasan cafe dibuat,
- suasana yang ingin diberikan,
- hubungan antara kopi, makanan, ruang, dan percakapan.

Panjang ideal:

```text
150–300 kata
```

Tidak perlu menjadi artikel panjang.

---

## 10.3.3 Philosophy

Bisa menggunakan tiga value sederhana:

```text
Kopi
Panganan
Crita
```

atau:

```text
Ngopi
Ngaso
Crita
```

Detail final ditentukan setelah design/brand exploration.

---

## 10.3.4 CTA

Di bagian akhir:

```text
[ Delok Menu ]
```

Kembali ke:

```text
/menu
```

---

# 11. Menu Data Architecture

Menu harus memiliki **single source of truth**.

Recommended:

```text
src/data/menu.ts
```

Example:

```ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "minuman" | "makanan";
  category:
    | "kopi"
    | "non-kopi"
    | "wedangan"
    | "panganan"
    | "kudapan";
  favorite?: boolean;
  image?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "kopi-susu-ndalem",
    name: "Kopi Susu Ndalem",
    description: "Espresso, susu segar, dan gula aren.",
    price: 22000,
    type: "minuman",
    category: "kopi",
    favorite: true,
    image: "/images/menu/kopi-susu-ndalem.webp",
  },
];
```

Homepage mengambil menu:

```ts
menuItems.filter((item) => item.favorite);
```

Menu page menggunakan seluruh:

```ts
menuItems
```

Keuntungan:

- data tidak terduplikasi,
- harga mudah diperbarui,
- nama mudah diperbarui,
- favorite menu mudah diubah,
- tidak membutuhkan database.

---

# 12. Technical Stack

## 12.1 Core

```text
Astro
TypeScript
Native CSS
Vanilla JavaScript
```

## 12.2 Asset Handling

Gunakan fitur image bawaan Astro bila sesuai.

Format gambar direkomendasikan:

```text
.webp
.avif
.svg
```

Gunakan `.jpg` / `.png` hanya apabila dibutuhkan.

---

# 13. Libraries

## MVP Dependencies

Tidak perlu memasang library frontend tambahan.

Recommended dependency philosophy:

```text
Astro                ✅
TypeScript           ✅ built into workflow
Native CSS           ✅
Vanilla JS           ✅

React                ❌
Vue                  ❌
Svelte               ❌
React Router         ❌
Tailwind CSS         ❌
Framer Motion        ❌
GSAP                 ❌
Swiper               ❌
Axios                 ❌
Zustand               ❌
UI Component Library ❌
Icon Library          ❌
CMS                   ❌
Database              ❌
```

### Icon Strategy

Untuk ikon sederhana seperti:

- arrow,
- Instagram,
- WhatsApp,
- location,

gunakan inline SVG.

Tidak perlu memasang icon package untuk beberapa ikon saja.

---

# 14. Routing

Astro menggunakan file-based routing.

Recommended:

```text
src/pages/
├── index.astro
├── menu.astro
└── tentang.astro
```

Hasil:

```text
src/pages/index.astro
→ /

src/pages/menu.astro
→ /menu

src/pages/tentang.astro
→ /tentang
```

Tidak diperlukan routing library tambahan.

---

# 15. Recommended Project Structure

```text
ndalem-kopi/
│
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero/
│       ├── cafe/
│       └── menu/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── SectionHeading.astro
│   │   ├── MenuItem.astro
│   │   ├── MenuSection.astro
│   │   └── PictureFrame.astro
│   │
│   ├── data/
│   │   └── menu.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── menu.astro
│   │   └── tentang.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Struktur dapat diperkecil lagi apabila komponen belum diperlukan.

Prinsip:

> Jangan membuat abstraction sebelum benar-benar dibutuhkan.

---

# 16. Styling Architecture

Untuk MVP gunakan satu file global:

```text
src/styles/global.css
```

Jika styling mulai besar, baru pecah menjadi:

```text
src/styles/
├── tokens.css
├── global.css
└── utilities.css
```

Tidak perlu CSS framework.

Design token final akan ditentukan pada tahap **Design System**.

---

# 17. Responsive Requirements

Website harus didesain mobile-first.

Minimum breakpoint consideration:

```text
Mobile
Tablet
Desktop
```

Tidak perlu terlalu banyak custom breakpoint.

### Mobile

Prioritas:

- menu mudah dibaca,
- text tidak terlalu kecil,
- CTA mudah ditekan,
- foto tetap proporsional,
- navigasi sederhana,
- harga mudah ditemukan.

### Desktop

Gunakan ruang untuk:

- editorial composition,
- pairing image + menu,
- asymmetric layout,
- whitespace.

---

# 18. Performance Requirements

Karena website bersifat sederhana dan statis, performance menjadi salah satu keuntungan utama.

Target:

- Static output.
- Minimum client-side JavaScript.
- Tidak memuat framework JavaScript yang tidak dibutuhkan.
- Image optimization.
- Lazy load gambar di bawah fold.
- Hero image diprioritaskan.
- Font tidak berlebihan.
- Hindari video background untuk MVP.
- Hindari carousel berat.
- Hindari animation library.

Recommended initial JavaScript:

```text
Navbar mobile
+
Menu filter
```

Tidak lebih dari yang diperlukan.

---

# 19. Image Requirements

Fotografi menjadi bagian penting dari produk.

Prioritas asset:

1. Hero cafe.
2. Signature drink.
3. Signature food.
4. Interior.
5. Outdoor / halaman.
6. Detail kopi.
7. Detail meja / keramik / elemen interior.
8. Foto suasana dengan manusia apabila tersedia.

### Guidelines

Foto sebaiknya:

- natural,
- hangat,
- tidak terlalu commercial,
- memiliki karakter,
- konsisten secara color grading.

Hindari:

- stock photo,
- foto menu dengan background berbeda-beda,
- foto resolusi terlalu besar tanpa optimasi.

---

# 20. SEO Requirements

Setiap page harus memiliki:

- `<title>`,
- meta description,
- canonical URL saat domain final tersedia,
- Open Graph metadata dasar,
- favicon.

Suggested titles:

### Home

```text
Ndalem Kopi — Ngopi, Mangan, lan Crita
```

### Menu

```text
Menu Ndalem Kopi — Makanan & Minuman
```

### Tentang

```text
Tentang Ndalem Kopi — Critane Ndalem
```

Description final akan disesuaikan setelah copywriting final.

---

# 21. Semantic HTML Requirements

Gunakan semantic HTML apabila memungkinkan:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Menu makanan dapat menggunakan struktur heading yang jelas.

Harga tidak boleh hanya tersampaikan melalui gambar.

---

# 22. Accessibility Requirements

MVP minimal harus memenuhi:

- text contrast yang jelas,
- alt text untuk foto relevan,
- keyboard-accessible navigation,
- visible focus state,
- button/link memiliki label jelas,
- tap target mobile memadai,
- heading hierarchy benar,
- tidak bergantung pada warna saja untuk menyampaikan informasi.

Animation, jika digunakan, harus sederhana dan tidak menghalangi pengguna.

---

# 23. Animation Requirements

Animation bukan fokus MVP.

Jika digunakan, cukup:

- subtle fade,
- image hover zoom kecil,
- underline transition,
- mobile navigation transition.

Hindari:

- scroll hijacking,
- excessive parallax,
- page animation berat,
- animation library besar.

Prinsip motion:

> **Alon, alus, ora rame.**

---

# 24. Content Requirements

Sebelum development final, dibutuhkan:

### Brand

- Logo Ndalem Kopi.
- Favicon.

### Cafe Information

- Alamat.
- Jam buka.
- Instagram.
- WhatsApp.
- Google Maps URL.

### Menu

Untuk setiap item:

- nama,
- harga,
- kategori,
- jenis makanan/minuman,
- deskripsi singkat,
- status favorite,
- foto jika tersedia.

### Photography

Minimum recommended:

- 1 hero photo.
- 2–3 cafe ambience photos.
- 1 signature drink photo.
- 1 signature food photo.

---

# 25. MVP Content Example

## Minuman Favorite

```text
Kopi Susu Ndalem
Kopi Tubruk
Wedang Uwuh
```

## Makanan Favorite

```text
Pisang Goreng Ndalem
Mendoan
Nasi Goreng Ndalem
```

Nama dan harga tersebut hanya placeholder sampai menu asli diberikan.

---

# 26. Analytics

Analytics **tidak wajib** untuk MVP pertama.

Jika nantinya dibutuhkan, event paling penting:

```text
menu_page_view
click_view_menu
click_google_maps
click_whatsapp
click_instagram
```

Tidak perlu menambahkan analytics sebelum ada kebutuhan nyata.

---

# 27. Deployment

Karena menggunakan Astro static build, website dapat di-deploy pada static hosting.

Output yang diharapkan:

```text
Static HTML
Optimized CSS
Minimal JavaScript
Optimized assets
```

Tidak dibutuhkan Node.js server runtime untuk MVP apabila semua fitur tetap statis.

---

# 28. Core User Flow

## Main Flow

```text
Instagram / Google
        ↓
      Home
        ↓
  Menu Favorit
        ↓
    Lihat Menu
        ↓
   Menu Lengkap
```

## Visit Intent Flow

```text
Instagram / Google
        ↓
      Home
        ↓
    Suasana
        ↓
 Footer Information
        ↓
   Google Maps
        ↓
   Datang ke Cafe
```

---

# 29. MVP Priority

## P0 — Must Have

- `/`
- `/menu`
- Responsive navigation.
- Hero.
- Menu favorit.
- Menu makanan.
- Menu minuman.
- Harga.
- Deskripsi menu.
- Menu data source.
- Footer.
- Alamat.
- Jam buka.
- Google Maps link.
- Instagram / WhatsApp link.
- Responsive mobile layout.
- Image optimization.
- SEO metadata dasar.

## P1 — Should Have

- `/tentang`
- Menu filtering.
- Suasana section.
- Smooth small interactions.
- Social Open Graph image.
- Active navigation state.

## P2 — Nice to Have

- Category sticky navigation.
- Minor entrance animations.
- Structured data / schema.
- Optional menu item image.
- Advanced SEO.

---

# 30. MVP Acceptance Criteria

MVP dianggap selesai apabila:

### Navigation

- User dapat membuka Home.
- User dapat membuka Menu.
- User dapat membuka Tentang.
- Tidak ada broken route.

### Homepage

- Hero tampil dengan baik pada mobile dan desktop.
- Terdapat CTA menuju Menu.
- Terdapat 3 minuman favorit.
- Terdapat 3 makanan favorit.
- Terdapat pengenalan singkat Ndalem Kopi.
- Informasi lokasi tersedia.
- External contact links bekerja.

### Menu

- Semua menu berasal dari satu source file.
- Nama menu tampil.
- Harga tampil.
- Deskripsi tampil.
- Menu dapat dikelompokkan.
- Filter makanan/minuman bekerja jika diimplementasikan.
- Menu tetap mudah dibaca pada layar kecil.

### Tentang

- Cerita singkat Ndalem Kopi tampil.
- Terdapat visual cafe.
- Terdapat CTA menuju Menu.

### Technical

- Website dapat di-build menggunakan Astro.
- Tidak ada dependency frontend besar yang tidak diperlukan.
- Website dapat bekerja tanpa React/Vue/Svelte.
- Output utama bersifat static.
- Client-side JavaScript minimal.
- Tidak ada horizontal overflow pada viewport mobile.
- Semua gambar memiliki dimensi/optimasi yang sesuai.

---

# 31. Out of Scope for Initial Development

Jangan dikerjakan selama MVP kecuali requirement berubah:

```text
Order online
Cart
Checkout
Login
Admin dashboard
Database
CMS
Reservation
Table booking
Promo engine
Membership
Loyalty
Blog
Events
Testimonials
Review system
Instagram API
Complex animations
Dark mode
Multi-language
Search
```

Tujuan pembatasan ini adalah menjaga MVP:

> **kecil, cepat, mudah dirawat, dan fokus pada menu.**

---

# 32. Future Possibilities

Setelah MVP berjalan, kebutuhan dapat dievaluasi berdasarkan penggunaan nyata.

Possible future additions:

```text
CMS sederhana
Dynamic menu availability
Promo section
Event page
Reservation
Google review integration
Structured menu SEO
Additional location
Multiple branches
```

Tidak ada kebutuhan untuk mempersiapkan semua kemungkinan tersebut sejak MVP.

---

# 33. Final MVP Summary

## Pages

```text
/          Home
/menu      Menu
/tentang   Tentang
```

## Homepage

```text
Hero
↓
3 Minuman Favorit
+
3 Makanan Favorit
↓
Tentang Singkat
↓
Suasana
↓
CTA Menu
↓
Footer + Lokasi
```

## Menu

```text
Menu Header
↓
Filter
↓
Ombenan
├── Kopi
├── Non-Kopi
└── Wedangan

Panganan
├── Panganan Abot
└── Kudapan
```

## Tech

```text
Astro
TypeScript
Native CSS
Vanilla JavaScript
Static Data
```

## Philosophy

```text
No framework island unless needed.
No unnecessary dependencies.
No database.
No CMS.
No over-engineering.
```

Website Ndalem Kopi MVP harus terasa:

> **ringan secara teknis, hangat secara visual, dan jelas secara informasi.**

Prioritas produk tetap:

> **Orang datang → melihat suasana → menemukan menu → tertarik mampir ke Ndalem Kopi.**

---

# 34. Next Step — Design System

Setelah PRD ini disetujui, tahap berikutnya adalah menentukan design system.

Topik yang perlu dibahas:

```text
1. Art direction
2. Color palette
3. Typography pairing
4. Spacing scale
5. Grid system
6. Border & radius philosophy
7. Button style
8. Navigation style
9. Menu item presentation
10. Photography direction
11. Decorative Jawa elements
12. Motion principles
13. Mobile visual behavior
14. Design tokens
```

Target design system:

> **Ndalem Jawa yang kontemporer — bukan vintage berlebihan, bukan modern generik.**
