import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "We conduct a deep, confidential assessment of your organization — individual sessions, departmental audits, and structural analysis — to identify exactly where friction lives."
    },
    {
      num: "02",
      title: "Align",
      desc: "We build a tailored roadmap that connects your people to your strategy, optimizes roles, and eliminates the communication gaps that slow you down."
    },
    {
      num: "03",
      title: "Transform",
      desc: "We deliver applied training and elite advisory support so changes don't just happen — they stick. Measurable results, not motivational fluff."
    }
  ];

  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-950 mb-6 leading-tight tracking-tight">From Friction to Performance in Three Steps</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-5xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-primary-200 via-accent/20 to-primary-200" />
          
          {steps.map((step, idx) => (
            <motion.div 
               key={idx}
               variants={itemVariants}
               className="relative text-center"
            >
              <div className="w-24 h-24 mx-auto glass-card rounded-full flex items-center justify-center mb-8 relative z-10 border-accent/15">
                 <span className="text-3xl font-display font-bold text-accent">{step.num}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">{step.title}</h3>
              <p className="text-primary-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
