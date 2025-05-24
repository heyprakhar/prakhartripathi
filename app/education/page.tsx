import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@/components/ui/hover-card";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I learned a lot, but the real learning happens in the code editor!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education has always been the cornerstone of my journey into the tech
          world. Pursuing a Bachelor's in Computer Science at Ajay Kumar Garg
          Engineering College has provided me with a solid foundation in
          computer science and software engineering principles.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My academic journey has been complemented by hands-on projects and
          coursework, enabling me to build practical skills and a deep
          understanding of modern technological solutions.
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
            Bachelors in Computer Science · Ajay Kumar Garg Engineering College
            · AKTU
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2022 - August 2026 (Expected)
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I am pursuing a Bachelor's in Computer Science at Ajay Kumar Garg
            Engineering College, affiliated with AKTU, specializing in
            programming, web development, and software engineering.
          </p>

          <HoverCard>
            <HoverCardTrigger className="cursor-pointer ">
              <Link href={siteConfig.renaissanceakgec} target="_blank">
                @renaissanceakgec.club
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <p>
                I created{" "}
                <Link
                  href={siteConfig.renaissanceakgec}
                  className="underline cursor-pointer underline-offset-4"
                >
                  renaissanceakgec.club
                </Link>
                ,the official website for Team Renaissance, the cultural society
                of AKGEC, with the goal of showcasing events, team members, and
                college achievements in an engaging and interactive format. The
                platform features a fully responsive, user-friendly interface
                built with ReactJS and TailwindCSS, ensuring a seamless
                experience across all devices. To enhance visual appeal and
                interactivity, I integrated Framer Motion for smooth UI
                animations and transitions. Supabase was used for secure and
                scalable backend storage of media assets and structured data.
                Additionally, the website served as a recruitment portal for
                onboarding new members to the society.
              </p>
            </HoverCardContent>
          </HoverCard>
        </li>
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
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Intermediate Degree · Kendriya Vidyalaya No.1, Air Force Station ·
            AISSCE
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2020 - October 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I completed my senior secondary education in PCM from Kendriya
            Vidyalaya No.1, Air Force Station, Gorakhpur.
          </p>
        </li>
        <li className="ms-6">
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
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Secondary Education · Kendriya Vidyalaya No.1, Air Force Station ·
            AISSE
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2010 - April 2020
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I completed my foundational education up to 10th grade at Kendriya
            Vidyalaya No.1, Air Force Station, Gorakhpur, where I developed a
            strong academic base and a passion for learning.
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.educationJourney} title="educationJourney.ts" />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
