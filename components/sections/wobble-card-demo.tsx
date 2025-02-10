"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function WobbleCardDemo() {
  const t = useTranslations("about");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 md:col-span-3 h-full bg-gray-800 min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("profile.title")}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {t("profile.description")}
          </p>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-white">
        <Image
          src="/icons/nikcladis.jpg"
          width={500}
          height={500}
          alt="Profile"
          className="absolute inset-0 object-cover w-full h-full rounded-[inherit]"
          priority
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 md:col-span-4 min-h-[300px] bg-gray-600">
        <div className="flex flex-col h-full justify-between">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("title")}
          </h2>
          <div className="flex gap-4 mt-4">
            {[
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com/nikcladis",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://www.linkedin.com/in/nikcladis",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                href: "mailto:nikcladis@gmail.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100/10 hover:bg-neutral-100/20 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
