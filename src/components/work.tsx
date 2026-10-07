import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, experience } from "@/data/portfolio";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { Tag } from "./ui/tag";

export function Work() {
  // We add CreatorOS manually as a card since it's an internship project
  const creatorOS = {
    slug: "creatoros",
    name: "CreatorOS",
    subtitle: "Creator operations and scheduling dashboard",
    stack: ["React", "Node.js", "MongoDB"],
    href: "#experience"
  };

  const allProjects = [
    ...projects.map(p => ({ ...p, href: `/projects/${p.slug}` })),
    creatorOS
  ];

  return (
    <Section id="work">
      <Reveal>
        <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-2">Work</h2>
        <h3 className="text-2xl font-semibold mb-12">Featured Projects</h3>
      </Reveal>
      <div className="space-y-16 md:space-y-24">
        {allProjects.map((project, i) => {
          const num = (i + 1).toString().padStart(2, '0');
          // @ts-ignore - handling the generic structure
          const cover = project.cover;
          
          return (
            <Reveal key={project.slug} delay={0.1}>
              <Link href={project.href} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-16 items-center">
                  <div className="order-2 md:order-1">
                    <div className="font-mono text-sm text-[var(--muted)] mb-4">{num}</div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 transition-colors inline-block relative">
                      <span className="group-hover:text-[var(--accent)] transition-colors">{project.name}</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                    <p className="text-[var(--muted)] text-lg mb-6 max-w-md">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.slice(0, 3).map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                      {project.stack.length > 3 && (
                        <Tag>+{project.stack.length - 3}</Tag>
                      )}
                    </div>
                    <div className="flex items-center font-medium text-sm">
                      View Project 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:text-[var(--accent)]" />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-[4/3] md:aspect-video rounded-xl bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden flex flex-col p-4 relative group-hover:border-[var(--accent-soft)] transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-2)] to-[var(--background)]"></div>
                      
                      {cover ? (
                        <img src={cover} alt={project.name} className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-[1.02]" />
                      ) : (
                        <div className="relative z-10 w-full h-full border border-[var(--border)] rounded-lg bg-[var(--surface)] shadow-lg overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
                          <div className="h-6 border-b border-[var(--border)] flex items-center px-3 space-x-1.5 bg-[var(--surface-2)]">
                            <div className="w-2 h-2 rounded-full bg-[var(--border)]"></div>
                            <div className="w-2 h-2 rounded-full bg-[var(--border)]"></div>
                            <div className="w-2 h-2 rounded-full bg-[var(--border)]"></div>
                          </div>
                          <div className="flex-1 p-4 md:p-6 flex gap-4 md:gap-6 bg-[var(--background)]">
                            {/* Abstract UI representation */}
                            <div className="w-1/4 h-full bg-[var(--surface-2)] rounded-md opacity-50"></div>
                            <div className="flex-1 flex flex-col gap-3">
                              <div className="w-full h-8 bg-[var(--surface-2)] rounded-md opacity-50"></div>
                              <div className="flex gap-3">
                                <div className="w-1/2 h-24 bg-[var(--surface-2)] rounded-md opacity-30"></div>
                                <div className="w-1/2 h-24 bg-[var(--surface-2)] rounded-md opacity-30"></div>
                              </div>
                              <div className="w-3/4 h-4 bg-[var(--surface-2)] rounded-md opacity-50 mt-auto"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
