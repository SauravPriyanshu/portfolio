"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { Copy, Check, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { Button } from "./ui/button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="mb-32">
      <Reveal>
        <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-4 text-center">Contact</h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-6 text-center tracking-tight">Let's build something useful.</h3>
        <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto text-center mb-16 leading-relaxed">
          I'm currently open to internships, full-time opportunities, and collaborative projects. My inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto bg-[var(--surface-2)] border border-[var(--border)] rounded-[24px] p-8 md:p-16 flex flex-col items-center text-center">
          <a 
            href={`mailto:${profile.email}`}
            className="text-2xl md:text-4xl font-semibold hover:text-[var(--accent)] transition-colors mb-12 break-all"
          >
            {profile.email}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full">
            <Button size="lg" onClick={copyEmail} className="rounded-full w-full sm:w-auto min-w-[220px]" variant="outline">
              {copied ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? "Copied to clipboard" : "Copy email address"}
              <span aria-live="polite" className="sr-only">
                {copied ? "Email copied to clipboard" : ""}
              </span>
            </Button>
            
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full w-full sm:w-auto min-w-[220px] hover:-translate-y-0.5 transition-transform">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors p-3 rounded-full hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)]">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors p-3 rounded-full hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)]">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${profile.email}`} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors p-3 rounded-full hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)]">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
