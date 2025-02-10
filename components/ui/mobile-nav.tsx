"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav.menu");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const menuItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/blog", label: t("blog.title") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-white dark:bg-black rounded-full shadow-lg border border-neutral-200 dark:border-neutral-800"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
        ) : (
          <Menu className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="min-h-screen bg-white dark:bg-black px-4 py-24">
              <nav className="flex flex-col space-y-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
