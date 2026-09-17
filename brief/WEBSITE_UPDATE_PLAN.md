# PLAN PELAKSANAAN UPDATE WEBSITE PT SINERGI EKUITAS INDONESIA
Berdasarkan hasil validasi Council terhadap codebase aktual.

## ARSITEKTUR FINAL YANG DISETUJUI
**Opsi A Polish (True Multi-Page with Teaser Homepage)**
Mempertahankan arsitektur `HashRouter` eksisting dengan 7 route. Modifikasi akan difokuskan untuk menjadikan `HomePage.tsx` benar-benar berfungsi sebagai etalase (*teaser*), yang dapat mendorong klik ke halaman detail, dan menghilangkan masalah duplikasi konten statik (khususnya perbaikan bug prop di Services).

---

## 📅 DAFTAR TUGAS PELAKSANAAN

### FASE 0: PERBAIKAN BUG KRITIS (Prioritas Tertinggi)
Fase ini akan memberbaiki error referensi yang ditemukan selama proses audit tanpa merombak tampilan.

1. [ ] **Perbaiki Bug Prop `ServicesBento`**
   - File: `src/components/sections/ServicesBento.tsx`
   - Tindakan: Hapus alias `_showViewAllLink` di baris 36. Implementasikan limitasi data: Jika `showViewAllLink` adalah `true`, lakukan `.slice(0, 3)` pada array layanan agar hanya menampilkan 3 data teratas.
2. [ ] **Perbaiki Anchor Routing `SynergyNarrative`**
   - File: `src/components/sections/SynergyNarrative.tsx`, baris 168.
   - Tindakan: Mengganti tag `<a href="#lead-form">` (anchor) menjadi komponen `<Link to="/kontak">` yang kompatibel dengan React Router.
3. [ ] **Perbaiki Path PDF Profil Perusahaan**
   - File: `src/components/sections/Hero.tsx`, baris 183.
   - Tindakan: Ubah atribut `href="./docs/Company-Profile-PT-Sinergi.pdf"` menjadi `href="/docs/Company-Profile-PT-Sinergi.pdf"` (absolute path dari public) untuk mencegah potensi file 404 dari child/nested route.

### FASE 1: PEROMBAKAN HOMEPAGE MENJADI TEASER (Visual & Arsitektur)
Merapikan `HomePage.tsx` agarnya flow informasi berjenjang (Teaser → Detail).

1. [ ] **Diferensiasi `SynergyNarrative` (Tentang Kami)**
   - File: `src/components/sections/SynergyNarrative.tsx`, `HomePage.tsx`, `AboutPage.tsx`.
   - Tindakan: Tambahkan parameter `variant="preview" | "full"`.
   - Preview variant (di Beranda): Hanya tampilkan 1-2 paragraf utama ("Membangun Sinergi, Menggerakkan Ekuitas") tanpa penjelasan poin Visi-Misi, tambahkan tombol `[Baca Selengkapnya -> /tentang-kami]`.
   - Full variant (di `/tentang-kami`): Tampilkan seluruh teks secara penuh.
2. [ ] **Komponen Baru: `ExpertiseTeaser.tsx` (Jaringan Ahli)**
   - File: `src/components/sections/ExpertiseTeaser.tsx` (Baru).
   - Tindakan: Buat komponen yang akan me-render statistik grid highlight, mengambil maksimal 4 domain keahlian terpopuler dari `EXPERT_DOMAINS_DATA` (Hukum, TI, Keuangan, Strategi). Tambahkan *Badge* informasi "12 Domain Keahlian + 124 Sub Topik Spesifik" dan tombol `[Lihat Direktori Ahli -> /jaringan-ahli]`.
   - Integrasi: Masukkan komponen ini ke dalam `src/pages/HomePage.tsx` tepat di bawah `ServicesBento`.
3. [ ] **Komponen Baru: `LeadershipStrip.tsx` (Micro Teaser)**
   - File: `src/components/sections/LeadershipStrip.tsx` (Baru).
   - Tindakan: Buat sebuah banner horizontal / slider minimalis yang berisi pas foto, nama, dan jabatan 3 profil pemimpin manajemen (Bpk. Deni Hamdani, Bpk. Gatot Iwan, Bapak M Gunawan) dari dataset `LEADERSHIP_DATA`. Tambahkan tombol kecil `[Lihat Jajaran Direksi -> /tentang-kami]`.
   - Integrasi: Tempatkan komponen ini di `HomePage.tsx` sebelum blok `LeadHub`.

### FASE 2: QA & FINALISASI (Verification)
1. [ ] **Uji Navigasi Endpoint-to-Endpoint**
   - Build aplikasi: Lakukan simulasi build (`npm run build`) untuk memastikan seluruh alias path, prop yang ditambahkan tidak merusak typescript typing (`any`).
   - Cek rute perpindahan halaman melalui local dev environment, verifikasi rendering CTA "View All" berjalan normal dan mem-page-load data dengan akurat.
2. [ ] **Konsistensi Data Master (No Hallucination Check)**
   - Lakukan satu review akhir pada file UI dengan `companyData.ts` untuk memverifikasi bahwa *hardcode* tidak mengubah nilai `COMPANY_INFO`, data, alamat atau metrik pada halaman apa pun.
