"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

const items = [
  {
    id: 1,
    name: "Nick Kladis",
    designation: "Hello there!",
    image: "/icons/profile.jpg",
  },
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <HeroHighlight>
      <div className="max-w-[85rem] md:ml-auto md:pt-28">
        <div className="flex flex-col items-center md:items-end justify-center gap-8 md:gap-12 px-4 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <AnimatedTooltip items={items} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center md:text-right"
          >
            <Highlight className="text-black dark:text-white">
              {t("highlight")}
            </Highlight>{" "}
            {t("text")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center w-full md:justify-end gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {t("button")}
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-neutral-300 dark:border-neutral-700 w-full sm:w-auto"
                asChild
              >
                <LinkPreview url="https://github.com/nikcladis">
                  <Github className="mr-2 h-4 w-4" />
                  {t("githubButton")}
                </LinkPreview>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  );
}
