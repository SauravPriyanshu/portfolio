import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";
import { profile, experience, education, skills } from "@/data/portfolio";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Container>
        <Work />

        {/* EXPERIENCE SECTION */}
        <Section id="experience">
          <Reveal>
            <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-2">Experience</h2>
            <h3 className="text-2xl font-semibold mb-8">Where I've worked</h3>
          </Reveal>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <Card>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-lg font-medium">{job.role}</h3>
                      <p className="text-[var(--muted)]">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 font-mono text-sm text-[var(--muted)]">
                      {job.period}
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--muted)]">
                    {job.highlights.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section id="skills">
          <Reveal>
            <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-2">Skills</h2>
            <h3 className="text-2xl font-semibold mb-8">What I know</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <h4 className="font-medium mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h4 className="font-medium mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <h4 className="font-medium mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <h4 className="font-medium mb-4">Databases & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.databases, ...skills.tools].map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        <Achievements />
      </Container>
      
      <About />
      
      <Container>
        {/* EDUCATION SECTION */}
        <Section id="education">
          <Reveal>
            <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-2">Education</h2>
            <h3 className="text-2xl font-semibold mb-8">Academic background</h3>
          </Reveal>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="flex flex-col md:flex-row md:justify-between py-4 border-b border-[var(--border)] last:border-0">
                  <div>
                    <h3 className="font-medium">{edu.course}</h3>
                    <p className="text-[var(--muted)]">{edu.school}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="font-mono text-sm">{edu.year}</div>
                    <div className="text-[var(--muted)] text-sm">{edu.score}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </Container>
      
      <Contact />
    </>
  );
}
