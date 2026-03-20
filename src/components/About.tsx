import { motion } from 'framer-motion';
export function About() {
  return (
    <section id="about" className="py-32 bg-primary-950 relative overflow-hidden">
      {/* Blue mesh orb */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
         <div className="w-[100vw] h-[50vh] rounded-full bg-accent/10 blur-[120px] transform translate-y-1/4" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="font-serif text-4xl md:text-5xl italic font-medium text-white mb-10 leading-tight tracking-tight"
            >
              10 Years. One Mission. Your Market Leadership.
            </motion.h2>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: 0.2 }}
               className="space-y-6 text-lg md:text-xl leading-relaxed font-light"
            >
              <p className="text-white/60">
                PPP was founded with a single conviction: every company has the potential to lead its niche — but potential without structure is just a promise.
              </p>
              <p className="text-white/40">
                We are a professional, objective, and confidential consulting partner. We don't sell generic frameworks. We build bespoke solutions inside your organization, grounded in real diagnostics and driven by measurable outcomes.
              </p>
              <div className="pt-6">
                <p className="inline-block border-t border-white/10 pt-6 font-display font-semibold text-white text-xl md:text-2xl">
                  We're not your coach. We're your strategic engine.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Team Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-5/12 w-full mx-auto"
          >
            <div className="aspect-[4/3] media-placeholder flex items-center justify-center rounded-2xl w-full">
              <div className="text-center">
                <span className="text-primary-400 text-sm font-medium">10 Years - Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
