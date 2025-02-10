"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Github,
  MapPin,
  Users2,
  Building2,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const GitHubCalendarClient = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

export function AboutSection() {
  const t = useTranslations("about");
  const { theme } = useTheme();

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
  ];

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: t("experience.job1.period"),
      description: t("experience.job1.description"),
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: t("experience.job2.period"),
      description: t("experience.job2.description"),
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <Image
                src="/icons/nikcladis.jpg"
                alt="Profile"
                width={296}
                height={296}
                className="rounded-full mb-4"
              />
              <h1 className="text-2xl font-semibold text-black dark:text-white mb-1">
                Nick Kladis
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-4">
                nikcladis
              </p>
              <div className="flex flex-col gap-2 text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Software Engineer
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Greece
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <LinkPreview url="mailto:nikcladis@gmail.com">
                    nikcladis@gmail.com
                  </LinkPreview>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  <LinkPreview url="https://nikcladis.com">
                    nikcladis.com
                  </LinkPreview>
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4" />
                  <LinkPreview url="https://github.com/nikcladis?tab=followers">
                    <span className="font-semibold">100</span> followers
                  </LinkPreview>
                  ·{" "}
                  <LinkPreview url="https://github.com/nikcladis?tab=following">
                    <span className="font-semibold">50</span> following
                  </LinkPreview>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-8">{t("profile.description")}</p>
            </div>

            {/* Pinned Repositories */}
            <h2 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
              <Github className="w-5 h-5" />
              Popular repositories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="border border-neutral-200 dark:border-neutral-800 rounded-md p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Github className="w-4 h-4" />
                    <h3 className="font-semibold text-blue-500 hover:underline">
                      <LinkPreview
                        url={`https://github.com/nikcladis/project-${i + 1}`}
                      >
                        project-{i + 1}
                      </LinkPreview>
                    </h3>
                    <span className="text-xs border border-neutral-200 dark:border-neutral-800 rounded-full px-2">
                      Public
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Project description goes here
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                    <span>TypeScript</span>
                    <span>★ 100</span>
                    <span>Updated 3 days ago</span>
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub Contributions */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-md p-4 mb-8">
              <div className="overflow-x-auto">
                <GitHubCalendarClient
                  username="nikcladis"
                  colorScheme={theme === "dark" ? "dark" : "light"}
                />
              </div>
            </div>

            {/* Experience Section */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-md p-4">
              <h3 className="font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                {t("experience.title")}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
