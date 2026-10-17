import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Prakhar</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Backend engineer focused on reliable, event-driven systems.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I&apos;m a Java backend engineer at Orangemantra, currently contributing to
          Korecare — a US healthcare platform. My day-to-day centers on
          designing and shipping Spring Boot microservices that handle
          distributed transactions over Apache Kafka, with rollback logic to
          keep data consistent when a dependent service fails mid-transaction.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I&apos;ve improved inter-service API performance by introducing Redis
          caching and tightening service communication, replaced per-service
          schedulers with a centralized Scheduler Service, and built a
          multi-channel Notification Service for Android, iOS, and real-time
          web via Server-Sent Events — applying the Factory Design Pattern and
          adding retries with failure-state tracking.
        </PageHeaderDescription>

        <PageHeaderDescription>
          On the security side, I&apos;ve implemented Role-Based Access Control
          with Spring Security and a custom @RequirePermission annotation,
          centralized patient-data sharing with ShareData Management, and
          applied HIPAA-aligned handling for sensitive US healthcare data. I
          also enjoy production debugging, low-level design, and keeping a
          strong DSA and OOP foundation sharp.
        </PageHeaderDescription>
      </PageHeader>

      <CodeSnippet title="AboutMe.java" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
