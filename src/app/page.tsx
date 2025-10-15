"use client";
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SmoothScroll from "@/components/smooth-scroll";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";

export default function MainPage() {
  return (
    <SmoothScroll>
      <main className={cn("bg-slate-100 dark:bg-transparent")}>
        <div className="top-0 z-0 fixed w-full h-screen">
          <AnimatedBackground />
        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}
