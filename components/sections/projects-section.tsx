"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Github } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ProjectsSection() {
  const t = useTranslations("projects");

  const projects = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: t(`items.project${i}.title`),
    description: t(`items.project${i}.description`),
    tech: t(`items.project${i}.tech`).split(","),
    link: t(`items.project${i}.link`),
    image: t(`items.project${i}.image`),
  }));

  return (
    <section className="relative w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-xl md:text-5xl font-bold text-end mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, i) => (
              <CardContainer
                key={project.title}
                className="inter-var"
                containerClassName="py-4"
              >
                <CardBody className="relative group/card bg-gray-50 dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <CardItem translateZ={20} className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-xl bg-black/[0.1] dark:bg-white/[0.1] text-neutral-600 dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
