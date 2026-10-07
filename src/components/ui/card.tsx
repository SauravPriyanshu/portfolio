import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[14px] bg-[var(--surface)] border border-[var(--border)] p-6 transition-all hover:border-[var(--accent-soft)] hover:bg-[var(--surface-2)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
