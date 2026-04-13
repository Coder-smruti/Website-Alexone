import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface SpacesProps {
  onNavigate: (page: string) => void;
}

export default function Spaces({ onNavigate }: SpacesProps) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="Explore Our Design Worlds" 
          subtitle="Categories" 
        />
        <p className="text-center text-luxury-ivory/60 max-w-2xl mx-auto mb-20 font-light">
          Each category is crafted with its own visual identity, mood, and spatial story. From intimate residential corners to grand commercial statements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onNavigate(cat.id)}
              className="group relative aspect-video overflow-hidden cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/60 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center">
                <h3 className="text-4xl md:text-5xl font-serif text-luxury-ivory mb-4 group-hover:scale-110 transition-transform duration-500">
                  {cat.title}
                </h3>
                <p className="text-sm text-luxury-ivory/70 font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View Projects <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
