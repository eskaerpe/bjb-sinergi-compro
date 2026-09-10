export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  image: {
    url: string;
    alt: string;
    aspectRatio: string;
  };
}

export interface ExpertDomain {
  id: string;
  title: string;
  category: 'Keuangan & Perbankan' | 'Manajemen & SDM' | 'Teknologi & Operasional';
  shortDesc: string;
  topics: string[];
  iconName: string;
  badge: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  capacity: string;
  description: string;
  highlights: string[];
  image: {
    url: string;
    alt: string;
    aspectRatio: string;
  };
}

export interface LeadershipMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  quote: string;
  image: {
    url: string;
    alt: string;
    aspectRatio: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  impactMetrics: { label: string; value: string }[];
  summary: string;
  details: string[];
  image: {
    url: string;
    alt: string;
    aspectRatio: string;
  };
}

export const COMPANY_INFO = {
  name: "PT Sinergi Ekuitas Indonesia",
  tagline: "Strategic Partner for Training, Consulting, Event Management, and Institutional Support",
  parentOrg: "Yayasan Kesejahteraan Pegawai (YKP) bank bjb",
  affiliateOrg: "Universitas Ekuitas Indonesia",
  ecosystemSubtitle: "Memadukan kekuatan akademik, pengalaman praktisi perbankan, dan ekosistem kelembagaan bank bjb.",
  address: "Kampus Universitas Ekuitas Indonesia, Jl. PH.H. Mustofa No.68, Bandung, Jawa Barat 40124",
  phone: "+62 22 7276323",
  whatsapp: "6281220000000",
  whatsappFormatted: "+62 812-2000-0000",
  email: "info@sinergiekuitas.co.id",
  operatingHours: "Senin – Jumat: 08:00 – 17:00 WIB",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.898687796347!2d107.63666507499622!3d-6.902700993096645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b5ad16111f%3A0x63bc297ad2efbeec!2sUniversitas%20Ekuitas%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pelatihan-sertifikasi",
    title: "Pelatihan Profesional & Sertifikasi",
    shortDesc: "Program pengembangan kompetensi komprehensif berstandar industri perbankan dan jasa keuangan.",
    fullDesc: "Menyelenggarakan berbagai program pelatihan spesialisasi di bidang ekonomi, keuangan, perbankan, manajemen risiko, dan teknologi bisnis yang didukung oleh kurikulum berbasis kebutuhan industri serta pengajar praktisi berpengalaman.",
    iconName: "GraduationCap",
    features: [
      "Kurikulum tersertifikasi industri",
      "Instruktur praktisi bank bjb & akademisi Ekuitas",
      "Simulasi studi kasus dunia nyata",
      "Sertifikat kompetensi resmi"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      alt: "Suasana Pelatihan Profesional PT Sinergi Ekuitas Indonesia",
      aspectRatio: "16:9"
    }
  },
  {
    id: "konsultasi-bisnis",
    title: "Konsultasi Bisnis & Keuangan",
    shortDesc: "Layanan penasihat strategis untuk tata kelola perusahaan, manajemen risiko, dan efisiensi operasional.",
    fullDesc: "Mendampingi institusi dalam perancangan strategi bisnis, audit tata kelola (GCG), penyusunan SOP operasional, analisis kesehatan keuangan, serta transformasi digital kelembagaan.",
    iconName: "TrendingUp",
    features: [
      "Audit & Asesmen Kesehatan Keuangan",
      "Penyusunan SOP & Framework GCG",
      "Pendampingan Manajemen Risiko",
      "Studi Kelayakan Bisnis & Investasi"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      alt: "Konsultasi Bisnis & Keuangan Institusional",
      aspectRatio: "16:9"
    }
  },
  {
    id: "development-sdm",
    title: "Development & Competency SDM",
    shortDesc: "Asesmen dan pemetaan potensi talent untuk akselerasi kepemimpinan dan kinerja organisasi.",
    fullDesc: "Layanan pemetaan kompetensi karyawan melalui assessment center, pelatihan leadership development, character building, serta evaluasi indikator kinerja (KPI) berbasis data.",
    iconName: "Users",
    features: [
      "Assessment Center & Talent Mapping",
      "Executive Leadership Camp",
      "Evaluasi Kinerja Berbasis KPI",
      "Character & Ethics Building"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Pengembangan Sumber Daya Manusia",
      aspectRatio: "16:9"
    }
  },
  {
    id: "event-management",
    title: "Event Management & MICE",
    shortDesc: "Penyelenggaraan seminar, rapat kerja strategis, workshop, dan wisuda secara profesional.",
    fullDesc: "Solusi end-to-end event management mulai dari perencanaan konsep, manajemen registrasi peserta, penyediaan venue multimedia, katering, hingga dokumentasi dan evaluasi kegiatan.",
    iconName: "Calendar",
    features: [
      "Pengelolaan Seminar & Rapat Kerja",
      "Fasilitas Venue Multimedia Lengkap",
      "Manajemen Logistics & Akomodasi",
      "Tim Operasional Event Berpengalaman"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      alt: "Penyelenggaraan Event dan Seminar Institusional",
      aspectRatio: "16:9"
    }
  },
  {
    id: "pendukung-institusional",
    title: "Layanan Pendukung Institusional",
    shortDesc: "Dukungan operasional dan pengelolaan fasilitas representatif untuk kelancaran kegiatan mitra.",
    fullDesc: "Menyediakan sarana operasional pendukung seperti penyediaan armada transportasi kegiatan, pengelolaan ruang seminar, sistem keamanan terpadu, hingga penyediaan ruang kerja fleksibel.",
    iconName: "Building2",
    features: [
      "Penyediaan Transportasi Participant",
      "Pengelolaan Ruang Simulasi & Lab",
      "Layanan Keamanan & Operasional 24/7",
      "Dukungan Akomodasi Mitra"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      alt: "Layanan Pendukung Institusional",
      aspectRatio: "16:9"
    }
  },
  {
    id: "frontliner-banking",
    title: "Program Frontliner & Simulasi Perbankan",
    shortDesc: "Program unggulan pelatihan Customer Service & Teller berbasis laboratorium Mini Banking.",
    fullDesc: "Program khusus simulasi frontliner perbankan yang mengintegrasikan latihan penanganan nasabah, standar pelayanan prima, transaksi teller, hingga manajemen konflik front-office.",
    iconName: "ShieldCheck",
    features: [
      "Simulasi Mini Banking Real-Time",
      "Standar Operational Excellence bank bjb",
      "Pelatihan Handling Customer Service",
      "Evaluasi & Quality Assurance"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=1200&q=80",
      alt: "Program Frontliner Perbankan dan Simulasi Teller",
      aspectRatio: "16:9"
    }
  }
];

export const EXPERT_DOMAINS_DATA: ExpertDomain[] = [
  {
    id: "domain-1",
    title: "Perbankan Syariah & Konvensional",
    category: "Keuangan & Perbankan",
    shortDesc: "Pendalaman operasional bank, manajemen dana, serta akad syariah terkini.",
    topics: ["Operasional Bank", "Akad Syariah", "ALCO & Treasury", "Produk Dana & Kredit"],
    iconName: "Landmark",
    badge: "Keuangan"
  },
  {
    id: "domain-2",
    title: "Manajemen Risiko Perbankan",
    category: "Keuangan & Perbankan",
    shortDesc: "Penerapan kerangka kerja manajemen risiko berbasis regulasi OJK & BI.",
    topics: ["Risiko Kredit", "Risiko Operasional", "Risiko Likuiditas", "Sertifikasi BSMR"],
    iconName: "ShieldAlert",
    badge: "Risiko"
  },
  {
    id: "domain-3",
    title: "Keuangan Mikro & Mini Banking",
    category: "Keuangan & Perbankan",
    shortDesc: "Pengelolaan lembaga keuangan mikro dan pengoperasian mini bank simulasi.",
    topics: ["BPR & BPRS", "Analisis Kelayakan Kredit", "Simulasi Teller CS", "Penyaluran KUR"],
    iconName: "Wallet",
    badge: "Mikro"
  },
  {
    id: "domain-4",
    title: "Akuntansi & Keuangan Publik",
    category: "Keuangan & Perbankan",
    shortDesc: "Penyusunan laporan keuangan akuntabel dan perpajakan badan.",
    topics: ["PSAK Terbaru", "Perpajakan Perusahaan", "Laporan Keuangan Publik", "Cost Accounting"],
    iconName: "Calculator",
    badge: "Akuntansi"
  },
  {
    id: "domain-5",
    title: "Manajemen Strategis & Governance",
    category: "Manajemen & SDM",
    shortDesc: "Penguatan Good Corporate Governance (GCG) dan formulasi strategi bisnis.",
    topics: ["Tata Kelola (GCG)", "Balanced Scorecard", "Restrukturisasi Bisnis", "Corporate Planning"],
    iconName: "Target",
    badge: "Governance"
  },
  {
    id: "domain-6",
    title: "Pemasaran Digital & Branding",
    category: "Teknologi & Operasional",
    shortDesc: "Akselerasi akuisisi nasabah dan pemetaan brand equity di era digital.",
    topics: ["Digital Acquisition", "Social Media Strategy", "Corporate Communication", "Brand Positioning"],
    iconName: "Megaphone",
    badge: "Marketing"
  },
  {
    id: "domain-7",
    title: "Pengadaan Barang & Jasa (PBJ)",
    category: "Teknologi & Operasional",
    shortDesc: "Tata cara pengadaan publik dan swasta sesuai regulasi standar nasional.",
    topics: ["Regulasi LKPP", "Manajemen Vendor", "Kontrak Pengadaan", "Mitigasi Fraud PBJ"],
    iconName: "ShoppingBag",
    badge: "Pengadaan"
  },
  {
    id: "domain-8",
    title: "Audit Internal & Legal Compliance",
    category: "Manajemen & SDM",
    shortDesc: "Pengawasan kepatuhan hukum dan efektivitas sistem pengendalian internal.",
    topics: ["Audit berbasis Risiko", "Anti Money Laundering (APU PPT)", "Legal Drafting", "Compliance Audit"],
    iconName: "FileCheck",
    badge: "Audit"
  },
  {
    id: "domain-9",
    title: "Pelayanan Prima & Frontliner",
    category: "Manajemen & SDM",
    shortDesc: "Pembentukan standar service excellence untuk garda terdepan institusi.",
    topics: ["Grooming & Manners", "Handling Difficult Customers", "Service Mindset", "Communication Skills"],
    iconName: "Award",
    badge: "Service"
  },
  {
    id: "domain-10",
    title: "Sumber Daya Manusia & Character Building",
    category: "Manajemen & SDM",
    shortDesc: "Pengembangan etika kerja, budaya organisasi, dan kepemimpinan.",
    topics: ["Culture Change", "Leadership Transformation", "Conflict Resolution", "Performance Appraisals"],
    iconName: "UserCheck",
    badge: "SDM"
  },
  {
    id: "domain-11",
    title: "Teknologi Informasi & Digitalisasi",
    category: "Teknologi & Operasional",
    shortDesc: "Keamanan siber, analisis data bisnis, dan otomatisasi operasional.",
    topics: ["Cybersecurity Awareness", "Data Analytics for Banking", "Otomatisasi Core System", "IT Governance"],
    iconName: "Cpu",
    badge: "Tech"
  },
  {
    id: "domain-12",
    title: "Kewirausahaan & Pendampingan UMKM",
    category: "Teknologi & Operasional",
    shortDesc: "Inkubasi bisnis dan pendampingan UMKM naik kelas secara berkelanjutan.",
    topics: ["Business Incubation", "Akses Pembiayaan", "Digitalisasi UMKM", "Manajemen Cash Flow"],
    iconName: "Lightbulb",
    badge: "UMKM"
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "ruang-kelas-multimedia",
    name: "Ruang Kelas Multimedia",
    capacity: "30 – 50 Peserta",
    description: "Ruang pembelajaran modern ber-AC dilengkapi proyektor HD, sound system jernih, smart display, dan papan tulis interaktif.",
    highlights: ["Interactive Smart Screen", "Audio-Visual High Definition", "Desain Ergonomis", "High-Speed Wi-Fi"],
    image: {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      alt: "Ruang Kelas Multimedia PT Sinergi Ekuitas Indonesia",
      aspectRatio: "4:3"
    }
  },
  {
    id: "lab-komputer",
    name: "Laboratorium Komputer Modern",
    capacity: "40 Unit PC High-Spec",
    description: "Laboratorium dengan spesifikasi hardware tinggi dan software perbankan/statistik untuk simulasi data real-time.",
    highlights: ["PC Core i7 & RAM 16GB", "Software Simulasi Perbankan", "LAN GigaBit & Fiber Optic", "Dukungan IT Support Onsite"],
    image: {
      url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      alt: "Laboratorium Komputer Modern",
      aspectRatio: "4:3"
    }
  },
  {
    id: "mini-banking",
    name: "Mini Banking Simulation Lab",
    capacity: "12 Counter Teller & CS",
    description: "Laboratorium simulasi perbankan yang dirancang persis seperti counter cabang bank bjb untuk pengalaman latihan nyata.",
    highlights: ["Counter Teller & CS Authentik", "Mesin Hitung Uang & Passbook Printer", "Sistem Antrean Digital", "CCTV & Security Simulation"],
    image: {
      url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
      alt: "Mini Banking Simulation Lab",
      aspectRatio: "4:3"
    }
  },
  {
    id: "ruang-seminar",
    name: "Ruang Seminar & Auditorium",
    capacity: "150 – 300 Peserta",
    description: "Auditorium representatif untuk penyelenggaraan konferensi, seminar nasional, wisuda, dan rapat umum.",
    highlights: ["Panggung Utama & Videotron", "Aksestabilitas Difabel", "Ruang Transit VIP", "Sistem Lighting Panggung"],
    image: {
      url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80",
      alt: "Ruang Seminar & Auditorium",
      aspectRatio: "4:3"
    }
  },
  {
    id: "discussion-rooms",
    name: "Discussion Rooms & Breakout Hubs",
    capacity: "6 – 12 Peserta / Ruang",
    description: "Ruang diskusi kelompok untuk studi kasus, simulasi roleplay, dan konsolidasi tim yang nyaman.",
    highlights: ["Glass Whiteboard", "Private Acoustic Wall", "Coffee & Refreshment Corner", "Ergonomic Chairs"],
    image: {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Discussion Rooms & Breakout Hubs",
      aspectRatio: "4:3"
    }
  },
  {
    id: "integrated-security",
    name: "Akses, Parkir & Keamanan Terpadu",
    capacity: "Area Parkir 200+ Kendaraan",
    description: "Dukungan area parkir luas, sistem keamanan 24 jam, serta layanan operasional dan akomodasi peserta.",
    highlights: ["Parkir Mobil & Motor Luas", "Petugas Keamanan 24/7", "Akses Transportasi Mudah", "Layanan Drop-off Bus"],
    image: {
      url: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      alt: "Area Parkir dan Keamanan Terpadu",
      aspectRatio: "4:3"
    }
  }
];

export const PORTFOLIO_PROJECT: PortfolioProject = {
  id: "abdi-bjb-frontliner",
  title: "Program Pembelajaran Frontliner bank bjb",
  client: "PT Bank Pembangunan Daerah Jawa Barat dan Banten, Tbk (bank bjb)",
  category: "Pelatihan Perbankan & Pendukung Institusional",
  impactMetrics: [
    { label: "Peserta Terlatih", value: "500+" },
    { label: "Tingkat Kepuasan", value: "98.4%" },
    { label: "Laboratorium Simulasi", value: "Mini Bank" },
    { label: "Dukungan End-to-End", value: "Akomodasi & Transp." }
  ],
  summary: "Penyelenggaraan program pelatihan intensif bagi frontliner bank bjb (Customer Service & Teller) secara terintegrasi.",
  details: [
    "Dukungan penuh fasilitas kampus Universitas Ekuitas Indonesia & Mini Banking Lab",
    "Simulasi transaksi perbankan real-time dengan parameter standar operasional bank bjb",
    "Pengelolaan armada transportasi & akomodasi peserta dari berbagai kantor cabang",
    "Evaluasi kompetensi individual dan penerbitan rekomendasi sertifikasi"
  ],
  image: {
    url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
    alt: "Dokumentasi Program Frontliner bank bjb",
    aspectRatio: "16:9"
  }
};

export const LEADERSHIP_DATA: LeadershipMember = {
  name: "Deni Hamdani, SE. M.Si",
  title: "Direktur Utama",
  role: "Direktur Utama PT Sinergi Ekuitas Indonesia",
  bio: "Memimpin arah strategis perusahaan serta bertanggung jawab dalam memastikan seluruh kegiatan operasional dan pengembangan bisnis berjalan selaras dengan visi perusahaan. Berperan dalam pengambilan keputusan strategis, penguatan tata kelola, serta membangun sinergi dan kerja sama dengan berbagai mitra untuk memperluas jangkauan layanan.",
  quote: "Sinergi antara kekuatan akademik Universitas Ekuitas Indonesia dan pengalaman praktis ekosistem bank bjb adalah fondasi utama kami dalam menghadirkan solusi SDM dan kelembagaan yang solutif, akuntabel, dan berdampak nyata.",
  image: {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    alt: "Deni Hamdani, SE. M.Si - Direktur Utama PT Sinergi Ekuitas Indonesia",
    aspectRatio: "1:1"
  }
};

export const VISION_MISSION_DATA = {
  vision: "Menjadi mitra strategis terdepan dalam pengembangan SDM, konsultasi, dan layanan pendukung yang terintegrasi di Indonesia.",
  missions: [
    "Menyelenggarakan pelatihan berkualitas tinggi berbasis kebutuhan industri perbankan dan dunia usaha.",
    "Memberikan layanan konsultasi yang solutif, akuntabel, dan berdampak pada kinerja mitra.",
    "Menyediakan fasilitas dan operasional kegiatan yang andal dan representatif.",
    "Mengoptimalkan sinergi ekosistem bank bjb dan Universitas Ekuitas Indonesia.",
    "Mendorong inovasi berkelanjutan dan penerapan tata kelola perusahaan yang baik (GCG)."
  ],
  coreValues: [
    { letter: "S", word: "Solutif", desc: "Menghadirkan jawaban nyata atas setiap tantangan institusional mitra." },
    { letter: "I", word: "Integritas", desc: "Menjunjung tinggi kejujuran, etika, dan transparansi dalam seluruh operasional." },
    { letter: "N", word: "Nalar", desc: "Menggunakan landasan analitis dan akademis yang kuat dalam setiap rekomendasi." },
    { letter: "E", word: "Empati", desc: "Memahami dengan mendalam kebutuhan peserta, institusi, dan masyarakat." },
    { letter: "R", word: "Responsif", desc: "Cepat dan sigap dalam memberikan layanan dan dukungan operasional." },
    { letter: "G", word: "Gigih", desc: "Berkomitmen tinggi mencapai standar keunggulan tanpa kompromi." },
    { letter: "I", word: "Inovatif", desc: "Terus memperbarui metode pembelajaran dan teknologi layanan." }
  ]
};
