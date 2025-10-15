import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  figma: {
    title: "Figma",
    bg: "black",
    fg: "white",
    icon: <SiFigma />,
  },
  sharepoint: {
    title: "SharePoint",
    bg: "black",
    fg: "white",
    icon: <span>📁</span>,
  },
  microsoft365: {
    title: "Microsoft 365",
    bg: "black",
    fg: "white",
    icon: <span>☁️</span>,
  },
  clonezilla: {
    title: "Clonezilla",
    bg: "black",
    fg: "white",
    icon: <span>🔄</span>,
  },
  spiceworks: {
    title: "Spiceworks",
    bg: "black",
    fg: "white",
    icon: <span>⚙️</span>,
  },
  manageengine: {
    title: "ManageEngine",
    bg: "black",
    fg: "white",
    icon: <span>🛠️</span>,
  },
  anydesk: {
    title: "AnyDesk",
    bg: "black",
    fg: "white",
    icon: <span>💻</span>,
  },
  entra: {
    title: "Entra",
    bg: "black",
    fg: "white",
    icon: <span>🔐</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "ecowrite",
    category: "E-commerce Platform",
    title: "EcoWrite",
    src: "/assets/projects-screenshots/ecowrite/landing.png",
    screenshots: ["landing.png", "products.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "https://abcbusiness042310.wixsite.com/my-site---",
    get content(): React.ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sustainable Home Goods E-commerce
          </TypographyP>
          <TypographyP className="font-mono">
            At EcoWrite, we are passionate about providing sustainable home goods that are not only beautiful but also eco-friendly. Our mission is to offer products that align with our values of personalization, craftsmanship, sustainability, and authenticity. We believe that every purchase can make a positive impact on the environment and the world we live in. With a wide range of carefully curated products, we strive to inspire our customers to make conscious choices for their homes. Join us on this journey towards a greener future.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Explore eco-friendly products with options for personalization and authentic craftsmanship.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/ecowrite/products.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Our Story</TypographyH3>
          <p className="font-mono mb-2">
            Dedicated to sustainability, EcoWrite curates items that promote environmental consciousness.
          </p>
          <SlideShow images={[`${BASE_PATH}/ecowrite/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "porkscan",
    category: "IoT Capstone Project",
    title: "PorkScan: Automated Pork Freshness Determination System",
    src: "/assets/projects-screenshots/porkscan/landing.png",
    screenshots: ["landing.png", "sensors.png", "demo.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://yuhin.my.canva.site/porkscan-capstone-project",
    get content(): React.ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated Pork Freshness Detection for Wet Markets
          </TypographyP>
          <TypographyP className="font-mono">
            Introducing PorkScan, an innovative solution designed to ensure the highest quality in pork freshness. Our project integrates advanced sensor technology to monitor key freshness indicators in real-time. Using a high-resolution camera for color classification, the MQ-137 sensor to detect ammonia levels, and a load cell sensor to measure tenderness, PorkScan provides a comprehensive analysis that guarantees your pork is always fresh, safe, and tender. Embrace the future of quality assurance with PorkScan where technology meets freshness.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Real-time monitoring with integrated sensors for color, ammonia, and tenderness assessment.
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>High-resolution camera for visual color classification.</li>
            <li>MQ-137 sensor for ammonia level detection.</li>
            <li>Load cell sensor for tenderness measurement.</li>
            <li>Comprehensive freshness scoring for consumer safety.</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/porkscan/sensors.png`,
              `${BASE_PATH}/porkscan/demo.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-2">
            PorkScan combines hardware sensors with software analysis to deliver instant results, ideal for wet market consumers.
          </p>
          <SlideShow images={[`${BASE_PATH}/porkscan/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "porkscan-demo",
    category: "IoT Capstone Demo",
    title: "PorkScan: Step-by-Step Demonstration",
    src: "/assets/projects-screenshots/porkscan-demo/landing.png",
    screenshots: ["landing.png", "steps.png", "results.png", "video-thumbnail.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://yuhin.my.canva.site/pork-scan-demo",
    get content(): React.ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Complete Step-by-Step Guide: Scanning Fresh and Spoiled Pork
          </TypographyP>
          <TypographyP className="font-mono">
            This demonstration showcases the complete process of using the PorkScan device to assess pork freshness. Follow along as we demonstrate how to properly operate the device, from initial setup to analyzing results and maintaining the equipment for optimal performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Demo Video</TypographyH3>
          <p className="font-mono mb-2">
            Watch the complete demonstration of the PorkScan device in action, showing both fresh and spoiled pork samples.
          </p>
          <div className="w-full aspect-video my-4">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://yuhin.my.canva.site/pork-scan-demo"
              allowFullScreen
              allow="fullscreen"
              title="PorkScan Step-by-Step Demonstration"
            ></iframe>
          </div>

          <TypographyH3 className="my-4 mt-8">Step-by-Step Operating Instructions</TypographyH3>
          
          <TypographyH3 className="my-2 text-lg">🔌 Step 1: Turn On the Device</TypographyH3>
          <p className="font-mono mb-4">
            Flip the Main Power switch to ON to activate the PorkScan system.
          </p>

          <TypographyH3 className="my-2 text-lg">📂 Step 2: Open the Pork Scanner Box</TypographyH3>
          <p className="font-mono mb-4">
            Gently open the door labeled "Please Open Here" to access the scanning chamber.
          </p>

          <TypographyH3 className="my-2 text-lg">🥩 Step 3: Place Pork Sample</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Place the pork sample flat inside the Pork Scanner Box.</li>
            <li>Make sure the meat fits properly on the Pork Scanner Tray for accurate scanning.</li>
            <li>Close the door securely to ensure proper sensor readings.</li>
          </ul>

          <TypographyH3 className="my-2 text-lg">▶️ Step 4: Start Scanning</TypographyH3>
          <p className="font-mono mb-4">
            On the Freshness Status Display, press the Scan button to begin the automatic freshness assessment.
          </p>

          <TypographyH3 className="my-2 text-lg">⚙️ Step 5: Automatic Scanning and Printing</TypographyH3>
          <p className="font-mono mb-2">
            The device will automatically measure three key freshness indicators:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>Ammonia levels</strong> - using the MQ-137 gas sensor</li>
            <li><strong>Color</strong> - via high-resolution camera analysis</li>
            <li><strong>Tenderness</strong> - measured by the load cell sensor</li>
          </ul>
          <p className="font-mono mb-4">
            A comprehensive freshness report will automatically print after scanning completes.
          </p>

          <TypographyH3 className="my-2 text-lg">📊 Step 6: Check Results</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>View the scan results on the Freshness Status Display.</li>
            <li>Listen for any audio alerts or instructions from the system.</li>
            <li>Review the printed report for detailed freshness metrics.</li>
          </ul>

          <SlideShow
            images={[
              `${BASE_PATH}/porkscan-demo/steps.png`,
              `${BASE_PATH}/porkscan-demo/results.png`,
            ]}
          />

          <TypographyH3 className="my-2 text-lg">🔄 Step 7: Remove Pork Sample</TypographyH3>
          <p className="font-mono mb-4">
            Open the Pork Scanner Box and carefully remove your pork sample.
          </p>

          <TypographyH3 className="my-2 text-lg">⚠️ Step 8: If Pork is Spoiled</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Turn ON the exhaust fan for 3 minutes to sanitize the scanning chamber.</li>
            <li>After 3 minutes, turn the exhaust fan OFF.</li>
            <li>This prevents contamination and keeps the device clean for the next scan.</li>
          </ul>

          <TypographyH3 className="my-2 text-lg">🔴 Step 9: Turn Off the Device</TypographyH3>
          <p className="font-mono mb-4">
            Switch OFF the Main Power when done using the device.
          </p>

          <TypographyH3 className="my-4 mt-8">⚠️ Important Safety Guidelines</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>Do NOT open the box during scanning</strong> - This will interrupt the process and produce inaccurate results.</li>
            <li><strong>Use the exhaust fan only if spoiled pork is detected</strong> - This keeps the scanning chamber clean and safe for future use.</li>
            <li><strong>Always close the door securely</strong> - Proper sealing ensures accurate sensor readings.</li>
            <li><strong>Handle samples carefully</strong> - Place meat flat on the tray to avoid measurement errors.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Device Maintenance Tips</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Clean the scanner tray after each use to prevent cross-contamination.</li>
            <li>Regularly check sensor calibration for optimal accuracy.</li>
            <li>Keep the scanning chamber dry and free from debris.</li>
            <li>Schedule periodic maintenance checks for all sensors and components.</li>
          </ul>

          <SlideShow images={[`${BASE_PATH}/porkscan-demo/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "asset-tracker",
    category: "Web Application",
    title: "Asset Management and Reimaging Tracker",
    src: "/assets/projects-screenshots/asset-tracker/landing.png",
    screenshots: ["landing.png", "qr-scan.png", "forms.png", "dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.sockerio,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sharepoint,
        PROJECT_SKILLS.microsoft365,
        PROJECT_SKILLS.clonezilla,
        PROJECT_SKILLS.spiceworks,
        PROJECT_SKILLS.manageengine,
        PROJECT_SKILLS.anydesk,
        PROJECT_SKILLS.entra,
      ],
    },
    live: "https://yuhin.my.canva.site/benig-special-presentation-ojt-pptx",
    get content(): React.ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Web-based Asset Management and Reimaging Tracker
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive web application designed for efficient tracking of IT assets and their reimaging processes during OJT. It streamlines asset identification, accountability, and status monitoring to enhance organizational efficiency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Modern tools for quick asset handling and real-time oversight.
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>QR codes for quick asset identification and scanning.</li>
            <li>Digital accountability forms with electronic signatures for secure documentation.</li>
            <li>Real-time updates on asset status and reimaging progress via dashboard.</li>
            <li>Centralized tracking to reduce manual errors and improve workflow.</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/asset-tracker/qr-scan.png`,
              `${BASE_PATH}/asset-tracker/forms.png`,
              `${BASE_PATH}/asset-tracker/dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-2">
            Users scan QR codes to access asset details, fill digital forms, and monitor reimaging in real-time, ensuring accountability and timely updates.
          </p>
          <SlideShow images={[`${BASE_PATH}/asset-tracker/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "internship-day",
    category: "Internship Experience",
    title: "A Day in the Life: NU Laguna Intern at AS White Global",
    src: "/assets/projects-screenshots/internship-day/landing.png",
    screenshots: ["landing.png", "activities.png", "tools.png", "video-thumbnail.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.sharepoint,
        PROJECT_SKILLS.microsoft365,
        PROJECT_SKILLS.clonezilla,
        PROJECT_SKILLS.spiceworks,
        PROJECT_SKILLS.manageengine,
        PROJECT_SKILLS.anydesk,
        PROJECT_SKILLS.entra,
      ],
    },
    live: "https://www.canva.com/design/DAGkmkLIEtI/cJEAz1AiQzL9HHNHlplJHw/watch?utm_content=DAGkmkLIEtI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67d5320452",
    get content(): React.ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Day in the Life: NU Laguna Intern at AS White Global Company
          </TypographyP>
          <TypographyP className="font-mono">
            This project showcases my daily experiences and contributions as a student intern from NU Laguna at AS White Global Company. Through hands-on IT support, asset management, and troubleshooting, I gained practical skills in a professional environment, focusing on efficiency, compliance, and team collaboration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Internship Showcase Video</TypographyH3>
          <p className="font-mono mb-2">
            Watch the full video presentation of my internship activities and daily routine.
          </p>
          <div className="w-full aspect-video my-4">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.canva.com/design/DAGkmkLIEtI/cJEAz1AiQzL9HHNHlplJHw/watch?embed"
              allowFullScreen
              allow="fullscreen"
              title="A Day in the Life: NU Laguna Intern at AS White Global"
            ></iframe>
          </div>
          <TypographyH3 className="my-4 mt-8">Internship Activities</TypographyH3>
          <TypographyH3 className="my-2 text-lg">📌 IT Asset Tracking & Disposal (PEZA Compliance)</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Monitored and maintained updated lists of monitors and other IT assets for disposal (PEZA compliance).</li>
            <li>Created and managed Excel databases in SharePoint with details (model, serial numbers, condition, location, invoice, purchase date).</li>
            <li>Categorized monitors into working, non-working, and for-repair groups to streamline disposal processes.</li>
          </ul>
          <TypographyH3 className="my-2 text-lg">🖥️ Laptop Reimaging & Deployment</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Prepared and reimaged laptops for new employees using Clonezilla and company-specific system images.</li>
            <li>Installed necessary software, configured settings, and ensured devices met organizational standards before deployment.</li>
            <li>Coordinated with IT team to ensure smooth onboarding for new hires.</li>
          </ul>
          <TypographyH3 className="my-2 text-lg">🔧 Technical Support & Troubleshooting</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Provided on-site and remote technical support using AnyDesk for connectivity and troubleshooting issues.</li>
            <li>Resolved hardware, software, and network problems reported through Spiceworks and ManageEngine ticketing systems.</li>
            <li>Assisted employees with password resets, software installations, and general IT inquiries.</li>
          </ul>
          <TypographyH3 className="my-2 text-lg">👥 User Account Management</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Created and managed user accounts in Microsoft Entra (Azure AD) for new employees.</li>
            <li>Assigned appropriate permissions, group memberships, and access levels based on role requirements.</li>
            <li>Maintained user directory accuracy and security compliance.</li>
          </ul>
          <TypographyH3 className="my-2 text-lg">📊 Documentation & Reporting</TypographyH3>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Documented all IT activities, asset changes, and support tickets in SharePoint and company databases.</li>
            <li>Generated weekly reports on asset status, support ticket resolution times, and reimaging progress.</li>
            <li>Contributed to knowledge base articles to help streamline future IT operations.</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/internship-day/activities.png`,
              `${BASE_PATH}/internship-day/tools.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Skills & Tools Used</TypographyH3>
          <p className="font-mono mb-2">
            Throughout my internship, I worked with various enterprise IT tools and platforms:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>SharePoint & Microsoft 365:</strong> Document management, collaboration, and asset tracking.</li>
            <li><strong>Clonezilla:</strong> Disk imaging and laptop deployment.</li>
            <li><strong>Spiceworks & ManageEngine:</strong> IT service desk and ticketing systems.</li>
            <li><strong>AnyDesk:</strong> Remote desktop support and troubleshooting.</li>
            <li><strong>Microsoft Entra (Azure AD):</strong> User account provisioning and management.</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Learnings</TypographyH3>
          <p className="font-mono mb-2">
            This internship provided invaluable hands-on experience in IT operations, asset lifecycle management, and professional communication. I developed strong problem-solving skills, learned to work efficiently in a corporate environment, and gained confidence in supporting end-users with technical issues.
          </p>
          <SlideShow images={[`${BASE_PATH}/internship-day/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "personal-figma",
    category: "UI/UX Design",
    title: "Benig User Profile - Desktop Website Design",
    src: "/assets/projects-screenshots/personal-figma/landing.png",
    screenshots: ["landing.png", "profile.png", "projects.png", "contact.png", "prototype-thumbnail.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://www.figma.com/proto/YOUR_FIGMA_FILE_ID/YOUR_PROTOTYPE_NAME?node-id=YOUR_NODE_ID&scaling=min-zoom&page-id=YOUR_PAGE_ID",
    get content(): React.ReactNode {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Personal Website Design - Interactive Desktop Prototype
          </TypographyP>
          <TypographyP className="font-mono">
            A modern, interactive desktop website design created in Figma to showcase my professional profile, portfolio projects, and contact information. This prototype demonstrates thoughtful UI/UX design principles with a focus on clean aesthetics, intuitive navigation, and engaging user experience. The design emphasizes visual hierarchy, consistent branding, and responsive layouts optimized for desktop viewing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Interactive Figma Prototype</TypographyH3>
          <p className="font-mono mb-2">
            Explore the interactive prototype below. Click through different sections to experience the navigation flow and design interactions.
          </p>
          <div className="w-full aspect-video my-4 border rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_EMBED_URL"
              allowFullScreen
              loading="lazy"
              title="Benig User Profile - Desktop Website Design Prototype"
            ></iframe>
          </div>
          <p className="font-mono text-sm text-gray-600 mt-2">
            Note: If the embed doesn't load, you can <a href={this.live} target="_blank" rel="noopener noreferrer" className="underline">view the prototype directly in Figma</a>.
          </p>

          <TypographyH3 className="my-4 mt-8">Design Features</TypographyH3>
          <p className="font-mono mb-2">
            Key design elements and sections included in this personal website prototype:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>Hero Section:</strong> Eye-catching introduction with professional photo and tagline.</li>
            <li><strong>About Me:</strong> Personal bio highlighting skills, experience, and background.</li>
            <li><strong>Projects Portfolio:</strong> Showcase of featured works with project cards and descriptions.</li>
            <li><strong>Skills & Technologies:</strong> Visual representation of technical proficiencies.</li>
            <li><strong>Contact Section:</strong> Clear call-to-action for connecting via email or social platforms.</li>
            <li><strong>Navigation Menu:</strong> Intuitive header navigation for seamless browsing.</li>
          </ul>

          <SlideShow
            images={[
              `${BASE_PATH}/personal-figma/profile.png`,
              `${BASE_PATH}/personal-figma/projects.png`,
              `${BASE_PATH}/personal-figma/contact.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Design Principles Applied</TypographyH3>
          <p className="font-mono mb-2">
            This design prototype demonstrates several key UI/UX principles:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>Visual Hierarchy:</strong> Strategic use of typography, size, and spacing to guide user attention.</li>
            <li><strong>Consistency:</strong> Unified color palette, typography system, and component styles throughout.</li>
            <li><strong>White Space:</strong> Generous spacing creates breathing room and improves readability.</li>
            <li><strong>Accessibility:</strong> High contrast ratios and clear typography for enhanced readability.</li>
            <li><strong>User Flow:</strong> Logical navigation structure with clear pathways to key information.</li>
            <li><strong>Modern Aesthetics:</strong> Clean, contemporary design inspired by current web design trends.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Color Palette & Typography</TypographyH3>
          <p className="font-mono mb-2">
            The design features a carefully selected color scheme and typography system:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>Primary Colors:</strong> Professional blues and neutrals for credibility and trust.</li>
            <li><strong>Accent Colors:</strong> Vibrant highlights to draw attention to key actions and elements.</li>
            <li><strong>Typography:</strong> Modern sans-serif fonts for clarity with serif accents for personality.</li>
            <li><strong>Spacing System:</strong> Consistent 8px grid system for harmonious layouts.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Responsive Considerations</TypographyH3>
          <p className="font-mono mb-2">
            While this prototype focuses on desktop layout (1440px width), the design system accounts for responsive behavior:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li>Flexible grid layouts that can adapt to different screen sizes.</li>
            <li>Component designs that stack gracefully on narrower viewports.</li>
            <li>Typography scales designed with responsive sizing in mind.</li>
            <li>Touch-friendly interaction areas for future mobile adaptations.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Design Tools & Workflow</TypographyH3>
          <p className="font-mono mb-2">
            Created using professional design tools and methodologies:
          </p>
          <ul className="font-mono list-disc pl-5 mb-4">
            <li><strong>Figma:</strong> Primary design and prototyping tool for all screens and interactions.</li>
            <li><strong>Component System:</strong> Reusable design components for consistency and efficiency.</li>
            <li><strong>Auto Layout:</strong> Flexible layouts that adjust automatically to content changes.</li>
            <li><strong>Prototyping:</strong> Interactive connections demonstrating navigation and user flows.</li>
            <li><strong>Design Tokens:</strong> Systematic approach to colors, typography, and spacing values.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Future Development</TypographyH3>
          <p className="font-mono mb-2">
            This Figma prototype serves as a blueprint for future development with technologies like React, Next.js, and Tailwind CSS. The design system is structured to translate seamlessly into code with clear specifications for developers.
          </p>

          <SlideShow images={[`${BASE_PATH}/personal-figma/landing.png`]} />
        </div>
      );
    },
  },
];

export default projects;