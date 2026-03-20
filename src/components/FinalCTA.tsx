import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-[2rem] px-8 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 40%, #3182ce 100%)'
          }}
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight max-w-3xl mx-auto tracking-tight"
          >
            Ready to build your high-performance engine?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-blue-200/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a 30-minute diagnostic call. No pitch, just value. We'll identify three immediate bottlenecks in your current system.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-dark font-semibold text-base hover:bg-blue-50 transition-colors duration-300 shadow-lg shadow-black/10 cursor-pointer">
              Book Your Call
            </button>
            <a href="#services" className="inline-flex items-center gap-2 text-white/90 font-semibold text-base hover:text-white transition-colors group cursor-pointer">
              View Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
