# REVIEW MENYELURUH & AUDIT KONTEN WEBSITE PT SINERGI EKUITAS INDONESIA
**Target URL:** `https://eskaerpe.github.io/bjb-sinergi-compro`  
**Sumber Konten Lokal VPS:** `/home/eska/output/Company_Profile_PT_Sinergi_LENGKAP.md`  
**Setup & Konfigurasi:** `/home/eska/output/sinergi-web-setup/`  
**Reviewer:** POV User / Pengunjung Institusional (B2B, HRD Bank, Pengadaan/Procurement, Manajemen)

---

## 1. EXECUTIVE SUMMARY & TEMUAN ROOT CAUSE
Website saat ini dibangun menggunakan React Router SPA dengan 7 rute:
1. `/` (Beranda)
2. `/tentang-kami` (Tentang Kami)
3. `/layanan` (Layanan)
4. `/fasilitas` (Fasilitas)
5. `/portofolio` (Portofolio)
6. `/jaringan-ahli` (Jaringan Ahli)
7. `/kontak` (Kontak)

### Masalah Utama: "Double Identity" (Hybrid Setengah Matang)
Arsitektur web terjebak di antara dua model:
- **Model One-Page Web:** Di halaman Beranda (`/`), seluruh section dimuat sekaligus: `Hero` -> `Tentang Kami` -> `Layanan` -> `Fasilitas` -> `Portofolio` -> `Kontak (Lead Form)`.
- **Model Multi-Page:** Di Navbar disediakan menu ke halaman terpisah (`/tentang-kami`, `/layanan`, dll).
- **Akibat:** User yang scrolling di Beranda sudah melihat **100% isi website**. Ketika mereka klik menu navigasi (misal "Layanan" atau "Fasilitas"), mereka dibawa ke halaman baru yang isinya **persis sama persis tanpa ada pendalaman materi tambahan**. Ini menciptakan ilusi bug/duplikasi dan menurunkan impresi profesionalisme B2B.

---

## 2. AUDIT SECTION-BY-SECTION & DUPLIKASI TOPIK

| Halaman / Komponen | Komponen yang Dipanggil | Status Konten & Duplikasi | Keputusan & Rekomendasi |
| :--- | :--- | :--- | :--- |
| **Beranda (`/`)** | `Hero` + `About` + `Services` + `Facilities` + `Portfolio` + `Contact` | Semua section tampil penuh. User tidak punya alasan klik tab menu lain. | **UBAH FORMAT BERANDA.** Jadikan ringkasan eksekutif (Teaser/High-level highlights), bukan memuat seluruh modul. |
| **Tentang Kami (`/tentang-kami`)** | `Header` + `About` + `VisionMission` + `Leadership` | Komponen `About` muncul 2x di web (di Beranda dan di sini). Namun `VisionMission` & `Leadership` **hanya ada di rute ini**, sehingga pengunjung Beranda tidak pernah melihat jajaran Direksi & Budaya SINERGI. | **PERTAHANKAN DI SINI.** Hapus komponen `About` panjang dari Beranda, sisakan ringkasan 1 paragraf + nilai pembeda di Beranda. Seluruh profil legalitas, Direksi, dan Budaya SINERGI dipusatkan di sini. |
| **Layanan (`/layanan`)** | `Header` + `Services (6 Layanan)` | 100% duplikat dari section Layanan di Beranda. Sama sekali tidak ada silabus/detail tambahan. | **PERTAHANKAN HALAMAN INI DENGAN UPGRADE.** Di Beranda cukup tampilkan 6 kartu ikhtisar + tombol "Pelajari Silabus Lengkap". Detail cakupan program dipindahkan ke halaman `/layanan`. |
| **Fasilitas (`/fasilitas`)** | `Header` + `Facilities` | 100% duplikat dari section Fasilitas di Beranda. | **PERTAHANKAN HALAMAN INI.** Di Beranda cukup pasang preview 3 fasilitas unggulan (Lab Komputer, Mini Bank, Auditorium) + CTA "Lihat Semua Fasilitas". Seluruh galeri & spesifikasi teknis muat di `/fasilitas`. |
| **Portofolio (`/portofolio`)** | `Header` + `Portfolio (Abdi bjb)` | 100% duplikat dari section Portofolio di Beranda. | **PERTAHANKAN HALAMAN INI.** Beranda hanya perlu testimonial/angka metrik keberhasilan + 2 highlight kegiatan. Seluruh galeri batch pelatihan ditaruh di `/portofolio`. |
| **Jaringan Ahli (`/jaringan-ahli`)** | `Header` + `ExpertDirectory (12 Bidang)` | **Tidak muncul sama sekali di Beranda.** Padahal 12 Bidang Keahlian ini adalah *selling point* terkuat PT Sinergi. | **PERTAHANKAN HALAMAN INI.** Berikan highlight/teaser 4 bidang populer di Beranda dengan link ke direktori lengkap ini. |
| **Kontak (`/kontak`)** | `Header` + `Contact (Lead Form)` | Form WhatsApp interaktif yang sama persis muncul di footer Beranda dan halaman kontak khusus. | **PERTAHANKAN KEDUANYA DENGAN PENYESUAIAN.** Form ringkas di Beranda tetap dipertahankan untuk konversi cepat; Halaman `/kontak` diperkaya dengan peta lokasi, jam operasional, dan info rekening/administrasi. |

---

## 3. POV USER (B2B & INSTITUSIONAL) REVIEW

### A. First Impression & Hero Section
- **Kelebihan:** Positioning jelas (`Strategic Partner bank bjb Ecosystem`, kolaborasi YKP bjb & Universitas Ekuitas Indonesia). Visual clean dengan warna korporat navy & coral.
- **Kekurangan:**
  1. Tombol CTA di Hero mengarah ke `#layanan` dan `#tentang-kami` menggunakan hash anchor, sementara web menggunakan React Router multi-page. Jika user berada di rute `/fasilitas` lalu klik link anchor tertentu, navigasi bisa rusak atau tidak konsisten.
  2. File unduhan E-Brochure (`/docs/Company-Profile-PT-Sinergi.pdf`) berpotensi 404 jika file PDF belum dibundel ke direktori `/public/docs/`.

### B. Kredibilitas & Trust Factor (Leadership & Legalitas)
- Profil Direksi (**Deni Hamdani, SE. M.Si**, **Dr. Gatot Iwan Kurniawan, SE., MBA**, dan **Muhammad Gunawan**) adalah aset kredibilitas tertinggi karena mencerminkan akuntabilitas perbankan bjb.
- **Masalah:** User yang hanya mendarat di Beranda tidak akan melihat jajaran pimpinan ini karena komponen `Leadership` disembunyikan di dalam rute `/tentang-kami`.
- **Solusi:** Tampilkan strip kepemimpinan ringkas atau kutipan Direktur Utama langsung di Beranda.

### C. Navigasi & Interaksi
- Di perangkat mobile, navigasi drawer berfungsi baik, namun daftar link footer mengarahkan ke link internal yang merender konten repetitif.
- Modal detail silabus pada Direktori 12 Bidang Keahlian sangat informatif dan memiliki 124+ sub-topik. Fitur ini tertimbun karena hanya ada di tab `/jaringan-ahli`.

---

## 4. DAFTAR LENGKAP APA YANG HARUS DIHAPUS, DIPERTAHANKAN, ATAU DITATA ULANG

### Yang Harus DIHAPUS dari Beranda (`/`):
1. **Daftar Fasilitas Lengkap:** Jangan render seluruh ruangan di Beranda. Membuat halaman terlalu panjang (*endless scroll*).
2. **Katalog Portofolio Penuh:** Galeri 6 batch foto pelatihan Abdi bank bjb di Beranda membuat repetisi ketika user membuka tab Portofolio.
3. **Card Layanan yang Terlalu Panjang:** Potong list cakupan program di Beranda, cukup headline + 2 baris deskripsi.

### Yang Harus DIPERTAHANKAN:
1. **Direktori 12 Bidang Keahlian:** Sangat kaya data dan menunjukkan kapasitas akademik Universitas Ekuitas Indonesia.
2. **Formulir Lead WhatsApp Interaktif:** Skrip `window.open` ke nomor WA `+62821-1969-5761` sudah tepat dan ramah konversi di Indonesia.
3. **Struktur 7 Nilai SINERGI & 5 Pilar Misi:** Memperkuat standar GCG B2B.
4. **Alamat & Kontak Resmi:** Jl. PHH. Mustofa No. 31, Bandung.

### Yang Harus DITATA ULANG (Restrukturisasi Arsitektur):
Pilih satu dari dua opsi arsitektur:
- **Opsi A (Rekomendasi - True Multi-Page):**
  - **Beranda (`/`):** Hero -> Value Proposition -> Preview 6 Layanan (ringkas) -> Highlight Jaringan Ahli (4 bidang) -> Metrik & Klien -> CTA Form.
  - **Halaman Khusus (`/tentang-kami`, `/layanan`, dll):** Berisi konten komprehensif, silabus detail, profil pimpinan lengkap, dan spesifikasi ruangan.
- **Opsi B (Pure Single Page Application / One-Page Landing):**
  - Hapus semua rute React Router. Jadikan satu halaman landing panjang dengan smooth scroll anchor (`#tentang`, `#layanan`, `#fasilitas`, `#keahlian`, `#portofolio`, `#kontak`). Masukkan komponen Visi Misi, Direksi, dan Direktori Ahli ke dalam flow landing page.

---

## 5. DOKUMENTASI LENGKAP KONTEN WEBSITE (MASTER CONTENT BACKUP)
Dokumen ini disinkronkan langsung dari data master `/home/eska/output/Company_Profile_PT_Sinergi_LENGKAP.md`:

### A. Profil Entitas & Ekosistem
- **Nama Perusahaan:** PT Sinergi Ekuitas Indonesia
- **Afiliasi Induk:** Yayasan Kesejahteraan Pegawai (YKP) bank bjb & Universitas Ekuitas Indonesia
- **Alamat:** Gedung Universitas Ekuitas Indonesia, Jl. PHH. Mustofa No. 31, Bandung, Jawa Barat 40124
- **Kontak Resmi:** WhatsApp `+62821-1969-5761` | Email `sinergiekuitas@gmail.com` | Telp `+62 22 7276323`

### B. Visi, Misi & Budaya Kerja
- **Visi:** "Menjadi mitra strategis terdepan dalam pengembangan SDM, konsultasi, dan layanan pendukung yang terintegrasi di Indonesia."
- **5 Misi Utama:**
  1. Menyelenggarakan pelatihan dan pengembangan kompetensi berbasis kebutuhan industri dan perbankan.
  2. Memberikan layanan konsultasi manajemen, keuangan, dan tata kelola (GCG) yang solutif dan aplikatif.
  3. Mengelola kegiatan korporat (MICE) dan sarana pembelajaran secara profesional dan berstandar tinggi.
  4. Membangun sinergi berkelanjutan antara dunia akademik, industri, dan ekosistem bank bjb.
  5. Menghadirkan layanan pengadaan dan fasilitas pendukung yang adaptif, tepat mutu, dan bernilai tambah.
- **Budaya Nilai SINERGI (7 Nilai):**
  - **S**olidarity (Kebersamaan & Kolaborasi)
  - **I**ntegrity (Kejujuran & Tata Kelola)
  - **N**imble (Ketangkasan & Adaptabilitas)
  - **E**xcellence (Keunggulan & Kualitas)
  - **R**esponsibility (Tanggung Jawab Profesional)
  - **G**rowth (Pertumbuhan Berkelanjutan)
  - **I**nnovation (Inovasi & Nilai Tambah)

### C. Kepemimpinan Eksekutif
1. **Deni Hamdani, SE. M.Si** — Direktur Utama
2. **Dr. Gatot Iwan Kurniawan, SE., MBA** — Direktur
3. **Muhammad Gunawan** — Komisaris

### D. 6 Layanan Utama
1. **Konsultasi Bisnis & Keuangan:** Pendampingan GCG, asesmen kesehatan keuangan, studi kelayakan, SOP & manajemen risiko.
2. **Pengembangan Sumber Daya Manusia (SDM):** Pelatihan berbasis kompetensi, in-house training, sertifikasi BNSP, leadership program.
3. **Penyelenggaraan Acara (Event Management):** MICE, outbound, workshop, seminar nasional, capacity building.
4. **Penyewaan Fasilitas & Infrastruktur:** Smart classroom, lab komputer, aula serbaguna, executive meeting room.
5. **Penyediaan Merchandise & Branding:** Perlengkapan event, corporate gifts, seragam kerja, material promosi.
6. **Kemitraan & Layanan Terintegrasi:** Kolaborasi program B2B, program inkubasi UMKM, layanan operasional institusi.

### E. Sarana & Fasilitas Pembelajaran
1. **Auditorium Utama (Aula):** Kapasitas s.d 500 orang, sound system konser/seminar, proyektor laser & stage lighting.
2. **Laboratorium Komputer (2 Lab):** Total 80+ unit PC modern, LAN gigabit, server lokal, software simulasi perbankan/akuntansi.
3. **Laboratorium Bank Mini:** Simulasi frontliner & backoffice perbankan lengkap dengan counter teller & customer service.
4. **Smart Multimedia Classrooms (2 Ruang):** Kapasitas 40-60 peserta, interactive display, AC sentral, koneksi internet high-speed.
5. **Executive Meeting Room:** Kapasitas 15-25 orang, setup boardroom privat, video conference hybrid.
6. **Armada Transportasi Operasional:** Minibus & van eksekutif untuk mobilitas peserta diklat dan operasional kegiatan.

### F. Direktori 12 Bidang Keahlian (124 Sub-Topik)
1. Perbankan & Lembaga Keuangan (Operasional, Credit Analysis, Treasury, Syariah, AML-CFT)
2. Manajemen Risiko & Kepatuhan Perbankan (Risk Governance, Basel, Audit Kepatuhan)
3. Akuntansi, Perpajakan & Keuangan Perusahaan (PSAK, Corporate Tax Planning, Forensic Audit)
4. Manajemen Sumber Daya Manusia & Kepemimpinan (Talent Management, KPI/OKR, Industrial Relations)
5. Operasional, Logistik & Manajemen Rantai Pasok (Supply Chain, Procurement, Lean Operations)
6. Manajemen Strategis, Tata Kelola & Transformasi Organisasi (GCG, Balanced Scorecard, Restrukturisasi)
7. Pemasaran, Komunikasi & Manajemen Layanan Pelanggan (Service Excellence, Digital Marketing, CRM)
8. Kewirausahaan, Pengembangan UMKM & Inkubasi Bisnis (Business Plan, Akses Pembiayaan, E-commerce)
9. Teknologi Informasi, Analisis Data & Sistem Keuangan (Data Analytics, Cyber Security, ERP/MIS)
10. Pasar Modal, Investasi & Literasi Keuangan (Manajemen Portofolio, IPO Readiness, Fintech)
11. Keberlanjutan, ESG & Tanggung Jawab Sosial Perusahaan (Sustainability Report, Green Finance, SROI)
12. Metodologi Penelitian, Penulisan Akademik & Pengembangan Profesi (TFT BNSP, Data Science SPSS/SEM)

---
*Laporan disimpan otomatis pada direktori proyek untuk acuan eksekusi perbaikan frontend.*
