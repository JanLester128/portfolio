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
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:occ.camus.janlester@gmail.com',
    phone: 'tel:09500935788',
  },
  about: {
    paragraphs: [
      "I am an Information Technology graduate specializing in multimedia, video editing, layout design, and web development. With professional experience as a Video Editor and Layout Artist intern at the Department of Public Works and Highways (DPWH – CDO 1st DEO), I have designed executive annual report layouts, produced public information videos, and developed creative visual materials for government and community initiatives.",
      "Beyond multimedia design, I develop full-stack responsive web systems using HTML, CSS, JavaScript, PHP, and MySQL. Backed by extensive leadership experience as Class Mayor/President and Vice President of Interns at Opol Community College, I bring a balance of creative ingenuity, technical execution, and strong team coordination to every project.",
    ],
    highlights: [
      'OJT Experience at DPWH CDO 1st DEO (Annual Report & Multimedia)',
      'BS in Information Technology — Opol Community College',
      'Leadership: Class Mayor/President & Vice President of Interns',
      'Proficient in Adobe Suite (Photoshop, Illustrator, Premiere Pro)',
      'Full Web Stack: HTML5, CSS3, JavaScript, PHP, MySQL',
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
        'Facilitated student meetings, managed student concerns, and coordinated university announcements.',
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
        'HTML5 & CSS3',
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
    { id: 'web', label: 'Web & Systems' },
    { id: 'business-cards', label: 'Business Cards' },
    { id: 'posters', label: 'Posters & Media' },
    { id: 'branding', label: 'Branding & Graphics' },
  ],
  projects: [
    {
      id: 'dpwh-project',
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'DPWH Project Monitoring System',
      description:
        'Public works and highways infrastructure project management interface designed for structured progress tracking, milestone auditing, and reporting at DPWH.',
      tags: ['Web System', 'UI/UX', 'Government Project', 'DPWH'],
      images: [
        {
          src: '/Posting/Projects/DPWH.jpg',
          caption: 'DPWH Project Monitoring Interface & Engineering Records',
        },
      ],
      featured: true,
    },
    {
      id: 'eduvote',
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'EduVote — Online Voting System',
      description:
        'A comprehensive digital election platform featuring a dedicated administrative dashboard for candidate controls and student-side ballot casting interface.',
      tags: ['Web System', 'UI/UX Design', 'Admin Portal', 'Student Portal', 'PHP/MySQL'],
      images: [
        {
          src: '/Posting/EduVote/ADMIN SIDE.jpg',
          caption: 'EduVote Admin Side — Election Dashboard & Candidate Controls',
        },
        {
          src: '/Posting/EduVote/STUD SIDE.png',
          caption: 'EduVote Student Side — Secure Ballot Casting Interface',
        },
      ],
      featured: true,
    },
    {
      id: 'infra-app',
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'InfraApp — Infrastructure Management & Inspection',
      description:
        'Modern mobile and web application interface for tracking municipal infrastructure, asset inspections, and ongoing field reports.',
      tags: ['Mobile UI', 'Web App', 'System Design', 'Inspection App'],
      images: [
        {
          src: '/Posting/InfraApp/1st.png',
          caption: 'InfraApp Feature Overview & Main Dashboard',
        },
        {
          src: '/Posting/InfraApp/2nd.png',
          caption: 'InfraApp Detailed Project Inspection View',
        },
        {
          src: '/Posting/InfraApp/3rd.jpg',
          caption: 'InfraApp Status Tracking & Field Reports',
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
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'Web & Mobile Admission System',
      description:
        'Responsive student admissions and application portal optimized for both desktop web and mobile devices with streamlined form workflows.',
      tags: ['Web & Mobile', 'Admission Portal', 'UI/UX', 'Responsive'],
      images: [
        {
          src: '/Posting/Projects/web&mob admission.jpg',
          caption: 'Web & Mobile Admission Portal Interface',
        },
      ],
    },
    {
      id: 'accounting-system',
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'Accounting & Financial Management System',
      description:
        'Financial dashboard and ledger management software interface for invoices, balance tracking, and accounting records.',
      tags: ['Financial UI', 'Dashboard', 'Ledger System', 'Web Application'],
      images: [
        {
          src: '/Posting/Projects/accounting.jpg',
          caption: 'Accounting System Overview & Records Screen',
        },
      ],
    },
    {
      id: 'onsts-system',
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'ONSTS Management Platform',
      description:
        'Online student tracking and record management system designed for institutional data administration and student monitoring.',
      tags: ['Student Tracking', 'Web Platform', 'Data Management'],
      images: [
        {
          src: '/Posting/Projects/onsts.jpg',
          caption: 'ONSTS System Administration & Overview',
        },
      ],
    },
    {
      id: 'eadd-system',
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'E-Address (EADD) Record System',
      description:
        'Digital address validation and electronic locator system interface for structured recordkeeping and location databases.',
      tags: ['Record System', 'Database UI', 'Web Tool'],
      images: [
        {
          src: '/Posting/Projects/eadd.jpg',
          caption: 'E-Address System Interface',
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
      category: 'web',
      categoryLabel: 'Web & Systems',
      title: 'UI/UX Web Design & App Mockup Gallery',
      description:
        'A comprehensive collection of modern web UI screens, responsive layout mockups, and application flow presentations.',
      tags: ['UI Mockups', 'Web Showcase', 'Product Design', 'Visual Layouts'],
      images: [
        {
          src: '/Posting/Projects/1st (1).png',
          caption: 'Web UI Design Showcase — Screen 1',
        },
        {
          src: '/Posting/Projects/2nd (1).png',
          caption: 'Web UI Design Showcase — Screen 2',
        },
        {
          src: '/Posting/Projects/3rd.png',
          caption: 'Web UI Design Showcase — Screen 3',
        },
        {
          src: '/Posting/Projects/4th.png',
          caption: 'Web UI Design Showcase — Screen 4',
        },
        {
          src: '/Posting/Projects/5th.jpg',
          caption: 'Web UI Design Showcase — Screen 5',
        },
      ],
    },
  ],
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Portfolio Works' },
    { id: 'contact', label: 'Contact' },
  ],
};
