import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({ className, children, id, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("py-16 md:py-24 scroll-m-28", className)} {...props}>
      {children}
    </section>
  );
}
