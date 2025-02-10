"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "../ui/wavy-background";
import { useTheme } from "next-themes";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Check } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("contact");
  const { resolvedTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black">
      <AnimatePresence mode="wait">
        {resolvedTheme === "dark" ? (
          <motion.div
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full"
          >
            <WavyBackground
              backgroundFill="rgba(0,0,0,0.1)"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full"
          >
            <WavyBackground
              backgroundFill="rgba(255,255,255,0.1)"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="py-28 md:py-48 min-h-screen flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20 max-w-7xl mx-auto w-full pl-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-start dark:text-white text-black">
              {t("title")}
            </h2>
          </motion.div>

          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-800"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname">{t("form.firstName")}</Label>
                      <Input
                        id="firstname"
                        placeholder={t("form.firstNamePlaceholder")}
                        type="text"
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname">{t("form.lastName")}</Label>
                      <Input
                        id="lastname"
                        placeholder={t("form.lastNamePlaceholder")}
                        type="text"
                      />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer>
                    <Label htmlFor="email">{t("form.email")}</Label>
                    <Input
                      id="email"
                      placeholder={t("form.emailPlaceholder")}
                      type="email"
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={t("form.messagePlaceholder")}
                    />
                  </LabelInputContainer>
                  <Button
                    className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
                    type="submit"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 md:px-6 py-1 text-xs md:text-sm font-medium text-white backdrop-blur-3xl">
                      {t("form.submit")}
                    </span>
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const SocialLink = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-white hover:text-white/80 transition-colors relative z-20"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
};
