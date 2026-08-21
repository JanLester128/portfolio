export const portfolio = {
  name: 'Jan Lester U. Camus',
  initials: 'JLC',
  title: 'Graphic Artist, Video Editor & Web Developer',
  tagline:
    'IT Graduate specializing in multimedia layout design, video editing, and responsive web development — turning creative concepts into functional, high-impact digital solutions.',
  email: 'occ.camus.janlester@gmail.com',
  phone: '0950-093-5788',
  location: 'El Salvador City, Northern Mindanao, Philippines',
  avatar: '/profile.png',
  cover: '/cover.png',
  logo: '/logo.png',
  social: {
    github: 'https://github.com/JanLester128',
    facebook: 'https://www.facebook.com/jnlstr01',
    linkedin: 'https://www.linkedin.com/in/jan-lester-camus-182083413/',
    email: 'mailto:occ.camus.janlester@gmail.com',
    phone: 'tel:09500935788',
  },
  about: {
    paragraphs: [
      "I am an Information Technology graduate specializing in multimedia, video editing, layout design, and web development. With professional experience as a Video Editor and Layout Artist intern at the Department of Public Works and Highways (DPWH – CDO 1st DEO), I have designed executive annual report layouts, produced public information videos, and developed creative visual materials for government and community initiatives.",
      "Alongside multimedia and social media posting layout design, I develop responsive web systems like the ONSTS Management Platform using HTML, CSS, JavaScript, PHP, and MySQL. Backed by extensive leadership experience as Class Mayor/President and Vice President of Interns at Opol Community College, I bring a balance of creative ingenuity, technical execution, and strong team coordination to every project.",
    ],
    highlights: [
      'OJT Experience at DPWH CDO 1st DEO (Annual Report & Multimedia)',
      'BS in Information Technology — Opol Community College',
      'Leadership: Class Mayor/President & Vice President of Interns',
      'Proficient in Adobe Suite (Photoshop, Illustrator, Premiere Pro)',
      'Full Web Stack: HTML5, CSS, JavaScript, PHP, MySQL',
    ],
  },
  experience: [
    {
      id: 'dpwh',
      role: 'Video Editor & Layout Artist (OJT Intern)',
      organization: 'Department of Public Works and Highways – CDO 1st DEO',
      period: 'January 27, 2026 – May 20, 2026',
      location: 'Cagayan de Oro City, Philippines',
      type: 'Internship / Government',
      responsibilities: [
        'Designed and finalized the comprehensive layout for the DPWH Annual Report, ensuring clear, high-level, and professional presentation of engineering milestones.',
        'Edited the official Citizen’s Charter video and designed caricature illustrations for DPWH ARTA public information campaigns.',
        'Produced and assisted in developing creative multimedia and visual communication materials for organizational and public information purposes.',
      ],
      skillsUsed: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Annual Report Layouting', 'Video Editing'],
    },
  ],
  education: [
    {
      id: 'occ',
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      institution: 'Opol Community College',
      graduation: 'Class of June 2026',
      location: 'Opol, Misamis Oriental, Philippines',
      leadership: [
        'Class Mayor (Class President) — Opol Community College Class Officers (2nd Year – 4th Year, 1st Sem)',
        'Vice President of Interns — Internship Program',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Design & Multimedia',
      icon: '🎨',
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Canva (Graphic Design)',
        'Layout & Publication Design',
        'Annual Report Layouting',
        'Caricature & Vector Art',
      ],
    },
    {
      category: 'Video Editing & Motion',
      icon: '🎬',
      skills: [
        'Adobe Premiere Pro',
        'CapCut',
        'Video Editing & Production',
        'Basic Motion Graphics',
        'Photo & Video Documentation',
        'Audio & Voiceover Syncing',
      ],
    },
    {
      category: 'Web & Systems Development',
      icon: '💻',
      skills: [
        'HTML5 & CSS',
        'JavaScript (ES6+)',
        'PHP & MySQL',
        'Responsive Web Design',
        'Database Management',
        'Admin Portals & Web Apps',
      ],
    },
    {
      category: 'IT, Tools & Leadership',
      icon: '⭐',
      skills: [
        'Microsoft Office (Word, Excel, PowerPoint)',
        'Computer Troubleshooting & Maintenance',
        'Class Mayor / Student Leadership',
        'Project Coordination & Team Communication',
      ],
    },
  ],
  categories: [
    { id: 'all', label: 'All Works' },
    { id: 'web', label: 'Web Systems' },
    { id: 'posting-layouts', label: 'Posting Layouts' },
    { id: 'business-cards', label: 'Business Cards' },
    { id: 'posters', label: 'Posters & Media' },
    { id: 'branding', label: 'Branding & Graphics' },
  ],
  projects: [
    {
      id: 'onsts-system',
      category: 'web',
      categoryLabel: 'Web Systems',
      title: 'ONSTS — Online Student Tracking System',
      description:
        'Full-stack online student tracking and record management system developed for institutional student monitoring, data administration, and academic tracking.',
      tags: ['Developed System', 'Web Application', 'PHP & MySQL', 'Full-Stack'],
      images: [
        {
          src: '/Posting/Projects/onsts.jpg',
          caption: 'ONSTS Management Platform — Student Records & System Overview',
        },
      ],
      featured: true,
    },
    {
      id: 'dpwh-project',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'DPWH Project Monitoring — Posting Layout',
      description:
        'Graphic layout and promotional showcase design created for social media posting of the DPWH Infrastructure Project Monitoring interface.',
      tags: ['Posting Layout', 'Graphic Design', 'DPWH Showcase', 'Photoshop'],
      images: [
        {
          src: '/Posting/Projects/DPWH.jpg',
          caption: 'DPWH Project Monitoring Showcase — Social Media Posting Layout',
        },
      ],
      featured: true,
    },
    {
      id: 'eduvote',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'EduVote Election System — Posting Layout',
      description:
        'Promotional presentation and social media posting layout highlighting both Admin Dashboard and Student Ballot interface features.',
      tags: ['Posting Layout', 'UI Presentation', 'Social Media Graphic', 'Photoshop'],
      images: [
        {
          src: '/Posting/EduVote/ADMIN SIDE.jpg',
          caption: 'EduVote Admin Side — Presentation Layout',
        },
        {
          src: '/Posting/EduVote/STUD SIDE.png',
          caption: 'EduVote Student Side — Ballot Interface Layout',
        },
      ],
      featured: true,
    },
    {
      id: 'infra-app',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'InfraApp — Mobile & Web Posting Layout',
      description:
        'Multi-slide promotional graphics and social media layout designed to showcase mobile inspection tools and infrastructure management dashboards.',
      tags: ['Posting Layout', 'Mobile UI Showcase', 'Social Media Graphic'],
      images: [
        {
          src: '/Posting/InfraApp/1st.png',
          caption: 'InfraApp Feature Overview & Main Dashboard Layout',
        },
        {
          src: '/Posting/InfraApp/2nd.png',
          caption: 'InfraApp Detailed Project Inspection View Layout',
        },
        {
          src: '/Posting/InfraApp/3rd.jpg',
          caption: 'InfraApp Status Tracking & Field Reports Layout',
        },
      ],
      featured: true,
    },
    {
      id: 'card-design-1',
      category: 'business-cards',
      categoryLabel: 'Business Cards',
      title: 'Corporate Minimalist Business Card',
      description:
        'Double-sided corporate business card featuring clean typography, structured contact layout, and modern QR code integration for instant digital networking.',
      tags: ['Print Design', 'Branding', 'Minimalist', 'QR Integration', 'Photoshop'],
      images: [
        {
          src: '/Business Cards/Front.png',
          caption: 'Business Card 1 — Front Side',
        },
        {
          src: '/Business Cards/Back.png',
          caption: 'Business Card 1 — Back Side',
        },
      ],
      featured: true,
    },
    {
      id: 'card-design-2',
      category: 'business-cards',
      categoryLabel: 'Business Cards',
      title: 'Modern Dark Theme Business Card',
      description:
        'High-contrast professional business card design tailored for modern creative professionals with sleek geometric accents.',
      tags: ['Print Design', 'Dark Mode', 'Corporate Identity', 'Card Layout'],
      images: [
        {
          src: '/Business Cards/Front (1).png',
          caption: 'Business Card 2 — Front Side Layout',
        },
        {
          src: '/Business Cards/Back (1).png',
          caption: 'Business Card 2 — Back Side Layout',
        },
      ],
      featured: true,
    },
    {
      id: 'haribon-poster',
      category: 'posters',
      categoryLabel: 'Posters & Media',
      title: 'Haribon Publication & Event Poster',
      description:
        'Bold editorial poster design and visual art piece crafted for Haribon, featuring expressive layout composition and artistic typography.',
      tags: ['Graphic Art', 'Publication', 'Poster Design', 'Typography', 'Illustrator'],
      images: [
        {
          src: '/Posting/Haribon/HARIBON.jpg',
          caption: 'Haribon Official Publication & Art Poster',
        },
      ],
      featured: true,
    },
    {
      id: 'web-mob-admission',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'Web & Mobile Admission — Posting Layout',
      description:
        'Social media graphic layout showcasing the responsive student application and admission portal workflow for digital posting.',
      tags: ['Posting Layout', 'Graphic Design', 'Promotional Media', 'Photoshop'],
      images: [
        {
          src: '/Posting/Projects/web&mob admission.jpg',
          caption: 'Web & Mobile Admission Portal — Posting Layout',
        },
      ],
    },
    {
      id: 'accounting-system',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'Accounting System — Posting Layout',
      description:
        'Social media presentation graphic designed to highlight accounting ledger modules, invoices, and financial overview screens.',
      tags: ['Posting Layout', 'Feature Presentation', 'Graphic Design'],
      images: [
        {
          src: '/Posting/Projects/accounting.jpg',
          caption: 'Accounting System Overview & Records Screen — Posting Layout',
        },
      ],
    },
    {
      id: 'eadd-system',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'E-Address (EADD) — Posting Layout',
      description:
        'Graphic layout and promotional visual crafted for posting the digital electronic address locator interface.',
      tags: ['Posting Layout', 'Graphic Design', 'Visual Presentation'],
      images: [
        {
          src: '/Posting/Projects/eadd.jpg',
          caption: 'E-Address System Interface — Posting Layout',
        },
      ],
    },
    {
      id: 'social-media-posting',
      category: 'posters',
      categoryLabel: 'Posters & Media',
      title: 'Social Media Announcement & Event Graphic',
      description:
        'Vibrant digital marketing poster tailored for social media engagement, announcements, and promotional campaigns.',
      tags: ['Social Media Art', 'Marketing Graphic', 'Promotional Poster', 'Photoshop'],
      images: [
        {
          src: '/Posting/For Posting.jpg',
          caption: 'Social Media Campaign & Event Announcement Poster',
        },
      ],
    },
    {
      id: 'brand-logo',
      category: 'branding',
      categoryLabel: 'Branding & Graphics',
      title: 'Vector Brand Identity & Logo Design',
      description:
        'Custom vector identity mark, emblem, and brand assets created with precise geometric balance and timeless appeal.',
      tags: ['Brand Identity', 'Vector Art', 'Logo Design', 'Illustrator'],
      images: [
        {
          src: '/Posting/LOGO1.png',
          caption: 'Custom Brand Logo & Identity Asset',
        },
      ],
    },
    {
      id: 'ui-design-showcase',
      category: 'posting-layouts',
      categoryLabel: 'Posting Layouts',
      title: 'Web & Mobile UI — Posting Layout Showcase',
      description:
        'Curated collection of graphic layouts, UI screens, and application mockup presentation graphics designed for posting and digital publication.',
      tags: ['Posting Layout Design', 'Mockup Presentation', 'Graphic Design', 'Photoshop'],
      images: [
        {
          src: '/Posting/Projects/1st (1).png',
          caption: 'Web UI Design Showcase — Screen 1 Layout',
        },
        {
          src: '/Posting/Projects/2nd (1).png',
          caption: 'Web UI Design Showcase — Screen 2 Layout',
        },
        {
          src: '/Posting/Projects/3rd.png',
          caption: 'Web UI Design Showcase — Screen 3 Layout',
        },
        {
          src: '/Posting/Projects/4th.png',
          caption: 'Web UI Design Showcase — Screen 4 Layout',
        },
        {
          src: '/Posting/Projects/5th.jpg',
          caption: 'Web UI Design Showcase — Screen 5 Layout',
        },
      ],
    },
  ],
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Works & Outputs' },
    { id: 'contact', label: 'Contact' },
  ],
};
