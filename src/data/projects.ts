import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "psb-bus-tracking",
    title: "PSB Bus Tracking System",
    overview: "Real-time GPS tracking for public buses in Karachi to reduce commuter uncertainty.",
    problem: "PSB needed a centralized system to track their fleet of 50+ buses in real-time, manage routes efficiently, and ensure passenger safety.",
    solution: "Developed a full-stack application with GPS integration, real-time mapping, and an intuitive dashboard for fleet managers.",
    technologies: ["React Native", "Node.js", "Socket.io", "Google Maps API", "MongoDB", "Redis"],
    challenges: ["Real-time data synchronization across devices", "Battery optimization for GPS tracking", "Handling network interruptions gracefully"],
    features: ["Live GPS Tracking", "Route Optimization", "Geofencing Alerts", "Passenger Count Analytics", "Driver Behavior Monitoring", "Maintenance Scheduling"],
    githubUrl: "https://github.com/Menahil43/PSB-Karachi_red_bus_app",
    liveUrl: "#",
    category: "Enterprise"
  },
  {
    id: "quran-gift",
    title: "Quran Gift Shop",
    overview: "An e-commerce platform specializing in premium Islamic gifts, Qurans, and spiritual products with a seamless shopping experience.",
    problem: "The client needed a modern, trustworthy e-commerce platform to sell Islamic products online with secure payments and global shipping.",
    solution: "Built a feature-rich Next.js e-commerce platform with Stripe integration, inventory management, and a beautiful UI.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL" ],
    challenges: ["Implementing multi-currency support", "Building a robust search and filtering system", "Handling complex shipping logic"],
    features: ["Product Catalog", "Shopping Cart", "Secure Payments", "Order Tracking", "Admin Dashboard", "Reviews System"],
    githubUrl: "https://github.com/Menahil43/quran-gift-shop",
    liveUrl: "#",
    category: "E-commerce"
  },
  {
    id: "timetable-management",
    title: "Timetable Management System",
    overview: "A smart university timetable generator that automates scheduling, resolves conflicts, and optimizes resource allocation.",
    problem: "Universities struggled with manual timetable creation, leading to scheduling conflicts and inefficient resource use.",
    solution: "Created an intelligent algorithm-based scheduling system with drag-and-drop interface and conflict detection.",
    technologies: ["PHP", "Python", "HTML", "MySQL", "CSS"],
    challenges: ["Building a constraint satisfaction algorithm", "Handling complex scheduling rules", "Real-time collaboration features"],
    features: ["Auto Schedule Generation", "Conflict Detection", "Resource Management", "Faculty Preferences", "Room Allocation", "Export to PDF"],
    githubUrl: "https://github.com/Menahil43",
    liveUrl: "#",
    category: "Education"
  },
  {
    id: "inner-self",
    title: "Inner Self",
    overview: "A mental wellness app that uses AI to provide personalized meditation, mood tracking, and cognitive behavioral therapy exercises.",
    problem: "Mental health resources are expensive and inaccessible. Many people need affordable, private, and personalized wellness tools.",
    solution: "Built an AI-powered wellness platform with NLP-based mood analysis, personalized meditation, and CBT exercises.",
    technologies: ["Python"],
    challenges: ["Ensuring data privacy and HIPAA compliance", "Training accurate mood detection models", "Creating engaging UI for sensitive content"],
    features: ["AI Mood Analysis", "Personalized Meditations", "CBT Exercises", "Progress Tracking", "Community Support", "Therapist Directory"],
    githubUrl: "https://github.com/Menahil43/Inner-Self",
    liveUrl: "#",
    category: "HealthTech"
  },
  {
    id: "merge-matrix",
    title: "Merge Matrix",
    overview: "A collaborative data merging platform that intelligently combines datasets from multiple sources with conflict resolution.",
    problem: "Data teams wasted hours manually merging spreadsheets and databases, dealing with duplicates, conflicts, and formatting issues.",
    solution: "Developed an AI-assisted data merging tool with smart conflict resolution and real-time collaboration.",
    technologies: ["Python"],
    challenges: ["Handling large datasets (100k+ rows) in browser", "Building intelligent duplicate detection", "Real-time sync across users"],
    features: ["Smart Merge Algorithms", "Conflict Resolution UI", "Real-time Collaboration", "Version History", "Data Validation", "Export Options"],
    githubUrl: "https://github.com/Menahil43",
    liveUrl: "#",
    category: "Productivity"
  }
];

