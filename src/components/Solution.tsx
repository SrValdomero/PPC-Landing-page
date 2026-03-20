import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp } from 'lucide-react';
import teamPhoto from '../assets/hero-office.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Solution() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      title: "Strategic Analysis",
      desc: "Identifying exactly what's holding you back."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      title: "Organizational Development",
      desc: "Aligning structure with your ultimate goals."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      title: "Applied Training",
      desc: "Delivering the tools your team needs to execute."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-primary-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-950 mb-6 leading-tight tracking-tight">
              We Don't Just Advise.<br />
              We <span className="text-accent">Diagnose, Align, and Transform.</span>
            </h2>
            <p className="text-lg text-primary-500 mb-6 leading-relaxed">
              Since 2015, PPP has been the strategic partner companies call when they're serious about change — not cosmetic change, but deep, structural, measurable transformation.
            </p>
            <p className="text-lg text-primary-500 mb-10 leading-relaxed">
              We combine strategic analysis, organizational development, and applied professional training into a single, cohesive system that identifies exactly what's holding you back and delivers the tools to fix it.
            </p>

            <motion.div 
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {pillars.map((pillar, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary-900 text-lg">{pillar.title}</h4>
                    <p className="text-primary-500">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Placeholder — Team / Office */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamPhoto} 
                alt="Team Strategy Session" 
                className="w-full aspect-square md:aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
