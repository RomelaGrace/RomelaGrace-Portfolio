import React from "react";
import Link from "next/link";
import { BoxReveal } from "@/components/reveal-animations"; // Ensure this path is correct
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils"; // Utility for conditional classNames

// Data for work experiences - Edit this array as needed
const WorkExperienceData = [
  {
    title: "I.T Technical Support Intern",
    company: "A.S.White Global Philippines",
    duration: "March - May 2025",
    description: [
      "Assisted in reimaging, formatting, and upgrading laptops from Windows 10 to Windows 11.",
      "Troubleshooted hardware, software, and network connectivity issues.",
      "Replaced and maintained IT components such as keyboards, RAM, SSDs, and monitors.",
      "Conducted regular IT asset and monitor inventories using ManageEngine and Excel.",
      "Created and managed Accountability Forms for tracking company IT assets.",
      "Helped deploy laptops, accounts, and equipment for new hires.",
      "Configured Group Policy settings and managed user access through Azure AD.",
      "Assisted Australian clients with technical issues through email, calls, and AnyDesk remote support.",
      "Supported meetings and training setups in various office locations.",
      "Gained hands-on experience in IT support, system administration, and client communication.",
    ],
  },
  {
    title: "Part-Time Junior Developer",
    company: "E-Transcribe (MTC), Albay, PH",
    duration: "June 2021 - January 2025",
    description: [
      "Designed, developed, and maintained full-stack web applications, integrating backend databases and automation scripts.",
      "Collaborated with teams to analyze user requirements and implement software solutions meeting business needs.",
      "Assisted in system troubleshooting, diagnosing software and hardware issues, and ensuring smooth operations.",
      "Developed scripts for automating routine tasks and data management, improving operational efficiency.",
      "Worked on front-end development using React and Vue.js for responsive user interfaces.",
      "Implemented RESTful APIs and integrated with databases like MySQL and MongoDB.",
      "Managed version control using Git and collaborated on repositories via GitHub.",
      "Deployed applications to cloud platforms such as Vercel and AWS.",
      "Conducted code reviews and optimized performance for better user experience.",
      "Participated in agile meetings and contributed to project planning and documentation.",
    ],
  },
  // Add more experiences here as objects in the array
];

export default function WorkExperiencePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-8 py-16 relative">
      {/* Page Title */}
      <BoxReveal width="100%">
        <TypographyH1
          className={cn(
            "text-4xl md:text-6xl text-center mb-8 w-full",
            "bg-clip-text text-transparent",
            "bg-gradient-to-b from-white/90 to-white/60",
            "pb-2"
          )}
        >
          Work Experience
        </TypographyH1>
      </BoxReveal>

      {/* Experience Sections */}
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {WorkExperienceData.map((experience, index) => (
          <div
            key={index}
            className={cn(
              "border border-zinc-600 rounded-lg p-6 bg-zinc-900/30",
              "transition-all duration-300 hover:scale-105 hover:bg-zinc-800/50 hover:shadow-lg"
            )}
          >
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">
              {experience.title} at {experience.company}
            </h3>
            <p className="text-sm text-zinc-400 mb-4">{experience.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              {experience.description.map((desc, descIndex) => (
                <li key={descIndex} className="text-sm">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <Link href="/" className="mt-8">
        <BoxReveal width="fit-content">
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
        </BoxReveal>
      </Link>
    </main>
  );
}