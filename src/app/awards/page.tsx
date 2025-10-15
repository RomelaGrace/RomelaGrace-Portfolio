"use client";
import React from "react";
import Link from "next/link";
import { TypographyH1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const AwardsData = [
  {
    title: "Capstone Leader and Presenter - Awarded 1st Runner-Up at the 8th MRSP National Skills Competition (Research and Development Category)",
    description: "Led a capstone project team in presenting innovative research on AI/ML automation workflows, securing 1st Runner-Up in the national competition organized by the Maritime and Research Skills Program (MRSP).",
    date: "2024",
    icon: "🏆"
  },
  {
    title: "Dean's List Award",
    description: "Recognized for outstanding academic performance in Computer Engineering program, maintaining a GPA above 3.8.",
    date: "2022-2023",
    icon: "🎓"
  },
  {
    title: "Best Hackathon Project - Tech Innovators Challenge",
    description: "Won first place for developing a full-stack automation tool using Python and React, solving real-world workflow issues.",
    date: "2023",
    icon: "🏆"
  },
  {
    title: "Microsoft Azure Student Certification",
    description: "Certified in Azure Fundamentals (AZ-900), demonstrating proficiency in cloud services, deployment, and security.",
    date: "2024",
    icon: "☁️"
  },
  {
    title: "Excellence in Backend Development",
    description: "Awarded by university department for contributions to open-source projects and API optimization in Node.js/Express.",
    date: "2023",
    icon: "💻"
  },
  {
    title: "Women in Tech Scholarship",
    description: "Recipient of scholarship for female students excelling in STEM fields, supporting full-stack development initiatives.",
    date: "2022",
    icon: "👩‍💻"
  },
  {
    title: "Outstanding Graduate Project",
    description: "Capstone project on AI/ML automation workflows using TensorFlow and Python, graded top in cohort.",
    date: "2024",
    icon: "🤖"
  }
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-8 py-16 relative">
      {/* Page Title */}
      <TypographyH1
        className={cn(
          "text-4xl md:text-6xl text-center mb-8 w-full",
          "bg-clip-text text-transparent",
          "bg-gradient-to-b from-white/90 to-white/60",
          "pb-2"
        )}
      >
        Awards & Achievements
      </TypographyH1>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-8">
        {AwardsData.map((award, index) => {
          const isHighlighted = award.title.includes("MRSP");
          return (
            <article 
              key={index} 
              className={cn(
                "border border-zinc-600 rounded-lg p-6 bg-zinc-900/30",
                "transition-all duration-300 hover:scale-105 hover:bg-zinc-800/50 hover:shadow-lg",
                "flex flex-col",
                isHighlighted && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Featured Badge */}
              {isHighlighted && (
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    Featured
                  </span>
                </div>
              )}
              
              {/* Icon */}
              <div className="text-3xl mb-4 text-center">{award.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-neutral-100 text-center">
                {award.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-zinc-300 mb-4 leading-relaxed flex-grow">
                {award.description}
              </p>
              
              {/* Date */}
              <div className="text-xs uppercase font-medium text-zinc-400 text-right">
                {award.date}
              </div>
            </article>
          );
        })}
      </div>

      {/* Back Button */}
      <Link href="/" className="mt-4">
        <button
          className={cn(
            "px-6 py-2 rounded-full font-medium text-sm text-neutral-100",
            "bg-gradient-to-b from-black/80 to-black/50 border border-zinc-600",
            "dark:bg-gradient-to-b dark:from-white/10 dark:to-white/5 dark:border-zinc-400",
            "hover:from-black/90 hover:to-black/70 transition-all duration-300 hover:scale-105 hover:shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-zinc-400"
          )}
          aria-label="Go back to home page"
        >
          ← Back to Home
        </button>
      </Link>
    </main>
  );
}