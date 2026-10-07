"use client";

import { motion } from "motion/react";
import { ExternalLink, Trophy, Medal, Code2, Rocket, Award } from "lucide-react";
import { achievements, hackathons, certifications } from "@/data/portfolio";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { CountUp } from "./ui/count-up";

function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="h-full rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-300 hover:border-[var(--accent-soft)] hover:shadow-sm flex flex-col relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-2)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export function Achievements() {
  const lcStr = achievements.find(a => a.includes("LeetCode")) || "";
  const cfStr = achievements.find(a => a.includes("Codeforces")) || "";
  const jeeStr = achievements.find(a => a.includes("JEE")) || "";
  const dsaStr = achievements.find(a => a.includes("DSA problems")) || "";

  // Parse for count-up animations safely
  const lcRating = parseInt(lcStr.match(/\d+/)?.[0] || "0", 10);
  const cfRating = parseInt(cfStr.match(/\d+/)?.[0] || "0", 10);
  const jeeScore = parseFloat(jeeStr.match(/[\d.]+/)?.[0] || "0");
  const dsaCount = parseInt(dsaStr.match(/\d+/)?.[0] || "0", 10);

  return (
    <Section id="achievements">
      <Reveal>
        <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-2">Milestones</h2>
        <h3 className="text-2xl font-semibold mb-8">Achievements & Certifications</h3>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* CP Card - Large 12 cols or 8 cols */}
        <BentoCard className="md:col-span-8" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-5 h-5 text-[var(--accent)]" />
            <h4 className="font-semibold text-lg">Competitive Programming</h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-[var(--muted)]">LeetCode</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--surface-2)] text-[10px] font-mono text-[var(--muted)] border border-[var(--border)]">TODO <ExternalLink className="ml-1 w-3 h-3" /></span>
                  </div>
                  <p className="font-medium text-lg">Guardian</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[var(--accent)] text-xl"><CountUp to={lcRating} /></div>
                  <p className="text-xs text-[var(--muted)]">Rating</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[var(--surface-2)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-[var(--muted)]">Codeforces</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--surface-2)] text-[10px] font-mono text-[var(--muted)] border border-[var(--border)]">TODO <ExternalLink className="ml-1 w-3 h-3" /></span>
                  </div>
                  <p className="font-medium text-lg">Specialist</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[var(--accent)] text-xl"><CountUp to={cfRating} /></div>
                  <p className="text-xs text-[var(--muted)]">Rating</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[var(--surface-2)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[var(--accent)] opacity-80 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </BentoCard>

        {/* JEE Main Card */}
        <BentoCard className="md:col-span-4" delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-5 h-5 text-[var(--muted)]" />
            <h4 className="font-semibold">Academics</h4>
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight"><CountUp to={jeeScore} /></span>
              <span className="text-xl text-[var(--muted)]">%ile</span>
            </div>
            <p className="text-[var(--muted)] mt-2">JEE Main Rank</p>
          </div>
        </BentoCard>

        {/* DSA Card */}
        <BentoCard className="md:col-span-4" delay={0.3}>
           <div className="flex items-center gap-3 mb-6">
            <Medal className="w-5 h-5 text-[var(--muted)]" />
            <h4 className="font-semibold">Problem Solving</h4>
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight"><CountUp to={dsaCount} /></span>
              <span className="text-xl text-[var(--muted)] font-mono">+</span>
            </div>
            <p className="text-[var(--muted)] mt-2">DSA problems solved</p>
          </div>
        </BentoCard>

        {/* Hackathons Card */}
        <BentoCard className="md:col-span-4" delay={0.4}>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-5 h-5 text-[var(--muted)]" />
            <h4 className="font-semibold">Hackathons</h4>
          </div>
          <ul className="space-y-4 mt-auto">
            {hackathons.map((h, i) => (
              <li key={i} className="text-sm flex flex-col gap-1 border-l-2 border-[var(--surface-2)] pl-3 py-0.5 leading-snug">
                <span className="font-medium">{h}</span>
                <span className="inline-flex w-fit items-center text-[10px] font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer">TODO Link <ExternalLink className="ml-1 w-3 h-3" /></span>
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* Certifications Card */}
        <BentoCard className="md:col-span-4" delay={0.5}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-[var(--muted)]" />
            <h4 className="font-semibold">Certifications</h4>
          </div>
          <ul className="space-y-4 mt-auto">
            {certifications.map((c, i) => {
              const [name, issuer] = c.split(" (");
              return (
                <li key={i} className="text-sm flex flex-col gap-1 border-l-2 border-[var(--surface-2)] pl-3 py-0.5">
                  <span className="font-medium leading-snug">{name}</span>
                  <div className="flex items-center justify-between">
                     <span className="text-[var(--muted)] text-xs">{issuer ? issuer.replace(")", "") : ""}</span>
                     <span className="inline-flex items-center text-[10px] font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer">TODO <ExternalLink className="ml-1 w-3 h-3" /></span>
                  </div>
                </li>
              );
            })}
          </ul>
        </BentoCard>

      </div>
    </Section>
  );
}
