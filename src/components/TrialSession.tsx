import { motion } from "framer-motion";
import { trialSession } from "../data/content";
import { ayuFade } from "../lib/motion";

export default function TrialSession() {
  return (
    <section id="trial" className="bg-canvas px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={ayuFade}>
          <img
            src={trialSession.image}
            alt="Sesi trial makeup pengantin"
            className="w-full h-[420px] object-cover rounded-card shadow-lg"
          />
        </motion.div>

        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={ayuFade}
            className="font-serif text-3xl md:text-4xl text-ink mb-4"
          >
            {trialSession.heading}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={ayuFade}
            className="font-sans text-body mb-8"
          >
            {trialSession.body}
          </motion.p>

          <ol className="relative border-l-2 border-maroon/20 pl-6 space-y-6">
            {trialSession.steps.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-maroon-accent" />
                <p className="font-sans text-sm text-ink">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
