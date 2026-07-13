import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "../data/content";
import { ayuFade } from "../lib/motion";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "Semua" ? portfolio.items : portfolio.items.filter((i) => i.filter === activeFilter);

  return (
    <section id="portfolio" className="bg-canvas px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={ayuFade}
          className="font-serif text-3xl md:text-4xl text-ink text-center mb-10"
        >
          {portfolio.heading}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolio.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative rounded-pill px-5 py-2 font-sans text-sm transition-colors ${
                activeFilter === filter ? "text-on-dark" : "text-body hover:text-maroon-accent"
              }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="portfolio-filter-pill"
                  className="absolute inset-0 rounded-pill bg-maroon-accent"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.button
                key={item.image + item.caption}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(i)}
                className="mb-4 block w-full break-inside-avoid rounded-card overflow-hidden"
              >
                <img src={item.image} alt={item.caption} className="w-full object-cover hover:scale-105 transition-transform duration-300" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-maroon-house/95 flex items-center justify-center p-6"
          >
            <motion.div
              layout
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-3xl w-full"
            >
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].caption}
                className="w-full max-h-[80vh] object-contain rounded-card"
              />
              <p className="font-sans text-on-dark-soft text-sm text-center mt-4">{filtered[lightbox].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
