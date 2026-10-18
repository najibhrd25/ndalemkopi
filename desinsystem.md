# e-JAKON by Inbridge

## Clean Government UI Design System

**Version:** 1.0
**Product:** e-JAKON by Inbridge
**UI Architecture:** Laravel Blade
**Design Direction:** Clean Government SaaS
**Primary Goal:** Functional clarity, simplicity, consistency, low visual complexity
**Target:** Desktop-first, responsive web application

---

# 1. Design Philosophy

e-JAKON bukan aplikasi marketing.

e-JAKON adalah aplikasi kerja pemerintahan untuk:

* melihat project;
* mengetahui tanggung jawab;
* mengelola pekerjaan;
* melakukan monitoring;
* melakukan approval;
* melakukan verifikasi;
* mengelola akses.

Karena itu UI harus mengutamakan:

```text
CLARITY
>
DECORATION
```

Prinsip utama:

```text
Clean

Neutral

Professional

Government Appropriate

Low Visual Noise

Information First

Function First
```

Hindari tampilan seperti:

```text
Startup Landing Page

Fintech Dashboard

Crypto Dashboard

Heavy SaaS Analytics

Glassmorphism

Gradient-heavy UI

Large decorative cards
```

---

# 2. Visual Direction

Gunakan basis:

```text
White Background
+
Light Gray Surface
+
Dark Neutral Text
+
One Primary Accent
+
Clear Status Colors
```

Aplikasi harus terasa:

* formal;
* modern;
* ringan;
* tidak kaku;
* tidak terlalu corporate;
* tidak terlalu colorful.

---

# 3. Layout Architecture

Gunakan:

```text
LEFT SIDEBAR
+
TOP UTILITY BAR
+
MAIN CONTENT
```

Struktur:

```text
┌────────────────────────────────────────────────────────────┐
│ SIDEBAR │ TOP BAR                                          │
│         ├──────────────────────────────────────────────────│
│         │                                                  │
│         │ MAIN CONTENT                                     │
│         │                                                  │
│         │                                                  │
│         │                                                  │
└────────────────────────────────────────────────────────────┘
```

---

# 4. Why Left Sidebar

Sidebar kiri dipilih karena aplikasi mempunyai hierarchy yang akan berkembang.

Foundation:

```text
Dashboard

Projects

Subscription

Profile
```

Future:

```text
Project Overview

Workspace

Building

Issues

Reports
```

Jika menggunakan top navigation seluruhnya, menu akan semakin padat ketika modul bertambah.

Sidebar memberikan:

* navigation consistency;
* scalable menu;
* clear current location;
* room for nested project navigation;
* better enterprise application pattern.

---

# 5. Top Navigation Usage

Top bar **bukan primary navigation**.

Top bar hanya digunakan untuk utility.

Contoh:

```text
PUPR Jawa Tengah                         Ahmad ▼
```

atau:

```text
PUPR Jawa Tengah                 Bantuan    Ahmad
```

Jangan isi top bar dengan:

```text
Dashboard | Projects | Reports | Issues | Subscription | Profile
```

karena fungsi tersebut sudah berada di sidebar.

---

# 6. Sidebar Width

Desktop:

```css
width: 240px;
```

Minimum acceptable:

```css
220px
```

Maximum:

```css
256px
```

Rekomendasi:

```text
240px
```

---

# 7. Main Content Width

Main content tidak harus full stretch pada monitor besar.

Gunakan:

```text
max-width: 1440px
```

dengan inner content:

```text
max-width: 1280px
```

untuk halaman form/detail.

Dashboard project list boleh lebih luas.

---

# 8. Main Page Background

Gunakan:

```css
#F8FAFC
```

atau neutral sangat terang.

Jangan gunakan pure white sebagai keseluruhan canvas karena card akan kehilangan separation.

Struktur:

```text
Application Background
#F8FAFC

Card / Surface
#FFFFFF
```

---

# 9. Core Color Tokens

## Background

```text
background-page:
#F8FAFC

background-surface:
#FFFFFF

background-muted:
#F1F5F9
```

---

# 10. Border Colors

```text
border-default:
#E2E8F0

border-subtle:
#EDF1F5

border-strong:
#CBD5E1
```

Gunakan border untuk separation lebih sering daripada shadow.

---

# 11. Text Colors

## Primary Text

```text
#0F172A
```

Untuk:

* heading;
* project title;
* important value.

---

## Secondary Text

```text
#475569
```

Untuk:

* label;
* description;
* metadata.

---

## Muted Text

```text
#64748B
```

Untuk:

* helper text;
* timestamp;
* secondary information.

---

## Disabled

```text
#94A3B8
```

---

# 12. Primary Brand Color

Gunakan satu warna primary.

Rekomendasi:

```text
Primary:
#1D4ED8
```

atau:

```text
#2563EB
```

Gunakan primary hanya untuk:

* primary button;
* active navigation;
* links;
* selected state.

Jangan memenuhi dashboard dengan warna biru.

---

# 13. Government Neutrality

Jangan menggunakan warna berbeda per tenant sebagai warna utama UI.

Contoh:

```text
PUPR Jateng = red
Trenggalek = green
Madiun = blue
```

Jangan.

Tenant branding cukup melalui:

* logo;
* nama organisasi;
* optional small accent.

Core UI tetap konsisten e-JAKON by Inbridge.

---

# 14. Status Colors

Gunakan warna hanya pada status.

## Success

```text
Text:
#166534

Background:
#F0FDF4

Border:
#BBF7D0
```

---

## Warning

```text
Text:
#92400E

Background:
#FFFBEB

Border:
#FDE68A
```

---

## Danger

```text
Text:
#991B1B

Background:
#FEF2F2

Border:
#FECACA
```

---

## Info

```text
Text:
#1E40AF

Background:
#EFF6FF

Border:
#BFDBFE
```

---

## Neutral

```text
Text:
#475569

Background:
#F8FAFC

Border:
#E2E8F0
```

---

# 15. Typography

Kombinasi font default yang digunakan pada aplikasi e-JAKON:

* **Heading / Judul:** `Figtree` (tegas, modern, proporsional, dan sangat clean untuk hierarki judul halaman serta card header)
* **Body / Text / UI:** `Inter` (standar industri untuk UI modern, keterbacaan data tinggi, netral, elegan, dan rapi untuk tabel, formulir, serta navigasi)

### Pasangan Font Aktif Default (Primary Pair):

```text
Heading : Figtree
Body/UI : Inter
```

### Penjelasan Font Fallback (`sans-serif`):

Pada CSS / Tailwind, deklarasi font selalu menyertakan generic fallback `sans-serif` di akhir stack (contoh: `'Figtree', ui-sans-serif, system-ui, sans-serif` dan `'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`). 
* **Fungsi `sans-serif`**: Sebagai pengaman (fallback) standar peramban. Jika koneksi lambat, font web sedang dimuat (FOIT/FOUT), atau terjadi kendala jaringan CDN, browser secara otomatis menggunakan font sans-serif bawaan sistem agar teks tetap terbaca dengan jelas dan tidak rusak.

### Aturan Penggunaan Font:
1. **Figtree (`font-heading`)**: Digunakan khusus untuk elemen heading seperti Page Title (`h1`), Section Title (`h2`, `h3`, `h4`, `h5`, `h6`), Card Title / Header, serta Modal Title.
2. **Inter (`font-sans`)**: Digunakan untuk seluruh body text, deskripsi, form input/label, table content, badge, button, dan navigation links.
3. Jangan menambahkan jenis font ketiga selain kombinasi ini agar visual aplikasi tetap konsisten, rapi, dan tidak bising.

---

# 16. Typography Scale

## Page Title

```text
28px
font-weight: 600
line-height: 36px
```

---

## Section Title

```text
20px
font-weight: 600
line-height: 28px
```

---

## Card Title

```text
16px
font-weight: 600
line-height: 24px
```

---

## Body

```text
14px
font-weight: 400
line-height: 22px
```

---

## Small

```text
13px
line-height: 20px
```

---

## Caption

```text
12px
line-height: 18px
```

---

# 17. Avoid Oversized Typography

Jangan menggunakan:

```text
48px

56px

64px
```

di application dashboard.

Maximum page heading:

```text
28–32px
```

Karena aplikasi adalah work tool, bukan marketing website.

---

# 18. Border Radius

Core radius:

```text
12px
```

Sesuai requirement.

Tokens:

```text
radius-sm:
6px

radius-md:
8px

radius-lg:
12px

radius-full:
9999px
```

---

# 19. Where to Use Radius

## Card

```text
12px
```

## Modal / Dialog future

```text
12px
```

## Input

```text
8px
```

## Button

```text
8px
```

## Badge

```text
6px
```

Jangan semua komponen terlalu rounded.

---

# 20. Card Philosophy & Strict Content Limits

Card digunakan hanya untuk:

```text
GROUPING
```

bukan dekorasi.

### Aturan Ketat Isi Card (Maksimal 3 Baris Informasi)
Informasi di dalam card ringkasan / list card dibatasi maksimal hanya **3 baris informasi**:

```text
Baris 1: Header / Label / Kategori + Icon
Baris 2: Angka Utama / Nilai / Metrik / Judul Utama
Baris 3: Deskripsi Singkat / Subteks / Keterangan Status
```

Hindari menjejalkan deskripsi panjang, badge bertumpuk, atau banyak baris data ke dalam card. Buat sesederhana dan se-clean mungkin.

Card tidak boleh otomatis memiliki:

* icon besar berlebihan;
* gradient;
* illustration;
* decorative circle;
* mini chart bertumpuk;
* glow / shadow tebal;
* colored top border aneka warna.

---

# 21. Base Card & Bento Grid Consistency

Gunakan:

```text
background: white

border: 1px solid #E2E8F0

border-radius: 12px

padding: 20px
```

Shadow:

```text
none
```

atau sangat tipis:

```text
0 1px 2px rgba(15, 23, 42, 0.04)
```

Rekomendasi utama:

> gunakan border halus (`#E2E8F0`), bukan shadow.

### Bento Grid & Alignment Rule (Konsistensi Tinggi / Anti Tinggi-Sebelah)
Ketika membangun layout **Bento Grid** atau grid card di dashboard maupun halaman lainnya:
* **Tinggi Sejajar Wajib Sama (`Equal Height`)**: Card yang berada dalam satu baris yang sama (misal card 2 dan card 3 yang berdampingan secara horizontal) **WAJIB memiliki tinggi yang presisi sama**. Tidak boleh ada card yang tinggi atau panjang sebelah jika posisinya sejajar.
* **Gunakan Flex / CSS Grid Stretch**: Gunakan `items-stretch`, `h-full`, atau `flex flex-col justify-between` sehingga seluruh card dalam baris horizontal yang sama terkunci pada tinggi seragam.
* **Bento Grid Spanning**: Jika menggunakan bento grid dengan span kolom berbeda (misal 1 card lebar 2 kolom dan 2 card kecil 1 kolom), pastikan pembagian row height terkunci konsisten (`grid-auto-rows: 1fr` atau baris grid terkontrol) sehingga tidak ada celah kosong canggung atau sudut yang tidak rata.

---

# 22. Example Project Card

```text
┌──────────────────────────────────────┐
│ PJ-2026-014                          │
│                                      │
│ Pembangunan Laboratorium Material    │
│ Semarang, Jawa Tengah                │
│                                      │
│ Role Saya                            │
│ PPK                                  │
│                                      │
│ Status             ACTIVE            │
│ Periode            Jan – Nov 2026    │
│                                      │
│ Buka Project →                       │
└──────────────────────────────────────┘
```

Tidak perlu:

```text
project icon besar

gradient

background image

circular progress

decorative chart
```

---

# 23. Dashboard Philosophy

Dashboard foundation bukan analytics dashboard.

Tujuannya:

```text
WHO AM I?

WHERE DO I WORK?

WHAT PROJECTS AM I RESPONSIBLE FOR?

WHAT ROLE DO I HAVE?

CAN I ACCESS THE SERVICE?
```

---

# 24. Dashboard Recommended Layout

```text
Page Header

Selamat datang, Ahmad
PUPR Provinsi Jawa Tengah

────────────────────────────────

Service Status
ACTIVE sampai 31 Desember 2027

────────────────────────────────

Tanggung Jawab Saya

PPK                 3 project
Tim Teknis          1 project

────────────────────────────────

Project Saya

[ Project Card ] [ Project Card ]

[ Project Card ] [ Project Card ]
```

---

# 25. Avoid KPI Card Explosion

Jangan membuat:

```text
8 KPI cards
```

seperti:

```text
Total Projects

Active

Completed

PPK

Technical

Contractor

Users

Subscription
```

Cukup data yang actionable.

---

# 26. Foundation Dashboard Summary

Recommended maximum:

```text
2–4 summary items
```

Contoh:

```text
Project Aktif
4

Sebagai PPK
3

Sebagai Tim Teknis
1

Service
ACTIVE
```

Bahkan ini boleh berupa simple horizontal summary tanpa card.

---

# 27. Sidebar Structure

Foundation:

```text
e-JAKON
by Inbridge

────────────

Dashboard

Projects

────────────

Subscription

────────────

Profile

────────────

PUPR Jawa Tengah
```

---

# 28. Sidebar Icons

Icons optional.

Jika digunakan:

* gunakan icon outline sederhana;
* 18–20px;
* satu library saja;
* jangan campur gaya.

Recommended:

```text
Heroicons
```

atau SVG internal.

---

# 29. Sidebar Active State

Gunakan:

```text
background:
#EFF6FF

text:
#1D4ED8
```

Radius:

```text
8px
```

Jangan menggunakan pill besar.

---

# 30. Sidebar Item

Height:

```text
40px
```

Padding:

```text
10px 12px
```

Gap icon-text:

```text
10px
```

---

# 31. Sidebar Section Label

Jika diperlukan:

```text
12px
uppercase
font-weight: 500
```

Namun gunakan sedikit saja.

Contoh:

```text
PROJECT

ACCOUNT
```

Hindari sidebar terlalu banyak separator.

---

# 32. Project Workspace Sidebar

Ketika user sudah masuk project:

```text
← Semua Project

Pembangunan Laboratorium
Role: PPK

────────────

Overview

Workspace

Building

Issues

Reports
```

Future modules masuk ke sini.

---

# 33. Project Context Must Be Obvious

Di sidebar/project header selalu tampil:

```text
Project Name

Project Code

User Role
```

Contoh:

```text
Pembangunan Lab Material

PJ-2026-001

PPK
```

Agar user tidak salah project.

---

# 34. Top Utility Bar

Height:

```text
64px
```

Content:

Left:

```text
Page context / breadcrumb
```

Right:

```text
User Name

Profile

Logout
```

---

# 35. Breadcrumb

Gunakan sederhana:

```text
Projects / Pembangunan Laboratorium
```

Bukan breadcrumb panjang seperti:

```text
Home / Tenant / Department / Project / Dashboard / Section
```

---

# 36. Buttons

## Primary

```text
background:
#1D4ED8

text:
white

border:
none

radius:
8px
```

Usage:

```text
Simpan

Buat Project

Kirim Undangan
```

---

# 37. Secondary Button

```text
background:
white

text:
#334155

border:
#CBD5E1

radius:
8px
```

Usage:

```text
Batal

Kembali

Edit
```

---

# 38. Danger Button

```text
background:
#DC2626

text:
white
```

Hanya tindakan destruktif/serius:

```text
Suspend User

Revoke Access
```

Jangan terlalu sering.

---

# 39. Button Height

Default:

```text
40px
```

Compact:

```text
36px
```

Large rarely:

```text
44px
```

---

# 40. Button Padding

```text
horizontal:
16px
```

### Dropdown Trigger & Select Spacing (Padding Ikon Chevron / Segitiga)
* **Button Dropdown Trigger**: Berikan padding yang nyaman (`px-3 py-1.5` atau `px-4 py-2`) dengan margin/gap ikon (`ml-1.5` hingga `ml-2` atau `gap-2`) agar ikon panah bawah / segitiga kebalik tidak menempel rapat dengan teks label atau avatar.
* **Input Select Dropdown**: Berikan padding kanan yang lega (`padding-right: 36px` / `pr-9`) dengan posisi ikon chevron panah bawah di sisi kanan (`right: 12px` / `right: 14px`) agar teks opsi dropdown terpanjang tidak menabrak atau tertimpa ikon.

---

# 41. Avoid Full-Width Buttons

Desktop form:

button tidak perlu full width.

Login mobile boleh full width.

---

# 42. Forms

Form sangat penting karena Laravel Blade foundation akan banyak menggunakan server form.

Gunakan vertical form.

```text
Label

Input

Helper/Error

Spacing
```

---

# 43. Input

Height:

```text
42px
```

Radius:

```text
8px
```

Border:

```text
#CBD5E1
```

Background:

```text
#FFFFFF
```

---

# 44. Input Focus

```text
border:
#2563EB

outline:
2px rgba(...)
```

Jangan menghilangkan focus indicator.

---

# 45. Label

```text
14px
font-weight: 500
color: #334155
```

Margin bottom:

```text
6px
```

---

# 46. Helper Text

```text
13px
color: #64748B
```

---

# 47. Validation Error

```text
13px
color: #DC2626
```

Input border:

```text
#EF4444
```

---

# 48. Form Width

Form umum:

```text
max-width:
720px
```

Login:

```text
420px
```

Project basic data form:

```text
760px
```

Jangan stretch input dari kiri sampai kanan monitor.

---

# 49. Form Section

Gunakan heading + whitespace.

Bukan card di dalam card.

Contoh:

```text
Data Project

Nama Project
[________________]

Kode Project
[________________]


Kontrak

Nomor Kontrak
[________________]
```

Gunakan separator horizontal bila perlu.

---

# 50. Tables

Gunakan tabel untuk:

* tenant list;
* user list;
* subscription;
* project directory;
* audit log.

Tidak semua data harus dibuat card.

---

# 51. Table Style

Header:

```text
background:
#F8FAFC

text:
#475569

font-weight:
500
```

Rows:

```text
background:
white

border-bottom:
#E2E8F0
```

---

# 52. Table Density

Row height:

```text
48–56px
```

Jangan terlalu tinggi.

---

# 53. Tables Should Not Have Heavy Container

Table cukup:

```text
white background

1px border

12px radius

overflow hidden
```

---

# 54. Table Actions

Gunakan:

```text
Lihat

Edit
```

atau simple text button.

Jangan membuat banyak icon-only actions jika tidak perlu.

---

# 55. Badge

Badge hanya untuk:

```text
Status

Role
```

Contoh:

```text
ACTIVE

PPK

SUSPENDED

CONTRACTOR
```

---

# 56. Badge Style

Padding:

```text
4px 8px
```

Font:

```text
12px
500
```

Radius:

```text
6px
```

---

# 57. Role Badge Colors

Jangan terlalu warna-warni.

Recommended:

PPK:

```text
blue neutral
```

Technical:

```text
slate / indigo subtle
```

Contractor:

```text
gray
```

Role bukan severity.

---

# 58. Status Badge

Gunakan semantic colors hanya untuk status.

```text
ACTIVE
→ green

EXPIRED
→ red

GRACE PERIOD
→ amber

DRAFT
→ gray
```

---

# 59. Alerts

Alert digunakan hanya untuk sesuatu yang butuh perhatian.

Contoh:

```text
Subscription akan berakhir dalam 14 hari.
```

Style:

```text
border
subtle background
small icon optional
```

Jangan gunakan large colored banner tanpa kebutuhan.

---

# 60. Flash Messages

Laravel flash session:

Success:

```text
Project berhasil dibuat.
```

Error:

```text
Project tidak dapat dibuat.
```

Gunakan simple inline alert.

---

# 61. Empty State

Minimal.

Contoh:

```text
Belum ada project.

Anda belum memiliki project yang ditugaskan.

[ Buat Project ]
```

Tidak perlu illustration besar.

---

# 62. Login Screen

Gunakan layout sederhana.

```text
────────────────────────────

       e-JAKON
       by Inbridge

Masuk ke akun Anda

Email
[________________]

Password
[________________]

[ Masuk ]

Lupa password?

────────────────────────────
```

---

# 63. Login Background

```text
#F8FAFC
```

Form:

```text
white
border
12px radius
```

Tidak perlu split-screen marketing layout.

---

# 64. Login Card Width

```text
400–440px
```

Padding:

```text
28–32px
```

---

# 65. Tenant Branding on Dashboard

Setelah login:

```text
[Logo]

PUPR Provinsi Jawa Tengah

e-JAKON
by Inbridge
```

Logo maksimal:

```text
40–48px
```

Jangan terlalu dominan.

---

# 66. Inbridge Branding

Inbridge tetap terlihat sebagai:

```text
e-JAKON
by Inbridge
```

Tetapi jangan mendominasi tenant branding.

---

# 67. Subscription Card

Subscription tidak perlu card besar.

Gunakan simple status block:

```text
Layanan

ACTIVE

Berlaku hingga
31 Desember 2027
```

Dengan link:

```text
Lihat detail
```

---

# 68. Profile

Profile page menggunakan simple sections:

```text
Informasi Akun

Nama
Email
Tenant


Keamanan

Ubah Password
Session
```

Tidak perlu profile hero.

---

# 69. Platform Admin UI

Platform admin menggunakan design system sama.

Sidebar:

```text
e-JAKON Platform

Dashboard

Tenants

Subscriptions

Users

Invitations

Projects

Audit Logs
```

---

# 70. Platform Admin Visual Difference

Tidak perlu tema berbeda.

Cukup label:

```text
PLATFORM ADMIN
```

dan context:

```text
Inbridge Internal
```

agar tidak tertukar dengan tenant UI.

---

# 71. Spacing System

Gunakan base:

```text
4px
```

Scale:

```text
4
8
12
16
20
24
32
40
48
64
```

---

# 72. Recommended Page Spacing

Desktop content padding:

```text
32px
```

Tablet:

```text
24px
```

Mobile:

```text
16px
```

---

# 73. Card Gap

Grid gap:

```text
16px
```

atau:

```text
20px
```

Recommended:

```text
16px
```

---

# 74. Section Spacing

Antar major section:

```text
32px
```

---

# 75. Component Spacing

Antar field:

```text
16px
```

---

# 76. Project Grid

Desktop:

```text
2 columns
```

Large screen:

```text
3 columns jika card tetap readable
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Rekomendasi foundation:

> gunakan 2 columns pada desktop agar informasi card tidak terlalu sempit.

---

# 77. Avoid Too Many Cards

Gunakan card hanya untuk independent object seperti:

```text
Project
```

Untuk data sederhana:

```text
Role
Status
Period
```

letakkan sebagai row/text di dalam card.

Jangan:

```text
Project Card
  ├── Role Card
  ├── Status Card
  └── Period Card
```

---

# 78. "No Card Inside Card" Rule

Hindari nested cards.

Incorrect:

```text
Outer Card
   ↓
Inner Status Card
   ↓
Inner Role Card
```

Correct:

```text
Project Card

Title

Metadata

Role
PPK

Status
ACTIVE
```

---

# 79. Icons

Icons hanya untuk membantu recognition.

Jangan gunakan icon sebagai decoration.

Recommended icon size:

```text
18px
```

---

# 80. Shadows

Default:

```text
NONE
```

Optional card shadow:

```text
0 1px 2px rgba(15,23,42,.04)
```

Modal future:

```text
0 12px 30px rgba(15,23,42,.12)
```

---

# 81. Dividers

Gunakan:

```text
1px solid #E2E8F0
```

untuk memisahkan sections.

---

# 82. Navigation Interaction Without JavaScript

Desktop sidebar selalu visible.

Tidak perlu collapsible sidebar pada foundation.

Ini sengaja agar implementation Blade sederhana.

---

# 83. Mobile Navigation

Untuk foundation, mobile dapat menggunakan top navigation sederhana.

Contoh:

```text
e-JAKON        Menu
```

Jika ingin tanpa JS sepenuhnya, gunakan native:

```html
<details>
    <summary>Menu</summary>
</details>
```

atau halaman navigation sederhana.

Namun priority tetap desktop/tablet.

---

# 84. Avoid Collapsible Desktop Sidebar

Jangan implementasikan dahulu:

```text
sidebar collapse

hover expand

animated sidebar
```

Tidak memberikan value penting pada foundation.

---

# 85. Page Header Pattern

Gunakan:

```text
Title

Short description                     Primary Action
```

Contoh:

```text
Projects

Project yang menjadi tanggung jawab Anda.       + Buat Project
```

---

# 86. Project Detail Header

```text
PJ-2026-001

Pembangunan Laboratorium Material

Semarang • ACTIVE • PPK
```

Actions di kanan:

```text
Edit Project
```

---

# 87. Project Team UI

Gunakan table/simple list.

```text
Nama          Role                    Status

Ahmad         PPK                     Active

Budi          Tim Teknis / Pengawas  Active

PT ABC        Kontraktor              Active
```

Jangan membuat masing-masing sebagai profile card besar.

---

# 88. Subscription UI

Gunakan description list.

```text
Plan               Government Standard

Status             ACTIVE

Mulai              1 Januari 2027

Berakhir           31 Desember 2027

Project            8 / 20

User               34 / 100
```

---

# 89. Description List Pattern

Untuk detail page gunakan:

```text
Label
Value
```

atau 2-column table-like layout.

Ini lebih clean daripada card per field.

---

# 90. Audit Log UI

Table:

```text
Time

User

Action

Tenant

Project

IP
```

Filters menggunakan GET form.

---

# 91. Pagination

Gunakan Laravel pagination standard.

Style:

```text
Previous

1

2

3

Next
```

Jangan infinite scroll.

---

# 92. Search

Foundation search menggunakan:

```text
GET query
```

Contoh:

```text
/projects?q=gedung
```

Submit menggunakan form.

Tidak perlu realtime search.

---

# 93. Filters

Gunakan:

```text
select

date input

search
```

dan tombol:

```text
Terapkan
```

Bukan advanced JS filtering.

---

# 94. Confirmation for Critical Action

Karena menghindari JS, critical actions dapat menggunakan confirmation page.

Example:

```text
Anda akan menangguhkan user Ahmad.

[ Batalkan ]

[ Ya, Tangguhkan ]
```

Lebih aman daripada bergantung pada JS confirm.

---

# 95. Content Language

End-user UI menggunakan Bahasa Indonesia.

Internal enums tetap English.

Example:

```text
TECHNICAL_SUPERVISOR
```

display:

```text
Tim Teknis / Pengawas
```

---

# 96. Copywriting Tone

Singkat.

Clear.

Formal.

Contoh bagus:

```text
Project berhasil dibuat.
```

Bukan:

```text
Selamat! Project baru Anda berhasil dibuat dengan sempurna!
```

---

# 97. Error Copy

Gunakan:

```text
Anda tidak memiliki akses ke project ini.
```

atau 404 generic sesuai security policy.

---

# 98. Date Format

UI Indonesia:

```text
8 September 2026
```

Short:

```text
08 Sep 2026
```

---

# 99. Currency Format

Gunakan:

```text
Rp 1.250.000.000
```

Bukan:

```text
1,250,000,000 IDR
```

---

# 100. Number Formatting

Gunakan locale Indonesia.

```text
1.250

12,5%
```

sesuai konteks.

---

# 101. Blade Component Set

Minimum design system components:

```text
<x-app-layout>

<x-platform-layout>

<x-sidebar>

<x-topbar>

<x-page-header>

<x-card>

<x-button>

<x-input>

<x-select>

<x-textarea>

<x-form-label>

<x-form-error>

<x-badge>

<x-alert>

<x-table>

<x-empty-state>

<x-project-card>

<x-description-list>

<x-pagination>
```

---

# 102. Avoid Over-Componentization

Jangan membuat Blade component untuk setiap teks kecil.

Component dibuat jika:

```text
reused

has visual rules

has behavior/variants
```

---

# 103. CSS Strategy

Gunakan Tailwind CSS classes langsung di Blade Components.

Design tokens dapat disimpan sebagai consistent class convention.

Jangan membuat:

```text
hundreds of custom CSS utilities
```

---

# 104. Visual Priority Hierarchy

Hierarchy harus selalu:

```text
PAGE TITLE

PRIMARY CONTENT

PRIMARY ACTION

SECONDARY CONTENT

METADATA
```

---

# 105. Dashboard Final Composition

Recommended:

```text
┌──────────────────────────────────────────────────────┐

Selamat datang, Ahmad

PUPR Provinsi Jawa Tengah

Layanan: ACTIVE hingga 31 Desember 2027

────────────────────────────────────────────────────────

Tanggung Jawab Saya

PPK                    3 Project
Tim Teknis             1 Project

────────────────────────────────────────────────────────

Project Saya                               Lihat Semua

┌───────────────────┐ ┌───────────────────┐
│ Project A         │ │ Project B         │
│                   │ │                   │
│ Semarang          │ │ Solo              │
│                   │ │                   │
│ PPK               │ │ PPK               │
│ ACTIVE            │ │ ACTIVE            │
│                   │ │                   │
│ Buka Project →    │ │ Buka Project →    │
└───────────────────┘ └───────────────────┘
```

---

# 106. Main Navigation Final Recommendation

## Tenant/User Application

Use:

```text
LEFT SIDEBAR
```

Menu:

```text
Dashboard

Projects

Subscription

Profile
```

Future project context:

```text
Overview

Workspace

Building

Issues

Reports
```

---

# 107. Top Bar Final Recommendation

Use:

```text
TENANT CONTEXT
+
USER UTILITIES
```

Not navigation.

Example:

```text
PUPR Jawa Tengah                    Ahmad ▼
```

---

# 108. Why Not Top Navigation

Top navigation tidak direkomendasikan karena:

```text
menu future akan bertambah

project context punya submenu

role-specific menu mungkin berbeda

lebih sulit scale pada dashboard pemerintah
```

Sidebar lebih tepat untuk application shell.

---

# 109. Foundation Simplicity Rule

Jika agent bertanya:

> "Perlukah komponen ini lebih menarik?"

Default answer:

```text
NO
```

Jika fungsi sudah jelas dengan:

```text
text

border

spacing

button
```

jangan tambahkan decoration.

---

# 110. Card Simplicity Rule

Untuk setiap card tanyakan:

```text
Apakah card ini benar-benar mengelompokkan satu entity/information set?
```

Jika tidak:

> jangan buat card.

---

# 111. UI Performance Goal

Karena Laravel Blade:

* no SPA bundle;
* no hydration;
* no client state;
* minimal JS;
* HTML dari server;
* CSS ringan;
* page navigation biasa.

Target UI harus terasa cepat bahkan pada laptop kantor pemerintahan biasa.

---

# 112. Design Priorities

Prioritas development:

```text
1. FUNCTION WORKS

2. ACCESS IS CORRECT

3. INFORMATION IS CLEAR

4. FORM IS EASY TO USE

5. UI IS CONSISTENT

6. VISUAL POLISH
```

Jangan dibalik.

---

# 113. Design Anti-Patterns

Dilarang:

```text
Glassmorphism

Gradient Card

Huge Hero Dashboard

3D Illustration

Animated Counters

Floating Elements

Neon Colors

Excessive Shadow

Excessive Rounded Corners

Card Inside Card

Icon Inside Decorative Circle Everywhere

Dashboard Full of Charts

Role Selector Cards

Tenant Selector Without Authorization

Client-side-only Navigation Guards
```

---

# 114. Final Visual Character

e-JAKON harus terlihat seperti:

> **Modern administrative government application**

bukan:

> startup SaaS landing dashboard.

Core visual:

```text
White

Light Gray

Slate

Blue Accent

12px Cards

8px Controls

Thin Borders

Minimal Shadow

Strong Typography

Generous but Controlled Spacing
```

---

# 115. Final Application Shell

```text
┌──────────────────────────────────────────────────────────────┐
│                 │ PUPR Jawa Tengah             Ahmad         │
│ e-JAKON         ├────────────────────────────────────────────│
│ by Inbridge     │                                            │
│                 │ Dashboard                                  │
│ Dashboard       │                                            │
│ Projects        │ Selamat datang, Ahmad                      │
│                 │                                            │
│ Subscription    │ PUPR Provinsi Jawa Tengah                  │
│ Profile         │                                            │
│                 │ Service ACTIVE                             │
│                 │                                            │
│                 │ Tanggung Jawab Saya                        │
│                 │ PPK                         3 Project       │
│                 │ Tim Teknis                  1 Project       │
│                 │                                            │
│                 │ Project Saya                               │
│                 │                                            │
│                 │ [ Project ] [ Project ]                    │
│                 │                                            │
└──────────────────────────────────────────────────────────────┘
```

---

# 116. Implementation Instruction for AI Agent

Implement this design system using:

```text
Laravel Blade

Blade Components

Tailwind CSS

Semantic HTML

Server-rendered interactions
```

Do not introduce a frontend framework.

Do not add UI dependencies unless absolutely necessary.

Do not invent decorative components beyond this specification.

Prioritize:

```text
layout

navigation

form

table

project card

status

role

empty state

feedback
```

before adding any visual enhancement.

Use:

```text
12px card radius

8px form/button radius

1px neutral border

minimal/no shadow

white surface

light gray application background
```

Keep each card visually simple.

Project cards should contain only useful project information and a clear navigation action.

Do not place secondary decorative cards inside project cards.

For Foundation V1, desktop sidebar must remain permanently visible and does not need collapse behavior.

The design system should remain structurally compatible with future modules without requiring redesign of the main application shell.
