export const COMPANY_INFO = {
  name: 'PT Sinergi Ekuitas Indonesia',
  shortName: 'PT Sinergi',
  tagline: 'Strategic Partner for Training, Consulting, Event Management, and Institutional Support',
  shortTagline: 'Mitra Strategis Pelatihan, Konsultasi, Event & Pengelolaan Fasilitas',
  parentOrg: 'Yayasan Kesejahteraan Pegawai (YKP) bank bjb',
  affiliateOrg: 'Universitas Ekuitas Indonesia',
  ecosystemSubtitle: 'Memadukan kekuatan riset akademik Universitas Ekuitas Indonesia, pengalaman praktisi perbankan, dan tata kelola YKP bank bjb.',
  companySummary: 'PT Sinergi Ekuitas Indonesia merupakan anak perusahaan Yayasan Kesejahteraan Pegawai (YKP) bank bjb yang bergerak di bidang pelatihan profesional, konsultasi, pengembangan kompetensi sumber daya manusia, penyelenggaraan kegiatan, serta layanan pendukung institusional.',
  ecosystemSummary: 'Sebagai bagian dari ekosistem yang terintegrasi dengan Universitas Ekuitas Indonesia, PT Sinergi Ekuitas Indonesia memadukan kekuatan akademik, pengalaman praktisi profesional, jaringan kelembagaan, serta fasilitas pembelajaran yang representatif untuk menghadirkan solusi yang relevan bagi kebutuhan institusi, dunia usaha, dan masyarakat.',
  expertNetworkSummary: 'Kami didukung oleh jaringan expert, trainer, akademisi, praktisi, konsultan, dan profesional berpengalaman dari berbagai bidang industri.',
  address: 'Jl. PHH. Mustofa No. 31, Bandung',
  officeLocation: 'Gedung Kampus Universitas Ekuitas Indonesia',
  city: 'Bandung, Jawa Barat',
  postalCode: '40124',
  operatingHours: 'Senin – Jumat: 08:30 – 16:30 WIB | Sabtu & Minggu: Tutup',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.898687796347!2d107.63666507499622!3d-6.902700993096645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b5ad16111f%3A0x63bc297ad2efbeec!2sUniversitas%20Ekuitas%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  phone: '+62821-1969-5761',
  phoneDisplay: '+62821-1969-5761',
  whatsapp: '6282119695761',
  whatsappFormatted: '+62821-1969-5761',
  whatsappLink: 'https://wa.me/6282119695761',
  email: 'sinergiekuitas@gmail.com',
  brochureUrl: `${import.meta.env.BASE_URL}docs/Company-Profile-PT-Sinergi.pdf`,
  logoUrl: `${import.meta.env.BASE_URL}logo.jpeg`,
  vision: 'Menjadi perusahaan yang profesional, berkelanjutan, dan terpercaya dalam pengelolaan layanan pendidikan, pelatihan, konsultasi, serta pengembangan usaha berbasis pemanfaatan aset secara optimal.',
  missions: [
    'Mengelola dan mengembangkan unit usaha secara profesional dan akuntabel.',
    'Mengoptimalkan pemanfaatan aset untuk menghasilkan nilai ekonomi berkelanjutan.',
    'Mengembangkan layanan pelatihan dan konsultasi yang berkualitas.',
    'Membangun kemitraan strategis dengan berbagai institusi.',
    'Mendorong penerapan Good Corporate Governance.'
  ]
} as const;

export interface LeaderItem {
  id: string;
  name: string;
  title: 'Direktur Utama' | 'Direktur' | 'Komisaris';
  role: string;
  bio: string;
  rolesList: string[];
  image: { url: string; alt: string };
}

export const LEADERSHIP_MEMBERS: LeaderItem[] = [
  {
    id: 'deni-hamdani',
    name: 'Deni Hamdani, SE.M.Si',
    title: 'Direktur Utama',
    role: 'Pimpinan Eksekutif',
    bio: 'Memimpin arah strategis dan operasional perusahaan, mengawal pelaksanaan kegiatan agar selaras dengan visi dan misi, serta membangun kerja sama dengan mitra untuk mendukung pertumbuhan perusahaan.',
    rolesList: ['Memimpin arah strategis dan operasional PT Sinergi Ekuitas Indonesia.', 'Memastikan kegiatan dan pengembangan bisnis selaras dengan visi dan misi perusahaan.', 'Mengawal penguatan tata kelola dan pengambilan keputusan strategis.', 'Membangun sinergi dan kemitraan dengan berbagai institusi.'],
    image: { url: './images/team/deni-hamdani.jpeg', alt: 'Deni Hamdani, SE.M.Si, Direktur Utama' }
  },
  {
    id: 'gatot-iwan',
    name: 'Dr. Gatot Iwan Kurniawan, SE., MBA',
    title: 'Direktur',
    role: 'Pengembangan & Inovasi',
    bio: 'Mendukung perencanaan dan pelaksanaan strategi, pengembangan usaha, serta peningkatan mutu layanan. Turut mengawal pelaksanaan program dan kerja sama perusahaan.',
    rolesList: ['Mendukung perencanaan dan pelaksanaan strategi pengembangan usaha.', 'Mendorong inovasi dan peningkatan mutu layanan.', 'Mengawal efektivitas pelaksanaan program perusahaan.', 'Mengembangkan layanan yang relevan dengan kebutuhan mitra.'],
    image: { url: './images/team/gatot-iwan.jpeg', alt: 'Dr. Gatot Iwan Kurniawan, SE., MBA, Direktur' }
  },
  {
    id: 'muhammad-gunawan',
    name: 'Muhammad Gunawan',
    title: 'Komisaris',
    role: 'Pengawasan & Tata Kelola',
    bio: 'Melaksanakan fungsi pengawasan dan memberikan arahan terhadap kebijakan serta pengelolaan perusahaan. Peran ini membantu menjaga akuntabilitas dan penerapan tata kelola perusahaan.',
    rolesList: ['Melaksanakan fungsi pengawasan atas pengelolaan perusahaan.', 'Memberikan arahan dan masukan terhadap kebijakan perusahaan.', 'Mengawal akuntabilitas dan penerapan tata kelola yang baik.'],
    image: { url: './images/team/muhammad-gunawan.jpeg', alt: 'Muhammad Gunawan, Komisaris' }
  }
];

export const VISION_MISSION_DATA = {
  vision: COMPANY_INFO.vision,
  missions: COMPANY_INFO.missions,
  values: [
    { letter: 'S', word: 'Sinergi', description: 'Membangun kolaborasi harmonis dan saling menguntungkan antar seluruh pemangku kepentingan.' },
    { letter: 'I', word: 'Integritas', description: 'Menjunjung tinggi kejujuran, etika profesi, dan keterbukaan dalam setiap aktivitas operasional.' },
    { letter: 'N', word: 'Nawaitu', description: 'Didasari niat tulus dan komitmen ibadah untuk memberikan kemanfaatan terbaik bagi masyarakat.' },
    { letter: 'E', word: 'Efisien', description: 'Mengoptimalkan daya guna sumber daya dan aset untuk hasil kinerja yang maksimal dan berkelanjutan.' },
    { letter: 'R', word: 'Responsif', description: 'Cepat dan tanggap melayani serta beradaptasi terhadap dinamika dan kebutuhan mitra bisnis.' },
    { letter: 'G', word: 'Gigih', description: 'Pantang menyerah dan berorientasi pada pencapaian kualitas serta standar keunggulan terbaik.' },
    { letter: 'I', word: 'Inovatif', description: 'Menciptakan terobosan dan solusi kreatif yang relevan dengan perkembangan industri terkini.' }
  ]
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string[];
  scopeOfWork: string[];
  deliveryMethods: string[];
  facilities: string[];
  image: { url: string; alt: string };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'training',
    number: '01',
    title: 'Pelatihan & Pengembangan SDM Terpadu',
    englishTitle: 'Human Capital & Corporate Training',
    shortDesc: 'Program pembelajaran dan pengembangan kompetensi kerja bagi industri perbankan, BUMN/BUMD, instansi publik, dan perusahaan korporat.',
    fullDesc: 'Pembelajaran dapat memadukan materi teknis dan pengembangan perilaku sesuai kebutuhan organisasi. Program yang pernah dipublikasikan mencakup pembelajaran frontliner, pelatihan operasional perbankan, analisis kredit, workshop in-house, dan kelas pengembangan kepemimpinan.',
    targetAudience: ['Industri perbankan dan lembaga keuangan', 'BUMN dan BUMD', 'Instansi pemerintah dan publik', 'Perusahaan korporat swasta'],
    scopeOfWork: ['Program pembelajaran frontliner: customer service, teller, back office, dan service excellence', 'Pelatihan teknis operasional perbankan dan analisis kelayakan kredit', 'Workshop akuntansi, perpajakan, dan pelaporan keuangan', 'Pembelajaran manajemen risiko, kepatuhan, dan audit internal', 'Perancangan program in-house learning sesuai kebutuhan organisasi', 'Kelas pengembangan kepemimpinan dan manajerial'],
    deliveryMethods: ['In-house training', 'Public workshop', 'Bootcamp', 'Executive masterclass'],
    facilities: ['Ruang kelas multimedia', 'Laboratorium bank mini', 'Laboratorium komputer'],
    image: { url: './images/portfolio/abdi-bjb-2.jpeg', alt: 'Program pelatihan dan pengembangan sumber daya manusia' }
  },
  {
    id: 'consulting',
    number: '02',
    title: 'Konsultasi Manajemen & Layanan Institusional',
    englishTitle: 'Management Consulting & Institutional Advisory',
    shortDesc: 'Pendampingan organisasi untuk perencanaan, perbaikan proses, tata kelola, dan pengembangan usaha.',
    fullDesc: 'Konsultasi dapat membantu institusi meninjau rencana bisnis, proses kerja, kebijakan internal, dan kebutuhan pengembangan organisasi. Cakupan ditentukan bersama berdasarkan konteks dan tujuan mitra.',
    targetAudience: ['Pimpinan dan pengelola perusahaan', 'Divisi perencanaan strategis', 'Divisi kepatuhan dan manajemen risiko', 'BUMN, BUMD, dan lembaga jasa keuangan'],
    scopeOfWork: ['Penyusunan rencana bisnis dan rencana jangka panjang perusahaan', 'Pemetaan proses bisnis dan penyusunan prosedur operasional', 'Kajian tata kelola dan manajemen risiko', 'Studi kelayakan dan kajian investasi', 'Pengembangan indikator kinerja dan pengelolaan sumber daya manusia'],
    deliveryMethods: ['Kajian dan asesmen', 'Lokakarya', 'Diskusi kelompok', 'Pendampingan institusional'],
    facilities: ['Ruang rapat dan diskusi', 'Jaringan tenaga ahli'],
    image: { url: './images/portfolio/abdi-bjb-6.jpeg', alt: 'Kegiatan konsultasi manajemen dan layanan institusional' }
  },
  {
    id: 'assessment',
    number: '03',
    title: 'Asesmen, Sertifikasi & Uji Kompetensi',
    englishTitle: 'Competency Assessment & CBT',
    shortDesc: 'Layanan asesmen untuk kebutuhan rekrutmen, pemetaan kompetensi, pengembangan karier, dan evaluasi.',
    fullDesc: 'Metode asesmen dapat disusun menurut tujuan dan profil peserta, dengan dukungan ruang pembelajaran dan laboratorium komputer yang tersedia di fasilitas kampus.',
    targetAudience: ['Pengelola sumber daya manusia', 'Panitia rekrutmen dan seleksi', 'Lembaga sertifikasi profesi', 'Instansi pemerintah dan perusahaan'],
    scopeOfWork: ['Seleksi calon pegawai berbasis komputer', 'Psikotes dan pemetaan profil kerja', 'Observasi perilaku, diskusi kelompok, dan wawancara kompetensi', 'Asesmen kompetensi frontliner dan simulasi layanan', 'Pelaksanaan uji sertifikasi bersama lembaga terkait'],
    deliveryMethods: ['Tes berbasis komputer', 'Wawancara kompetensi', 'Simulasi dan roleplay', 'Observasi kelompok'],
    facilities: ['Laboratorium komputer', 'Ruang kelas dan diskusi'],
    image: { url: './images/portfolio/abdi-bjb-3.jpeg', alt: 'Sesi asesmen dan ujian berbasis komputer' }
  },
  {
    id: 'events',
    number: '04',
    title: 'Penyelenggaraan Acara Korporat & MICE',
    englishTitle: 'Corporate Events & MICE',
    shortDesc: 'Dukungan penyelenggaraan konferensi, seminar, rapat kerja, lokakarya, dan kegiatan institusional.',
    fullDesc: 'Tim dapat mendukung perencanaan dan pelaksanaan kegiatan korporat, termasuk pengelolaan peserta, kebutuhan lokasi, konsumsi, mobilisasi, dan perlengkapan acara sesuai ruang lingkup yang disepakati.',
    targetAudience: ['Sekretariat perusahaan dan tim protokoler', 'Panitia rapat kerja dan kegiatan korporat', 'Asosiasi profesi dan komunitas bisnis', 'Institusi pendidikan dan instansi kedinasan'],
    scopeOfWork: ['Penyelenggaraan konferensi, seminar, dan simposium', 'Rapat kerja, diskusi kelompok, dan gathering institusi', 'Manajemen akomodasi, konsumsi, dan mobilisasi peserta', 'Dukungan acara hybrid dan media livestreaming', 'Pengelolaan registrasi dan kebutuhan hospitality'],
    deliveryMethods: ['Pertemuan tatap muka', 'Kegiatan hybrid', 'Pengelolaan acara sesuai kebutuhan mitra'],
    facilities: ['Aula dan ruang seminar', 'Ruang rapat', 'Armada transportasi'],
    image: { url: './images/portfolio/abdi-bjb-4.jpeg', alt: 'Penyelenggaraan acara dan kegiatan institusional' }
  },
  {
    id: 'facilities',
    number: '05',
    title: 'Pengelolaan & Optimalisasi Fasilitas',
    englishTitle: 'Learning Facilities & Campus Assets',
    shortDesc: 'Pemanfaatan sarana pembelajaran dan pertemuan untuk pelatihan, ujian, rapat, dan kegiatan institusional.',
    fullDesc: 'Fasilitas yang ditampilkan meliputi ruang kelas, laboratorium komputer, laboratorium bank mini, ruang rapat, aula, dan dukungan transportasi. Pengaturan penggunaan dapat disesuaikan dengan kegiatan.',
    targetAudience: ['Penyelenggara pelatihan dan ujian', 'Institusi perbankan dan korporasi', 'Instansi pemerintah dan lembaga publik', 'Penyelenggara kegiatan dan komunitas'],
    scopeOfWork: ['Pemanfaatan ruang kelas multimedia', 'Penggunaan laboratorium komputer dan bank mini', 'Penyediaan ruang rapat dan diskusi', 'Pemanfaatan aula untuk seminar dan acara', 'Dukungan teknis fasilitas sesuai kebutuhan kegiatan'],
    deliveryMethods: ['Penyewaan fasilitas', 'Paket penggunaan sarana untuk kegiatan', 'Peninjauan lokasi sebelum kegiatan'],
    facilities: ['Classroom', 'Computer lab', 'Mini bank', 'Meeting room', 'Aula'],
    image: { url: './images/facilities/classroom-1.jpeg', alt: 'Ruang kelas untuk kegiatan pembelajaran' }
  },
  {
    id: 'institutional-support',
    number: '06',
    title: 'Layanan Pendukung Operasional & Institusional',
    englishTitle: 'Logistics, Transportation & Corporate Support',
    shortDesc: 'Dukungan transportasi, logistik, perlengkapan, dan kebutuhan pendukung kegiatan institusi.',
    fullDesc: 'Layanan pendukung membantu kelancaran program dan acara melalui pengelolaan kebutuhan lapangan, mobilitas peserta, perlengkapan kegiatan, serta koordinasi operasional.',
    targetAudience: ['Panitia pelatihan, lokakarya, dan seminar', 'Divisi umum dan pengadaan', 'Lembaga diklat dan penyelenggara acara', 'Institusi mitra kerja sama'],
    scopeOfWork: ['Dukungan armada transportasi dan shuttle peserta', 'Pengadaan perlengkapan seminar dan corporate kit', 'Koordinasi logistik dan perlengkapan teknis acara', 'Distribusi materi dan penanganan kebutuhan lapangan', 'Dukungan dokumentasi kegiatan'],
    deliveryMethods: ['Koordinasi kebutuhan sebelum kegiatan', 'Dukungan operasional di lokasi', 'Penyediaan logistik sesuai ruang lingkup'],
    facilities: ['Armada transportasi', 'Perlengkapan kegiatan'],
    image: { url: './images/facilities/transportasi.jpeg', alt: 'Armada transportasi untuk mendukung kegiatan' }
  }
];

export interface ExpertDomain {
  id: string;
  domainNumber: number;
  title: string;
  topics: string[];
}

export const EXPERT_DOMAINS_DATA: ExpertDomain[] = [
  { id: 'domain-1', domainNumber: 1, title: 'Banking & Financial Services', topics: ['Banking Management', 'Banking Operations', 'Credit & Financing', 'Funding & Treasury', 'Branch Management', 'Strategic Banking', 'Conventional & Sharia Banking', 'Banking Digitalization', 'Payment System & Banking Technology', 'Credit Risk & Non-Performing Loan Management', 'Banking Business Planning', 'Financial Institution Management'] },
  { id: 'domain-2', domainNumber: 2, title: 'Accounting, Finance & Taxation', topics: ['Financial Accounting', 'Financial Statement Preparation & Analysis', 'Corporate Finance', 'Financial Management', 'Finance for Non-Finance', 'Budgeting & Cost Management', 'Cash Flow Management', 'Accounts Receivable & Payable Management', 'Asset Management', 'Project Finance', 'PSAK/Financial Reporting Standards', 'Taxation & Tax Planning'] },
  { id: 'domain-3', domainNumber: 3, title: 'Audit, Internal Control & Governance', topics: ['Internal Audit', 'Internal Control', 'Financial Audit', 'Audit Committee Practices', 'Fraud Prevention & Detection', 'Good Corporate Governance', 'Governance, Risk & Compliance (GRC)', 'Corporate Governance', 'Standard Operating Procedure (SOP)', 'ISO Management System', 'COBIT & IT Governance'] },
  { id: 'domain-4', domainNumber: 4, title: 'Risk Management & Compliance', topics: ['Enterprise Risk Management', 'Banking Risk Management', 'Credit Risk', 'Operational Risk', 'Financial Risk', 'Sharia Risk Management', 'Compliance Management', 'Anti-Money Laundering & Counter Financing of Terrorism', 'Business Continuity & Risk Mitigation', 'Corporate Risk Management'] },
  { id: 'domain-5', domainNumber: 5, title: 'Strategic Management & Business Development', topics: ['Strategic Management', 'Corporate Planning', 'Business Planning', 'Feasibility Study', 'Business Process Management', 'Business Model Canvas', 'SWOT Analysis', 'Organizational Development', 'Key Performance Indicator (KPI)', 'Performance Management', 'Strategic Sourcing & Vendor Management'] },
  { id: 'domain-6', domainNumber: 6, title: 'Human Capital & Leadership', topics: ['Human Resource Management', 'Human Capital Development', 'Leadership & Supervisory Management', 'Manpower Planning', 'Workload Analysis', 'Training Need Analysis', 'Job Analysis & Job Description', 'Job Grading', 'Competency Development', 'Performance Management', 'Organizational Structure Development'] },
  { id: 'domain-7', domainNumber: 7, title: 'Marketing, Sales & Customer Experience', topics: ['Marketing Management', 'Marketing Communication', 'Digital Marketing', 'Social Media Marketing', 'Content Marketing', 'Brand Management', 'Sales Management', 'Customer Relationship Management', 'Service Excellence', 'Complaint Handling', 'Customer Experience', 'Creative Promotion & Sales Campaign'] },
  { id: 'domain-8', domainNumber: 8, title: 'Entrepreneurship & MSME Development', topics: ['Entrepreneurship', 'Digital Entrepreneurship', 'Business Mentoring', 'MSME Development', 'Business Planning for MSMEs', 'Business Model Development', 'Product Development', 'Financial Literacy for MSMEs', 'Digitalization of MSMEs', 'Halal Product Development', 'Business Incubation', 'Entrepreneurial Mindset'] },
  { id: 'domain-9', domainNumber: 9, title: 'Digital Technology & Information Systems', topics: ['Information Systems', 'IT Governance', 'Information Security Management', 'Database Management', 'Data Analytics', 'Data Visualization', 'Machine Learning', 'Artificial Intelligence', 'Digital Transformation', 'Microsoft Office Specialist', 'Digital Productivity Tools', 'Technology-Based Business Solutions'] },
  { id: 'domain-10', domainNumber: 10, title: 'Capital Market, Fintech & Financial Literacy', topics: ['Capital Market', 'Investment Management', 'Portfolio Management', 'Financial Technology', 'Financial Literacy', 'Financial Behaviour', 'Investment Analysis', 'Corporate Finance', 'Islamic Financial Planning'] },
  { id: 'domain-11', domainNumber: 11, title: 'Sustainability, ESG & Sustainable Business', topics: ['Environmental, Social & Governance (ESG)', 'Sustainability Reporting', 'Green Finance', 'Sustainable Finance', 'Sustainable Business', 'SDGs', 'Circular Economy', 'Social Impact Assessment', 'Sustainable MSME Development'] },
  { id: 'domain-12', domainNumber: 12, title: 'Research, Academic & Professional Development', topics: ['Research Methodology', 'Quantitative Research', 'Business Research', 'Marketing Research', 'Data Analysis', 'Academic Writing', 'Scientific Publication', 'Training for Trainer', 'Curriculum & Training Module Development', 'Professional Competency Development'] }
];

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
  image: { url: string; alt: string };
  galleryImages: FacilityGalleryImage[];
}

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'aula-utama',
    name: 'Auditorium & Aula Utama (Graha Ekuitas)',
    capacity: '300–500 peserta',
    description: 'Aula serbaguna dengan panggung utama, tata pencahayaan, AC, sound system, dan fleksibilitas tata letak untuk kegiatan berskala besar.',
    highlights: ['Kapasitas hingga 500 orang', 'Sound system dan lighting auditorium', 'Panggung utama dan ruang rias VIP', 'Untuk wisuda, seminar, dan gathering'],
    image: { url: './images/facilities/aula-1.jpeg', alt: 'Auditorium dan aula utama Graha Ekuitas' },
    galleryImages: [{ url: './images/facilities/aula-1.jpeg', caption: 'Tampak utama Auditorium Graha Ekuitas' }, { url: './images/facilities/aula-2.jpeg', caption: 'Tata letak kursi auditorium' }]
  },
  {
    id: 'ruang-kelas-eksekutif',
    name: 'Ruang Kelas Pelatihan',
    capacity: '30–60 peserta per ruang',
    description: 'Ruang kelas ber-AC dengan perlengkapan multimedia dan susunan meja-kursi yang dapat diatur untuk pembelajaran maupun diskusi.',
    highlights: ['Layout classroom, U-shape, atau cluster', 'Proyektor dan layar', 'Akses Wi-Fi kampus', 'Untuk pelatihan dan lokakarya'],
    image: { url: './images/facilities/classroom-1.jpeg', alt: 'Ruang kelas pelatihan' },
    galleryImages: [{ url: './images/facilities/classroom-1.jpeg', caption: 'Ruang kelas multimedia' }, { url: './images/facilities/classroom-2.jpeg', caption: 'Fasilitas pembelajaran dan proyektor' }]
  },
  {
    id: 'lab-komputer',
    name: 'Laboratorium Komputer & CBT',
    capacity: '40–50 workstation per laboratorium',
    description: 'Laboratorium komputer dengan jaringan lokal dan internet untuk ujian berbasis komputer, pelatihan perangkat lunak, dan kegiatan analisis data.',
    highlights: ['Perangkat komputer terhubung jaringan', 'Mendukung ujian CBT', 'Pendingin ruangan dan daya cadangan', 'Dapat digunakan untuk pelatihan teknis'],
    image: { url: './images/facilities/lab-komputer-1.jpeg', alt: 'Laboratorium komputer' },
    galleryImages: [{ url: './images/facilities/lab-komputer-1.jpeg', caption: 'Workstation laboratorium komputer' }, { url: './images/facilities/lab-komputer-2.jpeg', caption: 'Suasana kegiatan berbasis komputer' }]
  },
  {
    id: 'lab-bank-mini',
    name: 'Laboratorium Simulasi Perbankan (Mini Bank)',
    capacity: '20–30 peserta simulasi',
    description: 'Fasilitas simulasi layanan perbankan dengan counter teller dan meja customer service untuk mendukung pembelajaran frontliner.',
    highlights: ['Counter teller dan customer service', 'Peralatan simulasi layanan', 'Untuk praktik layanan frontliner', 'Pernah digunakan pada program Abdi bjb Frontliner'],
    image: { url: './images/facilities/lab-bank-mini.jpeg', alt: 'Laboratorium simulasi perbankan' },
    galleryImages: [{ url: './images/facilities/lab-bank-mini.jpeg', caption: 'Counter teller dan customer service di Bank Mini' }]
  },
  {
    id: 'ruang-rapat-vip',
    name: 'Ruang Rapat & Diskusi',
    capacity: '10–25 orang',
    description: 'Ruang rapat dengan meja konferensi, kursi, dan fasilitas presentasi untuk pertemuan, negosiasi, maupun diskusi kelompok.',
    highlights: ['Meja rapat dan kursi ergonomis', 'Smart TV atau display presentasi', 'Ruang privat untuk diskusi', 'Kebutuhan coffee break dapat dikoordinasikan'],
    image: { url: './images/facilities/meeting-room.jpeg', alt: 'Ruang rapat dan diskusi' },
    galleryImages: [{ url: './images/facilities/meeting-room.jpeg', caption: 'Ruang rapat eksekutif' }]
  },
  {
    id: 'armada-transportasi',
    name: 'Armada Transportasi & Fasilitas Pendukung',
    capacity: 'Bus medium 30–35 kursi, shuttle 14–16 kursi',
    description: 'Armada operasional untuk antar-jemput peserta, mobilitas panitia, dan dukungan kunjungan lapangan.',
    highlights: ['Bus medium dan shuttle ber-AC', 'Layanan antar-jemput peserta', 'Mobilitas panitia dan kunjungan', 'Dukungan logistik kegiatan'],
    image: { url: './images/facilities/transportasi.jpeg', alt: 'Armada transportasi dan fasilitas pendukung' },
    galleryImages: [{ url: './images/facilities/transportasi.jpeg', caption: 'Armada bus operasional dan shuttle peserta' }]
  }
];

export interface PortfolioGalleryImage {
  url: string;
  caption: string;
  tag: string;
}

export const PORTFOLIO_PROJECT = {
  title: 'Program Pembelajaran Frontliner Abdi bjb (Customer Service & Teller)',
  client: 'bank bjb (PT Bank Pembangunan Daerah Jawa Barat dan Banten, Tbk.)',
  organizer: 'PT Sinergi Ekuitas Indonesia (bekerja sama dengan Universitas Ekuitas Indonesia)',
  totalParticipants: 'Ratusan Peserta Frontliner bank bjb',
  period: 'Pelaksanaan Bertahap / Multi-Batch',
  category: 'Pelatihan Perbankan & Operational Support',
  summary: 'Penyelenggaraan program pelatihan dan pembelajaran frontliner terpadu untuk calon pegawai dan staf operasional bank bjb, mencakup kelas teori perbankan, simulasi laboratorium mini bank, ujian CBT, akomodasi, konsumsi, dan transportasi peserta.',
  details: [
    'Penyediaan fasilitas ruang kelas multimedia dan laboratorium komputer CBT untuk sesi ujian tertulis dan evaluasi pemahaman.',
    'Pelaksanaan praktikum simulasi pelayanan perbankan pada Laboratorium Bank Mini (Customer Service & Teller counter).',
    'Pengelolaan akomodasi penginapan, konsumsi harian, dan armada transportasi shuttle peserta selama periode pelatihan.',
    'Penyertaan instruktur praktisi senior perbankan bank bjb dan akademisi pakar Universitas Ekuitas Indonesia.'
  ],
  impactMetrics: [
    { label: 'Tingkat kelulusan evaluasi', value: '100%' },
    { label: 'Modul praktikum perbankan', value: '12+' },
    { label: 'Kepuasan layanan peserta', value: '98.5%' },
    { label: 'Cakupan layanan end-to-end', value: '100%' }
  ],
  metricsDisclaimer: 'Data dihimpun dari evaluasi kelulusan dan kuesioner kepuasan peserta program internal Abdi bjb Frontliner.',
  image: { url: './images/portfolio/abdi-bjb-1.jpeg', alt: 'Dokumentasi Program Pembelajaran Abdi bjb Frontliner' },
  galleryImages: [
    { url: './images/portfolio/abdi-bjb-1.jpeg', caption: 'Sesi Pembukaan & Pelatihan Kelas Frontliner bank bjb', tag: 'Kelas Pembelajaran' },
    { url: './images/portfolio/abdi-bjb-2.jpeg', caption: 'Praktikum Simulasi Customer Service & Teller di Lab Bank Mini', tag: 'Simulasi Perbankan' },
    { url: './images/portfolio/abdi-bjb-3.jpeg', caption: 'Ujian Evaluasi Berbasis Komputer (CBT) di Lab Komputer', tag: 'Ujian CBT' },
    { url: './images/portfolio/abdi-bjb-4.jpeg', caption: 'Kegiatan Penggemblengan & Character Building Peserta', tag: 'Pembangunan Karakter' },
    { url: './images/portfolio/abdi-bjb-5.jpeg', caption: 'Fasilitas Mobilisasi Shuttle Bus & Akomodasi Peserta', tag: 'Logistik & Transportasi' },
    { url: './images/portfolio/abdi-bjb-6.jpeg', caption: 'Upacara Penutupan & Penyerahan Sertifikat Kelulusan', tag: 'Penutupan Program' }
  ]
} as const;
