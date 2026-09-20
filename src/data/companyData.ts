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

export interface DetailedServicePillar {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  targetAudience: string[];
  scopeOfWork: string[];
  deliveryMethods?: string[];
  curriculumIntegration?: string;
  integratedFacilities: {
    name: string;
    detail?: string;
  }[];
  whatsappInquiry: string;
  image: {
    url: string;
    alt: string;
    aspectRatio: string;
  };
}

export interface ExpertDomain {
  id: string;
  domainNumber: number;
  title: string;
  category: 'Keuangan & Perbankan' | 'Manajemen & SDM' | 'Teknologi & Operasional';
  shortDesc: string;
  topics: string[];
  iconName: string;
  badge: string;
}

export interface FacilityGalleryImage {
  url: string;
  caption: string;
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
  galleryImages: FacilityGalleryImage[];
}

export interface LeaderItem {
  id: string;
  name: string;
  title: 'Direktur Utama' | 'Direktur' | 'Komisaris';
  role: string;
  bio: string;
  rolesList: string[];
  quote?: string;
  image: {
    url: string;
    fallbackUrl: string;
    alt: string;
  };
}

export interface PortfolioGalleryImage {
  url: string;
  fallbackUrl: string;
  caption: string;
  tag: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  organizer: string;
  period: string;
  totalParticipants: string;
  category: string;
  impactMetrics: { label: string; value: string }[];
  summary: string;
  details: string[];
  image: {
    url: string;
    fallbackUrl: string;
    alt: string;
    aspectRatio: string;
  };
  galleryImages: PortfolioGalleryImage[];
}

export const COMPANY_INFO = {
  name: "PT Sinergi Ekuitas Indonesia",
  shortName: "PT Sinergi",
  tagline: "Strategic Partner for Training, Consulting, Event Management, and Institutional Support",
  shortTagline: "Mitra Strategis Pelatihan, Konsultasi, Event & Pengelolaan Fasilitas",
  parentOrg: "Yayasan Kesejahteraan Pegawai (YKP) bank bjb",
  affiliateOrg: "Universitas Ekuitas Indonesia",
  ecosystemSubtitle: "Memadukan kekuatan riset akademik Universitas Ekuitas Indonesia, pengalaman praktisi perbankan, dan tata kelola YKP bank bjb.",
  address: "Gedung Universitas Ekuitas Indonesia, Jl. PHH. Mustofa No. 31, Bandung, Jawa Barat 40124",
  city: "Bandung, Jawa Barat",
  postalCode: "40124",
  phone: "+62 821-1969-5761",
  phoneDisplay: "+62821-1969-5761",
  whatsapp: "6282119695761",
  whatsappFormatted: "+62 821-1969-5761",
  whatsappDisplay: "0821-1969-5761",
  whatsappLink: "https://wa.me/6282119695761",
  email: "sinergiekuitas@gmail.com",
  operatingHours: "Senin – Jumat: 08:00 – 17:00 WIB",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.898687796347!2d107.63666507499622!3d-6.902700993096645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b5ad16111f%3A0x63bc297ad2efbeec!2sUniversitas%20Ekuitas%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  vision: "Menjadi perusahaan yang profesional, berkelanjutan, dan terpercaya dalam pengelolaan layanan pendidikan, pelatihan, konsultasi, serta pengembangan usaha berbasis pemanfaatan aset secara optimal.",
  missions: [
    "Mengelola dan mengembangkan unit usaha secara profesional dan akuntabel.",
    "Mengoptimalkan pemanfaatan aset untuk menghasilkan nilai ekonomi berkelanjutan.",
    "Mengembangkan layanan pelatihan dan konsultasi yang berkualitas.",
    "Membangun kemitraan strategis dengan berbagai institusi.",
    "Mendorong penerapan prinsip Good Corporate Governance di seluruh lini bisnis."
  ]
};

export const LEADERSHIP_MEMBERS: LeaderItem[] = [
  {
    id: 'deni-hamdani',
    name: 'Deni Hamdani, SE., M.Si',
    title: 'Direktur Utama',
    role: 'Pimpinan Eksekutif',
    bio: 'Memimpin arah strategis perusahaan serta bertanggung jawab dalam memastikan seluruh kegiatan operasional dan pengembangan bisnis berjalan selaras dengan visi perusahaan. Berperan dalam pengambilan keputusan strategis, penguatan tata kelola, serta membangun sinergi dan kerja sama dengan berbagai mitra untuk mendukung pertumbuhan perusahaan yang berkelanjutan.',
    rolesList: [
      'Memimpin arah strategis dan operasional PT Sinergi Ekuitas Indonesia.',
      'Memastikan seluruh kegiatan dan bisnis selaras dengan visi & misi perusahaan.',
      'Pengambilan keputusan strategis & penguatan tata kelola (GCG).',
      'Membangun sinergi & kemitraan strategis berkelanjutan.'
    ],
    quote: 'Memadukan keunggulan akademik, pengalaman praktisi perbankan, dan jaringan kelembagaan untuk mengakselerasi pertumbuhan kompetensi SDM dan efisiensi operasional mitra.',
    image: {
      url: './images/team/deni-hamdani.jpeg',
      fallbackUrl: './images/team/deni-hamdani.jpeg',
      alt: 'Deni Hamdani, SE., M.Si - Direktur Utama'
    }
  },
  {
    id: 'gatot-iwan',
    name: 'Dr. Gatot Iwan Kurniawan, SE., MBA',
    title: 'Direktur',
    role: 'Pengembangan & Inovasi',
    bio: 'Berperan dalam mendukung perencanaan dan pelaksanaan strategi perusahaan, khususnya dalam pengembangan bisnis, inovasi, serta peningkatan kualitas layanan. Turut mengawal pelaksanaan program perusahaan agar berjalan efektif, adaptif terhadap perkembangan industri, dan mampu memberikan nilai tambah bagi mitra maupun pelanggan.',
    rolesList: [
      'Mendukung perencanaan dan pelaksanaan strategi pengembangan bisnis.',
      'Mendorong inovasi dan peningkatan kualitas layanan terpadu.',
      'Mengawal efektivitas pelaksanaan seluruh program perusahaan.',
      'Menjamin nilai tambah yang adaptif bagi mitra dan pelanggan.'
    ],
    quote: 'Inovasi berkelanjutan dan standar mutu tinggi adalah kunci utama dalam menghadirkan solusi pengembangan SDM dan konsultasi manajemen yang berdampak nyata.',
    image: {
      url: './images/team/gatot-iwan.jpeg',
      fallbackUrl: './images/team/gatot-iwan.jpeg',
      alt: 'Dr. Gatot Iwan Kurniawan, SE., MBA - Direktur'
    }
  },
  {
    id: 'muhammad-gunawan',
    name: 'Muhammad Gunawan',
    title: 'Komisaris',
    role: 'Pengawasan & GCG',
    bio: 'Melaksanakan fungsi pengawasan serta memberikan arahan dan masukan strategis terhadap kebijakan dan pengelolaan perusahaan. Berperan dalam menjaga kepatuhan, akuntabilitas, dan penerapan Good Corporate Governance (GCG) guna memastikan perlindungan kepentingan pemegang saham dan pemangku kepentingan.',
    rolesList: [
      'Melaksanakan fungsi pengawasan independen atas pengelolaan perusahaan.',
      'Memberikan arahan dan masukan strategis kebijakan korporasi.',
      'Menjaga kepatuhan, akuntabilitas, dan penerapan prinsip Good Corporate Governance (GCG).'
    ],
    quote: 'Pengawasan independen dan komitmen pada Good Corporate Governance (GCG) adalah fondasi utama kepercayaan pemangku kepentingan dan keberlanjutan bisnis.',
    image: {
      url: './images/team/muhammad-gunawan.jpeg',
      fallbackUrl: './images/team/muhammad-gunawan.jpeg',
      alt: 'Muhammad Gunawan - Komisaris'
    }
  }
];

export const VISION_MISSION_DATA = {
  vision: COMPANY_INFO.vision,
  missions: COMPANY_INFO.missions,
  values: [
    {
      letter: 'S',
      word: 'Sinergi',
      label: 'Sinergi',
      desc: 'Membangun kolaborasi harmonis dan saling menguntungkan antar seluruh pemangku kepentingan.',
      description: 'Membangun kolaborasi harmonis dan saling menguntungkan antar seluruh pemangku kepentingan.'
    },
    {
      letter: 'I',
      word: 'Integritas',
      label: 'Integritas',
      desc: 'Menjunjung tinggi kejujuran, etika profesi, dan keterbukaan dalam setiap aktivitas operasional.',
      description: 'Menjunjung tinggi kejujuran, etika profesi, dan keterbukaan dalam setiap aktivitas operasional.'
    },
    {
      letter: 'N',
      word: 'Nawaitu',
      label: 'Nawaitu',
      desc: 'Didasari niat tulus dan komitmen ibadah untuk memberikan kemanfaatan terbaik bagi masyarakat.',
      description: 'Didasari niat tulus dan komitmen ibadah untuk memberikan kemanfaatan terbaik bagi masyarakat.'
    },
    {
      letter: 'E',
      word: 'Efisien',
      label: 'Efisien',
      desc: 'Mengoptimalkan daya guna sumber daya dan aset untuk hasil kinerja yang maksimal dan berkelanjutan.',
      description: 'Mengoptimalkan daya guna sumber daya dan aset untuk hasil kinerja yang maksimal dan berkelanjutan.'
    },
    {
      letter: 'R',
      word: 'Responsif',
      label: 'Responsif',
      desc: 'Cepat dan tanggap melayani serta beradaptasi terhadap dinamika dan kebutuhan mitra bisnis.',
      description: 'Cepat dan tanggap melayani serta beradaptasi terhadap dinamika dan kebutuhan mitra bisnis.'
    },
    {
      letter: 'G',
      word: 'Gigih',
      label: 'Gigih',
      desc: 'Pantang menyerah dan berorientasi pada pencapaian kualitas serta standar keunggulan terbaik.',
      description: 'Pantang menyerah dan berorientasi pada pencapaian kualitas serta standar keunggulan terbaik.'
    },
    {
      letter: 'I',
      word: 'Inovatif',
      label: 'Inovatif',
      desc: 'Menciptakan terobosan dan solusi kreatif yang relevan dengan perkembangan industri terkini.',
      description: 'Menciptakan terobosan dan solusi kreatif yang relevan dengan perkembangan industri terkini.'
    }
  ],
  get coreValues() {
    return this.values;
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pelatihan-sdm',
    title: 'Pelatihan & Pengembangan SDM Terpadu',
    shortDesc: 'Program peningkatan kompetensi teknis (hard skills) dan perilaku (soft skills/service excellence) bagi industri perbankan, BUMN/BUMD, dan instansi publik.',
    fullDesc: 'Menyediakan program pembelajaran dan pengembangan kompetensi kerja komprehensif berbasis kebutuhan industri perbankan dan korporasi. Menggabungkan pengajar doktoral Universitas Ekuitas Indonesia dan praktisi perbankan aktif.',
    iconName: 'GraduationCap',
    features: [
      'Program Pembelajaran Frontliner (Customer Service, Teller, Back Office)',
      'Pelatihan Teknis Operasional Perbankan & Analisis Kredit',
      'Workshop In-House & Custom Learning & Development Program',
      'Executive Masterclass & Kepemimpinan Strategis Manajerial'
    ],
    image: {
      url: './images/portfolio/abdi-bjb-2.jpeg',
      alt: 'Pelatihan & Pengembangan SDM Terpadu',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'konsultasi-manajemen',
    title: 'Konsultasi Manajemen & Layanan Institusional',
    shortDesc: 'Pendampingan strategis kelembagaan berbasis riset terapan dan standar tata kelola perbankan modern untuk memperkuat daya saing dan mitigasi risiko.',
    fullDesc: 'Layanan konsultasi bisnis dan manajemen berbasis riset terapan dan prinsip Good Corporate Governance (GCG) untuk meningkatkan efisiensi operasional dan kepatuhan institusi.',
    iconName: 'Briefcase',
    features: [
      'Penyusunan Rencana Bisnis Bank (RBB) & RJPP Perusahaan',
      'Pemetaan Proses Bisnis, Penyusunan SOP, & BPR',
      'Asesmen GCG & Enterprise Risk Management (ERM ISO 31000)',
      'Studi Kelayakan Bisnis (Feasibility Study) & Valuasi Investasi'
    ],
    image: {
      url: './images/portfolio/abdi-bjb-6.jpeg',
      alt: 'Konsultasi Manajemen & Layanan Institusional',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'asesmen-sertifikasi',
    title: 'Asesmen, Sertifikasi & Uji Kompetensi',
    shortDesc: 'Evaluasi kompetensi independen, seleksi calon pegawai (rekrutmen), asesmen kenaikan jenjang karir, dan uji sertifikasi profesi terstandarisasi.',
    fullDesc: 'Layanan pengukuran dan pemetaan potensi sumber daya manusia melalui metode assessment center teruji dan didukung 2 laboratorium CBT berkapasitas besar.',
    iconName: 'Users',
    features: [
      'Asesmen Massal Calon Pegawai Berbasis Komputer (CBT)',
      'Psikotes Terstandarisasi & Pemetaan Profil Kepribadian Kerja',
      'Observasi Perilaku, LGD, & Wawancara Berbasis Kompetensi (BEI)',
      'Asesmen Frontliner & Roleplay Simulasi Transaksi Perbankan'
    ],
    image: {
      url: './images/portfolio/abdi-bjb-3.jpeg',
      alt: 'Asesmen, Sertifikasi & Uji Kompetensi',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'acara-mice',
    title: 'Penyelenggaraan Acara Korporat & MICE',
    shortDesc: 'Pengelolaan kegiatan MICE (Meeting, Incentive, Convention, Exhibition) secara end-to-end yang tertib, representatif, dan bernilai tinggi.',
    fullDesc: 'Layanan pengelolaan acara end-to-end yang menjamin kelancaran, profesionalisme, dan efisiensi pelaksanaan seminar, konferensi, wisuda, hingga gathering korporat.',
    iconName: 'Calendar',
    features: [
      'Penyelenggaraan Konferensi, Seminar & Simposium Nasional/Internasional',
      'Rapat Kerja Terpadu (Raker), FGD Eksekutif, & Gathering Korporat',
      'Manajemen Akomodasi, Konsumsi Eksklusif, & Mobilisasi Peserta',
      'Pengelolaan Event Hybrid & Media Livestreaming Profesional'
    ],
    image: {
      url: './images/portfolio/abdi-bjb-4.jpeg',
      alt: 'Penyelenggaraan Acara Korporat & MICE',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'fasilitas-kampus',
    title: 'Pengelolaan & Optimalisasi Fasilitas Kampus',
    shortDesc: 'Penyewaan dan optimalisasi sarana kelas multimedia, lab komputer, lab bank mini, auditorium, dan ruang rapat di pusat kota Bandung.',
    fullDesc: 'Optimalisasi pemanfaatan aset sarana edukasi representatif di Kampus Universitas Ekuitas Indonesia untuk mendukung kegiatan pelatihan, ujian online, dan pertemuan bisnis.',
    iconName: 'Building2',
    features: [
      'Laboratorium Bank Mini (Simulasi Teller & CS)',
      'Classroom Multimedia Ber-AC & Audio Jernih',
      'Laboratorium Komputer & CBT Center Berkapasitas Besar',
      'Auditorium Graha Ekuitas (Kapasitas s.d. 500 Peserta)'
    ],
    image: {
      url: './images/facilities/classroom-1.jpeg',
      alt: 'Pengelolaan & Optimalisasi Fasilitas Kampus',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'pendukung-institusional',
    title: 'Layanan Pendukung Operasional & Institusional',
    shortDesc: 'Penyediaan armada transportasi/shuttle eksekutif, pengadaan merchandise & corporate kit resmi, dan dukungan logistik terpadu.',
    fullDesc: 'Dukungan operasional institusional menyeluruh mencakup penyediaan armada bus/shuttle untuk mobilitas peserta serta pengadaan atribut dan merchandise resmi korporat.',
    iconName: 'ShoppingBag',
    features: [
      'Armada Transportasi & Bus Executive Shuttle Ber-AC',
      'Pengadaan Merchandise & Corporate Kit Seminar/Seragam/Plakat',
      'Penyediaan Atribut Acara & Media Promosi Representatif',
      'Dukungan Logistik Panggung, Sound System & Dokumentasi Visual'
    ],
    image: {
      url: './images/facilities/transportasi.jpeg',
      alt: 'Layanan Pendukung Operasional & Institusional',
      aspectRatio: '16/9'
    }
  }
];

export const DETAILED_SERVICES_DATA: DetailedServicePillar[] = [
  {
    id: 'pilar-01',
    number: '01',
    title: 'Pelatihan & Pengembangan SDM Terpadu',
    englishTitle: 'Human Capital & Corporate Training',
    shortDesc: 'Program peningkatan kompetensi teknis (hard skills) dan perilaku (soft skills/service excellence) bagi industri perbankan, BUMN/BUMD, dan instansi publik dengan instruktur gabungan akademisi & praktisi perbankan aktif.',
    fullDesc: 'Menyediakan program pengembangan modal insani terpadu yang memadukan keunggulan riset akademik Universitas Ekuitas Indonesia dan kepakaran praktisi perbankan aktif. Kurikulum dirancang aplikatif, terukur, dan adaptif terhadap transformasi industri perbankan serta kepatuhan regulasi terkini.',
    iconName: 'GraduationCap',
    targetAudience: [
      'Industri Perbankan & Lembaga Keuangan',
      'BUMN & BUMD',
      'Instansi Pemerintah & Publik',
      'Perusahaan Korporat Swasta'
    ],
    deliveryMethods: [
      'In-House Training',
      'Public Workshop',
      'Intensive Bootcamp',
      'Executive Masterclass'
    ],
    curriculumIntegration: 'Terhubung langsung dengan 12 Domain Keahlian & 124+ Silabus Modul (Perbankan, Akuntansi/Pajak, Manajemen Risiko, Audit & GCG, dll.).',
    integratedFacilities: [
      {
        name: 'Smart Classroom Multimedia',
        detail: 'Ruang kelas interaktif ber-AC dengan proyektor modern dan tata suara jernih'
      },
      {
        name: 'Laboratorium Bank Mini Kampus Ekuitas',
        detail: 'Counter Teller riil, Customer Service desk, sistem antrean, dan software simulasi transaksi'
      }
    ],
    scopeOfWork: [
      'Program Pembelajaran Frontliner (Customer Service, Teller, Back Office & Security Service Excellence)',
      'Pelatihan Teknis Operasional Perbankan & Analisis Kelayakan Kredit Komersial/UMKM',
      'Workshop Akuntansi Perbankan, Perpajakan Korporat, & Pelaporan Keuangan Berstandar PSAK',
      'Pelatihan Manajemen Risiko Operasional, Kepatuhan Regulasi (OJK/BI), & Audit Internal',
      'Custom In-House Learning & Development Curriculum Design Sesuai Kebutuhan Organisasi',
      'Executive Masterclass & Kepemimpinan Strategis bagi Jajaran Manajerial'
    ],
    whatsappInquiry: 'Halo PT Sinergi Ekuitas Indonesia, saya ingin konsultasi dan mendapatkan proposal untuk Pilar 01: Pelatihan & Pengembangan SDM Terpadu.',
    image: {
      url: './images/portfolio/abdi-bjb-2.jpeg',
      alt: 'Pelatihan & Pengembangan SDM Terpadu',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'pilar-02',
    number: '02',
    title: 'Konsultasi Manajemen & Layanan Institusional',
    englishTitle: 'Management Consulting & Institutional Advisory',
    shortDesc: 'Pendampingan strategis kelembagaan berbasis riset terapan dan standar tata kelola perbankan modern untuk memperkuat daya saing dan mitigasi risiko operasional.',
    fullDesc: 'Layanan konsultasi manajemen strategis yang memberikan solusi berbasis data, riset terapan, dan prinsip Good Corporate Governance (GCG). Didukung oleh dewan pakar doktoral dan praktisi perbankan senior untuk mengawal proses transformasi organisasi, efisiensi operasional, dan kepatuhan terhadap regulasi industri.',
    iconName: 'Briefcase',
    targetAudience: [
      'Dewan Komisaris & Direksi Perusahaan',
      'Divisi Strategic Planning & Corporate Secretary',
      'Divisi Kepatuhan, Legal & Manajemen Risiko',
      'BUMN, BUMD, & Lembaga Jasa Keuangan'
    ],
    integratedFacilities: [
      {
        name: 'Dewan Konsultan Senior & Tenaga Ahli',
        detail: 'Guru Besar, Doktoral, dan mantan eksekutif perbankan dengan pengalaman puluhan tahun'
      },
      {
        name: 'Executive Meeting Suite & Smart Room',
        detail: 'Ruang pertemuan VIP yang representatif untuk diskusi strategis C-Level'
      }
    ],
    scopeOfWork: [
      'Penyusunan Rencana Bisnis Bank (RBB) & Rencana Jangka Panjang Perusahaan (RJPP)',
      'Pemetaan Proses Bisnis, Penyusunan Standard Operating Procedure (SOP), & Business Process Re-engineering (BPR)',
      'Asesmen & Scoring Penerapan Good Corporate Governance (GCG) secara Mandiri dan Komprehensif',
      'Pendampingan Penerapan Enterprise Risk Management (ERM berbasis kerangka ISO 31000)',
      'Studi Kelayakan Bisnis (Feasibility Study), Kajian Investasi, dan Valuasi Usaha',
      'Penyusunan Key Performance Indicators (KPI) & Strategic Human Resource Management'
    ],
    whatsappInquiry: 'Halo PT Sinergi Ekuitas Indonesia, saya ingin konsultasi dan mendapatkan proposal untuk Pilar 02: Konsultasi Manajemen & Layanan Institusional.',
    image: {
      url: './images/portfolio/abdi-bjb-6.jpeg',
      alt: 'Konsultasi Manajemen & Layanan Institusional',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'pilar-03',
    number: '03',
    title: 'Asesmen, Sertifikasi & Uji Kompetensi',
    englishTitle: 'Competency Assessment & CBT Center',
    shortDesc: 'Layanan evaluasi kompetensi independen, seleksi calon pegawai (rekrutmen), asesmen kenaikan jenjang karir, dan uji sertifikasi profesi terstandarisasi.',
    fullDesc: 'Pusat asesmen independen berstandar industri dengan dukungan fasilitas CBT modern untuk mengukur potensi intelektual, kompetensi teknis, dan profil kepribadian kerja secara objektif, akurat, dan transparan.',
    iconName: 'Users',
    targetAudience: [
      'Divisi Human Capital & Pengelola SDM',
      'Komite Rekrutmen & Seleksi Pegawai Baru',
      'Lembaga Sertifikasi Profesi (LSP) Terakreditasi',
      'Instansi Pemerintah Daerah & BUMN/BUMD'
    ],
    integratedFacilities: [
      {
        name: '2 Laboratorium Komputer Modern',
        detail: 'Kapasitas besar dengan koneksi LAN/Internet berkecepatan tinggi dan infrastruktur dedicated'
      },
      {
        name: 'Platform Computer-Based Test (CBT) Terstandarisasi',
        detail: 'Sistem ujian online terenkripsi dengan pengawasan ketat dan pemrosesan nilai instan'
      },
      {
        name: 'Ruang Observasi & Wawancara Khusus',
        detail: 'Fasilitas untuk Focus Group Discussion, LGD, dan Behavioral Event Interview'
      }
    ],
    scopeOfWork: [
      'Asesmen Massal Calon Pegawai Baru (Rekrutmen & Seleksi Masuk Berbasis CBT)',
      'Psikotes Terstandarisasi & Pemetaan Profil Kepribadian serta Sikap Kerja',
      'Observasi Perilaku, Leaderless Group Discussion (LGD), & Behavioral Event Interview (BEI)',
      'Asesmen Kompetensi Frontliner & Roleplay Simulasi Layanan Perbankan Nyata',
      'Uji Sertifikasi Profesi bekerjasama dengan Lembaga Sertifikasi Terakreditasi',
      'Penyusunan Laporan Hasil Asesmen Individual & Talent Matrix Mapping Institusi'
    ],
    whatsappInquiry: 'Halo PT Sinergi Ekuitas Indonesia, saya ingin konsultasi dan mendapatkan proposal untuk Pilar 03: Asesmen, Sertifikasi & Uji Kompetensi.',
    image: {
      url: './images/portfolio/abdi-bjb-3.jpeg',
      alt: 'Asesmen, Sertifikasi & Uji Kompetensi',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'pilar-04',
    number: '04',
    title: 'Penyelenggaraan Acara Korporat & MICE',
    englishTitle: 'Corporate Events, Conference & Logistics',
    shortDesc: 'Pengelolaan kegiatan MICE (Meeting, Incentive, Convention, Exhibition) secara end-to-end yang tertib, representatif, dan bernilai tinggi bagi mitra korporasi dan institusi pendidikan.',
    fullDesc: 'Layanan pengelolaan acara korporat profesional dari perancangan konsep kreatif, tata panggung & pencahayaan, registrasi digital peserta, manajemen hospitality, hingga multimedia livestreaming untuk menjamin kesuksesan agenda institusi mitra.',
    iconName: 'Calendar',
    targetAudience: [
      'Sekretariat Perusahaan (Corporate Secretary) & Tim Protokoler',
      'Panitia Rapat Kerja & Gathering Tahunan Korporasi',
      'Asosiasi Profesi, Industri, & Komunitas Bisnis',
      'Institusi Pendidikan Tinggi & Kedinasan'
    ],
    integratedFacilities: [
      {
        name: 'Auditorium Graha Ekuitas',
        detail: 'Kapasitas 300–500 peserta dengan panggung luas, pencahayaan panggung, dan akustik profesional'
      },
      {
        name: 'Executive Meeting Suite & Ruang Rapat VIP',
        detail: 'Ruang sidang representatif untuk pertemuan tertutup dewan pimpinan'
      },
      {
        name: 'Peralatan Livestreaming & Multimedia Broadcast',
        detail: 'Perangkat siaran multi-kamera HD untuk penyelenggaraan event hybrid interaktif'
      }
    ],
    scopeOfWork: [
      'Penyelenggaraan Konferensi, Seminar Nasional/Internasional, dan Simposium Akademik',
      'Rapat Kerja Terpadu (Raker), Focus Group Discussion (FGD) Eksekutif, dan Gathering Institusi',
      'Manajemen Akomodasi, Konsumsi Eksklusif, dan Mobilisasi Peserta',
      'Pengelolaan Event Hybrid, Multimedia Broadcast & Media Livestreaming Profesional',
      'Tata Kelola Registrasi Digital Peserta & Hospitality Management',
      'Produksi Backdrop, Booth Pameran, & Stage Architecture Representatif'
    ],
    whatsappInquiry: 'Halo PT Sinergi Ekuitas Indonesia, saya ingin konsultasi dan mendapatkan proposal untuk Pilar 04: Penyelenggaraan Acara Korporat & MICE.',
    image: {
      url: './images/portfolio/abdi-bjb-4.jpeg',
      alt: 'Penyelenggaraan Acara Korporat & MICE',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'pilar-05',
    number: '05',
    title: 'Pengelolaan & Optimalisasi Fasilitas Kampus',
    englishTitle: 'Learning Facilities & Campus Assets',
    shortDesc: 'Layanan penyewaan sarana edukasi modern dan representatif berstandar industri di pusat kota Bandung (Jl. PHH. Mustofa No. 31) untuk kebutuhan instansi mitra.',
    fullDesc: 'Optimalisasi pemanfaatan aset sarana edukasi dan pertemuan bisnis strategis di Kampus Universitas Ekuitas Indonesia. Berlokasi di jalur utama kota Bandung dengan fasilitas lengkap, bersih, ber-AC, dan terawat berstandar industri.',
    iconName: 'Building2',
    targetAudience: [
      'Lembaga Penyelenggara Ujian, Sertifikasi, & Pelatihan',
      'Institusi Perbankan, BUMN, & Korporasi',
      'Instansi Pemerintah Daerah & Lembaga Publik',
      'Event Organizer & Komunitas Bisnis'
    ],
    integratedFacilities: [
      {
        name: 'Laboratorium Bank Mini',
        detail: 'Counter Teller riil, Customer Service desk, sistem antrean, dan aplikasi transaksi perbankan'
      },
      {
        name: 'Classroom Multimedia',
        detail: 'Ruang kelas interaktif ber-AC dengan proyektor modern dan tata suara jernih'
      },
      {
        name: 'Laboratorium Komputer & CBT',
        detail: 'PC spesifikasi tinggi untuk pelatihan software teknis dan ujian online berkapasitas besar'
      },
      {
        name: 'Meeting Room VIP',
        detail: 'Ruang rapat eksekutif untuk diskusi strategis dan negosiasi bisnis'
      },
      {
        name: 'Auditorium Graha Ekuitas',
        detail: 'Ruang aula berkapasitas ratusan peserta untuk acara berskala besar'
      }
    ],
    scopeOfWork: [
      'Penyewaan Laboratorium Bank Mini (Simulasi Perbankan Nyata Teller & Customer Service)',
      'Penyewaan Classroom Multimedia Interaktif Ber-AC & Sound System Terintegrasi',
      'Penyewaan Laboratorium Komputer Spesifikasi Tinggi & Infrastruktur CBT Center',
      'Penyewaan Meeting Room VIP & Executive Suite untuk Pertemuan Terbatas',
      'Penyewaan Auditorium Graha Ekuitas untuk Seminar, Wisuda, & Acara Massal',
      'Paket Bundling Fasilitas Lengkap (Ruangan, Sound System, Operator Teknis, & Catering)'
    ],
    whatsappInquiry: 'Halo PT Sinergi Ekuitas Indonesia, saya ingin konsultasi dan mendapatkan proposal penyewaan untuk Pilar 05: Pengelolaan & Optimalisasi Fasilitas Kampus.',
    image: {
      url: './images/facilities/classroom-1.jpeg',
      alt: 'Pengelolaan & Optimalisasi Fasilitas Kampus',
      aspectRatio: '16/9'
    }
  },
  {
    id: 'pilar-06',
    number: '06',
    title: 'Layanan Pendukung Operasional & Institusional',
    englishTitle: 'Logistics, Transportation & Corporate Kit',
    shortDesc: 'Penyediaan dukungan logistik, mobilitas transportasi, dan atribut institusional untuk menjamin kelancaran seluruh rangkaian kegiatan mitra.',
    fullDesc: 'Dukungan operasional institusional menyeluruh mencakup penyediaan armada bus shuttle eksekutif untuk mobilitas peserta, pengadaan merchandise dan souvenir korporat resmi berkualitas tinggi, serta tata kelola logistik pendukung kegiatan.',
    iconName: 'ShoppingBag',
    targetAudience: [
      'Panitia Pelatihan, Workshop, & Simposium',
      'Divisi Umum, Rumah Tangga & Pengadaan (Procurement) Perusahaan',
      'Lembaga Diklat & Penyelenggara Acara Institusional',
      'Institusi Mitra Kerja Sama'
    ],
    integratedFacilities: [
      {
        name: 'Armada Shuttle Bus Eksekutif Ber-AC',
        detail: 'Armada transportasi terawat dengan pengemudi profesional berpengalaman dan berorientasi keselamatan'
      },
      {
        name: 'Sentra Produksi & QC Merchandise Resmi',
        detail: 'Pengadaan seminar kit, souvenir eksklusif, seragam korporat, plakat, dan sertifikat berstandar mutu tinggi'
      },
      {
        name: 'Sentra Distribusi & Logistik Terpadu',
        detail: 'Dukungan perlengkapan teknis panggung, tata suara, dan handling barang di lokasi kegiatan'
      }
    ],
    scopeOfWork: [
      'Armada Transportasi & Bus Executive Shuttle: Mobilitas penjemputan peserta luar kota, transfer bandara/stasiun, dan company visit',
      'Pengadaan Merchandise & Corporate Kit: Pembuatan seminar kit, seragam kemeja/kaos, souvenir resmi, plakat akrilik/kayu, dan sertifikat fisik',
      'Dukungan Logistik Terpadu: Penataan tata letak panggung, sound system profesional, perlengkapan teknis, dan dokumentasi visual',
      'Manajemen Pergudangan, Distribusi Materi Diklat, & Handling Lapangan',
      'Penyediaan Perlengkapan Branding, Signage, & Display Promosi Acara'
    ],
    whatsappInquiry: 'Halo PT Sinergi Ekuitas Indonesia, saya ingin konsultasi dan mendapatkan proposal untuk Pilar 06: Layanan Pendukung Operasional & Institusional.',
    image: {
      url: './images/facilities/transportasi.jpeg',
      alt: 'Layanan Pendukung Operasional & Institusional',
      aspectRatio: '16/9'
    }
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'aula-utama',
    name: 'Auditorium & Aula Utama (Graha Ekuitas)',
    capacity: '300 - 500 Peserta',
    description: 'Aula serbaguna utama berkapasitas besar yang dilengkapi dengan panggung utama, sistem pencahayaan modern, AC terpusat, sound system profesional, dan fleksibilitas tata letak tempat duduk untuk acara bertaraf nasional.',
    highlights: [
      'Kapasitas hingga 500 orang',
      'Sound system & lighting auditorium',
      'Panggung utama & ruang rias VIP',
      'Cocok untuk wisuda, seminar & gathering'
    ],
    image: {
      url: './images/facilities/aula-1.jpeg',
      alt: 'Auditorium & Aula Utama (Graha Ekuitas)',
      aspectRatio: '16/9'
    },
    galleryImages: [
      { url: './images/facilities/aula-1.jpeg', caption: 'Tampak Utama Auditorium Graha Ekuitas' },
      { url: './images/facilities/aula-2.jpeg', caption: 'Suasana Acara dan Tata Letak Kursi Auditorium' }
    ]
  },
  {
    id: 'ruang-kelas-eksekutif',
    name: 'Ruang Kelas Pelatihan Eksekutif',
    capacity: '30 - 60 Peserta per Ruang (Tersedia Berbagai Tipe Layout)',
    description: 'Ruang kelas modern ber-AC dengan perlengkapan multimedia lengkap, proyektor High Definition, papan tulis interaktif, dan meja-kursi yang dapat disesuaikan untuk format classroom, U-shape, maupun kelompok diskusi.',
    highlights: [
      'Desain layout fleksibel (Classroom / U-Shape / Cluster)',
      'Proyektor HD & screen layar lebar',
      'Akses Wi-Fi kampus berkecepatan tinggi',
      'Lingkungan kondusif untuk pelatihan intensif'
    ],
    image: {
      url: './images/facilities/classroom-1.jpeg',
      alt: 'Ruang Kelas Pelatihan Eksekutif',
      aspectRatio: '16/9'
    },
    galleryImages: [
      { url: './images/facilities/classroom-1.jpeg', caption: 'Ruang Kelas Multimedia Tipe Layout Standar' },
      { url: './images/facilities/classroom-2.jpeg', caption: 'Fasilitas Proyektor dan Suasana Pembelajaran' }
    ]
  },
  {
    id: 'lab-komputer',
    name: 'Laboratorium Komputer & Analisis Data',
    capacity: '40 - 50 Workstation PC per Lab',
    description: 'Laboratorium komputer spesifikasi tinggi dengan jaringan LAN/Wi-Fi terisolasi, siap digunakan untuk Computer Based Test (CBT), pelatihan analisis data, pemrosesan transaksi, dan sertifikasi TI.',
    highlights: [
      'Perangkat PC spesifikasi tinggi terhubung internet cepat',
      'Dukungan perangkat lunak analisis data & ujian CBT',
      'AC & UPS back-up daya cadangan',
      'Sistem monitoring layar instruktur'
    ],
    image: {
      url: './images/facilities/lab-komputer-1.jpeg',
      alt: 'Laboratorium Komputer & Analisis Data',
      aspectRatio: '16/9'
    },
    galleryImages: [
      { url: './images/facilities/lab-komputer-1.jpeg', caption: 'Workstation PC Laboratorium Komputer' },
      { url: './images/facilities/lab-komputer-2.jpeg', caption: 'Suasana Pelatihan Berbasis Komputer & CBT' }
    ]
  },
  {
    id: 'lab-bank-mini',
    name: 'Laboratorium Simulasi Perbankan (Mini Bank)',
    capacity: '20 - 30 Peserta Simulasi Terpadu',
    description: 'Fasilitas simulasi layanan perbankan yang didesain persis menyerupai counter cabang bank nyata, lengkap dengan meja Customer Service, Teller, mesin hitung uang, dan sistem transaksi perbankan untuk pelatihan frontliner.',
    highlights: [
      'Counter Teller & Customer Service realistis',
      'Peralatan transaksi operasional perbankan lengkap',
      'Sistem simulasi transaksi perbankan terintegrasi',
      'Digunakan untuk Program Abdi bjb Frontliner'
    ],
    image: {
      url: './images/facilities/lab-bank-mini.jpeg',
      alt: 'Laboratorium Simulasi Perbankan (Mini Bank)',
      aspectRatio: '16/9'
    },
    galleryImages: [
      { url: './images/facilities/lab-bank-mini.jpeg', caption: 'Simulasi Counter Teller & Customer Service Bank Mini' }
    ]
  },
  {
    id: 'ruang-rapat-vip',
    name: 'Ruang Rapat & Ruang Diskusi VIP',
    capacity: '10 - 25 Orang',
    description: 'Ruang rapat eksklusif dengan meja konferensi oval, kursi ergonomis, fasilitas Smart TV/proyektor, dan suasana privat yang ideal untuk rapat dewan direksi, negosiasi bisnis, maupun Focus Group Discussion (FGD).',
    highlights: [
      'Meja rapat eksekutif & kursi ergonomis',
      'Smart TV / Display Presentasi Interaktif',
      'Suasana privat & kedap suara',
      'Layanan penyediaan coffee break eksklusif'
    ],
    image: {
      url: './images/facilities/meeting-room.jpeg',
      alt: 'Ruang Rapat & Ruang Diskusi VIP',
      aspectRatio: '16/9'
    },
    galleryImages: [
      { url: './images/facilities/meeting-room.jpeg', caption: 'Executive Boardroom / Ruang Rapat VIP' }
    ]
  },
  {
    id: 'armada-transportasi',
    name: 'Armada Transportasi & Fasilitas Pendukung',
    capacity: 'Bus Medium (30-35 seat), Shuttle HiAce/Elf (14-16 seat), Mobil Operasional VIP',
    description: 'Armada kendaraan operasional terawat untuk layanan antar-jemput (shuttle) peserta pelatihan dari/ke hotel, stasiun, atau bandara, serta pendukung mobilitas panitia dan kunjungan lapangan.',
    highlights: [
      'Bus medium & shuttle AC terawat',
      'Pengemudi profesional berpengalaman',
      'Layanan antar-jemput peserta (hotel - lokasi acara)',
      'Dukungan logistik dan akomodasi acara'
    ],
    image: {
      url: './images/facilities/transportasi.jpeg',
      alt: 'Armada Transportasi & Fasilitas Pendukung',
      aspectRatio: '16/9'
    },
    galleryImages: [
      { url: './images/facilities/transportasi.jpeg', caption: 'Armada Bus Operasional & Shuttle Peserta' }
    ]
  }
];

export const PORTFOLIO_PROJECT: PortfolioProject = {
  id: 'abdi-bjb-frontliner',
  title: 'Program Pembelajaran Frontliner Abdi bjb (Customer Service & Teller)',
  client: 'bank bjb (PT Bank Pembangunan Daerah Jawa Barat dan Banten, Tbk.)',
  organizer: 'PT Sinergi Ekuitas Indonesia (bekerja sama dengan Universitas Ekuitas Indonesia)',
  period: 'Pelaksanaan Bertahap / Multi-Batch',
  totalParticipants: 'Ratusan Peserta Frontliner bank bjb',
  category: 'Pelatihan Perbankan & Operational Support',
  impactMetrics: [
    { label: 'Tingkat Kelulusan Evaluasi', value: '100%' },
    { label: 'Modul Praktikum Perbankan', value: '12+ Modul' },
    { label: 'Kepuasan Layanan Peserta', value: '98.5%' },
    { label: 'Cakupan Layanan End-to-End', value: '100%' }
  ],
  summary: 'Penyelenggaraan program pelatihan dan pembelajaran frontliner terpadu untuk calon pegawai & staf operasional bank bjb, mencakup kelas teori perbankan, simulasi laboratorium mini bank, ujian CBT, akomodasi, konsumsi, dan transportasi peserta.',
  details: [
    'Penyediaan fasilitas ruang kelas multimedia dan laboratorium komputer CBT untuk sesi ujian tertulis dan evaluasi pemahaman.',
    'Pelaksanaan praktikum simulasi pelayanan perbankan pada Laboratorium Bank Mini (Customer Service & Teller counter).',
    'Pengelolaan akomodasi penginapan, konsumsi harian, dan armada transportasi shuttle peserta selama periode pelatihan.',
    'Penyertaan instruktur praktisi senior perbankan bank bjb dan akademisi pakar Universitas Ekuitas Indonesia.'
  ],
  image: {
    url: './images/portfolio/abdi-bjb-1.jpeg',
    fallbackUrl: './images/portfolio/abdi-bjb-1.jpeg',
    alt: 'Dokumentasi Program Pembelajaran Abdi bjb Frontliner',
    aspectRatio: '16/9'
  },
  galleryImages: [
    {
      url: './images/portfolio/abdi-bjb-1.jpeg',
      fallbackUrl: './images/portfolio/abdi-bjb-1.jpeg',
      caption: 'Sesi Pembukaan & Pelatihan Kelas Frontliner bank bjb',
      tag: 'Kelas Pembelajaran'
    },
    {
      url: './images/portfolio/abdi-bjb-2.jpeg',
      fallbackUrl: './images/portfolio/abdi-bjb-2.jpeg',
      caption: 'Praktikum Simulasi Customer Service & Teller di Lab Bank Mini',
      tag: 'Simulasi Perbankan'
    },
    {
      url: './images/portfolio/abdi-bjb-3.jpeg',
      fallbackUrl: './images/portfolio/abdi-bjb-3.jpeg',
      caption: 'Ujian Evaluasi Berbasis Komputer (CBT) di Lab Komputer',
      tag: 'Ujian CBT'
    },
    {
      url: './images/portfolio/abdi-bjb-4.jpeg',
      fallbackUrl: './images/portfolio/abdi-bjb-4.jpeg',
      caption: 'Kegiatan Penggemblengan & Character Building Peserta',
      tag: 'Pembangunan Karakter'
    },
    {
      url: './images/portfolio/abdi-bjb-5.jpeg',
      fallbackUrl: './images/portfolio/abdi-bjb-5.jpeg',
      caption: 'Fasilitas Mobilisasi Shuttle Bus & Akomodasi Peserta',
      tag: 'Logistik & Transportasi'
    },
    {
      url: './images/portfolio/abdi-bjb-6.jpeg',
      fallbackUrl: './images/portfolio/abdi-bjb-6.jpeg',
      caption: 'Upacara Penutupan & Penyerahan Sertifikat Kelulusan',
      tag: 'Penutupan Program'
    }
  ]
};

export const EXPERT_DOMAINS_DATA: ExpertDomain[] = [
  {
    id: 'domain-1',
    domainNumber: 1,
    title: 'Banking & Financial Services',
    category: 'Keuangan & Perbankan',
    shortDesc: 'Manajemen perbankan, analisis kredit, strategi treasury, perbankan syariah, digitalisasi perbankan, dan pemulihan NPL.',
    iconName: 'Landmark',
    badge: '11 Sub Topik',
    topics: [
      'Banking Management & Operations',
      'Credit & Financing Analysis',
      'Funding & Treasury Strategies',
      'Branch Management & Leadership',
      'Strategic Banking',
      'Conventional & Sharia Banking Principles',
      'Banking Digitalization & Core Systems',
      'Payment System & Banking Technology (QRIS, BI-FAST, Open API)',
      'Credit Risk & Non-Performing Loan (NPL) Recovery Management',
      'Banking Business Planning (RBB)',
      'Financial Institution Governance'
    ]
  },
  {
    id: 'domain-2',
    domainNumber: 2,
    title: 'Accounting, Finance & Taxation',
    category: 'Keuangan & Perbankan',
    shortDesc: 'Akuntansi keuangan, corporate finance, perpajakan institusi, budgeting, audit internal, dan PSAK/IFRS.',
    iconName: 'Calculator',
    badge: '10 Sub Topik',
    topics: [
      'Financial Accounting & Reporting',
      'Financial Statement Preparation & Financial Ratio Analysis',
      'Corporate Finance & Capital Budgeting',
      'Financial Management for Decision Makers',
      'Finance for Non-Finance Managers',
      'Budgeting, Cost Control & Activity-Based Costing',
      'Cash Flow & Working Capital Management',
      'Accounts Receivable (AR) & Accounts Payable (AP) Optimization',
      'Fixed Asset Management & Depreciation Strategy',
      'Project Financing & Feasibility'
    ]
  },
  {
    id: 'domain-3',
    domainNumber: 3,
    title: 'Sharia Finance & Economics',
    category: 'Keuangan & Perbankan',
    shortDesc: 'Prinsip keuangan syariah, akad perbankan, tata kelola syariah, auditing, dan manajemen produk halal.',
    iconName: 'Wallet',
    badge: '10 Sub Topik',
    topics: [
      'Principles of Sharia Economics & Islamic Banking',
      'Sharia Financial Contracts (Akad Mudharabah, Musyarakah, Murabahah, Ijarah)',
      'Sharia Governance & Sharia Compliance',
      'Sharia Supervisory Board (DPS) Role & Responsibilities',
      'Islamic Financial Product Structuring',
      'Sharia Accounting Standards (PSAK Syariah)',
      'Sharia Risk Management & Internal Audit',
      'Zakat, Infaq, Sedekah & Waqf (ZISWAF) Management',
      'Halal Industry Ecosystem & Certification Support',
      'Sharia Microfinance & BMT Management'
    ]
  },
  {
    id: 'domain-4',
    domainNumber: 4,
    title: 'Risk Management, Compliance & Audit',
    category: 'Keuangan & Perbankan',
    shortDesc: 'Kerangka manajemen risiko, audit internal, anti-pencucian uang (APU PPT), Good Corporate Governance, dan investigasi kecurangan.',
    iconName: 'ShieldAlert',
    badge: '11 Sub Topik',
    topics: [
      'Enterprise Risk Management (ERM) Framework (ISO 31000 / COSO)',
      'Operational Risk & Business Continuity Management (BCM)',
      'Credit, Market & Liquidity Risk Oversight',
      'Regulatory Compliance & OJK/BI Regulatory Framework',
      'Anti-Money Laundering & Counter Financing of Terrorism (APU PPT)',
      'Internal Audit Methodology & Risk-Based Auditing (RBA)',
      'Fraud Risk Management & Forensic Audit',
      'Whistleblowing System Implementation',
      'Good Corporate Governance (GCG) Assessment',
      'Compliance Culture & Ethical Leadership',
      'Cyber Risk & Data Privacy Compliance (UU PDP)'
    ]
  },
  {
    id: 'domain-5',
    domainNumber: 5,
    title: 'Human Capital, Leadership & Talent Management',
    category: 'Manajemen & SDM',
    shortDesc: 'Perencanaan SDM, kepemimpinan strategis, manajemen kinerja (KPI/OKR), rekrutmen, dan penilaian kompetensi.',
    iconName: 'UserCheck',
    badge: '11 Sub Topik',
    topics: [
      'Strategic Human Resource Management (SHRM)',
      'Organization Design & Workload Analysis (ABK)',
      'Talent Acquisition & Competency-Based Recruitment',
      'Performance Management System (KPI, OKR & Balance Scorecard)',
      'Compensation, Benefits & Grading System',
      'Talent Management & Succession Planning',
      'Leadership Development & Executive Coaching',
      'Employee Engagement, Industrial Relations & Labor Law',
      'Training Needs Analysis (TNA) & Learning Evaluation (Kirkpatrick)',
      'Assessment Center Assessor Skills',
      'Corporate Culture Transformation'
    ]
  },
  {
    id: 'domain-6',
    domainNumber: 6,
    title: 'Digital Transformation, Data Analytics & IT Governance',
    category: 'Teknologi & Operasional',
    shortDesc: 'Transformasi digital, analisis data bisnis, tata kelola IT (COBIT/ITIL), keamanan siber, dan AI untuk bisnis.',
    iconName: 'Cpu',
    badge: '10 Sub Topik',
    topics: [
      'Digital Transformation Strategy & Roadmap',
      'IT Governance & IT Master Plan (COBIT Framework)',
      'Data Analytics for Business Decision Making',
      'Business Intelligence & Dashboard Reporting (Power BI/Tableau)',
      'Cybersecurity Awareness & Information Security (ISO 27001)',
      'Core Banking & IT Infrastructure Readiness',
      'Artificial Intelligence (AI) & Automation for Corporate Efficiency',
      'Digital Product Management & Agile/Scrum Methodology',
      'Database Management & Data Governance',
      'IT Audit & Systems Control'
    ]
  },
  {
    id: 'domain-7',
    domainNumber: 7,
    title: 'Business Strategy, Innovation & General Management',
    category: 'Manajemen & SDM',
    shortDesc: 'Perencanaan strategis bisnis, inovasi produk, manajemen perubahan, evaluasi investasi, dan kemitraan.',
    iconName: 'Lightbulb',
    badge: '10 Sub Topik',
    topics: [
      'Corporate Strategic Planning & Execution',
      'Business Model Canvas & Innovation Strategy',
      'Change Management & Organizational Agility',
      'Feasibility Study & New Business Development',
      'Competitive Intelligence & Market Analysis',
      'Joint Venture, M&A & Strategic Partnership',
      'Design Thinking for Service Innovation',
      'Crisis Management & Corporate Resilience',
      'Problem Solving & Decision Making (PSDM)',
      'Project Management Professional (PMP) Fundamentals'
    ]
  },
  {
    id: 'domain-8',
    domainNumber: 8,
    title: 'Marketing, Branding & Customer Experience',
    category: 'Manajemen & SDM',
    shortDesc: 'Pemasaran digital, manajemen merek, service excellence, penanganan komplain, dan manajemen hubungan pelanggan (CRM).',
    iconName: 'Megaphone',
    badge: '10 Sub Topik',
    topics: [
      'Integrated Marketing Strategy & Communications',
      'Digital Marketing & Social Media Strategy',
      'Brand Management & Corporate Reputation',
      'Customer Experience (CX) & Journey Mapping',
      'Service Excellence & Frontliner Professionalism',
      'Customer Relationship Management (CRM) System',
      'Consumer Behavior & Market Research',
      'Sales Management & Key Account Management',
      'Public Relations, Media Handling & Crisis PR',
      'Content Creation & Copywriting for Corporate Branding'
    ]
  },
  {
    id: 'domain-9',
    domainNumber: 9,
    title: 'Legal, Corporate Governance & Regulatory Affairs',
    category: 'Keuangan & Perbankan',
    shortDesc: 'Hukum perusahaan, legal drafting, hukum perbankan, mitigasi risiko sengketa, dan kepatuhan regulasi OJK/BI.',
    iconName: 'FileCheck',
    badge: '10 Sub Topik',
    topics: [
      'Corporate Law & Contract Drafting/Review',
      'Banking & Financial Law Compliance',
      'Labor Law & Industrial Relations Legal Resolution',
      'Intellectual Property (IP) Protection & Commercialization',
      'Legal Aspect of Credit & Collateral Execution (Hak Tanggungan, Fidusia)',
      'Dispute Resolution, Negotiation & Alternative Dispute Resolution (ADR)',
      'Regulatory Technology (RegTech) & Legal Audit',
      'BUMD & State-Owned Enterprise (SOE) Legal Governance',
      'Personal Data Protection (PDP) Legal Compliance',
      'Corporate Secretary & GCG Secretarial Practices'
    ]
  },
  {
    id: 'domain-10',
    domainNumber: 10,
    title: 'Procurement, Supply Chain & Asset Management',
    category: 'Teknologi & Operasional',
    shortDesc: 'Pengadaan barang/jasa, manajemen rantai pasok, tata kelola aset, audit vendor, dan manajemen logistik.',
    iconName: 'ShoppingBag',
    badge: '10 Sub Topik',
    topics: [
      'Good Procurement Governance & Vendor Management',
      'Supply Chain Management (SCM) & Strategic Sourcing',
      'Contract Management in Procurement',
      'Fixed Asset Management & Optimization Strategy',
      'Warehouse, Inventory & Logistics Control',
      'Procurement Audit & Anti-Bribery in Procurement (ISO 37001)',
      'E-Procurement Implementation',
      'Negotiation Skills for Procurement Professional',
      'Asset Valuation & Property Management Fundamentals',
      'Sustainable Procurement & Green Supply Chain'
    ]
  },
  {
    id: 'domain-11',
    domainNumber: 11,
    title: 'Soft Skills, Communication & Personal Effectiveness',
    category: 'Manajemen & SDM',
    shortDesc: 'Komunikasi bisnis, public speaking, negosiasi, manajemen waktu, etika profesi, dan emotional intelligence.',
    iconName: 'Award',
    badge: '10 Sub Topik',
    topics: [
      'Effective Business Communication & Presentation Skills',
      'Public Speaking & Executive Presence',
      'Advanced Negotiation & Persuasion Skills',
      'Emotional Intelligence (EQ) for Professional Success',
      'Time Management & Personal Productivity',
      'Critical Thinking & Analytical Problem Solving',
      'Interpersonal Skills & Conflict Resolution',
      'Professional Image, Grooming & Business Etiquette',
      'Stress Management & Work-Life Balance',
      'Cross-Cultural Communication & Diversity in Workplace'
    ]
  },
  {
    id: 'domain-12',
    domainNumber: 12,
    title: 'Event Management, MICE & Facility Operations',
    category: 'Teknologi & Operasional',
    shortDesc: 'Manajemen acara korporat, MICE, protokol, pengelolaan gedung & fasilitas, K3 gedung, dan operasional logistik.',
    iconName: 'Landmark',
    badge: '10 Sub Topik',
    topics: [
      'MICE (Meeting, Incentive, Convention, Exhibition) Planning',
      'Corporate Event Execution & Protocol Management',
      'Building & Facility Operations Management',
      'Occupational Health, Safety & Environment (K3 Gedung)',
      'Hospitality & VIP Guest Handling',
      'Event Budgeting, Financial Control & Sponsorship',
      'AV Technology, Stage Design & Hybrid Event Systems',
      'Vendor Coordination & Event Risk Mitigation',
      'Security, Crowd Control & Emergency Response in Event',
      'Post-Event Evaluation & Impact Measurement'
    ]
  }
];

export const EXPERT_DOMAINS = EXPERT_DOMAINS_DATA;
