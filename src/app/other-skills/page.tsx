"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TypographyH1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const OtherSkillsData = [
  {
    title: "Programming & Development",
    skills: [
      "Python (OOP, automation, scripting)",
      "Java, C++",
      "PHP, JavaScript (React, Node.js, HTML, CSS)",
      "SQL, MySQL",
      "PowerShell, Bash scripting",
      "ABAP (SAP BTP)"
    ],
    icon: "💻"
  },
  {
    title: "Web & Software Development",
    skills: [
      "Full-stack web development",
      "Front-end frameworks: React, Vue.js",
      "Back-end frameworks: Node.js, Express",
      "API design and integration (RESTful APIs, JSON)",
      "Automation scripts for workflow and data processing",
      "CI/CD pipelines (Jenkins, Azure DevOps)"
    ],
    icon: "🌐"
  },
  {
    title: "Cloud & Platforms",
    skills: [
      "Microsoft Azure (Fundamentals, Cloud Services)",
      "Google Cloud Platform (GCP)",
      "AWS basics",
      "Microsoft 365 Administration (SharePoint, Teams, Intune)",
      "Azure Active Directory"
    ],
    icon: "☁️"
  },
  {
    title: "Database & Data Management",
    skills: [
      "SQL query writing and optimization",
      "Database management and integration",
      "Data cleaning, ETL (Extract, Transform, Load)",
      "Data visualization (Power BI)",
      "BigQuery basics"
    ],
    icon: "🗄️"
  },
  {
    title: "IT Support & Systems Administration",
    skills: [
      "Windows & Linux administration (Ubuntu, RHEL)",
      "macOS support",
      "Active Directory",
      "Virtualization: VMware",
      "Containerization: Docker, Podman",
      "Kubernetes / OpenShift basics",
      "Endpoint management & security",
      "Backup & disaster recovery (DR/BCP)",
      "Ticketing & ITSM tools: ServiceNow, Jira, Zendesk"
    ],
    icon: "🛠️"
  },
  {
    title: "Networking & Security",
    skills: [
      "TCP/IP, DNS, DHCP",
      "VPN setup & troubleshooting",
      "Firewall configuration",
      "LAN/WAN troubleshooting",
      "Network storage: NFS/NAS, SAN, CIFS/SMB",
      "Load balancing and system monitoring"
    ],
    icon: "🔌"
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "AI model evaluation & training",
      "ChatGPT prompt engineering",
      "LLM (Large Language Models) workflows",
      "TensorFlow, PyTorch, Keras basics",
      "Python for AI/ML automation"
    ],
    icon: "🤖"
  },
  {
    title: "Automation & Tools",
    skills: [
      "Google Apps Script / JavaScript for automation",
      "Python automation (pandas, requests, Playwright/Selenium basics)",
      "Zapier / Make automation",
      "Test automation (Cucumber, Selenium)"
    ],
    icon: "⚙️"
  },
  {
    title: "Software & Productivity Tools",
    skills: [
      "Microsoft Office Suite: Word, Excel, PowerPoint, Visio",
      "Google Workspace: Sheets, Drive, Gmail",
      "Adobe Acrobat",
      "Git / GitHub for version control",
      "Jira, Confluence for collaboration"
    ],
    icon: "📊"
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem-solving & critical thinking",
      "Analytical thinking & data-driven decision-making",
      "Time management & prioritization",
      "Communication: written and verbal proficiency",
      "Teamwork & collaboration (cross-functional teams)",
      "Adaptability & flexibility in fast-paced environments",
      "Leadership & mentoring (guiding junior team members)",
      "Creativity & innovation (process improvements, workflow automation)",
      "Attention to detail",
      "Proactive & self-starter mindset",
      "Continuous learning & growth mindset",
      "Customer-focused / client-oriented attitude",
      "Documentation & reporting skills"
    ],
    icon: "👥"
  }
];

export default function OtherSkillsPage() {
  const [expandedCategories, setExpandedCategories] = useState(new Set<string>());

  const toggleCategory = (title: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedCategories(newExpanded);
  };

  const isExpanded = (title: string) => expandedCategories.has(title);

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
        Other Skills
      </TypographyH1>

      {/* Accordion Container */}
      <div className="flex flex-col gap-6 w-full max-w-4xl mb-8">
        {OtherSkillsData.map((category, index) => (
          <div 
            key={index} 
            className={cn(
              "border border-zinc-600 rounded-lg bg-zinc-900/30",
              "transition-all duration-300"
            )}
          >
            {/* Accordion Header */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleCategory(category.title)}
              onKeyDown={(e) => { 
                if (e.key === 'Enter' || e.key === ' ') { 
                  e.preventDefault(); 
                  toggleCategory(category.title); 
                } 
              }}
              className={cn(
                "flex items-center justify-between p-6 cursor-pointer",
                "hover:bg-zinc-800/50 transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded-lg"
              )}
              aria-expanded={isExpanded(category.title)}
              aria-label={`Toggle ${category.title}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-100">
                  {category.title}
                </h3>
              </div>
              <span 
                className={cn(
                  "text-zinc-400 transition-transform duration-300",
                  isExpanded(category.title) && "rotate-90"
                )}
              >
                ▸
              </span>
            </div>

            {/* Collapsible Content */}
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isExpanded(category.title)
                  ? "max-h-[600px] opacity-100 p-6 pt-0"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="border-t border-zinc-600 pt-4">
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
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