"use client";
import React from "react";
import Link from "next/link";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Edu = {
  school: string;
  degree: string;
  dates?: string;
  details?: string[];
  achievements?: string[];
};

const education: Edu[] = [
  {
    school: "National University - Laguna",
    degree: "Bachelor of Science in Computer Engineering",
    dates: "August 2021 – July 2025",
    details: [
      "Specialized in computer systems, software development, and network engineering",
      "Relevant coursework: Data Structures, Databases, Networks, Operating Systems, Software Engineering",
      "Hands-on experience with programming languages and system administration",
    ],
    achievements: [
      "TESDA Computer Systems Servicing (CSS) NCII Passer",
      "1st Runner-up in the MRSP 8TH National Skills Competition (Research and Development Category)",
      "Association of Computer Engineering Students - Member",
      "Institute of Computer Engineers of the Philippines - Member",
      "Mechatronics and Robotics Society of the Philippines - Member",
    ]
  },
  {
    school: "Tabaco National High School", 
    degree: "Accountancy, Business, and Management (ABM) Strand",
    dates: "June 2018 – March 2020",
    achievements: [
      "High Honor student",
      "Best Immersion Awardee",
    ]
  }
];

export default function EducationPage() {
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
        Education
      </TypographyH1>

      {/* Subtitle */}
      <TypographyP className="text-center text-zinc-400 mb-8 max-w-2xl">
        Academic background and achievements in Computer Engineering and Business Management
      </TypographyP>

      {/* Education Sections */}
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {education.map((edu, index) => (
          <div
            key={index}
            className={cn(
              "border border-zinc-600 rounded-lg p-6 bg-zinc-900/30",
              "transition-all duration-300 hover:scale-105 hover:bg-zinc-800/50 hover:shadow-lg"
            )}
          >
            {/* School and Date Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-neutral-100">
                {edu.school}
              </h3>
              {edu.dates && (
                <p className="text-sm text-zinc-400">{edu.dates}</p>
              )}
            </div>

            {/* Degree */}
            <p className="text-base text-zinc-300 font-medium mb-4">
              {edu.degree}
            </p>

            {/* Course Details */}
            {edu.details && edu.details.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wide">
                  Course Details
                </h4>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {edu.achievements && edu.achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wide">
                  Achievements & Recognition
                </h4>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-zinc-400 text-sm">
          Currently pursuing Bachelor's degree with expected graduation in July 2025
        </p>
      </div>

      {/* Back Button */}
      <Link href="/" className="mt-8">
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