import { motion } from "framer-motion";
import { hero } from "../data/content";
import { sriAyuReveal, ayuFade } from "../lib/motion";

export default function Hero() {
  return (
    <section className="bg-canvas px-6 pt-16 pb-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sriAyuReveal}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.p variants={ayuFade} className="font-sans text-sm uppercase tracking-widest text-maroon-accent mb-4">
            {hero.eyebrow}
          </motion.p>
          <motion.h1 variants={ayuFade} className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-6">
            {hero.headline}
          </motion.h1>
          <motion.p variants={ayuFade} className="font-sans text-body mb-8 max-w-lg">
            {hero.subheadline}
          </motion.p>

          <motion.div variants={ayuFade} className="flex flex-wrap gap-4 mb-10">
            <a
              href="#cta-booking"
              className="rounded-pill bg-maroon-accent text-on-dark font-sans font-semibold px-8 py-3.5 active:scale-95 transition-transform"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#portfolio"
              className="rounded-pill border border-maroon text-maroon font-sans font-semibold px-8 py-3.5 active:scale-95 transition-transform"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div variants={ayuFade} className="flex flex-wrap gap-3">
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-pill border border-gold text-gold font-sans text-xs px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div variants={ayuFade}>
          <img
            src={hero.image}
            alt="Riasan pengantin elegan Sri Ayu Bridal Artistry"
            className="w-full h-[520px] object-cover rounded-card shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
