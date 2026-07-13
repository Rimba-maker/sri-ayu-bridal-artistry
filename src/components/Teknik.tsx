import { motion } from "framer-motion";
import { teknik } from "../data/content";
import { staggerContainer, ayuFade } from "../lib/motion";

const iconPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Teknik() {
  return (
    <section id="teknik" className="bg-maroon-house px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={ayuFade}
          className="font-serif text-3xl md:text-4xl text-on-dark text-center mb-14"
        >
          {teknik.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teknik.items.map((item) => (
            <motion.div key={item.title} variants={ayuFade} className="bg-maroon-uplift/40 rounded-card p-8 text-center">
              <motion.span variants={iconPop} className="text-4xl inline-block">
                {item.icon}
              </motion.span>
              <h3 className="font-sans font-semibold text-on-dark mt-4 mb-2">{item.title}</h3>
              <p className="font-sans text-on-dark-soft text-sm">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
