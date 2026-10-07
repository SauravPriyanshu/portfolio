"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export function KanbanWidget() {
  const [cards, setCards] = useState([
    { id: 1, col: 0, title: "Design DB Schema" },
    { id: 2, col: 0, title: "JWT Auth Flow" },
    { id: 3, col: 1, title: "Socket.io Rooms" }
  ]);

  const moveCard = (id: number) => {
    setCards(cards.map(c => c.id === id ? { ...c, col: Math.min(c.col + 1, 2) } : c));
  };

  const cols = ["To Do", "In Progress", "Done"];

  return (
    <div className="p-6 md:p-8 border border-[var(--border)] rounded-[14px] bg-[var(--surface)] text-sm mb-16">
      <div className="flex flex-col sm:flex-row justify-between mb-8 pb-4 border-b border-[var(--border)] gap-4 items-start sm:items-center">
        <h4 className="font-semibold text-lg">Concept model, not the live product</h4>
        <Button variant="outline" size="sm" onClick={() => setCards([
          { id: 1, col: 0, title: "Design DB Schema" },
          { id: 2, col: 0, title: "JWT Auth Flow" },
          { id: 3, col: 1, title: "Socket.io Rooms" }
        ])}>Reset Kanban</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {cols.map((col, i) => (
          <div key={col} className="bg-[var(--surface-2)] p-4 rounded-xl min-h-[200px] flex flex-col gap-3">
            <h5 className="font-medium text-[var(--muted)] mb-2 flex justify-between items-center">
              {col}
              <span className="bg-[var(--surface)] px-2 py-0.5 rounded text-xs">{cards.filter(c => c.col === i).length}</span>
            </h5>
            <AnimatePresence>
              {cards.filter(c => c.col === i).map(c => (
                <motion.div
                  layout
                  layoutId={`card-${c.id}`}
                  key={c.id}
                  onClick={() => moveCard(c.id)}
                  className="bg-[var(--surface)] border border-[var(--border)] p-4 rounded-lg cursor-pointer transition-colors hover:border-[var(--accent)] hover:shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="font-medium mb-2">{c.title}</p>
                  <div className="flex justify-between items-center">
                     <span className="text-xs text-[var(--muted)]">NexaFlow</span>
                     {i < 2 && <span className="text-xs text-[var(--accent)]">Move →</span>}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
