export const projects = [
  {
    title: "Team Renaissance | Official Cultural Society Website of AKGEC",
    slug: "team-renaissance-website",
    tagline:
      "A vibrant platform built to represent the cultural spirit of AKGEC through events, showcases, and recruitments.",
    overview:
      "The official website for Team Renaissance, the cultural society of AKGEC, was designed to highlight college achievements, showcase events, introduce team members, and serve as a centralized portal for society-related activities. It also functioned as a recruitment platform to onboard new members. The site emphasizes interactivity, responsiveness, and ease of navigation, delivering an engaging experience for students and visitors alike.",
    features: [
      "Fully responsive design for seamless cross-device usability",
      "Interactive UI/UX with smooth transitions using Framer Motion",
      "Dedicated sections for events, team members, and college highlights",
      "Form integration for event participation and recruitments via NoCodeAPI",
      "Secure media storage and data handling using Supabase",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "NoCodeAPI",
      "Supabase",
    ],
    challenges: [
      "Designing a modular layout that remains responsive and fast across all devices",
      "Creating an engaging user experience while managing performance overhead from animations",
      "Building a recruitment and event form system that integrates with external APIs",
      "Handling media assets securely with scalable backend storage",
    ],
    learnings: [
      "Improved component-based architecture and state management with React",
      "Leveraged Tailwind CSS to rapidly develop a clean and consistent UI",
      "Mastered animation workflows using Framer Motion for production-level UIs",
      "Integrated third-party APIs for real-time form data capture and backend-less operations",
    ],
    feedback: false,
    links: {
      live: "https://renaissanceakgec.club",
      github: "",
    },
  },
  {
    title: "Portfolio | Prakhar Tripathi",
    slug: "portfolio",
    tagline:
      "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
    overview:
      "My personal portfolio is built to highlight my journey as a developer. It integrates advanced features like profile views tracking, a love count mechanism, and server-side actions for seamless interactivity and performance.",
    features: [
      "API to track and display profile views in real-time.",
      "Love count feature to allow visitors to express appreciation for the work.",
      "Implemented server actions using the latest Next.js features.",
      "Dynamic project listing with slug-based routing for detailed pages.",
      "Mobile-responsive and optimized for all devices.",
      "Integration with MongoDB using Mongoose for efficient data management.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Mongoose",
      "MongoDB",
      "Tailwind CSS",
      "Radix UI",
      "TypeScript",
    ],
    challenges: [
      "Implementing real-time tracking for profile views efficiently.",
      "Designing and integrating a scalable database schema with Mongoose.",
      "Utilizing server actions for seamless and performant interactions.",
      "Ensuring cross-browser and device compatibility for UI components.",
    ],
    learnings: [
      "Deepened knowledge of Next.js server actions and their use cases.",
      "Gained experience in designing interactive UI components.",
      "Enhanced understanding of MongoDB operations and ORM with Mongoose.",
      "Improved ability to optimize performance for web applications.",
    ],
    feedback: true,
    links: {
      live: "https://abhishekg.com.np",
      github: "https://github.com/heyprakhar/prakhartripathi",
    },
  },
  {
    title: "TinDog | A Catalogue Web App for Dog Lovers",
    slug: "tindog",
    tagline:
      "A stylish and responsive frontend-only web application for browsing dog profiles, inspired by Tinder.",
    overview:
      "TinDog is a dynamic frontend-only catalogue web application built to deliver an engaging browsing experience for dog lovers. Developed using React, HTML5, and Bootstrap, the platform features a visually appealing and fully responsive UI. It mimics the swipeable catalog feel of Tinder, tailored for dogs. The interface ensures smooth navigation and user interaction, with modern styling and animations for enhanced accessibility across devices.",
    features: [
      "Responsive and mobile-first design using Bootstrap and custom CSS",
      "Interactive UI with engaging layout and hover effects",
      "Single-page application built with React",
      "Smooth navigation with fast rendering and transitions",
      "Visually rich catalogue interface with swipe-inspired design",
    ],
    techStack: ["React.js", "HTML5", "Bootstrap", "CSS3"],
    challenges: [
      "Crafting a UI that is both modern and responsive across device sizes",
      "Creating an interactive, swipe-like experience using only frontend tools",
      "Ensuring accessibility and ease of use without a backend",
      "Structuring reusable components for a clean codebase",
    ],
    learnings: [
      "Strengthened frontend design principles and responsive development",
      "Enhanced component-based architecture and state management in React",
      "Learned effective Bootstrap customization and grid system usage",
      "Improved UI/UX skills through layout optimization and interaction design",
    ],
    feedback: false,
    links: {
      live: "https://tindog-reactt.vercel.app/",
      github: "https://vercel.com/prakhar-s-projects-84d5911f/tindog-reactt",
    },
  },
  {
    title: "KrishnaBhumi | Real Estate Platform for Premium Properties",
    slug: "krishna-bhumi",
    tagline:
      "A sleek and modern real-estate web application showcasing premium properties and investment opportunities.",
    overview:
      "KrishnaBhumi is a real-estate website built using React.js, Node.js, and Tailwind CSS to provide an elegant, performance-optimized platform for users to explore premium properties. The site features a clean design, intuitive navigation, and responsive layouts, offering a seamless experience for potential investors and buyers. Interactive carousels, smooth animations, and a dynamic property listing system enhance user engagement and trust.",
    features: [
      "Fully responsive layout for optimal viewing across devices",
      "Dynamic property listings with filters and categories",
      "Framer Motion animations for smooth transitions and modals",
      "Interactive image galleries and carousels using Swiper.js",
      "Integrated contact forms with backend support for lead capture",
      "Icon-rich UI using React Icons for clarity and aesthetics",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "Swiper.js",
    ],
    challenges: [
      "Structuring scalable and maintainable frontend components",
      "Designing a high-performance, SEO-friendly UI for real-estate search",
      "Managing property data with backend integration and API routing",
      "Ensuring mobile compatibility while retaining visual richness",
    ],
    learnings: [
      "Developed reusable and animated UI components using Framer Motion",
      "Enhanced API communication and backend routing with Node.js and Express",
      "Strengthened frontend design using Tailwind CSS utility-first approach",
      "Learned to optimize performance and image handling for real estate UI",
    ],
    feedback: true,
    links: {
      live: "https://krishnabhumi.vercel.app/",
      github: "https://vercel.com/prakhar-s-projects-84d5911f/krishnabhumi",
    },
  },
  {
    title: "Marker List Maker | CRUD-Based Learning Project",
    slug: "marker-list-maker",
    tagline:
      "A simple yet effective React-based app to create, update, and delete a list of favorite markers.",
    overview:
      "Marker List Maker is a beginner-friendly project built using React.js and Tailwind CSS to understand the core concepts of CRUD operations in a practical setting. The application allows users to add, update, and delete markers (or any custom items) in a clean, responsive interface. This project was developed for learning purposes, focusing on React state management, form handling, and conditional rendering.",
    features: [
      "Create, Read, Update, and Delete functionality for list items",
      "Responsive and clean UI built with Tailwind CSS",
      "Form validation using React Hook Form",
      "Minimalist modal system for editing entries using Headless UI",
      "Real-time updates and smooth state-driven interface",
    ],
    techStack: ["React.js", "Tailwind CSS", "React Hook Form", "Headless UI"],
    challenges: [
      "Understanding and implementing basic CRUD operations in React",
      "Managing local state effectively without external databases",
      "Creating reusable and styled components with Tailwind CSS",
      "Implementing modal and form systems with minimal dependencies",
    ],
    learnings: [
      "Gained foundational knowledge of CRUD operations in frontend development",
      "Practiced state and form handling using modern React libraries",
      "Learned to use Tailwind CSS for clean and fast styling",
      "Explored modular design principles and conditional UI rendering",
    ],
    feedback: false,
    links: {
      live: "https://market-list-maker.vercel.app/",
      github:
        "https://vercel.com/prakhar-s-projects-84d5911f/market-list-maker",
    },
  },
];
