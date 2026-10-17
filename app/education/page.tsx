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
          The academic track behind the backend work.
        </PageHeaderHeading>
        <PageHeaderDescription>
          My Bachelor&apos;s in Computer Science at Ajay Kumar Garg Engineering
          College has shaped the foundation I bring to work every day: data
          structures and algorithms, object-oriented programming, SOLID
          principles, design patterns, and low-level design.
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
            Bachelor of Technology, Computer Science · Ajay Kumar Garg
            Engineering College
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2022 – June 2026
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Pursuing a B.Tech in Computer Science at Ajay Kumar Garg Engineering
            College, Ghaziabad. Coursework and projects have focused on
            programming fundamentals, data structures and algorithms,
            object-oriented design, and modern backend and web engineering
            practices.
          </p>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href={siteConfig.renaissanceakgec}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer underline-offset-4 hover:underline"
              >
                @renaissanceakgec.club
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <p>
                Alongside my degree, I led Team Renaissance — the college&apos;s
                cultural society — and built{" "}
                <Link
                  href={siteConfig.renaissanceakgec}
                  className="underline cursor-pointer underline-offset-4"
                >
                  renaissanceakgec.club
                </Link>
                , the official consumer platform used for recruitment and
                engagement workflows, with Spring Boot and MongoDB on the
                backend and React, Next.js, and Tailwind CSS on the frontend.
              </p>
            </HoverCardContent>
          </HoverCard>
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
            Senior Secondary (PCM) · Kendriya Vidyalaya No.1, Air Force Station
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2020 – October 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Senior Secondary education in Physics, Chemistry, and Mathematics at
            Kendriya Vidyalaya No.1, Air Force Station, Gorakhpur.
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.educationJourney} title="Education.java" />

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
