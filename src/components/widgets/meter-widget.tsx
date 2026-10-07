"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export function MeterWidget() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="p-6 md:p-8 border border-[var(--border)] rounded-[14px] bg-[var(--surface)] mb-16 flex flex-col items-center justify-center min-h-[400px]">
       <div className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row justify-between mb-8 pb-4 border-b border-[var(--border)] gap-4 items-start sm:items-center">
             <h4 className="font-semibold text-lg">Concept model, not the live product</h4>
             <Button variant="outline" size="sm" onClick={() => setClicks(0)}>Reset Meter</Button>
          </div>
          
          <div className="mb-8">
             <div className="flex justify-between text-sm font-mono text-[var(--muted)] mb-2">
                <span>Generations</span>
                <span>{clicks}/10</span>
             </div>
             <div className="flex gap-1.5 h-3">
                {Array.from({ length: 10 }).map((_, i) => (
                   <div key={i} className={`flex-1 rounded-full transition-all duration-300 ${i < clicks ? 'bg-[var(--accent)] shadow-[0_0_8px_var(--accent-soft)]' : 'bg-[var(--surface-2)]'}`}></div>
                ))}
             </div>
          </div>

          <div className="text-center h-24 flex items-center justify-center">
             <AnimatePresence mode="wait">
               {clicks < 10 ? (
                 <motion.div
                   key="button"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                 >
                   <Button 
                     size="lg"
                     onClick={() => setClicks(c => c + 1)}
                     className="rounded-full shadow-lg"
                   >
                     Generate AI Content
                   </Button>
                 </motion.div>
               ) : (
                 <motion.div 
                   key="limit"
                   initial={{ opacity: 0, y: 10 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   className="p-4 bg-[var(--accent-soft)] text-[var(--accent)] rounded-xl border border-[var(--accent)]"
                 >
                   <p className="font-medium">You've hit the freemium cap of 10 generations.</p>
                   <p className="text-sm mt-1 opacity-80">Upgrade to continue creating!</p>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
}
