import CodeSnippet from "@/components/code-snippet";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { code } from "@/config/codeContent";
import { skillCategories } from "@/constants";

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          The stack I use to build and operate backend systems.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I work primarily with Java and Spring Boot to build event-driven
          microservices, backed by Apache Kafka for messaging, Redis for
          caching, and MySQL/MongoDB for persistence. On the security side I
          rely on Spring Security, JWT, and RBAC; on the operational side,
          JUnit, Mockito, Postman, Git, and AWS EC2. I also build frontend
          interfaces with React, Next.js, and Tailwind CSS when the project
          needs it.
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex flex-col gap-6 my-6">
        {skillCategories.map((group) => (
          <section key={group.category} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold tracking-tight">
              {group.category}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {group.items.map((item) => {
                const Icon = item.icon
                  ? Icons[item.icon as keyof typeof Icons]
                  : null;
                return (
                  <Badge
                    key={`${group.category}-${item.title}`}
                    className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
                  >
                    {Icon ? <Icon className="mr-2 size-4" /> : null}
                    {item.title}
                  </Badge>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <CodeSnippet title="Skills.java" code={code.skillsTools} />

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
