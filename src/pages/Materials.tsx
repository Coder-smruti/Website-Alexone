import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { MATERIALS } from '../constants';

export default function Materials() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="Materials & Finishes" 
          subtitle="The Palette" 
        />
        <p className="text-center text-luxury-ivory/60 max-w-2xl mx-auto mb-20 font-light">
          Carefully chosen textures, surfaces, hardware, and lighting solutions that define the quality of every Alexone project.
        </p>

        {/* Interior Solutions */}
        <div className="mb-32">
          <h3 className="text-2xl font-serif text-luxury-gold mb-12 border-b border-white/10 pb-4">Interior Solutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {MATERIALS.interiorSolutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-luxury-charcoal/30 border border-white/5 hover:border-luxury-gold/30 transition-all duration-300"
              >
                <span className="text-sm tracking-wider text-luxury-ivory/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Material Types */}
        <div className="mb-32">
          <h3 className="text-2xl font-serif text-luxury-gold mb-12 border-b border-white/10 pb-4">Material Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MATERIALS.materialTypes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="aspect-square flex items-center justify-center p-4 bg-luxury-ivory/5 border border-white/5 hover:bg-luxury-gold/10 transition-all duration-300 text-center"
              >
                <span className="text-xs uppercase tracking-widest text-luxury-ivory/60">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-32">
          <h3 className="text-2xl font-serif text-luxury-gold mb-12 border-b border-white/10 pb-4">Hardware & Brand Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {MATERIALS.partners.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="h-24 flex items-center justify-center border border-white/5 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <span className="text-lg font-serif tracking-widest text-luxury-ivory/40">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decor & Lighting */}
        <div>
          <h3 className="text-2xl font-serif text-luxury-gold mb-12 border-b border-white/10 pb-4">Decor & Lighting</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.decorLighting.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-6 bg-luxury-charcoal/20 border-l-2 border-luxury-gold"
              >
                <span className="text-sm uppercase tracking-widest text-luxury-ivory/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
