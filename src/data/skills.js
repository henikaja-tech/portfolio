// Icônes chargées depuis simple-icons (CDN), comme dans la version d'origine.
const si = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`;

// ---------- Bandeau de compétences défilant (2 rangées, sens opposés) ----------
export const marqueeRowRight = [
  { label: 'PHP', icon: si('php', '777BB4') },
  { label: 'Laravel', icon: si('laravel', 'FF2D20') },
  { label: 'Vue.js', icon: si('vuedotjs', '4FC08D') },
  { label: 'C#', badge: true },
  { label: 'C', icon: si('c') },
  { label: 'JavaScript', icon: si('javascript', 'F7DF1E') },
  { label: 'MySQL', icon: si('mysql', '4479A1') },
  { label: 'MariaDB', icon: si('mariadb', '003545') },
  { label: 'Bash', icon: si('gnubash', '4EAA25') },
  { label: 'Git', icon: si('git', 'F05032') },
];

export const marqueeRowLeft = [
  { label: 'Linux', icon: si('linux') },
  { label: 'Apache2', icon: si('apache', 'D22128') },
  { label: 'GitHub', icon: si('github', '181717') },
  { label: 'Cisco', icon: si('cisco', '1BA0D7') },
  { label: 'LDAP', badge: true, badgeText: 'LD', badgeColor: 'var(--cyan)' },
  { label: 'Wireshark', icon: si('wireshark', '1679A7') },
  { label: 'Java', icon: si('openjdk', 'ED8B00') },
  { label: 'C++', icon: si('cplusplus', '00599C') },
  { label: 'pfSense', icon: si('pfsense') },
];

// ---------- Cartes détaillées par domaine ----------
// `theme` correspond à la charte de couleur unique (fond/bordure/texte) de chaque carte,
// reprise à l'identique de la version CSS d'origine (light + dark).
export const domainCards = [
  {
    key: 'dev',
    title: 'Langages de Programmation',
    headerType: 'text', // carré plein avec initiales "JS"
    headerBg: '#f0862e',
    headerText: 'JS',
    theme: {
      light: { bg: '#fefce8', border: '#fef08a', text: '#854d0e' },
      dark: { bg: '#2a2210', border: '#4d3d13', text: '#fbbf67' },
    },
    tags: [
      { label: 'C', icon: si('c', '854d0e') },
      { label: 'C++', icon: si('cplusplus', '854d0e') },
      { label: 'C#' },
      { label: 'PHP', icon: si('php', '854d0e') },
      { label: 'JavaScript', icon: si('javascript', '854d0e') },
      { label: 'Bash', icon: si('gnubash', '854d0e') },
      { label: 'Java', icon: si('openjdk', '854d0e') },
    ],
  },
  {
    key: 'fwk',
    title: 'Frameworks & Backend',
    headerType: 'icon-filled', // cercle plein coloré, logo blanc dedans
    headerBg: '#22c55e',
    headerIcon: si('springboot', 'ffffff'),
    theme: {
      light: { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' },
      dark: { bg: '#0f2b1c', border: '#1f5738', text: '#6ee7b7' },
    },
    tags: [
      { label: 'Laravel', icon: si('laravel', '047857') },
      { label: 'Vue.js', icon: si('vuedotjs', '047857') },
      { label: 'WinForms (.NET)', icon: si('dotnet', '047857') },
      { label: 'API REST' },
    ],
  },
  {
    key: 'net',
    title: 'Réseau & Routage',
    headerType: 'icon-flat',
    headerIcon: si('cisco', '1BA0D7'),
    theme: {
      light: { bg: '#f0f9ff', border: '#bae6fd', text: '#0284c7' },
      dark: { bg: '#0c2438', border: '#194a6b', text: '#7dd3fc' },
    },
    tags: [
      { label: 'TCP/IP' },
      { label: 'RIP v2' },
      { label: 'OSPF' },
      { label: 'Cisco IOS', icon: si('cisco', '0284c7') },
      { label: 'GNS3' },
    ],
  },
  {
    key: 'sec',
    title: 'Sécurité Réseau',
    headerType: 'lucide',
    lucideIcon: 'Shield',
    lucideColor: '#dc2626',
    theme: {
      light: { bg: '#fef2f2', border: '#fecaca', text: '#b91c1c' },
      dark: { bg: '#331213', border: '#642527', text: '#fca5a5' },
    },
    tags: [
      { label: 'pfSense', icon: si('pfsense', 'b91c1c') },
      { label: 'HTTPS/SSL', lucideIcon: 'Lock' },
      { label: 'DHCP' },
      { label: 'Authentification LDAP' },
    ],
  },
  {
    key: 'sys',
    title: 'Systèmes & Virtualisation',
    headerType: 'icon-flat',
    headerIcon: si('linux', 'ea580c'),
    theme: {
      light: { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
      dark: { bg: '#331c0c', border: '#653a17', text: '#fdba74' },
    },
    tags: [
      { label: 'Ubuntu Server', icon: si('linux', 'c2410c') },
      { label: 'Windows Server', lucideIcon: 'Server' },
      { label: 'Active Directory' },
      { label: 'VirtualBox' },
    ],
  },
  {
    key: 'mail',
    title: 'Serveurs Web & Mail',
    headerType: 'icon-filled',
    headerBg: '#22c55e',
    headerIcon: si('apache', 'ffffff'),
    theme: {
      light: { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' },
      dark: { bg: '#0f2b1c', border: '#1f5738', text: '#6ee7b7' },
    },
    tags: [
      { label: 'Apache2', icon: si('apache', '047857') },
      { label: 'Bind9 (DNS)' },
      { label: 'Postfix' },
      { label: 'Dovecot' },
      { label: 'Roundcube' },
      { label: 'Samba / FTP' },
    ],
  },
  {
    key: 'db',
    title: 'Bases de données',
    headerType: 'icon-flat',
    headerIcon: si('mysql', '6b21a8'),
    theme: {
      light: { bg: '#faf5ff', border: '#e9d5ff', text: '#6b21a8' },
      dark: { bg: '#241234', border: '#452462', text: '#c4b5fd' },
    },
    tags: [
        { label: 'MySQL', icon: si('mysql', '6b21a8') },
  	{ label: 'PostgreSQL', icon: si('postgresql', '6b21a8') },
  	{ label: 'MariaDB', icon: si('mariadb', '6b21a8') },
  	{ label: 'Modélisation relationnelle' },
],  },
  {
    key: 'diag',
    title: 'Analyse & Diagnostic',
    headerType: 'lucide',
    lucideIcon: 'Activity',
    lucideColor: '#0284c7',
    theme: {
      light: { bg: '#f0f9ff', border: '#bae6fd', text: '#0284c7' },
      dark: { bg: '#0c2438', border: '#194a6b', text: '#7dd3fc' },
    },
    tags: [
      { label: 'Wireshark', lucideIcon: 'Activity' },
      { label: 'Convergence réseau' },
      { label: 'Tables de routage' },
    ],
  },
  {
    key: 'dir',
    title: 'Annuaire & Résolution de noms',
    headerType: 'lucide',
    lucideIcon: 'FolderOpen',
    lucideColor: '#4338ca',
    theme: {
      light: { bg: '#eef2ff', border: '#c7d2fe', text: '#4338ca' },
      dark: { bg: '#1c1d3d', border: '#373a6e', text: '#a5b4fc' },
    },
    tags: [{ label: 'LDAP' }, { label: 'DNS' }, { label: 'Portail intranet' }],
  },
  {
    key: 'tool',
    title: 'Outils & Versioning',
    headerType: 'icon-flat',
    headerIcon: si('git', '334155'),
    theme: {
      light: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155' },
      dark: { bg: '#1a2233', border: '#334155', text: '#cbd5e1' },
    },
    tags: [
      { label: 'Git', icon: si('git', '334155') },
      { label: 'GitHub', icon: si('github', '334155') },
      { label: 'Ligne de commande' },
    ],
  },
];
