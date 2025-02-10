"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { WorkSection } from "@/components/sections/work-section";
import { ProjectsSectionParallax } from "@/components/sections/projects-section-parallax";
import { ContactSection } from "@/components/sections/contact-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ProjectsSectionParallax />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
