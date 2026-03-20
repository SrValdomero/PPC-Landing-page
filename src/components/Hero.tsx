import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-coaching.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-28 overflow-hidden bg-primary-50">
      {/* Soft accent blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-light/8 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-brand-medium/6 blur-[120px]" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        className="container relative z-10 mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column — Copy */}
          <div>
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[0.95] text-brand-dark"
            >
              Your Team Has the Talent. We Build the System That Unleashes It.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-primary-500 mb-10 max-w-lg leading-relaxed"
            >
              Stop fighting friction. High-performance architecture for elite organizations looking to scale without losing their soul.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto group">
                Book Your Free Diagnostic Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Button>
              <a href="#services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  View Our Methodology
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Column — Media + Stat Badge */}
          <motion.div variants={itemVariants} className="relative">
            {/* Main Image / Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/10">
              <img 
                src={heroImage} 
                alt="PPP Strategy Session — Modern office with team collaboration" 
                className="w-full aspect-[4/3] object-cover"
              />

            </div>
            
            {/* Floating Stat Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-4 md:left-6 glass-card rounded-xl px-6 py-4 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-display font-black text-brand-dark">42%</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary-500">Efficiency Gain</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
