import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import imgLeadership from '../assets/insight-leadership.png';
import imgAI from '../assets/insight-ai.png';
import imgSales from '../assets/insight-sales.png';
import imgCommunication from '../assets/insight-communication.png';

const insights = [
  {
    category: 'CASE STUDY',
    title: 'How a 200-person firm cut onboarding time by 60% with CoreShift',
    image: imgLeadership,
    featured: true,
  },
  {
    category: 'ARTICLE',
    title: 'The hidden cost of misaligned teams — and how to fix it',
    image: imgCommunication,
  },
  {
    category: 'WEBINAR',
    title: 'AI in the boardroom: Practical adoption strategies for 2026',
    image: imgAI,
  },
  {
    category: 'ARTICLE',
    title: 'Why your top sales performers plateau — and what to do next',
    image: imgSales,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Insights() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-950 mb-3 tracking-tight">
              What's Your Next Breakthrough?
            </h2>
            <p className="text-primary-500 text-base md:text-lg leading-relaxed">
              Insights, case studies, and strategies from the front lines of organizational transformation.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-brand-dark hover:text-brand-medium transition-colors group shrink-0"
          >
            View all insights
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured tile — spans 2 rows on desktop */}
          <motion.a
            href="#"
            variants={tileVariants}
            className="relative group cursor-pointer rounded-2xl overflow-hidden md:row-span-2 min-h-[320px] md:min-h-0"
          >
            <img 
              src={insights[0].image} 
              alt={insights[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/85" />
            <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-light mb-3">{insights[0].category}</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-snug mb-4">{insights[0].title}</h3>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                Read the case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </span>
            </div>
          </motion.a>

          {/* Smaller tiles */}
          {insights.slice(1).map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              variants={tileVariants}
              className="relative group cursor-pointer rounded-2xl overflow-hidden min-h-[240px]"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/80" />
              <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-light mb-2">{item.category}</span>
                <h3 className="text-base md:text-lg font-display font-bold text-white leading-snug">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
