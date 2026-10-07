"use client";

import * as React from "react";
import { Container } from "./ui/container";
import { profile } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 mt-24">
      <Container className="flex flex-col md:flex-row items-center justify-between text-[var(--muted)] text-sm">
        <div className="mb-4 md:mb-0">
          © {currentYear} {profile.name}. All rights reserved.
        </div>
        <div className="flex items-center space-x-6">
          <span>Built with Next.js</span>
          <a href="#about" className="hover:text-[var(--text)] transition-colors">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
