"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = React.useState<string>(sectionIds[0]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export function Navbar() {
  const activeId = useActiveSection(links.map((l) => l.href.substring(2)));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between p-2 pl-6 bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--border)] rounded-full shadow-sm max-w-[1100px] w-full md:w-auto transition-all">
          
          <div className="md:hidden font-mono text-sm font-semibold text-[var(--text)] px-2">
            {profile.name}
          </div>

          <div className="hidden md:flex items-center space-x-1 mr-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  activeId === link.href.substring(2)
                    ? "text-[var(--text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                )}
              >
                {activeId === link.href.substring(2) && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-[var(--surface-2)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <a href={profile.links.resume} target="_blank" rel="noreferrer">
              <Button size="sm" className="hidden md:inline-flex rounded-full">
                Resume
              </Button>
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-1 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[var(--background)] flex flex-col"
          >
            <div className="flex items-center justify-end p-6 pt-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8 pb-20">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={cn(
                    "text-3xl font-medium transition-colors",
                    activeId === link.href.substring(2) ? "text-[var(--accent)]" : "text-[var(--text)]"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={profile.links.resume}
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: links.length * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button size="lg" className="mt-4 rounded-full">
                  Resume
                </Button>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
