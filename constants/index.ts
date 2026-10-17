export type SkillCategory = {
  category: string;
  items: { title: string; icon?: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { title: "Java", icon: "java" },
      { title: "SQL", icon: "mysql" },
      { title: "JavaScript", icon: "javascript" },
    ],
  },
  {
    category: "Backend & Architecture",
    items: [
      { title: "Spring Boot", icon: "spring" },
      { title: "Spring Cloud", icon: "spring" },
      { title: "Spring Security", icon: "spring" },
      { title: "Microservices" },
      { title: "RESTful APIs" },
      { title: "MVC Architecture" },
      { title: "Event-Driven Architecture" },
      { title: "FHIR APIs" },
    ],
  },
  {
    category: "Messaging & Caching",
    items: [
      { title: "Apache Kafka", icon: "kafka" },
      { title: "Redis", icon: "redis" },
      { title: "Server-Sent Events (SSE)" },
    ],
  },
  {
    category: "Databases",
    items: [
      { title: "MySQL", icon: "mysql" },
      { title: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "Security",
    items: [
      { title: "JWT" },
      { title: "Role-Based Access Control (RBAC)" },
      { title: "Authentication & Authorization" },
      { title: "Audit Logging" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { title: "AWS EC2", icon: "aws" },
      { title: "CI/CD" },
      { title: "Git", icon: "git" },
      { title: "GitHub", icon: "gitHub" },
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      { title: "JUnit" },
      { title: "Mockito" },
      { title: "Unit Testing" },
      { title: "Integration Testing" },
      { title: "Postman", icon: "postman" },
      { title: "IntelliJ IDEA" },
      { title: "VS Code" },
      { title: "Code Reviews" },
      { title: "Debugging" },
      { title: "Logging" },
    ],
  },
  {
    category: "CS Fundamentals",
    items: [
      { title: "Data Structures & Algorithms" },
      { title: "Object-Oriented Programming" },
      { title: "SOLID Principles" },
      { title: "Design Patterns" },
      { title: "Low-Level Design" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { title: "React", icon: "react" },
      { title: "Next.js", icon: "nextjs" },
      { title: "Vite" },
      { title: "Redux Toolkit" },
      { title: "Tailwind CSS", icon: "tailwind" },
      { title: "HTML5", icon: "html" },
      { title: "CSS3", icon: "css" },
    ],
  },
];

export const mySkills = skillCategories.flatMap((group) => group.items);
