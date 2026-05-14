import { ArrowRight, Download, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Premium background glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-navy-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <span className="px-4 py-1.5 bg-teal-500/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest border border-teal-500/20">
              M&E Specialist
            </span>
            <span className="px-4 py-1.5 bg-navy-light text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-700">
              Program Analyst
            </span>
            <span className="px-4 py-1.5 bg-navy-light text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-700">
              Impact Measurement
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            Talia <span className="text-gradient">Khalid</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Results-oriented Monitoring & Evaluation specialist. Transforming operational data into strategic institutional insights within the innovation and startup ecosystems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-8 mb-12 text-slate-300"
          >
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                <Mail size={18} className="text-teal-400" />
              </div>
              <span className="font-medium">taliakhalid23@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                <Phone size={18} className="text-teal-400" />
              </div>
              <span className="font-medium">03427019011</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                <MapPin size={18} className="text-teal-400" />
              </div>
              <span className="font-medium">Karachi, Pakistan</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-5"
          >
            <a href="#experience" className="btn btn-primary px-10 py-4 text-lg flex items-center gap-3 group">
              View Methodology 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Talia_Khalid_CV.pdf" target="_blank" className="btn btn-secondary px-10 py-4 text-lg flex items-center gap-3 group">
              Download Credentials 
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-slate-800/60"
          >
            <div className="relative group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">100%</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Startup Success</div>
            </div>
            <div className="relative group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">11+</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Tech Councils</div>
            </div>
            <div className="relative group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">ESG</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Aligned Frameworks</div>
            </div>
            <div className="relative group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">Agile</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Scrum Certified</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
