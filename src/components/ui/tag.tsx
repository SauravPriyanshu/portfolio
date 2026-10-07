import * as React from "react";
import { cn } from "@/lib/utils";

export function Tag({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[var(--surface-2)] px-3 py-1 text-xs font-medium text-[var(--text)] font-mono",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
