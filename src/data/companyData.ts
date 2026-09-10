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
  galleryImages?: FacilityGalleryImage[];
}

export interface LeaderItem {
  id: string;
  name: string;
  title: 'Direktur Utama' | 'Direktur' | 'Komisaris';
  role: string;
  bio: string;
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
  tagline: "Strategic Partner for Training, Consulting, Event Management, and Institutional Support",
  parentOrg: "Yayasan Kesejahteraan Pegawai (YKP) bank bjb",
  affiliateOrg: "Universitas Ekuitas Indonesia",
  ecosystemSubtitle: "Memadukan kekuatan akademik, pengalaman praktisi perbankan, dan ekosistem kelembagaan bank bjb.",
  address: "Gedung Universitas Ekuitas Indonesia, Jl. PHH. Mustofa No. 31, Bandung, Jawa Barat 40124",
  phone: "+62 22 7276323",
  whatsapp: "6282119695761",
  whatsappFormatted: "+62 821-1969-5761",
  email: "sinergiekuitas@gmail.com",
  operatingHours: "Senin – Jumat: 08:00 – 17:00 WIB",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.898687796347!2d107.63666507499622!3d-6.902700993096645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b5ad16111f%3A0x63bc297ad2efbeec!2sUniversitas%20Ekuitas%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  vision: "Menjadi perusahaan yang profesional, berkelanjutan, dan terpercaya dalam pengelolaan layanan pendidikan, pelatihan, konsultasi, serta pengembangan usaha berbasis pemanfaatan aset secara optimal.",
  missions: [
    "Mengelola dan mengembangkan unit usaha secara profesional dan akuntabel.",
    "Mengoptimalkan pemanfaatan aset untuk menghasilkan nilai ekonomi berkelanjutan.",
    "Mengembangkan layanan pelatihan dan konsultasi yang berkualitas.",
    "Membangun kemitraan strategis dengan berbagai institusi.",
    "Mendorong penerapan prinsip Good Corporate Governance (GCG) di seluruh lini bisnis."
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pelatihan-sertifikasi",
    title: "Pelatihan & Pengembangan (Training & Development)",
    shortDesc: "Program peningkatan kemampuan (upskilling/reskilling) dan pengayaan wawasan karyawan secara terstruktur.",
    fullDesc: "Menyelenggarakan program pelatihan dan pengembangan kompetensi terstruktur untuk memastikan kesiapan tenaga kerja sejalan dengan dinamika industri perbankan, bisnis, dan visi jangka panjang organisasi.",
    iconName: "GraduationCap",
    features: [
      "Upskilling & reskilling terstruktur",
      "Kurikulum berbasis industri & perbankan",
      "Instruktur praktisi & akademisi",
      "Sertifikasi kompetensi resmi"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      alt: "Pelatihan & Pengembangan (Training & Development)",
      aspectRatio: "16:9"
    }
  },
  {
    id: "konsultasi-bisnis",
    title: "Konsultasi (Strategic & Organizational Consulting)",
    shortDesc: "Diagnosis mendalam terhadap tantangan organisasi, restrukturisasi proses bisnis, dan pendampingan manajemen.",
    fullDesc: "Menghadirkan solusi konsultasi berbasis data dan inovasi terapan dari gabungan praktisi industri serta akademisi untuk mendukung transformasi dan efisiensi organisasi.",
    iconName: "Briefcase",
    features: [
      "Diagnosis tantangan organisasi",
      "Restrukturisasi proses bisnis",
      "Pendampingan manajemen",
      "Solusi berbasis data & inovasi"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      alt: "Konsultasi (Strategic & Organizational Consulting)",
      aspectRatio: "16:9"
    }
  },
  {
    id: "event-management",
    title: "Manajemen Acara (Event & Conference Management)",
    shortDesc: "Pengelolaan kegiatan korporat (MICE, sertifikasi, workshop, asesmen, seminar nasional) secara end-to-end.",
    fullDesc: "Layanan manajemen acara profesional end-to-end untuk menjamin efisiensi operasional dan standar eksekusi kegiatan korporat yang berkesan.",
    iconName: "Calendar",
    features: [
      "Pengelolaan MICE & workshop",
      "Pelaksanaan sertifikasi & asesmen",
      "Penyelenggaraan seminar nasional",
      "Eksekusi end-to-end profesional"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      alt: "Manajemen Acara (Event & Conference Management)",
      aspectRatio: "16:9"
    }
  },
  {
    id: "fasilitas-pembelajaran",
    title: "Fasilitas Pembelajaran (Learning Facilities Rental & Support)",
    shortDesc: "Penyediaan infrastruktur edukasi modern, ruang multimedia, mini bank, dan lab komputer berkapasitas besar.",
    fullDesc: "Menyediakan sarana dan fasilitas pembelajaran modern yang kondusif, interaktif, dan berstandar industri untuk mendukung berbagai kegiatan pelatihan dan akademis.",
    iconName: "Building2",
    features: [
      "Ruang kelas multimedia modern",
      "Laboratorium bank mini terintegrasi",
      "Lab komputer berkapasitas besar",
      "Lingkungan belajar kondusif"
    ],
    image: {
      url: "./images/facilities/classroom-1.jpeg",
      alt: "Fasilitas Pembelajaran (Learning Facilities Rental & Support)",
      aspectRatio: "16:9"
    }
  },
  {
    id: "merchandise-institusional",
    title: "Merchandise Institusional (Corporate Merchandise & Branding)",
    shortDesc: "Pengadaan perlengkapan kantor, seragam, corporate kit, souvenir premium, dan media promosi.",
    fullDesc: "Layanan pengadaan merchandise dan alat branding korporat untuk memenuhi kebutuhan operasional institusi sekaligus memperkuat citra merek secara profesional.",
    iconName: "ShoppingBag",
    features: [
      "Pengadaan perlengkapan kantor & seragam",
      "Corporate kit & souvenir premium",
      "Media promosi & material branding",
      "Penguatan identitas merek"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      alt: "Merchandise Institusional (Corporate Merchandise & Branding)",
      aspectRatio: "16:9"
    }
  },
  {
    id: "kemitraan-strategis",
    title: "Kemitraan Strategis (Strategic Partnerships & Synergies)",
    shortDesc: "Pembangunan sinergi kolaboratif antarlembaga (BUMN, perbankan, perguruan tinggi, industri swasta).",
    fullDesc: "Membangun kemitraan dan sinergi kolaboratif lintas sektor untuk memperluas ekosistem usaha bersama dan menghasilkan nilai tambah ekonomi yang berkelanjutan.",
    iconName: "Handshake",
    features: [
      "Sinergi BUMN & sektor perbankan",
      "Kolaborasi perguruan tinggi & industri",
      "Pengembangan ekosistem usaha bersama",
      "Nilai tambah ekonomi berkelanjutan"
    ],
    image: {
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      alt: "Kemitraan Strategis (Strategic Partnerships & Synergies)",
      aspectRatio: "16:9"
    }
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "armada-transportasi",
    name: "Armada Transportasi & Shuttle Operasional",
    capacity: "Bus & Shuttle Fleet",
    description: "Fasilitas bus dan shuttle armada operasional terawat untuk mobilitas, penjemputan peserta pelatihan luar kota, dan field trip edukasi.",
    highlights: ["Armada bus terawat", "Shuttle penjemputan peserta", "Dukungan field trip edukasi", "Pengemudi berpengalaman"],
    image: {
      url: "./images/facilities/transportasi.jpeg",
      alt: "Armada Transportasi & Shuttle Operasional",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/transportasi.jpeg", caption: "Armada Transportasi & Shuttle Operasional" }
    ]
  },
  {
    id: "meeting-room",
    name: "Meeting Room & Executive Discussion Suite",
    capacity: "15 - 30 Orang",
    description: "Ruang rapat eksklusif ber-AC dengan layar proyektor, papan presentasi, dan tata letak boardroom untuk diskusi strategis atau FGD.",
    highlights: ["Layout Boardroom & FGD", "Layar Proyektor & TV Screen", "Pendingin Ruangan (AC)", "Koneksi Wi-Fi Berkecepatan Tinggi"],
    image: {
      url: "./images/facilities/meeting-room.jpeg",
      alt: "Meeting Room & Executive Discussion Suite",
      aspectRatio: "4:3"
    },
    galleryImages: [
      { url: "./images/facilities/meeting-room.jpeg", caption: "Meeting Room & Executive Discussion Suite" }
    ]
  },
  {
    id: "classroom-multimedia-1",
    name: "Classroom Multimedia Tipe 1",
    capacity: "40 - 60 Orang",
    description: "Ruang kelas teori modern berkapasitas fleksibel, dilengkapi podium, sound system terintegrasi, proyektor LCD, dan pencahayaan optimal.",
    highlights: ["Podium & Integrated Sound System", "LCD Projector & Screen", "Pencahayaan & Ventilasi Optimal", "Meja-Kursi Ergonomis"],
    image: {
      url: "./images/facilities/classroom-1.jpeg",
      alt: "Classroom Multimedia Tipe 1",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/classroom-1.jpeg", caption: "Classroom Multimedia Tipe 1" }
    ]
  },
  {
    id: "classroom-multimedia-2",
    name: "Classroom Multimedia Tipe 2",
    capacity: "40 - 60 Orang",
    description: "Ruang kelas multimedia sekunder berfasilitas lengkap untuk sesi pelatihan paralel atau diskusi kelompok interaktif.",
    highlights: ["Fasilitas Multimedia Lengkap", "Kapasitas Fleksibel", "AC & Sound System", "Papan Tulis & Flipchart"],
    image: {
      url: "./images/facilities/classroom-2.jpeg",
      alt: "Classroom Multimedia Tipe 2",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/classroom-2.jpeg", caption: "Classroom Multimedia Tipe 2" }
    ]
  },
  {
    id: "lab-komputer-1",
    name: "Laboratorium Komputer & Sistem Informasi Tipe 1",
    capacity: "30 - 50 Unit PC",
    description: "Laboratorium komputer dengan puluhan workstation PC berspesifikasi tinggi, LAN berkecepatan tinggi, dan lisensi perangkat lunak perbankan/analitik.",
    highlights: ["Workstation PC Spesifikasi Tinggi", "Koneksi LAN & Internet Cepat", "Software Analytics & Banking", "AC & LCD Projector"],
    image: {
      url: "./images/facilities/lab-komputer-1.jpeg",
      alt: "Laboratorium Komputer & Sistem Informasi Tipe 1",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/lab-komputer-1.jpeg", caption: "Laboratorium Komputer Tipe 1" }
    ]
  },
  {
    id: "lab-komputer-2",
    name: "Laboratorium Komputer & Sistem Informasi Tipe 2",
    capacity: "30 - 50 Unit PC",
    description: "Laboratorium komputer sekunder pendukung pelatihan aplikasi bisnis, pengolahan data, dan simulasi IT perbankan.",
    highlights: ["Puluhan Unit PC Modern", "Jaringan Lokal LAN & Internet", "Perangkat Lunak Praktik Komputer", "Sistem Keamanan Data"],
    image: {
      url: "./images/facilities/lab-komputer-2.jpeg",
      alt: "Laboratorium Komputer & Sistem Informasi Tipe 2",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/lab-komputer-2.jpeg", caption: "Laboratorium Komputer Tipe 2" }
    ]
  },
  {
    id: "lab-bank-mini",
    name: "Laboratorium Bank Mini (Simulation Banking Counter)",
    capacity: "30 - 40 Orang",
    description: "Ruang simulasi otentik dengan layout counter teller, customer service desk, mesin antrean, dan sistem perbankan nyata untuk sertifikasi frontliner.",
    highlights: ["Counter Teller & Customer Service Desk", "Mesin Antrean & Display Transaksi", "Software Core Banking Simulation", "CCTV & Assessment Area"],
    image: {
      url: "./images/facilities/lab-bank-mini.jpeg",
      alt: "Laboratorium Bank Mini",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/lab-bank-mini.jpeg", caption: "Laboratorium Bank Mini (Simulation Banking Counter)" }
    ]
  },
  {
    id: "auditorium-aula",
    name: "Auditorium & Aula Utama",
    capacity: "300 - 500 Orang",
    description: "Hall auditorium megah berdaya tampung ratusan peserta dengan panggung utama, akustik ruangan standar konser, dan fasilitas pameran.",
    highlights: ["Panggung Utama & Display Screen", "Akustik Ruangan & Sound System", "Ruang Transit VIP", "Aksesibilitas & Area Pameran"],
    image: {
      url: "./images/facilities/aula-1.jpeg",
      alt: "Auditorium & Aula Utama",
      aspectRatio: "16:9"
    },
    galleryImages: [
      { url: "./images/facilities/aula-1.jpeg", caption: "Auditorium & Aula Utama Tipe 1" },
      { url: "./images/facilities/aula-2.jpeg", caption: "Auditorium & Aula Utama Tipe 2" }
    ]
  }
];

export const PORTFOLIO_PROJECT: PortfolioProject = {
  id: "abdi-bjb-frontliner",
  title: "Program Pembelajaran Abdi bjb Frontliner (Customer Service & Teller)",
  client: "bank bjb & YKP bank bjb",
  category: "Frontliner Learning & Certification",
  impactMetrics: [
    { label: "Peserta Terlatih", value: "500+" },
    { label: "Tingkat Kepuasan", value: "98.4%" },
    { label: "Laboratorium Simulasi", value: "Mini Bank" },
    { label: "Dukungan End-to-End", value: "Akomodasi & Transp." }
  ],
  summary: "Penyelenggaraan program pelatihan dan sertifikasi intensif bagi frontliner (Customer Service & Teller) bank bjb yang didukung penuh oleh fasilitas laboratorium mini bank dan sarana Universitas Ekuitas Indonesia.",
  details: [
    "Seremoni pembukaan dan pembekalan materi intensif product knowledge perbankan.",
    "Simulasi transaksi real-time teller dan penanganan nasabah di Laboratorium Bank Mini.",
    "Pendalaman standar Service Excellence dan modul komunikasi profesional frontliner.",
    "Praktik roleplay, complaint handling, dan asesmen kelayakan kompetensi individual.",
    "Pengujian literasi digital dan pengoperasian software transaksi perbankan di Lab Komputer.",
    "Penutupan program, evaluasi kelulusan akhir, dan penyerahan sertifikat kompetensi."
  ],
  image: {
    url: "./images/portfolio/abdi-bjb-1.jpeg",
    fallbackUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
    alt: "Program Pembelajaran Abdi bjb Frontliner (Customer Service & Teller)",
    aspectRatio: "16:9"
  },
  galleryImages: [
    {
      url: "./images/portfolio/abdi-bjb-1.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
      caption: "Pembukaan & Serah Terima Program Pembelajaran Abdi bjb Frontliner",
      tag: "Ceremonial & Opening"
    },
    {
      url: "./images/portfolio/abdi-bjb-2.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80",
      caption: "Simulasi Counter Teller & CS di Lab Bank Mini",
      tag: "Mini Bank Simulation"
    },
    {
      url: "./images/portfolio/abdi-bjb-3.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      caption: "Suasana Kelas Pembelajaran Frontliner",
      tag: "Classroom Theory"
    },
    {
      url: "./images/portfolio/abdi-bjb-4.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      caption: "Sesi Roleplay & Asesmen Customer Handling",
      tag: "Roleplay & Assessment"
    },
    {
      url: "./images/portfolio/abdi-bjb-5.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      caption: "Praktik Laboratorium Komputer & Sistem Perbankan",
      tag: "Digital Lab Practice"
    },
    {
      url: "./images/portfolio/abdi-bjb-6.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      caption: "Penutupan Program & Penyerahan Sertifikat Kompetensi",
      tag: "Closing & Certification"
    }
  ]
};

export const EXPERT_DOMAINS_DATA: ExpertDomain[] = [
  {
    id: "domain-1",
    title: "Banking & Financial Services",
    category: "Keuangan & Perbankan",
    shortDesc: "Manajemen operasional perbankan, analisis kredit, strategi treasury, serta tata kelola lembaga keuangan.",
    topics: [
      "Banking Management & Operations",
      "Credit & Financing Analysis",
      "Funding & Treasury Strategies",
      "Branch Management & Leadership",
      "Strategic Banking",
      "Conventional & Sharia Banking Principles",
      "Banking Digitalization & Core Systems",
      "Payment System & Banking Technology (QRIS, BI-FAST, Open API)",
      "Credit Risk & Non-Performing Loan (NPL) Recovery Management",
      "Banking Business Planning (RBB)",
      "Financial Institution Governance"
    ],
    iconName: "Landmark",
    badge: "Perbankan"
  },
  {
    id: "domain-2",
    title: "Accounting, Finance & Taxation",
    category: "Keuangan & Perbankan",
    shortDesc: "Penyusunan laporan keuangan, manajemen modal kerja, penganggaran, hingga strategi perpajakan badan.",
    topics: [
      "Financial Accounting & Reporting",
      "Financial Statement Preparation & Financial Ratio Analysis",
      "Corporate Finance & Capital Budgeting",
      "Financial Management for Decision Makers",
      "Finance for Non-Finance Managers",
      "Budgeting, Cost Control & Activity-Based Costing",
      "Cash Flow & Working Capital Management",
      "Accounts Receivable (AR) & Accounts Payable (AP) Optimization",
      "Fixed Asset Management & Depreciation Strategy",
      "Project Financing & Feasibility Analysis",
      "Standar Akuntansi Keuangan (PSAK / IFRS) & Corporate Taxation"
    ],
    iconName: "Calculator",
    badge: "Akuntansi"
  },
  {
    id: "domain-3",
    title: "Audit, Internal Control & Governance",
    category: "Keuangan & Perbankan",
    shortDesc: "Kerangka audit internal modern, pengawasan internal COSO, pencegahan kecurangan, dan ISO management system.",
    topics: [
      "Modern Internal Audit Framework",
      "Internal Control Systems (COSO Framework)",
      "Financial Audit & Operational Audit",
      "Audit Committee Best Practices & Reporting",
      "Fraud Prevention, Detection & Forensic Investigation",
      "Good Corporate Governance (GCG) Implementation & Scoring",
      "Governance, Risk & Compliance (GRC) Integration",
      "Corporate Governance Policy Authoring",
      "Standard Operating Procedure (SOP) Development & Business Process Mapping",
      "ISO Management System Certification (ISO 9001, ISO 27001, ISO 37001)",
      "COBIT & IT Governance Frameworks"
    ],
    iconName: "FileCheck",
    badge: "Audit & GCG"
  },
  {
    id: "domain-4",
    title: "Risk Management & Compliance",
    category: "Keuangan & Perbankan",
    shortDesc: "Penerapan kerangka manajemen risiko ERM ISO 31000, pemenuhan regulasi OJK & BI, serta mitigasi risiko.",
    topics: [
      "Enterprise Risk Management (ERM - ISO 31000)",
      "Banking Risk Management (Regulasi OJK & Bank Indonesia)",
      "Credit Risk Modeling & Scoring",
      "Operational Risk & Business Continuity Planning (BCP)",
      "Market & Liquidity Risk Analysis",
      "Sharia Banking Risk Management",
      "Compliance Management System",
      "Anti-Money Laundering (AML) & Counter Financing of Terrorism (APU-PPT)",
      "Risk Mitigation & Disaster Recovery Planning",
      "Corporate Risk Appetite & Tolerance Formulation"
    ],
    iconName: "ShieldAlert",
    badge: "Manajemen Risiko"
  },
  {
    id: "domain-5",
    title: "Strategic Management & Business Development",
    category: "Manajemen & SDM",
    shortDesc: "Perencanaan strategis perusahaan, studi kelayakan, rekayasa ulang proses bisnis, dan Balanced Scorecard.",
    topics: [
      "Corporate Strategic Planning & Roadmapping",
      "Business Planning & Feasibility Studies",
      "Business Process Re-engineering (BPR) & Management",
      "Business Model Canvas (BMC) & Value Proposition Design",
      "Comprehensive SWOT, PESTLE & Industry Analysis",
      "Organizational Development (OD) & Change Management",
      "Balanced Scorecard & Key Performance Indicators (KPI) Cascading",
      "Corporate Performance Management Systems",
      "Strategic Sourcing, Procurement & Vendor Management"
    ],
    iconName: "Target",
    badge: "Strategi Bisnis"
  },
  {
    id: "domain-6",
    title: "Human Capital & Leadership",
    category: "Manajemen & SDM",
    shortDesc: "Pengembangan modal manusia, kepemimpinan transformasional, analisis beban kerja, hingga struktur penggajian 3P.",
    topics: [
      "Strategic Human Resource Management (SHRM)",
      "Human Capital Development Framework",
      "Transformational Leadership & Supervisory Skills",
      "Strategic Manpower Planning (MPP)",
      "Workload Analysis (WLA / Analisis Beban Kerja)",
      "Training Needs Analysis (TNA) & Learning Journey Design",
      "Job Analysis, Job Description & Job Evaluation",
      "Job Grading & Salary Structure (3P: Pay for Position, Person, Performance)",
      "Competency Dictionary & Assessment Center",
      "Performance Appraisal & 360-Degree Feedback",
      "Organizational Structure & Career Path Development"
    ],
    iconName: "UserCheck",
    badge: "SDM & Kepemimpinan"
  },
  {
    id: "domain-7",
    title: "Marketing, Sales & Customer Experience",
    category: "Manajemen & SDM",
    shortDesc: "Manajemen pemasaran strategis, digital marketing, service excellence 5S, dan pemetaan customer journey.",
    topics: [
      "Strategic Marketing Management",
      "Integrated Marketing Communication (IMC)",
      "Digital Marketing & Growth Hacking",
      "Social Media Strategy & Brand Activation",
      "Content Marketing & Copywriting for Business",
      "Brand Architecture & Corporate Identity Management",
      "Sales Pipeline & Territory Management",
      "Customer Relationship Management (CRM) Architecture",
      "Service Excellence & 5S Culture Implementation",
      "Professional Complaint Handling & De-escalation",
      "End-to-End Customer Experience (CX) Journey Mapping",
      "Creative Promotional Campaigns & Digital Advertising"
    ],
    iconName: "Megaphone",
    badge: "Pemasaran & Layanan"
  },
  {
    id: "domain-8",
    title: "Entrepreneurship & MSME Development",
    category: "Manajemen & SDM",
    shortDesc: "Pendampingan inkubasi bisnis, penguatan modal usaha UMKM, sertifikasi halal, dan onboarding e-commerce.",
    topics: [
      "MSME Scale-Up & Business Mentoring",
      "Sustainable Business Model Iteration",
      "Product Innovation, Packaging & Value Creation",
      "Financial Literacy & Cash Flow Bookkeeping for Small Businesses",
      "Digitalization & E-commerce Onboarding for MSMEs",
      "Halal Product Assurance System & Halal Certification Assistance",
      "Business Incubation Program Management",
      "Entrepreneurial Mindset & Business Idea Validation",
      "Access to Capital & Microfinance Linkage",
      "Micro Enterprise Management & Cooperatives"
    ],
    iconName: "ShoppingBag",
    badge: "Kewirausahaan & UMKM"
  },
  {
    id: "domain-9",
    title: "Digital Technology & Information Systems",
    category: "Teknologi & Operasional",
    shortDesc: "Tata kelola IT, sistem informasi enterprise (ERP/MIS), keamanan informasi ISO 27001, data analytics, dan AI terapan.",
    topics: [
      "Enterprise Information Systems (ERP & MIS)",
      "IT Governance & Strategy (COBIT / ITIL)",
      "Information Security Management System (ISO 27001 & Cyber Security)",
      "Database Management Systems (SQL & Cloud Database)",
      "Business Intelligence, Data Analytics & Reporting",
      "Data Visualization & Interactive Executive Dashboards (Power BI / Tableau)",
      "Machine Learning & Practical Predictive Modeling",
      "Applied Artificial Intelligence (AI) for Corporate Productivity",
      "Enterprise Digital Transformation Strategy",
      "Microsoft Office Specialist (Advanced Excel, VBA, PowerPoint)",
      "Digital Workplace Tools & Remote Collaboration Suites",
      "Technology-Based Corporate Solutions"
    ],
    iconName: "Cpu",
    badge: "Teknologi Informasi"
  },
  {
    id: "domain-10",
    title: "Capital Market, Fintech & Financial Literacy",
    category: "Keuangan & Perbankan",
    shortDesc: "Pasar modal Indonesia, manajemen investasi reksadana, analisis ekuitas, fintech, dan literasi keuangan korporat.",
    topics: [
      "Indonesia Capital Market Architecture & Instruments",
      "Investment Management & Mutual Funds (Reksadana)",
      "Portfolio Management & Asset Allocation",
      "Financial Technology (Fintech), P2P Lending & Open Banking",
      "Comprehensive Personal & Corporate Financial Literacy",
      "Behavioral Finance & Investment Psychology",
      "Equity Research & Investment Valuation",
      "Corporate Action & IPO Readiness",
      "Sharia Financial Planning & Sukuk Instruments"
    ],
    iconName: "Wallet",
    badge: "Pasar Modal & Fintech"
  },
  {
    id: "domain-11",
    title: "Sustainability, ESG & Sustainable Business",
    category: "Manajemen & SDM",
    shortDesc: "Integrasi prinsip ESG, penyusunan laporan keberlanjutan GRI & POJK 51, green finance, dan strategi bisnis hijau.",
    topics: [
      "Environmental, Social & Governance (ESG) Core Integration",
      "Sustainability Reporting Standards (GRI Standards & POJK 51)",
      "Green Finance & Sustainable Banking Principles",
      "ESG Risk Assessment & Due Diligence",
      "Sustainable Corporate Business Strategies",
      "Sustainable Development Goals (SDGs) Action Alignment",
      "Circular Economy Implementation & Waste Reduction",
      "Corporate Social Responsibility (CSR) & Social Return on Investment (SROI)",
      "Sustainable Supply Chain & Green Procurement"
    ],
    iconName: "Award",
    badge: "Keberlanjutan & ESG"
  },
  {
    id: "domain-12",
    title: "Research, Academic & Professional Development",
    category: "Teknologi & Operasional",
    shortDesc: "Metodologi riset kualitatif & kuantitatif, analisis data SPSS/Python, publikasi jurnal, dan Training for Trainers (TFT).",
    topics: [
      "Advanced Quantitative & Qualitative Research Methodologies",
      "Applied Business & Economic Research",
      "Market Research, Consumer Insights & Survey Design",
      "Statistical Data Analysis (SPSS, AMOS, PLS-SEM, EViews, Python/R)",
      "Academic Writing & Policy Brief Drafting",
      "Reputable Scientific Journal Publication (Scopus / SINTA)",
      "Training for Trainers (TFT) Bersertifikasi BNSP",
      "Instructional Design, Curriculum & Modular Training Development",
      "Continuing Professional Competency Programs"
    ],
    iconName: "Lightbulb",
    badge: "Riset & Pengembangan"
  }
];

export const EXPERT_DOMAINS = EXPERT_DOMAINS_DATA;

export const LEADERSHIP_MEMBERS: LeaderItem[] = [
  {
    id: "muhammad-gunawan",
    name: "Muhammad Gunawan",
    title: "Komisaris",
    role: "Pengawasan & Arahan Tata Kelola (GCG)",
    bio: "Melaksanakan fungsi pengawasan serta memberikan arahan dan masukan strategis terhadap kebijakan dan pengelolaan perusahaan. Berperan dalam memastikan kegiatan perusahaan dilaksanakan dengan prinsip tata kelola yang baik (Good Corporate Governance), profesional, transparan, serta tetap berorientasi pada pencapaian tujuan dan keberlanjutan perusahaan.",
    image: {
      url: "./images/team/muhammad-gunawan.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      alt: "Muhammad Gunawan — Komisaris"
    }
  },
  {
    id: "deni-hamdani",
    name: "Deni Hamdani, SE.M.Si",
    title: "Direktur Utama",
    role: "Arah Strategis & Sinergi Kemitraan",
    bio: "Memimpin arah strategis perusahaan serta bertanggung jawab dalam memastikan seluruh kegiatan operasional dan pengembangan bisnis berjalan selaras dengan visi perusahaan. Berperan dalam pengambilan keputusan strategis, penguatan tata kelola, serta membangun sinergi dan kerja sama dengan berbagai mitra untuk mendukung pertumbuhan perusahaan yang berkelanjutan.",
    quote: "Sinergi antara kekuatan akademik Universitas Ekuitas Indonesia dan pengalaman praktis ekosistem bank bjb adalah fondasi utama kami dalam menghadirkan solusi SDM dan kelembagaan yang solutif, akuntabel, dan berdampak nyata.",
    image: {
      url: "./images/team/deni-hamdani.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      alt: "Deni Hamdani, SE.M.Si — Direktur Utama"
    }
  },
  {
    id: "gatot-iwan",
    name: "Dr. Gatot Iwan Kurniawan, SE., MBA",
    title: "Direktur",
    role: "Perencanaan Strategis & Inovasi Layanan",
    bio: "Berperan dalam mendukung perencanaan dan pelaksanaan strategi perusahaan, khususnya dalam pengembangan bisnis, inovasi, serta peningkatan kualitas layanan. Turut mengawal pelaksanaan program perusahaan agar berjalan efektif, adaptif terhadap perkembangan industri, dan mampu memberikan nilai tambah bagi mitra maupun pelanggan.",
    image: {
      url: "./images/team/gatot-iwan.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      alt: "Dr. Gatot Iwan Kurniawan, SE., MBA — Direktur"
    }
  }
];

export const LEADERSHIP_DATA = LEADERSHIP_MEMBERS[1];

export const VISION_MISSION_DATA = {
  vision: COMPANY_INFO.vision,
  missions: COMPANY_INFO.missions,
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
