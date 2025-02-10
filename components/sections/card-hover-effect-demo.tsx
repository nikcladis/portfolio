"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import { useTranslations } from "next-intl";

export function CardHoverEffectDemo() {
  // You can use the "technologies" namespace if you wish.
  const t = useTranslations("technologies");

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={technologies} />
    </div>
  );
}

export const technologies = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org",
  },
  {
    title: "Next.js",
    description: "A React framework for building modern web applications.",
    link: "https://nextjs.org",
  },
  {
    title: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org",
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    link: "https://nodejs.org",
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    link: "https://tailwindcss.com",
  },
  {
    title: "GraphQL",
    description: "A query language for your API.",
    link: "https://graphql.org",
  },
];
