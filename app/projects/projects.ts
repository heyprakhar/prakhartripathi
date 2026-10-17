export const projects = [
  {
    title: "Task Management Service — Spring Boot Microservices",
    slug: "task-management-service",
    tagline:
      "A scalable task management backend built with Spring Boot, Kafka, Redis, and MySQL, following a clean layered REST API architecture.",
    overview:
      "Task Management Service is a layered REST API designed to demonstrate production backend practices: event-driven inter-service workflows via Apache Kafka, Redis caching for frequently accessed data, Spring Security with custom permission annotations for fine-grained authorization, centralized scheduling for recurring and time-based operations, and clearly separated controller, service, repository, and DTO layers with robust exception handling, audit logging, and API validation.",
    features: [
      "Clean, layered REST API architecture with controller, service, repository, and DTO separation",
      "Role-Based Access Control (RBAC) using Spring Security and custom permission annotations at the controller and service layers",
      "Apache Kafka for asynchronous, event-driven communication and reliable inter-service workflows",
      "Redis caching to improve API response times and reduce redundant database operations",
      "Centralized scheduling workflows for automated task execution, recurring tasks, and time-based operations",
      "Robust exception handling, audit logging, and API validation",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Apache Kafka",
      "Redis",
      "MySQL",
      "REST APIs",
    ],
    challenges: [
      "Designing a clean, maintainable layered structure for a backend intended to evolve into multiple services",
      "Modeling permission-based authorization so it is enforceable at both controller and service layers",
      "Keeping Kafka-driven workflows reliable while cache and database stay consistent",
      "Centralizing scheduling without losing visibility into job execution and failures",
    ],
    learnings: [
      "Deeper fluency with Spring Boot, Spring Security, and layered REST design",
      "Hands-on experience modeling event-driven workflows with Apache Kafka",
      "Practical patterns for Redis caching and cache invalidation around REST endpoints",
      "Designing authorization and audit logging as first-class concerns, not add-ons",
    ],
    feedback: true,
    links: {
      live: "",
      github: "",
    },
  },
  {
    title: "Team Renaissance — Official Consumer Platform",
    slug: "team-renaissance",
    tagline:
      "A high-traffic, full-stack consumer platform used for official college recruitment and engagement workflows at AKGEC.",
    overview:
      "Team Renaissance is the official consumer-facing platform for the cultural society of Ajay Kumar Garg Engineering College. It supports official recruitment and engagement workflows and has been iterated on using deployment analytics and user feedback from live usage cycles. The backend APIs are built with Spring Boot and MongoDB, and the frontend is a responsive React, Next.js, and Tailwind CSS application.",
    features: [
      "Backend APIs built with Spring Boot and MongoDB",
      "Responsive frontend built with React, Next.js, and Tailwind CSS",
      "Official recruitment and engagement workflows for a large college community",
      "Iterated continuously using deployment analytics and user feedback from live usage cycles",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    challenges: [
      "Supporting high-traffic recruitment windows with a responsive, reliable UX",
      "Coordinating backend data models with evolving frontend requirements",
      "Translating live-usage analytics into focused product improvements",
    ],
    learnings: [
      "End-to-end ownership of a consumer platform with real users and real traffic",
      "Working across Spring Boot APIs and a modern React/Next.js frontend",
      "Using production analytics and feedback as the primary signal for what to build next",
    ],
    feedback: false,
    links: {
      live: "https://renaissanceakgec.club",
      github: "",
    },
  },
];
