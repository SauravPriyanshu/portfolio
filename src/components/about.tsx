import * as React from "react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { CountUp } from "./ui/count-up";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-8 mb-20">
          <div>
            <Reveal>
              <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-2">About Me</h2>
              <p className="text-2xl font-semibold">The person behind the code.</p>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-[var(--muted)] text-lg leading-relaxed max-w-2xl">
                <p>
                  I am a full-stack developer who enjoys shipping real products. As the sole backend developer for CreatorOS, I engineered a robust platform that secures operations for 1,040 creators, focusing heavily on data integrity and a comprehensive Role-Based Access Control model.
                </p>
                <p>
                  I'm deeply interested in the trade-offs behind product decisions—especially when it comes to limits, permissions, and database architecture. When I'm not building web applications, you can usually find me tackling algorithmic challenges in competitive programming.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--border)] pt-12">
          {[
            { value: 1040, label: "Creators Secured", suffix: "" },
            { value: 5, label: "Tier RBAC Model", suffix: "" },
            { value: 85, label: "Test Coverage", suffix: "%+" },
            { value: 1500, label: "DSA Problems", suffix: "+" },
          ].map((stat, i) => (
            <Reveal key={i} delay={0.1 * i} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-2">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-mono text-[var(--muted)]">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
