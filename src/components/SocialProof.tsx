import { motion } from 'framer-motion';

export function SocialProof() {
  return (
    <section className="py-10 bg-white border-y border-primary-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl font-display font-bold text-accent">10+</span>
            <span className="text-left leading-tight text-sm text-primary-500">Years of<br/>Consulting</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-primary-200"></div>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-display font-bold text-accent">4</span>
            <span className="text-left leading-tight text-sm text-primary-500">Core Programs<br/>Tailored to You</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-primary-200"></div>
          <div className="flex items-center gap-3">
            <span className="leading-tight text-sm text-primary-500">Trusted by companies<br/>ready to lead their market</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
