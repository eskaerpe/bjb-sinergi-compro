export const COMPANY_INFO = {
  name: 'PT Sinergi Ekuitas Indonesia',
  shortName: 'PT Sinergi',
  tagline: 'Strategic Partner for Training, Consulting, Event Management, and Institutional Support',
  parentOrg: 'Yayasan Kesejahteraan Pegawai (YKP) bank bjb',
  affiliateOrg: 'Universitas Ekuitas Indonesia',
  companySummary: 'PT Sinergi Ekuitas Indonesia merupakan anak perusahaan Yayasan Kesejahteraan Pegawai (YKP) bank bjb yang bergerak di bidang pelatihan profesional, konsultasi, pengembangan kompetensi sumber daya manusia, penyelenggaraan kegiatan, serta layanan pendukung institusional.',
  ecosystemSummary: 'Sebagai bagian dari ekosistem yang terintegrasi dengan Universitas Ekuitas Indonesia, PT Sinergi Ekuitas Indonesia memadukan kekuatan akademik, pengalaman praktisi profesional, jaringan kelembagaan, serta fasilitas pembelajaran yang representatif untuk menghadirkan solusi yang relevan bagi kebutuhan institusi, dunia usaha, dan masyarakat.',
  expertNetworkSummary: 'Kami didukung oleh jaringan expert, trainer, akademisi, praktisi, konsultan, dan profesional berpengalaman dari berbagai bidang industri.',
  address: 'Jl. PHH. Mustofa No. 31, Bandung',
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
  bio: string;
  image: { url: string; alt: string };
}

export const LEADERSHIP_MEMBERS: LeaderItem[] = [
  {
    id: 'deni-hamdani',
    name: 'Deni Hamdani, SE.M.Si',
    title: 'Direktur Utama',
    bio: 'Memimpin arah strategis perusahaan serta bertanggung jawab dalam memastikan seluruh kegiatan operasional dan pengembangan bisnis berjalan selaras dengan visi perusahaan. Berperan dalam pengambilan keputusan strategis, penguatan tata kelola, serta membangun sinergi dan kerja sama dengan berbagai mitra untuk mendukung pertumbuhan perusahaan yang berkelanjutan.',
    image: { url: './images/team/deni-hamdani.jpeg', alt: 'Deni Hamdani, SE.M.Si, Direktur Utama' }
  },
  {
    id: 'gatot-iwan',
    name: 'Dr. Gatot Iwan Kurniawan, SE., MBA',
    title: 'Direktur',
    bio: 'Berperan dalam mendukung perencanaan dan pelaksanaan strategi perusahaan, khususnya dalam pengembangan bisnis, inovasi, serta peningkatan kualitas layanan. Turut mengawal pelaksanaan program perusahaan agar berjalan efektif, adaptif terhadap perkembangan industri, dan mampu memberikan nilai tambah bagi mitra maupun pelanggan.',
    image: { url: './images/team/gatot-iwan.jpeg', alt: 'Dr. Gatot Iwan Kurniawan, SE., MBA, Direktur' }
  },
  {
    id: 'muhammad-gunawan',
    name: 'Muhammad Gunawan',
    title: 'Komisaris',
    bio: 'Melaksanakan fungsi pengawasan serta memberikan arahan dan masukan strategis terhadap kebijakan dan pengelolaan perusahaan. Berperan dalam memastikan kegiatan perusahaan dilaksanakan dengan prinsip tata kelola yang baik, profesional, transparan, serta tetap berorientasi pada pencapaian tujuan dan keberlanjutan perusahaan.',
    image: { url: './images/team/muhammad-gunawan.jpeg', alt: 'Muhammad Gunawan, Komisaris' }
  }
];

export const VISION_MISSION_DATA = {
  vision: COMPANY_INFO.vision,
  missions: COMPANY_INFO.missions
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  { id: 'training', title: 'Pelatihan profesional dan pengembangan SDM', shortDesc: 'Pelatihan profesional dan pengembangan kompetensi sumber daya manusia.' },
  { id: 'consulting', title: 'Konsultasi', shortDesc: 'Layanan konsultasi untuk kebutuhan institusi, dunia usaha, dan masyarakat.' },
  { id: 'events', title: 'Penyelenggaraan kegiatan', shortDesc: 'Pengalaman penyelenggaraan kegiatan dan event management.' },
  { id: 'institutional-support', title: 'Layanan pendukung institusional', shortDesc: 'Dukungan operasional kegiatan dan pengadaan kebutuhan institusional.' }
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

export interface FacilityItem {
  id: string;
  name: string;
  image: { url: string; alt: string };
}

export const FACILITIES_DATA: FacilityItem[] = [
  { id: 'transportasi', name: 'Transportasi', image: { url: './images/facilities/transportasi.jpeg', alt: 'Transportasi' } },
  { id: 'meeting-room', name: 'Meeting Room', image: { url: './images/facilities/meeting-room.jpeg', alt: 'Meeting Room' } },
  { id: 'classroom-1', name: 'Classroom', image: { url: './images/facilities/classroom-1.jpeg', alt: 'Classroom' } },
  { id: 'classroom-2', name: 'Classroom', image: { url: './images/facilities/classroom-2.jpeg', alt: 'Classroom' } },
  { id: 'lab-komputer', name: 'Lab. Komputer', image: { url: './images/facilities/lab-komputer-1.jpeg', alt: 'Lab. Komputer' } },
  { id: 'lab-bank-mini', name: 'Lab. Bank Mini', image: { url: './images/facilities/lab-bank-mini.jpeg', alt: 'Lab. Bank Mini' } },
  { id: 'aula-1', name: 'Aula', image: { url: './images/facilities/aula-1.jpeg', alt: 'Aula' } },
  { id: 'aula-2', name: 'Aula', image: { url: './images/facilities/aula-2.jpeg', alt: 'Aula' } }
];

export const PORTFOLIO_PROJECT = {
  title: 'Kegiatan Abdi bjb Frontliner',
  summary: 'PT Sinergi Ekuitas Indonesia memiliki pengalaman dalam penyelenggaraan program pelatihan dan pengembangan SDM, event management, dukungan operasional kegiatan, serta pengadaan kebutuhan institusional.',
  image: { url: './images/portfolio/abdi-bjb-1.jpeg', alt: 'Kegiatan Abdi bjb Frontliner' }
} as const;
