export const code = {
  welcome: `// src/main/java/com/prakhar/Welcome.java
package com.prakhar;

public class Welcome {
    public static void main(String[] args) {
        System.out.println("Welcome to Prakhar Tripathi's portfolio!");
        System.out.println("Java Backend Developer | Spring Boot · Microservices · Kafka · Redis");
    }
}
`,

  aboutMe: `public record Developer(String role, String focus, String stack) {
    public String intro() {
        return "I'm %s focused on %s using %s.".formatted(role, focus, stack);
    }
}

var me = new Developer(
    "a Java backend engineer",
    "distributed, event-driven microservices",
    "Spring Boot, Kafka, Redis & MySQL"
);
System.out.println(me.intro());
`,

  skillsTools: `Map<String, List<String>> skills = Map.of(
    "Languages",             List.of("Java", "SQL", "JavaScript"),
    "Backend & Architecture", List.of("Spring Boot", "Spring Cloud", "Spring Security",
                                      "Microservices", "REST APIs", "Event-Driven", "FHIR"),
    "Messaging & Caching",   List.of("Apache Kafka", "Redis", "Server-Sent Events"),
    "Databases",             List.of("MySQL", "MongoDB"),
    "Security",              List.of("JWT", "RBAC", "Auth", "Audit Logging"),
    "Cloud & DevOps",        List.of("AWS EC2", "CI/CD", "Git", "GitHub"),
    "Testing & Tools",       List.of("JUnit", "Mockito", "Postman", "IntelliJ IDEA")
);

skills.forEach((group, items) ->
    System.out.println(group + ": " + String.join(", ", items))
);
`,

  contact: `public class Contact {
    public static final String NAME     = "Prakhar Tripathi";
    public static final String EMAIL    = "talk2prakhartripathi@gmail.com";
    public static final String PHONE    = "+91-8707820311";
    public static final String LOCATION = "Ghaziabad, Uttar Pradesh, India";
    public static final String LINKEDIN = "https://linkedin.com/in/heyprakhar";
    public static final String GITHUB   = "https://github.com/heyprakhar";

    public static void reachOut() {
        System.out.println("Email " + NAME + " at " + EMAIL);
        System.out.println("Or connect on LinkedIn: " + LINKEDIN);
    }
}
`,

  experience: `public class Experience {
    public static void main(String[] args) {
        var role = new Role(
            "Junior Java Developer",
            "Orangemantra — Korecare (US Healthcare Platform)",
            "Jan 2026 – Present"
        );

        var contributions = List.of(
            "Kafka-based distributed transactions with rollback across microservices",
            "Redis caching and inter-service optimization (~30% faster APIs)",
            "Centralized Scheduler Service (~50% less scheduler overhead)",
            "Notification Service: Android/iOS push + SSE, Factory pattern, retries",
            "Spring Security RBAC with @RequirePermission annotation",
            "HIPAA-aligned data handling and ShareData access control"
        );

        System.out.println(role);
        contributions.forEach(c -> System.out.println("  • " + c));
    }
}

record Role(String title, String company, String duration) {}
`,

  projects: `public class Projects {
    public static void main(String[] args) {
        var projects = List.of(
            new Project("Task Management Service",
                        "Spring Boot · Kafka · Redis · MySQL · RBAC"),
            new Project("Team Renaissance",
                        "Spring Boot · MongoDB · React · Next.js · Tailwind")
        );
        projects.forEach(p -> System.out.println(p.name() + " — " + p.stack()));
    }
}

record Project(String name, String stack) {}
`,

  educationJourney: `public class Education {
    public static void main(String[] args) {
        System.out.println("B.Tech, Computer Science");
        System.out.println("Ajay Kumar Garg Engineering College (Nov 2022 – Jun 2026)");
        System.out.println();
        System.out.println("Senior Secondary (PCM)");
        System.out.println("Kendriya Vidyalaya No.1, Air Force Station (Apr 2020 – Oct 2022)");
    }
}
`,
};
