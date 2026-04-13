import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { MATERIALS } from '../constants';

export default function Partners() {
  return (
      <div className="pt-32 pb-20 px-6 bg-luxury-black min-h-screen">
      <div className="container mx-auto">
        <SectionHeading 
          title="Our Partners" 
          subtitle="Collaboration" 
        />
        <p className="text-center text-luxury-ivory/60 max-w-2xl mx-auto mb-20 font-light">
          A network of trusted brands and collaborators who help us deliver excellence in every detail. We work with the best in the industry to ensure your space is built with quality.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {MATERIALS.partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-luxury-black h-48 flex flex-col items-center justify-center p-8 group cursor-pointer"
            >
              <div className="w-full h-full border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-luxury-gold/30">
                <span className="text-xl md:text-2xl font-serif tracking-[0.2em] text-luxury-ivory/20 group-hover:text-luxury-gold transition-colors duration-500">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-20 bg-luxury-charcoal/30 border border-white/5 text-center">
          <h3 className="text-3xl font-serif text-luxury-ivory mb-6">Interested in collaborating?</h3>
          <p className="text-luxury-ivory/50 mb-10 max-w-xl mx-auto font-light">
            We are always looking to expand our network of premium material and service providers. If you share our commitment to luxury and precision, we'd love to connect.
          </p>
          <button className="px-10 py-4 bg-transparent border border-luxury-gold text-luxury-gold text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}
