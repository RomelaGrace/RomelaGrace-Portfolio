"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-20 pb-12 px-6 scroll-mt-24 bg-transparent overflow-visible"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-start gap-12">
        
        {/* Left: Enhanced Profile Photo */}
        <motion.div
          className="flex justify-center md:justify-start md:sticky md:top-24"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Main Photo Container */}
            <div className="relative w-auto h-auto max-w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 transform transition-all duration-300 group-hover:scale-105 bg-black">
              <Image
                src="/assets/profile.jpg"
                alt="Profile photo of Romela Grace M. Benig"
                width={400}
                height={400}
                className="object-contain transition-all duration-300 group-hover:scale-105"
                priority
                quality={95}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
              <div className="absolute top-8 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* 3D Depth Shadow */}
            <div className="absolute top-2 left-2 w-full h-full bg-black/10 rounded-lg -z-20 transform transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </motion.div>

        {/* Right: About Text + Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <TypographyH1
              className={cn(
                "text-4xl md:text-6xl mb-6",
                "bg-clip-text text-transparent",
                "bg-gradient-to-b from-white/90 to-white/60",
                "pb-2"
              )}
            >
              About Me
            </TypographyH1>
          </motion.div>
          
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <TypographyP className="text-lg leading-relaxed text-white/85 text-justify text-indent-8">  {/* Added text-indent-8 */}
              I’m Romela Grace M. Benig, a Computer Engineering graduate and Full-Stack / Backend Developer passionate about building secure, efficient, and scalable systems. My interests include cybersecurity, cloud computing, automation, and software development, where I enjoy transforming complex challenges into practical, reliable solutions.
            </TypographyP>
          </motion.div>
          
          {/* Secondary Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <TypographyP className="mt-4 text-lg leading-relaxed text-white/70 text-justify text-indent-8">  {/* Added text-indent-8 */}
              With experience as a Junior Software Developer, I’ve contributed to developing and maintaining software solutions that improve system performance and user experience. I also have hands-on experience in automation scripting, incident management, device security, and technical support, backed by a strong foundation in security operations and system optimization. Driven by a systems-thinking mindset and a passion for continuous learning, I thrive in collaborative environments that value innovation, problem-solving, and meaningful impact.
            </TypographyP>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/certificates">
                <Button variant="outline" className="text-sm font-medium">
                  Certificates
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/education">
                <Button variant="outline" className="text-sm font-medium">
                  Education
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/awards">
                <Button variant="outline" className="text-sm font-medium">
                  Awards
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 