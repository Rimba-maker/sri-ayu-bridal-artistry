import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "../data/content";
import { ayuFade } from "../lib/motion";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-canvas-ceramic px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={ayuFade}
          className="font-serif text-3xl md:text-4xl text-ink text-center mb-12"
        >
          Pertanyaan Yang Sering Ditanyakan
        </motion.h2>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={item.q} className="bg-surface rounded-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-sans font-semibold text-ink text-sm">{item.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="text-maroon-accent text-xl leading-none shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="font-sans text-body-soft text-sm px-6 pb-5">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
