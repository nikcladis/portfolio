"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { MobileNav } from "../ui/mobile-nav";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const t = useTranslations("nav.menu");

  return (
    <div className="relative w-full flex items-center justify-center md:block">
      <MobileNav />
      <div
        className={cn(
          "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item={t("home")}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">{t("home")}</HoveredLink>
              <HoveredLink href="/about">{t("about")}</HoveredLink>
              <HoveredLink href="/contact">{t("contact")}</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("projectsLabel")}
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title={t("projects.algochurn.title")}
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description={t("projects.algochurn.description")}
              />
              <ProductItem
                title={t("projects.tailwind.title")}
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description={t("projects.tailwind.description")}
              />
              <ProductItem
                title={t("projects.moonbeam.title")}
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description={t("projects.moonbeam.description")}
              />
              <ProductItem
                title={t("projects.rogue.title")}
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description={t("projects.rogue.description")}
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("blog.title")}
          >
            <div className="text-sm flex flex-col gap-10 p-4">
              <ProductItem
                title={t("blog.featured.webdev.title")}
                href={t("blog.featured.webdev.link")}
                src={t("blog.featured.webdev.image")}
                description={t("blog.featured.webdev.description")}
              />
              <ProductItem
                title={t("blog.featured.ai.title")}
                href={t("blog.featured.ai.link")}
                src={t("blog.featured.ai.image")}
                description={t("blog.featured.ai.description")}
              />
              <ProductItem
                title={t("blog.featured.typescript.title")}
                href={t("blog.featured.typescript.link")}
                src={t("blog.featured.typescript.image")}
                description={t("blog.featured.typescript.description")}
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("pricingLabel")}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">{t("pricing.hobby")}</HoveredLink>
              <HoveredLink href="/individual">
                {t("pricing.individual")}
              </HoveredLink>
              <HoveredLink href="/team">{t("pricing.team")}</HoveredLink>
              <HoveredLink href="/enterprise">
                {t("pricing.enterprise")}
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
