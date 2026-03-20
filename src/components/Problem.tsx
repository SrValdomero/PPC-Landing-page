import { motion } from 'framer-motion';
import { AlertTriangle, Users, TrendingDown, Layers, Bot } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Problem() {
  const painPoints = [
    {
      icon: <Users className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      text: "Departments work in silos. Communication is reactive, not strategic."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      text: "Sales relies on outdated scripts and passive order-taking — and leads walk away."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      text: "Your best people burn out because roles aren't designed for growth."
    },
    {
      icon: <Bot className="w-6 h-6 text-accent icon-glow" strokeWidth={1.5} />,
      text: "Meanwhile, AI is reshaping the market, and your competitors aren't waiting."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-950 mb-6 leading-tight tracking-tight">
              Great Companies Don't Fail Because of Bad Ideas.<br />
              <span className="text-accent">They Fail Because of Bad Structure.</span>
            </h2>
            <p className="text-lg text-primary-500 max-w-2xl mx-auto">
              You've invested in your team. You've set ambitious goals. But somewhere between the vision and the execution, things break down.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:glass-card-hover transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                  {point.icon}
                </div>
                <p className="text-primary-700 font-medium pt-1">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-8 md:p-12 glass-card rounded-3xl relative overflow-hidden"
          >
            {/* Soft accent glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Layers className="w-12 h-12 text-accent icon-glow mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-950 mb-4">The problem isn't effort. It's alignment.</h3>
              <p className="text-primary-500 text-lg">And no amount of motivational workshops will fix a structural issue.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
