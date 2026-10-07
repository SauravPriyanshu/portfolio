"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";
import { ArrowRight, Mail, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { Button } from "./ui/button";
import Image from "next/image";

function HeroBackground() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion || window.innerWidth < 768) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none hidden md:block">
      <motion.div
        className="absolute inset-0 opacity-100"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-soft), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </div>
  );
}

const headlineLines = [
  <React.Fragment key="1">I build products</React.Fragment>,
  <React.Fragment key="2">people can use,</React.Fragment>,
  <React.Fragment key="3">from the <span className="text-[var(--accent)]">interface</span></React.Fragment>,
  <React.Fragment key="4">to the database.</React.Fragment>,
];

export function Hero() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center pt-20">
      <HeroBackground />
      
      <div className="max-w-[1100px] w-full mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--surface-2)] shrink-0 flex items-center justify-center">
            {imageError ? (
              <span className="text-xl font-bold text-[var(--muted)]">{profile.name.charAt(0)}</span>
            ) : (
              <Image 
                src="/profile_image.png" 
                alt={profile.name} 
                width={64} 
                height={64} 
                className="w-full h-full object-cover"
                priority
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <div className="flex items-center space-x-3 bg-[var(--surface-2)] border border-[var(--border)] px-4 py-2 rounded-full">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="font-mono text-sm text-[var(--muted)]">Open to roles</span>
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-8 leading-[1.1]">
          {headlineLines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p 
          className="text-[var(--muted)] text-lg md:text-xl max-w-[44ch] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {profile.tagline} Based in {profile.location}.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/#work" className="group">
            <Button size="lg" className="rounded-full transition-transform hover:-translate-y-0.5">
              View my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="group">
            <Button variant="outline" size="lg" className="rounded-full transition-transform hover:-translate-y-0.5">
              Download resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-mono text-[var(--muted)] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center">
            <span>B.Tech CSAI, NSUT</span>
            <span className="hidden sm:inline mx-3">·</span>
          </div>
          <div className="flex items-center">
            <span>Delhi, India</span>
            <span className="hidden sm:inline mx-3">·</span>
          </div>
          <div className="flex items-center">
            <span>JEE Main 98.91%ile</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors p-2 -ml-2 rounded-full hover:bg-[var(--surface-2)]">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors p-2 rounded-full hover:bg-[var(--surface-2)]">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors p-2 rounded-full hover:bg-[var(--surface-2)]">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="font-mono text-xs text-[var(--muted)] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--muted)] to-transparent" />
      </motion.div>
    </section>
  );
}
