"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Cert = {
  title: string;
  image: string;
  credlyUrl?: string;
  issuer: string;
  date: string;
};

const certificates: Cert[] = [
  // Existing Credly Certificates
  {
    title: "Computer Hardware Basics",
    image: "/certs/computer-hardware-basics.png",
    credlyUrl: "https://www.credly.com/badges/2480eb83-dce2-4324-ad01-d119a6646048",
    issuer: "DICT-ITU",
    date: "January 2025"
  },
  {
    title: "Introduction to Cybersecurity",
    image: "/certs/introduction-to-cybersecurity.png",
    credlyUrl: "https://www.credly.com/badges/d03d3212-67db-4c6d-9178-52380bccafe7",
    issuer: "Cisco Networking Academy",
    date: "July 2024"
  },
  {
    title: "English for IT 1",
    image: "/certs/english-for-it.png",
    credlyUrl: "https://www.credly.com/badges/d8288687-ed21-4f2b-9711-1ce4032a3892",
    issuer: "OPENEDG",
    date: "August 2024"
  },
  {
    title: "CC Course Conclusion & Final Assessment",
    image: "/certs/isc2-candidate.png",
    credlyUrl: "https://www.credly.com/badges/d20d8ec3-76bb-4bad-8f76-3198d6fdfbe4",
    issuer: "ISC2",
    date: "January 2025"
  },
  {
    title: "LFC108: Cybersecurity Essentials",
    image: "/certs/lfc108-cybersecurity-essentials.png",
    credlyUrl: "https://www.credly.com/badges/0e55b0f0-d7d0-4e2b-9d9c-802dd13518d6",
    issuer: "The Linux Foundation",
    date: "December 2024"
  },
  {
    title: "Learning the Basics of ABAP Programming on SAP BTP",
    image: "/certs/sap-abap-basics.png",
    credlyUrl: "https://www.credly.com/badges/1f40e825-35d5-4fa7-aa41-8058982391d6",
    issuer: "SAP",
    date: "July 2024"
  },
  {
    title: "SASE Expert Level 1",
    image: "/certs/sase-expert-level-1.png",
    credlyUrl: "https://www.credly.com/badges/db00eb21-45eb-4d69-9218-4acd447e0bc8",
    issuer: "Cato Networks",
    date: "July 2024"
  },
  {
    title: "SASE Expert Level 2",
    image: "/certs/sase-expert-level-2.png",
    credlyUrl: "https://www.credly.com/badges/8b18178f-c2d2-4aa7-a7a9-77cced15a31f",
    issuer: "Cato Networks",
    date: "July 2024"
  },
  {
    title: "SASE Advanced Security",
    image: "/certs/sase-advanced-security.png",
    credlyUrl: "https://www.credly.com/badges/bd073308-551a-489b-8142-98b0f05bdbef",
    issuer: "Cato Networks",
    date: "August 2024"
  },
  {
    title: "National Certificate II in Computer Systems Servicing",
    image: "/certs/nc-unlocked.png",
    credlyUrl: "https://drive.google.com/file/d/1HWJXgyBgTGrJ2hUh4ZfEwkVUevWFAb7_/view?usp=drive_link",
    issuer: "TESDA",
    date: "March 2025"
  },
  // NEW CERTIFICATES
  {
    title: "AI Data Insights Hour",
    image: "/certs/ai-data-insights-hour.png",
    credlyUrl: "https://drive.google.com/file/d/11Lxd73AS_qnKONADiyG3nyVYwDRoBO8u/view?usp=drive_link",
    issuer: "Styava",
    date: "December 2024"
  },
  {
    title: "Introduction to Explainable Artificial Intelligence: Interpretability and Transparency",
    image: "/certs/ai-interpretability-transparency.png",
    credlyUrl: "https://drive.google.com/file/d/1yXizxKDGOcygaxb0gkuEX4CedWpEpkZr/view?usp=drive_link",
    issuer: "Cordillera Young Leaders Club",
    date: "February 2025"
  },
  {
    title: "AI-Powered Cyber Resilience: Shifting Focus from Protection to Recovery",
    image: "/certs/ai-powered-cyber-resilience-shifting-focus-protection-recovery.png",
    credlyUrl: "https://drive.google.com/file/d/1xwo8lpDRwzQQEigNQZc_y3iTB0KS99PC/view?usp=drive_link",
    issuer: "BrightTalk",
    date: "February 2025"
  },
  {
    title: "AI Real Security: Preparing DevSecOps for AI Development",
    image: "/certs/ai-real-security-preparing-devsecops-for-ai-development.png",
    credlyUrl: "https://drive.google.com/file/d/1807TQvCTxukEDrgSKtEMGIJjMDwLaUU4/view?usp=drive_link",
    issuer: "BrightTalk",
    date: "March 2025"
  },
  {
    title: "Amazon Q Introduction (AWS)",
    image: "/certs/amazon-q-introduction-aws-1.png",
    credlyUrl: "https://drive.google.com/file/d/1BsjMNvAqeYD_1gBReciYhm0JrZuRifzu/view?usp=sharing",
    issuer: "AWS",
    date: "August 2024"
  },
  {
    title: "Artificial Intelligence for Startups & SMEs: Embracing Uncertainty",
    image: "/certs/artificial-intelligence-for-startups.png",
    credlyUrl: "https://drive.google.com/file/d/1TKadf4PG9kPGXaY379JObcT8vhBbWHF2/view?usp=drive_link",
    issuer: "Emathrix",
    date: "February 2025"
  },
  {
    title: "Attack on AI Systems: Understanding Vulnerabilities and Risks",
    image: "/certs/attack-on-AI-systems-understanding-vulnerabilities-risks.png",
    credlyUrl: "https://drive.google.com/file/d/14ifvM-cpAvpbV9CICbItosSX4yf2zx-B/view?usp=drive_link",
    issuer: "AI Security Training",
    date: "February 2025"
  },
  {
    title: "Augmenting Microsoft: Defeat the Email Hacker Playbook",
    image: "/certs/augmenting-microsoft-defeat-the-email-hacker-playbook.png",
    credlyUrl: "https://drive.google.com/file/d/1NGUuOMaUp0_ErsgmifeOHz_n4dr0uDfP/view?usp=drive_link",
    issuer: "Microsoft Security",
    date: "March 2025"
  },
  {
    title: "Azure AI Fundamentals",
    image: "/certs/azure-ai-fundamentals.png",
    credlyUrl: "https://drive.google.com/file/d/1Gba1hya_6U9wx8dTw_o1SkNx1aG6nyd2/view?usp=drive_link",
    issuer: "Microsoft Azure",
    date: "January 2025"
  },
  {
    title: "Azure AI Fundamentals Event",
    image: "/certs/azure-ai-fundamentals-event.png",
    credlyUrl: "https://drive.google.com/file/d/1x0ktHx-cMMNM7xxPV3hdI0fUCN7Z4UwE/view?usp=drive_link",
    issuer: "Microsoft Azure",
    date: "January 2025"
  },
  {
    title: "Azure IoT Hub: Simplifying Secure Device Provisioning",
    image: "/certs/azure-iot-hub-simplifying-secure-device-provisioning.png",
    credlyUrl: "https://drive.google.com/file/d/1gu1hYFhV4UXNI7cvJr_NjUSgVqGKalao/view?usp=drive_link",
    issuer: "Microsoft Azure",
    date: "January 2025"
  },
  {
    title: "Bringing AI to the Edge",
    image: "/certs/bringing-ai-to-the-edge.png",
    credlyUrl: "https://drive.google.com/file/d/1E4uSpdMjCWNDag9VelPM9hIu2zWz_Hnw/view?usp=drive_link",
    issuer: "Edge Computing Training",
    date: "February 2025"
  },
  {
    title: "Bringing English to Life: Practical Tips for Real-World Communication",
    image: "/certs/bringing-english-to-life-practical-tips-real-world-commmunication.png",
    credlyUrl: "https://drive.google.com/file/d/1paZBwkF23WP6pyGocGNz6MOXwP73V5f1/view?usp=drive_link",
    issuer: "Eduverse",
    date: "December 2024"
  },
  {
    title: "How to Build Trust and Improve Cyber Resilience",
    image: "/certs/build-trust-improve-cyber-resilience.png",
    credlyUrl: "https://drive.google.com/file/d/12gz8mIVWBETa3FvAeUJ4a7L5PfkWhWz9/view?usp=drive_link",
    issuer: "Cybersecurity Training",
    date: "March 2025"
  },
  {
    title: "Build a Website with WordPress",
    image: "/certs/build-website-w-wordpress-1.png",
    credlyUrl: "https://drive.google.com/file/d/14OZbnjGBon4IjEOBbEZjlqNABRImD0Ij/view?usp=drive_link",
    issuer: "Web Development",
    date: "January 2024"
  },
  {
    title: "Canva to Design Digital Collateral",
    image: "/certs/canva-to-design-digital-collateral-1.png",
    credlyUrl: "https://drive.google.com/file/d/1xdELgHHAmObk_MQU9QzveDi-QTvserrb/view?usp=drive_link",
    issuer: "Design Training",
    date: "July 2024"
  },
  {
    title: "The Growing Demand of AI Certifications: Certified Artificial Intelligence Professional",
    image: "/certs/certified-artificial-intelligence-professional.png",
    credlyUrl: "https://drive.google.com/file/d/1eweRARcoS26LdXbUXDk5Gif9JtjeHeKO/view?usp=drive_link",
    issuer: "PECB",
    date: "January 2025"
  },
  {
    title: "Charting the Azure Horizon: Unveiling the Power of Cloud",
    image: "/certs/charting-the-azure-horizon-unveiling-the-power-of-cloud.png",
    credlyUrl: "https://drive.google.com/file/d/1WPZmUQ6kX7HzSg3friayehrC0E8Mx-Oi/view?usp=drive_link",
    issuer: "Microsoft Azure",
    date: "December 2024"
  },
  {
    title: "Create Project Charter with Google Docs",
    image: "/certs/create-project-charter-w-google-docs-1.png",
    credlyUrl: "https://drive.google.com/file/d/1bXUruzQW4idrjgb-wYxzR035Kk8DRtqq/view?usp=drive_link",
    issuer: "Google Workspace",
    date: "July 2024"
  },
  {
    title: "Cybersecurity Awareness: Empowering Safer and More Inclusive Digital Space",
    image: "/certs/cybersecurity-awareness-empowering-safer-and-more-inclusive-digital-space.png",
    credlyUrl: "https://drive.google.com/file/d/1HqRzWfGlSf6NsCJo4uvpyw64MyeEmyPA/view?usp=drive_link",
    issuer: "DICT-Cybersecurity PNPKI Unit",
    date: "February 2025"
  },
  {
    title: "Basic Data Analytics Using: PowerBI & ChatGPT",
    image: "/certs/data-analytics-using-powerbi-chatgpt.png",
    credlyUrl: "https://drive.google.com/file/d/1tE09xijQGb3H48Yh61X4rGYwie2UGeWG/view?usp=drive_link",
    issuer: "SREGEN",
    date: "November 2024"
  },
  {
    title: "Design Systems Made Esy: CreatingConsistent Interfaces with Figma",
    image: "/certs/design-systems-consistent-interfaces-figma.png",
    credlyUrl: "https://drive.google.com/file/d/1MJVI7haQjKoX__rDyWbP18JDsKjjSj7N/view?usp=drive_link",
    issuer: "Figma",
    date: "December 2024"
  },
  {
    title: "Enterprise Cloud Administration",
    image: "/certs/enterprise-cloud-administration-1.png",
    credlyUrl: "https://drive.google.com/file/d/1Qh2kiB4qJnrMP9j0SPbaMoUWe8xeJC_v/view?usp=drive_link",
    issuer: "Nutanix University",
    date: "July 2024"
  },
  {
    title: "From Code to Career: Job Hunting Strategies for Women",
    image: "/certs/from-code-to-career-job-hunting-strategies-for-womens.png",
    credlyUrl: "https://drive.google.com/file/d/1GLf8G88UPhD3H5xBQroJEXCKNktogJ5C/view?usp=drive_link",
    issuer: "Career Development",
    date: "February 2025"
  },
  {
    title: "Generative BI with Amazon Q & QuickSight",
    image: "/certs/generative-bi-w-amazonq-quicksight-1.png",
    credlyUrl: "https://drive.google.com/file/d/11AyveVNYHVjaKPTza9slH_c97ICL427Y/view?usp=drive_link",
    issuer: "AWS",
    date: "August 2024"
  },
  {
    title: "Google Ads for Beginners",
    image: "/certs/google-ads-for-begineers-1.png",
    credlyUrl: "https://drive.google.com/file/d/1_4V4i7kTWG41Qhnmc0zuXwFUIFYVfP6T/view?usp=drive_link",
    issuer: "Google",
    date: "July 2024"
  },
  {
    title: "IBM TechXchange Dev Day",
    image: "/certs/ibm-rechxchange-dev-day.png",
    credlyUrl: "https://drive.google.com/file/d/17tnlJyllvK3eq9oh7pT6C458i93kKINI/view?usp=drive_link",
    issuer: "IBM",
    date: "January 2025"
  },
  {
    title: "International Perspectives Series Webinar:Industrial Robots Open a New Chapter in Sci-Tech",
    image: "/certs/industrial-robots-open-a-new-chapter-in-scitech.png",
    credlyUrl: "https://drive.google.com/file/d/1Mra3r1UzKIxWONt6fJit47xtO8BxxPkK/view?usp=drive_link",
    issuer: "Robotics Training",
    date: "December 2024"
  },
  {
    title: "From Vision to Reality: Integrating Adobe for Engineering Success",
    image: "/certs/integrating-adobe-for-engineering-success.png",
    credlyUrl: "https://drive.google.com/file/d/1M3mKtatA5n_vVcaWmMOi-8dULgJ9z0Pn/view?usp=drive_link",
    issuer: "COECS Industry Professional Forum",
    date: "February 2025"
  },
  {
    title: "Intelligent Manufacturing for a Better Life: Smart Home Appliance Design",
    image: "/certs/intelligent-manufacturing-for-a-better-life-smart-home-appliance-design.png",
    credlyUrl: "https://drive.google.com/file/d/1mrGIulyjXEM3Z5fNUpU7sPEjnh5RGOVp/view?usp=drive_link",
    issuer: "Manufacturing Technology",
    date: "December 2024"
  },
  {
    title: "MATLAB Certification",
    image: "/certs/mathlab-cert.png",
    credlyUrl: "https://drive.google.com/file/d/1D9NMCJbArjjJ6coar2PApzVl1Z_gWRC1/view?usp=drive_link",
    issuer: "MathWorks",
    date: "December 2023"
  },
  {
    title: "Navigating the Cloud: Choosing the Right Storage with Google Cloud, Azure, AWS",
    image: "/certs/navigating-cloude-right-storage-google-cloude-azure-aws.png",
    credlyUrl: "https://drive.google.com/file/d/1NqSZwjc9WG4B5DsEMXWyQqd4dywm45Lv/view?usp=drive_link",
    issuer: "Cordillera Young Leaders Club",
    date: "December 2024"
  },
  {
    title: "New Energy Power Generation Technology",
    image: "/certs/new-energy-power-generation-technology.png",
    credlyUrl: "https://drive.google.com/file/d/1qT1gYshV3c6ErxLBfyyBn45j2szU2-GH/view?usp=drive_link",
    issuer: "Energy Technology",
    date: "December 2024"
  },
  {
    title: "Oracle Generative AI Certified Professional",
    image: "/certs/oracle-generative-ai-certified-professional-1.png",
    credlyUrl: "https://drive.google.com/file/d/1JNh-5I1QmVPjkBwv0LSSEMl2ZxDhdthk/view?usp=drive_link",
    issuer: "Oracle",
    date: "July 2024"
  },
  {
    title: "Real-Time Data Ingestion with Azure IoT Operations & Microsoft Fabric",
    image: "/certs/real-time-data-ingestion-with-azure-iot-operations-microsoft-fabric.png",
    credlyUrl: "https://drive.google.com/file/d/1n-9-Y5-ZnvFAyiYErnGuCpKputqn8pNI/view?usp=drive_link",
    issuer: "Microsoft Azure",
    date: "December 2024"
  },
  {
    title: "Search Engine Optimization with Squarespace",
    image: "/certs/search-engine-optimization-w-squarepace-1.png",
    credlyUrl: "https://drive.google.com/file/d/1iEAOK4AEkCfp5MYUJf4aV6QAj8w9D4Nv/view?usp=drive_link",
    issuer: "Squarespace",
    date: "July 2024"
  },
  {
    title: "Software Engineering Masterclass: Navigating Career Path",
    image: "/certs/software-engineering-masterclass-navigating-career-path.png",
    credlyUrl: "https://drive.google.com/file/d/1rYbJgIKpYUXA1mawkT_7DQyE30g9ABF8/view?usp=drive_link",
    issuer: "Professional Development",
    date: "January 2025"
  },
  {
    title: "Technical Support Fundamentals",
    image: "/certs/technical-support-fundamentals-1.png",
    credlyUrl: "https://drive.google.com/file/d/1dHTfqCSQDvqklLXdmQsAY6ofJT4tuLJc/view?usp=drive_link",
    issuer: "IT Support Training",
    date: "August 2024"
  },
  {
    title: "Things to Know While Using Query Store",
    image: "/certs/things-to-know-while-using-query-store.png",
    credlyUrl: "https://drive.google.com/file/d/1LyNdIJtzntqItM8mx3d2VGzHFtQPS2j6/view?usp=drive_link",
    issuer: "Database Training",
    date: "February 2024"
  },
  {
    title: "Python Programming for Programmers",
    image: "/certs/training-cert-python-programming-for-programmers.png",
    credlyUrl: "https://drive.google.com/file/d/1GKNsInOb2feviroqb1aRCgCbW7oiPd6c/view?usp=drive_link",
    issuer: "MSTConnect",
    date: " March 2024"
  },
  {
    title: "Ethical Hacking & Pentesting",
    image: "/certs/training-ethical-hacking-pentesting.png",
    credlyUrl: "https://drive.google.com/file/d/18Tg2KMaxRr4HzZOCLqX7_sE6mEzHYB_r/view?usp=drive_link",
    issuer: "Cybersecurity Training",
    date: "February 2024"
  },
  {
    title: "Ai in Robotics: Future of Industrial Automation",
    image: "/certs/ai-robotics-future-itelligent-automation.png",
    credlyUrl: "https://drive.google.com/file/d/1O-F-iEOp5AtwTDYcRcqlWdC2qXCv9mdq/view?usp=sharing",
    issuer: "MRSP Laguna Chapter",
    date: "March 2025"
  },
  {
    title: "The Fundamentals of AI, Deep Leaning, and Machine Learning",
    image: "/certs/ai-deep-leaning-machine-learning.png",
    credlyUrl: "https://drive.google.com/file/d/1R7DVeNV19CTLsa039tgrnd3AzHoQgGgx/view?usp=drive_link",
    issuer: "MRSP Laguna Chapter",
    date: "March 2025"
  },
  {
    title: "Spreadsheets Simplified: Unlocking Excel for Administrative Success",
    image: "/certs/training-spreadsheets-simplified-unlocking-excel-for-administrative-success.png",
    credlyUrl: "https://drive.google.com/file/d/1QCXj2q15_HAZKpHybSUl5d5CJYXxE2Hd/view?usp=drive_link",
    issuer: "Microsoft Excel Training",
    date: "December2024"
  }
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-8 py-16 relative">
      {/* Page Title */}
      <TypographyH1
        className={cn(
          "text-4xl md:text-6xl text-center mb-4 w-full",
          "bg-clip-text text-transparent",
          "bg-gradient-to-b from-white/90 to-white/60",
          "pb-2"
        )}
      >
        Professional Certificates
      </TypographyH1>

      {/* Subtitle */}
      <TypographyP className="text-center text-zinc-400 mb-12 max-w-2xl">
        Click any certificate to view its verification page and explore the validated skills and knowledge.
      </TypographyP>

      {/* Certificates Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mb-8">
        {certificates.map((cert, index) => (
          <Link
            key={index}
            href={cert.credlyUrl || "#"}
            target={cert.credlyUrl ? "_blank" : undefined}
            rel={cert.credlyUrl ? "noopener noreferrer" : undefined}
            className={cn(
              "border border-zinc-600 rounded-lg p-6 bg-zinc-900/30",
              "transition-all duration-300 hover:scale-105 hover:bg-zinc-800/50 hover:shadow-lg",
              "flex flex-col group",
              !cert.credlyUrl && "cursor-default"
            )}
            onClick={(e) => {
              if (!cert.credlyUrl) {
                e.preventDefault();
              }
            }}
            aria-label={cert.credlyUrl ? `View ${cert.title} verification` : cert.title}
          >
            {/* Certificate Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-black/50 mb-4">
              <Image
                src={cert.image}
                alt={`${cert.title} certificate`}
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Certificate Info */}
            <div className="space-y-3 flex-grow flex flex-col">
              <h3 className="font-semibold text-neutral-100 text-lg leading-tight line-clamp-2 group-hover:text-white transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center justify-between text-sm mt-auto">
                <span className="text-zinc-300 font-medium truncate flex-1">
                  {cert.issuer}
                </span>
                <span className="text-zinc-400 text-xs ml-2">{cert.date}</span>
              </div>

              {/* View Credential indicator */}
              {cert.credlyUrl && (
                <div className="flex items-center gap-2 text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Credential</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-8 w-full max-w-6xl">
        <p className="text-zinc-400 text-sm mb-2">
          All certificates are verified and can be validated through their respective credential platforms.
        </p>
        <p className="text-zinc-500 text-xs">
          Total Certifications: <span className="text-zinc-300 font-semibold">{certificates.length}</span>
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