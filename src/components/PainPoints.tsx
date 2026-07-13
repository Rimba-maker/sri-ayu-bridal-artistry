import { motion } from "framer-motion";
import { painPoints } from "../data/content";
import { staggerContainer, ayuFade } from "../lib/motion";

export default function PainPoints() {
  return (
    <section className="bg-canvas-ceramic px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={ayuFade}
          className="font-serif text-3xl md:text-4xl text-ink text-center mb-14 max-w-2xl mx-auto"
        >
          {painPoints.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 gap-6"
        >
          {painPoints.items.map((item) => (
            <motion.div
              key={item.title}
              variants={ayuFade}
              className="bg-surface rounded-card p-8 shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)]"
            >
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-sans font-semibold text-ink mt-4 mb-2">{item.title}</h3>
              <p className="font-sans text-body-soft text-sm">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
