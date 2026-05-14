import { ArrowRight, Download, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Premium background glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-teal-500/20">
              M&E Specialist
            </span>
            <span className="px-3 py-1 bg-navy-light text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-700">
              Program Analyst
            </span>
            <span className="px-3 py-1 bg-navy-light text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-700">
              Impact Measurement
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight"
          >
            Talia <span className="text-gradient">Khalid</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed font-light"
          >
            Monitoring & Evaluation specialist. Transforming operational data into strategic institutional insights within the innovation and startup ecosystems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-10 text-slate-300"
          >
            <div className="flex items-center gap-2 group">
              <Mail size={16} className="text-teal-400" />
              <span className="text-sm font-medium">taliakhalid23@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Phone size={16} className="text-teal-400" />
              <span className="text-sm font-medium">03427019011</span>
            </div>
            <div className="flex items-center gap-2 group">
              <MapPin size={16} className="text-teal-400" />
              <span className="text-sm font-medium">Karachi, Pakistan</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#experience" className="btn btn-primary px-8 py-3 text-base flex items-center gap-2 group">
              Methodology 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Talia_Khalid_CV.pdf" target="_blank" className="btn btn-secondary px-8 py-3 text-base flex items-center gap-2 group">
              CV 
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-800/60"
          >
            <div className="relative group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">100%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">Startup Success</div>
            </div>
            <div className="relative group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">11+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">Tech Councils</div>
            </div>
            <div className="relative group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">ESG</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">Aligned</div>
            </div>
            <div className="relative group">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">Agile</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">Scrum Certified</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
