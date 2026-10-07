import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import { projects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { KanbanWidget } from "@/components/widgets/kanban-widget";
import { MeterWidget } from "@/components/widgets/meter-widget";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.name} - Saurav Priyanshu`,
    description: project.subtitle,
    openGraph: {
      title: project.name,
      description: project.subtitle,
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  
  if (!project) notFound();
  
  const nextProject = projects[(projectIndex + 1) % projects.length];
  
  const problem = project.highlights[0] || "";
  const decisions = project.highlights.length > 1 ? project.highlights[1] : project.highlights[0] || "";
  const outcome = project.highlights.length > 2 ? project.highlights[2] : project.highlights[0] || "";

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <Container>
        <Reveal>
          <Link href="/#work" className="inline-flex items-center text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to work
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{project.name}</h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mb-8 leading-relaxed">
            {project.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-[var(--border)] pb-12">
             <div className="flex flex-wrap gap-2 mr-auto">
                {project.stack.map(tech => <Tag key={tech}>{tech}</Tag>)}
             </div>
             <div className="flex gap-4">
                {project.links.liveDemo !== "TODO" && project.links.liveDemo !== "#TODO" && (
                   <a href={project.links.liveDemo} target="_blank" rel="noreferrer">
                      <Button className="rounded-full">
                         Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                   </a>
                )}
                {project.links.github !== "TODO" && project.links.github !== "#TODO" && (
                   <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="rounded-full">
                         GitHub <Github className="ml-2 h-4 w-4" />
                      </Button>
                   </a>
                )}
             </div>
          </div>
        </Reveal>

        <Section className="py-0 mb-20">
          <Reveal>
             <h2 className="text-2xl font-semibold mb-6">Overview</h2>
             <p className="text-lg text-[var(--muted)] leading-relaxed max-w-4xl">
               {project.name} is a {project.subtitle.toLowerCase()} built to solve real user needs. 
               It leverages a modern stack featuring {project.stack.slice(0,3).join(", ")} to deliver a fast, reliable, and scalable experience.
             </p>
          </Reveal>
        </Section>

        <Section className="py-0 mb-24">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <Reveal delay={0.1}>
                 <h3 className="text-lg font-mono text-[var(--muted)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-4">The Problem</h3>
                 <p className="text-[var(--text)] leading-relaxed">{problem}</p>
              </Reveal>
              <Reveal delay={0.2}>
                 <h3 className="text-lg font-mono text-[var(--muted)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-4">Key Decisions</h3>
                 <p className="text-[var(--text)] leading-relaxed">{decisions}</p>
              </Reveal>
              <Reveal delay={0.3}>
                 <h3 className="text-lg font-mono text-[var(--muted)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-4">Outcome</h3>
                 <p className="text-[var(--text)] leading-relaxed">{outcome}</p>
              </Reveal>
           </div>
        </Section>

        <Reveal>
          {project.slug === "nexaflow" && <KanbanWidget />}
          {project.slug === "quickai" && <MeterWidget />}
        </Reveal>

        <Section className="py-0 mb-32">
           <Reveal>
              <h2 className="text-2xl font-semibold mb-8">Process & Gallery</h2>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={0.1}>
                 <div className="aspect-video rounded-[14px] border-2 border-dashed border-[var(--border)] flex items-center justify-center bg-[var(--surface-2)] text-[var(--muted)] font-mono text-sm">
                    Add wireframes
                 </div>
              </Reveal>
              <Reveal delay={0.2}>
                 <div className="aspect-video rounded-[14px] border-2 border-dashed border-[var(--border)] flex items-center justify-center bg-[var(--surface-2)] text-[var(--muted)] font-mono text-sm">
                    Add final UI
                 </div>
              </Reveal>
           </div>
        </Section>

        <Reveal>
           <Link href={`/projects/${nextProject.slug}`} className="group block py-16 border-t border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-4">Next Project</p>
              <div className="flex items-center justify-between">
                 <h2 className="text-4xl md:text-6xl font-bold group-hover:text-[var(--accent)] transition-colors">
                    {nextProject.name}
                 </h2>
                 <ArrowRight className="h-10 w-10 md:h-16 md:w-16 text-[var(--border)] group-hover:text-[var(--accent)] group-hover:translate-x-4 transition-all" />
              </div>
           </Link>
        </Reveal>
      </Container>
    </main>
  );
}
