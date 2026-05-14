import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-teal-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Open to collaborations on M&E frameworks and program evaluation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <Mail size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Email</div>
                    <a href="mailto:taliakhalid23@gmail.com" className="text-base font-medium text-white hover:text-teal-400 transition-colors">taliakhalid23@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <Phone size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Phone</div>
                    <a href="tel:+923427019011" className="text-base font-medium text-white hover:text-teal-400 transition-colors">03427019011</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <ExternalLink size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Profile</div>
                    <a href="https://linkedin.com/in/taliakhalid" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white hover:text-teal-400 transition-colors flex items-center gap-2">
                      LinkedIn <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-navy-light border border-slate-800 shadow-xl"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <input type="text" className="w-full bg-navy border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-teal-500 outline-none transition-all" placeholder="Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input type="email" className="w-full bg-navy border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-teal-500 outline-none transition-all" placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea className="w-full bg-navy border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-teal-500 outline-none transition-all h-24" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full btn btn-primary py-3 text-base flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
