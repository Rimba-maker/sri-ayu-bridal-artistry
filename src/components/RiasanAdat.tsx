import { motion } from "framer-motion";
import { riasanAdat } from "../data/content";
import { staggerContainer, ayuFade } from "../lib/motion";

export default function RiasanAdat() {
  return (
    <section id="riasan-adat" className="bg-canvas px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={ayuFade}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-3">{riasanAdat.heading}</h2>
          <p className="font-sans text-body">{riasanAdat.subheadline}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.06)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {riasanAdat.items.map((item) => (
            <motion.div
              key={item.title}
              variants={ayuFade}
              className="group relative rounded-card overflow-hidden shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-house/90 via-maroon-house/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-2xl">{item.emoji}</span>
                <h3 className="font-serif text-lg text-on-dark mt-1">{item.title}</h3>
                <p className="font-sans text-xs text-on-dark-soft mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={ayuFade}
          className="font-serif italic text-center text-body mt-12 max-w-xl mx-auto"
        >
          "{riasanAdat.closingNote}"
        </motion.p>
      </div>
    </section>
  );
}
