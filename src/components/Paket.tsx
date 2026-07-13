import { motion } from "framer-motion";
import { paket } from "../data/content";
import { staggerContainer, ayuFade } from "../lib/motion";

export default function Paket() {
  return (
    <section id="paket" className="bg-canvas-ceramic px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={ayuFade}
          className="font-serif text-3xl md:text-4xl text-ink text-center mb-14"
        >
          {paket.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
        >
          {paket.items.map((item) => (
            <motion.div
              key={item.name}
              variants={ayuFade}
              className={`relative bg-surface rounded-card p-8 shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] ${
                item.popular ? "ring-2 ring-gold" : ""
              }`}
            >
              {item.popular && (
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill border border-gold bg-gold-lightest text-gold font-sans text-xs font-semibold px-4 py-1 whitespace-nowrap"
                >
                  ⭐ Terpopuler
                </motion.span>
              )}
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-sans font-semibold text-ink mt-4 mb-1">{item.name}</h3>
              <p className="font-serif text-2xl text-maroon mb-4">{item.price}</p>
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="font-sans text-body-soft text-sm flex gap-2">
                    <span className="text-maroon-accent">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
