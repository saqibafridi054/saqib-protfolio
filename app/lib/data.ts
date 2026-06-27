export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  "Mobile Development": {
    color: "primary" as const,
    tags: ["Flutter", "Dart", "Android", "iOS", "Responsive UI", "Material Design", "Cupertino"],
  },
  "Backend & Storage": {
    color: "secondary" as const,
    tags: ["Firebase", "Firestore", "REST API", "SQLite", "Hive", "Auth", "Cloud Functions"],
  },
  "State Management": {
    color: "tertiary" as const,
    tags: ["Bloc", "Provider", "Riverpod", "GetX", "setState", "MobX"],
  },
  "Dev Tools": {
    color: "neutral" as const,
    tags: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Postman", "CI/CD"],
  },
};

export const SERVICES = [
  {
    icon: "Smartphone",
    title: "Flutter App Development",
    description:
      "End-to-end cross-platform mobile applications for Android & iOS using Flutter and Dart. From architecture to deployment, I deliver performant, pixel-perfect apps.",
  },
  {
    icon: "Layers",
    title: "UI Implementation",
    description:
      "Converting Figma/XD designs into flawless Flutter UIs with smooth animations, responsive layouts, and custom widgets that delight users.",
  },
  {
    icon: "Flame",
    title: "Firebase Integration",
    description:
      "Full Firebase ecosystem integration—Authentication, Firestore, Realtime Database, Cloud Functions, Storage, and Push Notifications.",
  },
  {
    icon: "Plug",
    title: "REST API Integration",
    description:
      "Seamless integration with third-party REST APIs using Dio/http, JSON serialization, error handling, and offline-first strategies.",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Deep profiling and optimization for Flutter apps—reducing jank, lowering memory footprint, and achieving 60fps rendering across all devices.",
  },
  {
    icon: "Wrench",
    title: "Maintenance & Bug Fixing",
    description:
      "Ongoing maintenance, crash debugging, dependency upgrades, and feature iteration so your app stays healthy and competitive.",
  },
];

export const PROJECTS = [
  {
    title: "Hospital Management App",
    description:
      "Enterprise-grade healthcare platform with doctor scheduling, patient records, appointment booking, and real-time analytics dashboard.",
    tags: ["Flutter", "Firebase", "Bloc", "REST API"],
    image: "/projects/hospital.jpg",
    imageAlt: "Hospital Management App screenshot",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "E-Commerce App",
    description:
      "Feature-rich shopping experience with real-time inventory, Stripe payments, personalized recommendations, and order tracking.",
    tags: ["Flutter", "Dart", "Stripe", "Firestore"],
    image: "/projects/ecommerce.jpg",
    imageAlt: "E-Commerce App screenshot",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Food Delivery App",
    description:
      "On-demand food delivery with live map tracking, restaurant listings, cart management, and real-time courier updates.",
    tags: ["Flutter", "Google Maps", "Firebase", "Provider"],
    image: "/projects/food.jpg",
    imageAlt: "Food Delivery App screenshot",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging with end-to-end encryption, media sharing, group chats, and read receipts powered by Firestore.",
    tags: ["Flutter", "Firestore", "GetX", "WebSocket"],
    image: "/projects/chat.jpg",
    imageAlt: "Chat Application screenshot",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive workout logging, custom exercise plans, progress analytics, and health metric visualization.",
    tags: ["Flutter", "Hive", "Riverpod", "Charts"],
    image: "/projects/fitness.jpg",
    imageAlt: "Fitness Tracker screenshot",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Task Manager",
    description:
      "Clean Kanban-style productivity app with drag-and-drop, deadlines, priority tags, and team collaboration features.",
    tags: ["Flutter", "SQLite", "Bloc", "Drag&Drop"],
    image: "/projects/tasks.jpg",
    imageAlt: "Task Manager screenshot",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Flutter Developer",
    company: "Freelance & Personal Projects",
    period: "2022 — Present",
    description:
      "Delivered 50+ Flutter applications for clients across healthcare, e-commerce, fintech, and logistics sectors. Built scalable architectures using Bloc/Riverpod and integrated complex Firebase backends.",
    tags: ["Flutter", "Firebase", "Bloc", "REST API"],
  },
  {
    role: "Flutter Developer",
    company: "Sarhad University Initiatives",
    period: "2021 — 2022",
    description:
      "Led mobile development for university tech projects including a campus event app and a student portal. Collaborated with a cross-functional team using Agile methodology.",
    tags: ["Flutter", "Dart", "Agile", "Firebase"],
  },
  {
    role: "Mobile Development Intern",
    company: "Self-Paced Specialization",
    period: "2020 — 2021",
    description:
      "Completed intensive Flutter and Dart training, building 10+ personal projects covering advanced UI, state management, and API integration patterns.",
    tags: ["Flutter", "Dart", "Provider", "REST API"],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Sarhad University of Science & IT",
    period: "2019 — 2023",
    description:
      "Focused on software engineering, algorithms, data structures, and mobile application development. Graduated with honors.",
    tags: ["CS", "Software Engineering", "Algorithms"],
  },
  {
    degree: "Flutter & Dart — Advanced Certification",
    institution: "Udemy / Online Platforms",
    period: "2021",
    description:
      "Completed advanced Flutter development course covering Bloc, Firebase, clean architecture, and publishing to App Store & Play Store.",
    tags: ["Flutter", "Dart", "Clean Architecture"],
  },
];

export const TESTIMONIALS = [
  {
    name: "James Carter",
    role: "Tech Lead @ AppStream",
    avatar: "/avatars/james.jpg",
    quote:
      "Saqib delivered an exceptionally polished Flutter app ahead of schedule. His understanding of performance and architecture saved us months of refactoring. Truly elite level work.",
  },
  {
    name: "Maria Lopez",
    role: "Product Manager",
    avatar: "/avatars/maria.jpg",
    quote:
      "A developer who truly understands UI/UX. The app he built for us feels native, fast, and polished. Highly recommended for any serious mobile project.",
  },
  {
    name: "Tariq Hassan",
    role: "Startup Founder",
    avatar: "/avatars/tariq.jpg",
    quote:
      "Saqib turned our rough idea into a beautiful, functional product in just 6 weeks. Communication was seamless and the code quality exceeded our expectations.",
  },
];

export const ACHIEVEMENTS = [
  { value: "50+", label: "Apps Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "99.9%", label: "Crash-Free Rate" },
];

export const CERTIFICATIONS = [
  {
    title: "Flutter & Dart — The Complete Guide",
    issuer: "Udemy",
    year: "2021",
  },
  {
    title: "Firebase for Flutter Developers",
    issuer: "Google Developers",
    year: "2022",
  },
  {
    title: "Clean Architecture in Flutter",
    issuer: "Reso Coder",
    year: "2022",
  },
  {
    title: "Advanced State Management",
    issuer: "Very Good Ventures",
    year: "2023",
  },
];

export const CONTACT_INFO = {
  phone: "+92 334 8441507",
  email: "saqibafridiy009@gmail.com",
  location: "Peshawar, Pakistan",
  availability: "Available for freelance",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/saqib-afridi",
  linkedin: "https://linkedin.com/in/saqib-afridi",
  twitter: "https://twitter.com/saqib_afridi",
};
