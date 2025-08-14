export type ProjectStatus = 'live' | 'development' | 'coming-soon' | "delivered-to-client";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;       // main thumbnail
  images: string[];    // extra screenshots
  link: string;        // main URL
  tags: string[];
  rating: number;
  reviews: string;
  date: string;
  status: ProjectStatus;
}
export const projects: Project[] = [
  {
    id: 1,
    title: 'NoteNexus — Website',
    description:
      "NoteNexus is your all-in-one hub for community updates, learning resources, and collaboration. It combines: Notes & Tips — Share knowledge, study guides, and quick advice in an organized format. Dashboards — Track activities, progress, and community insights. Announcements — Post important updates with search and pinning. Events — Manage schedules, RSVPs, and attendance. Moderation Tools — Keep discussions respectful and organized with robust admin controls. Powered by a React frontend and Node.js + PostgreSQL backend, NoteNexus is fast, secure, and responsive — accessible from desktop, tablet, or mobile.",
    image: '/images/notenexus.png',
    images: [
      '/images/notenexus/image1.png',
      '/images/notenexus/image2.png',
      '/images/notenexus/image3.png',
      '/images/notenexus/image4.png',
      '/images/notenexus/image5.png',
      '/images/notenexus/image6.png',
      '/images/notenexus/image7.png',
      '/images/notenexus/image8.png',
      '/images/notenexus/image9.png',
      '/images/notenexus/image10.png',
    ],
    link: 'https://notenexuskiet.netlify.app/',
    tags: ['React', 'TypeScript', 'Tailwind', 'Dashboards', 'Accessibility', "node.js", 'PostgreSQL', 'Prisma', 'Moderation'],
    rating: 4.8,
    reviews: '5k',
    date: '2025',
    status: 'live'
  },
  {
    id: 2,
    title: 'CPByte Student Portal',
    description:
      'A full-stack student portal for CPByte with role-based access, notes sharing, announcements, events, and real-time moderation. Built with Express.js, Prisma, PostgreSQL, JWT auth, and S3 file storage.',
    image: '/images/cpbyte.png',
    images: [
      '/images/cpbyte/image1.jpg',
      '/images/cpbyte/image2.jpg',
      '/images/cpbyte/image3.jpg',
      '/images/cpbyte/image4.jpg',
      '/images/cpbyte/image5.jpg',
      '/images/cpbyte/image6.jpg',
      '/images/cpbyte/image7.jpg',
    ],
    link: 'https://cpbytestudentportal.netlify.app/',
    tags: [
      'Web App',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'JWT Auth',
      'S3 Uploads',
      'Socket.IO',
      'Admin Panel'
    ],
    rating: 0,
    reviews: '—',
    date: '2025',
    status: 'live'
  },
  {
    id: 3,
    title: 'AppFlow — Jetpack Compose Builder',
    description:
      'A no-code/low-code website like FlutterFlow, but tailored for Jetpack Compose. Drag-and-drop UI, component library, theme tokens, and exportable Compose code.',
    image: '/images/Appflow.png',
    images: [
      '/images/appflow/image1.png',
      '/images/appflow/image2.png',
      '/images/appflow/image3.png',
      '/images/appflow/image4.png',
      '/images/appflow/image5.png',
      '/images/appflow/image6.png',
      '/images/appflow/image7.png',
      '/images/appflow/image8.png',
      '/images/appflow/image9.png',
      '/images/appflow/image10.png',
    ],
    link: 'https://appflow-compose.example.com',
    tags: [
      'No-Code',
      'Jetpack Compose',
      'Design-to-Code',
      'Code Generator',
      'Kotlin',
      'Web Platform'
    ],
    rating: 0,
    reviews: '—',
    date: '2025',
    status: 'development'
  },
  {
    id: 4,
    title: 'Aditya Singh — Portfolio',
    description:
      'My personal developer portfolio showcasing projects, skills, and case studies. Built with React + Tailwind + Framer Motion, optimized for performance and accessibility.',
    image: '/images/portfolio.png',
    images: [
      '/images/portfolio.png',
      '/images/portfolio.png'
    ],
    link: 'https://regal-faun-dd9b88.netlify.app/',
    tags: ['Portfolio', 'React', 'Tailwind', 'Framer Motion', 'SEO', 'Vite'],
    rating: 0,
    reviews: '—',
    date: '2025',
    status: 'live'
  },
  {
    id: 5,
    title: 'NoteNexus — Mobile App',
    description:
      'A Flutter app for uploading, browsing, and downloading academic notes with search, filters, and token-based authentication. Integrates with a Node/Prisma backend.',
    image: '/images/notenexusmobile.png',
    images: [
      '/images/notenexusmobile/image1.jpg',
      '/images/notenexusmobile/image2.jpg', 
      '/images/notenexusmobile/image3.jpg',
      '/images/notenexusmobile/image4.jpg',
      '/images/notenexusmobile/image5.jpg',
      '/images/notenexusmobile/image6.jpg',
      '/images/notenexusmobile/image7.jpg',
      '/images/notenexusmobile/image8.jpg',
      '/images/notenexusmobile/image9.jpg',
    ],
    link: 'https://play.google.com/store/apps/details?id=notenexus',
    tags: [
      'Flutter',
      'Mobile App',
      'Notes',
      'File Uploads',
      'Search & Filters',
      'REST API'
    ],
    rating: 0,
    reviews: '—',
    date: '2025',
    status: 'development'
  },
  {
    id: 6,
    title: 'MK-Services — App',
    description:
      'A RO-service-booking app with listings, scheduling, order tracking, and secure payments. Clean UI with Flutter; backend powered by Express and Prisma.',
    image: '/images/mkservice.png',
    images: [
      '/images/mkservice/i1.jpg',
      '/images/mkservice/i2.jpg',
      '/images/mkservice/i3.jpg',
      '/images/mkservice/i4.jpg',
      '/images/mkservice/i5.jpg',
      '/images/mkservice/i6.jpg',
      '/images/mkservice/i7.jpg',
      '/images/mkservice/i8.jpg',
      '/images/mkservice/i9.jpg',
      '/images/mkservice/i10.jpg',
      '/images/mkservice/i11.jpg',
      '/images/mkservice/i12.jpg',
    ],
    link: 'https://mk-services.example.com',
    tags: [
      'Flutter',
      'Service Booking',
      'Payments',
      'Express.js',
      'Prisma',
      'PostgreSQL'
    ],
    rating: 0,
    reviews: '—',
    date: '2024',
    status: 'delivered-to-client'
  },
  {
    id: 7,
    title: 'Open Source @ GitHub',
    description:
      'Hey—check out my GitHub for code, issues, and contributions: https://github.com/aditya3012singh',
    image: '/images/github.png',
    images: [
      '/images/gitmine.png',

    ],
    link: 'https://github.com/aditya3012singh',
    tags: ['GitHub', 'Open Source', 'Projects', 'Code'],
    rating: 0,
    reviews: '—',
    date: '2025',
    status: 'live'
  }
];
