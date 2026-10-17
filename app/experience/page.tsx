import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const highlights = [
  "Engineered distributed transaction handling across microservices using Apache Kafka, with rollback mechanisms to preserve data consistency when a dependent service fails mid-transaction.",
  "Reduced duplicate database records by ~30% by identifying redundant data persistence across microservices and optimizing service-level data handling.",
  "Improved inter-service API performance by ~30% by diagnosing API timeouts, optimizing service communication, and introducing Redis caching for frequently accessed data.",
  "Reduced scheduler overhead by ~50% by replacing per-service schedulers with a centralized Scheduler Service, with centralized logging and execution tracking of job status, failures, and history.",
  "Designed and implemented a centralized Notification Service for Android/iOS push notifications and real-time web notifications via Server-Sent Events (SSE); applied the Factory Design Pattern for an extensible multi-channel architecture, with retries and failure-state tracking.",
  "Developed a dedicated Spring Boot Data Management Service for secure, scalable bucket storage operations, with audit logging that records who performed each action, when, and from which IP address.",
  "Implemented Role-Based Access Control (RBAC) using Spring Security and a custom @RequirePermission annotation at both controller and service layers for fine-grained, permission-based authorization.",
  "Replaced basic JWT-based data-sharing links with centralized ShareData Management, tracking shared patient data, user access history, access frequency, permissions, and expiration/disablement rules.",
  "Applied HIPAA-aligned architecture and data-handling practices for secure processing of US healthcare data.",
  "Researched ECW healthcare data access and designed the FHIR API workflow covering authentication, FHIR resource retrieval, and downstream processing for standardized healthcare data exchange.",
  "Developed AI-powered agents for medical document validation, automating document verification and extraction of relevant healthcare data.",
  "Integrated Twilio for programmatic call-management workflows and ElevenLabs for AI voice-agent capabilities supporting voice-based interactions across international healthcare workflows.",
];

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Shipping production backend systems for US healthcare.
        </PageHeaderHeading>
        <PageHeaderDescription>
          My professional work is focused on building scalable, event-driven
          backend systems with Java and Spring Boot. I collaborate on
          microservices that run in production, with an emphasis on reliability,
          performance, authorization, and secure handling of healthcare data.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Junior Java Developer · Orangemantra
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Current
            </span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Korecare — US Healthcare Platform · Gurugram, Haryana
          </p>
          <time className="block mt-1 mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2026 – Present
          </time>
          <ul className="pl-5 space-y-2 text-base font-normal list-disc text-gray-500 dark:text-gray-400">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      </ol>

      <CodeSnippet code={code.experience} title="Experience.java" />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
