"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Nick Kladis
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                {t("description")}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {t("quickLinks")}
              </h3>
              <div className="flex flex-col space-y-2">
                {["home", "work", "about", "contact"].map((link) => (
                  <Link
                    key={link}
                    href={`/${link === "home" ? "" : link}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                  >
                    {t(`links.${link}`)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {t("connect")}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} Nick Kladis. {t("rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
