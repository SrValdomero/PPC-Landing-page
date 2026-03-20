import { motion } from 'framer-motion';
import { ArrowRight, Clock, Building2, MessageSquare, Briefcase, Bot } from 'lucide-react';

const programs = [
  {
    title: "CoreShift",
    tagline: "Diagnose. Connect. Transform.",
    duration: "90 Days",
    icon: <Building2 className="w-7 h-7 text-accent icon-glow" strokeWidth={1.5} />,
    desc: "A high-impact organizational intervention that uncovers hidden conflicts, audits departmental efficiency, and realigns your team with your corporate mission. We don't guess — we diagnose.",
    points: [
      "Root-cause analysis of stagnation",
      "Role optimization across all departments",
      "Bespoke career mapping and action plans"
    ]
  },
  {
    title: "CoreXpress",
    tagline: "Aligned. Impact. Conquer.",
    duration: "60 Days",
    icon: <MessageSquare className="w-7 h-7 text-accent icon-glow" strokeWidth={1.5} />,
    desc: "Your company is only as powerful as its most prominent voice. CoreXpress transforms your team into sophisticated communicators who don't just talk — they negotiate, persuade, and close.",
    points: [
      "Advanced body language & psychology",
      "High-clarity messaging that drives decisions",
      "Strategic self-marketing alignment"
    ]
  },
  {
    title: "Sales DNA",
    tagline: "Master the Art of the Deal.",
    icon: <Briefcase className="w-7 h-7 text-accent icon-glow" strokeWidth={1.5} />,
    desc: "An average sales team keeps you afloat. An elite sales team makes you untouchable. Sales DNA replaces outdated pitches with psychological precision.",
    points: [
      "Instant rapport & x-ray need discovery",
      "Position your product as the only solution",
      "Develop long-term business alliances"
    ]
  },
  {
    title: "AI Core: Meet Martha",
    tagline: "Your New Favorite Employee.",
    icon: <Bot className="w-7 h-7 text-accent icon-glow" strokeWidth={1.5} />,
    desc: "The AI revolution isn't coming — it's here. Martha integrates into daily operations to eliminate friction, automate repetitive work, and turn your team into high performers.",
    points: [
      "Intelligent workflows & automation",
      "Data retrieval and creative solutions",
      "Your elite AI-powered partner"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-950 mb-4 tracking-tight">Four Programs. One Goal: Market Leadership.</h2>
          <p className="text-primary-500 text-lg">Precision instruments for organizational transformation.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, idx) => (
            <motion.div 
               key={idx}
               variants={cardVariants}
               whileHover={{ y: -10, scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="glass-card rounded-3xl p-8 md:p-10 flex flex-col h-full hover:glass-card-hover cursor-default group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300">
                  {program.icon}
                </div>
                {program.duration && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-600 border border-primary-200">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {program.duration}
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-950 mb-2">{program.title}</h3>
              <p className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent/70">{program.tagline}</p>
              
              <p className="mb-8 flex-grow leading-relaxed text-primary-500">
                {program.desc}
              </p>
              
              <ul className="space-y-3 mb-10 text-primary-600">
                {program.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent/50" />
                    <span className="text-sm md:text-base font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex w-fit items-center gap-2 font-semibold text-accent hover:text-brand-medium transition-colors mt-auto group/btn cursor-pointer">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
