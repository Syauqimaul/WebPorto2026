// ============================================================
// PORTFOLIO DATA
// All static content extracted from the original HTML
// ============================================================

// --- Projects ---
export const projects = [
  {
    id: 'gudangku',
    title: 'Gudangku',
    description:
      'Sistem manajemen gudang dengan dashboard interaktif untuk monitoring barang masuk/keluar, manajemen supplier, pelanggan, dan notifikasi stok rendah secara real-time.',
    image: 'dashboad_gudangku.png',
    tech: ['Laravel', 'MySQL', 'PHP'],
    link: 'https://drive.google.com/drive/folders/1wbs3dHD8FIwyIoP7DaaHwsHNV2oD5oVc',
  },
  {
    id: 'wicara',
    title: 'WICARA',
    description:
      'Wadah Informasi Catatan Aspirasi & Rating Akademik — platform untuk mahasiswa Polines dalam menyampaikan aspirasi dan melihat rating akademik secara transparan.',
    image: 'login_wicara.png',
    tech: ['PHP', 'MySQL'],
    link: 'https://drive.google.com/drive/folders/1_cIQBgTvjaAKfrnVgtwiEXgQQr-Zk-DA',
  },
  {
    id: 'wargalink',
    title: 'WargaLink',
    description:
      'Platform digitalisasi manajemen RT untuk mengelola kegiatan, iuran, aduan, dan sistem poin warga — meningkatkan partisipasi dan transparansi lingkungan.',
    image: 'wargalink.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'ChatBot'],
    link: 'https://wargalink.vercel.app/',
  },
];

// --- Skills ---
export const skillCategories = [
  {
    title: 'Web Development',
    subtitle: 'Frontend & Version Control',
    icon: 'Monitor',
    tags: [
      { label: 'HTML5', icon: 'FileCode' },
      { label: 'CSS3', icon: 'Palette' },
      { label: 'JavaScript', icon: 'Braces' },
      { label: 'Responsive Design', icon: 'Smartphone' },
      { label: 'Git & GitHub', icon: 'GitBranch' },
      { label: 'Figma (Basic)', icon: 'Figma' },
      { label: 'PHP', icon: 'Code2' },
      { label: 'Python', icon: 'Terminal' },
    ],
  },
  {
    title: 'Data Analytics',
    subtitle: 'Tools & Visualization',
    icon: 'Database',
    tags: [
      { label: 'Excel / Spreadsheet', icon: 'Table' },
      { label: 'Google Data Studio', icon: 'BarChart2' },
      { label: 'SQL (Basic)', icon: 'Search' },
      { label: 'Data Visualization', icon: 'LineChart' },
      { label: 'Critical Thinking', icon: 'Brain' },
      { label: 'Python', icon: 'Terminal' },
    ],
  },
];

// --- Certifications ---
export const certifications = [
  {
    logo: 'C',
    title: 'Cisco Networking Certificate',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    credentialFile: 'cisco_sertifikat.pdf',
  },
  {
    logo: 'M',
    title: 'MySQL Certificate',
    issuer: 'MySQL Certification Program',
    year: '2025',
    credentialFile: 'MYSQLCertificate.pdf',
  },
  {
    logo: 'D',
    title: 'Database Design Certificate',
    issuer: 'Database Design Certification Program',
    year: '2025',
    credentialFile: 'DatabaseDesignCertificate.pdf',
  },
];

// --- Contact Links ---
export const contactLinks = [
  {
    type: 'email',
    label: 'Email',
    value: 'muhammadsyauqipml12@gmail.com',
    href: 'mailto:muhammadsyauqipml12@gmail.com',
    icon: 'Mail',
    logo: null,
  },
  {
    type: 'instagram',
    label: 'Instagram',
    value: '@lanasyauqi_',
    href: 'https://www.instagram.com/lanasyauqi_?igsh=cjliazRjMHgwY3A4',
    icon: null,
    logo: 'Instagram Logo.jpg',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/syauqi-anansyah',
    href: 'https://www.linkedin.com/in/syauqi-anansyah',
    icon: null,
    logo: 'linkedinn.jpg',
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'github.com/Syauqimaul',
    href: 'https://github.com/Syauqimaul',
    icon: null,
    logo: 'github.jpg',
  },
];

// --- About Highlights ---
export const aboutHighlights = [
  {
    icon: 'Code2',
    title: 'Web Development',
    description: 'Membangun website responsif & modern',
  },
  {
    icon: 'BarChart3',
    title: 'Data Analytics',
    description: 'Mengolah data menjadi insight',
  },
  {
    icon: 'GraduationCap',
    title: 'Fast Learner',
    description: 'Cepat adaptasi dengan teknologi baru',
  },
  {
    icon: 'Users',
    title: 'Team Player',
    description: 'Kolaboratif & komunikatif',
  },
];

// --- Hero Stats ---
export const heroStats = [
  { number: '3+', label: 'Web Projects' },
  { number: '3+', label: 'Certifications' },
  { number: '5+', label: 'Tech Skills' },
];
