// src/components/sections/skills.tsx

import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations"; // Adjust path if needed (e.g., "@/components/reveal-animations")
import { cn } from "@/lib/utils"; // Utility for conditional classNames; customize if using a different utility
import { Button } from "@/components/ui/button"; // Import Button component for consistent styling like in HeroSection

// Placeholder for main skills display (customize as needed)
// To integrate your actual skills (e.g., from constants.ts), replace the <p> with a loop over SKILLS data
const MainSkillsDisplay = () => (
  <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
    <p className="text-center text-zinc-400">Click the button to see my other skills.</p>
  </div>
);

const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="w-full h-screen md:h-[150dvh] flex flex-col items-center justify-center p-8"
      // CONFIG: Adjust section height/padding for overall layout (e.g., add 'pb-16' for more bottom space)
    >
      <div className="top-[70px] sticky mb-96 w-full max-w-4xl mx-auto">
        {/* Skills Title - Links to section for smooth scrolling */}
        <Link href="#skills">
          <BoxReveal width="100%"> {/* CONFIG: width must be "100%", "fit-content", or undefined per BoxReveal types */}
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl", // CONFIG: Adjust font sizes (e.g., text-5xl) or alignment
                "bg-gradient-to-b from-black/80 to-black/50", // CONFIG: Customize gradient colors (e.g., from-zinc-800 to-zinc-900)
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50" // CONFIG: Dark mode variants; add light mode if needed
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

        {/* Description/Hint - Centered text below title */}
        <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base text-center text-neutral-300">
          (hint: press a key) {/* CONFIG: Update text or remove line-clamp-4 for full multi-line display */}
        </p>

        {/* Main Skills Display - Insert your interactive elements here */}
        <MainSkillsDisplay />
      </div>

      {/* Button for Other Skills - Full configuration comments below */}
      <div 
        className="mt-20 flex justify-center" // CONFIG: mt-20 adds vertical space above button (increase to mt-24 for more down, decrease to mt-16 for less)
        // CONFIG: To move the entire button container (e.g., left/right), add 'ml-8' (left margin) or 'mr-8' (right margin) here
      >
        <Link href="/other-skills"> {/* CONFIG: Change href to your route (e.g., "/additional-skills") */}
          {/* CONFIG: translate-x-8 shifts button slightly right from center (2rem/32px). Adjust: translate-x-4 (less right), translate-x-16 (more right), or translate-x-0 (centered). Negative for left: -translate-x-8 */}
          <div className="translate-x-72"> 
            <BoxReveal width="fit-content"> {/* CONFIG: Use "fit-content" for button sizing; "100%" would make it full-width */}
              <Button
                variant="outline" // CONFIG: Use "outline" for bordered/transparent style (like HeroSection "Hire Me" button); try "default" for filled primary
                className={cn(
                  // Basic structure and text
                  "px-8 py-4 rounded-full font-semibold", // CONFIG: px-8/py-4 = padding (increase for bigger button); rounded-full = shape (try rounded-md for square); font-semibold = weight (try font-bold for bolder)
                  
                  // Background and border (theme-aligned)
                  "bg-transparent border-zinc-600 backdrop-blur-sm", // CONFIG: Transparent background for outline; border-zinc-600 = subtle outline (adjust color/opacity); backdrop-blur-sm = frosted effect (remove if not wanted)
                  "dark:border-zinc-400", // CONFIG: Dark mode border; tweak for your theme
                  
                  // Hover effects
                  "hover:bg-white/10 dark:hover:bg-zinc-800/50", // CONFIG: Subtle background on hover (white tint for light feel); customize colors (e.g., add glow with hover:shadow-2xl)
                  "transition-all duration-300 shadow-lg hover:shadow-xl shadow-zinc-900/50", // CONFIG: Smooth transitions; shadow-lg = base shadow (try shadow-md for subtler); duration-300 = speed (faster: 200, slower: 500)
                  
                  // Interactivity and accessibility
                  "transform hover:scale-105", // CONFIG: Scales up 5% on hover (adjust to hover:scale-110 for more pop)
                  "focus:outline-none focus:ring-2 focus:ring-zinc-400" // CONFIG: Focus ring for keyboard nav (color: focus:ring-blue-500 if you want accent); add aria-label="Explore other skills" for screen readers
                )}
                size="lg" // CONFIG: Button size (lg = larger like HeroSection; try "default" for standard, "sm" for smaller)
              >
                Explore Other Skills {/* CONFIG: Change button text (e.g., "View More Skills") or add an icon: <span className="flex items-center gap-2"><Icon /> Explore</span> */}
              </Button>
            </BoxReveal>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SkillsSection; // CONFIG: This exports the component for import elsewhere (e.g., in a layout or page file)