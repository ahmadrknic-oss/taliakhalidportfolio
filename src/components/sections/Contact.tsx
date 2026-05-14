import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-teal-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's <span className="text-gradient">Connect</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Open to collaborations on M&E frameworks, program evaluation, and startup ecosystem development. Reach out for institutional consulting or professional inquiries.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <Mail size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Email</div>
                    <a href="mailto:taliakhalid23@gmail.com" className="text-xl font-medium text-white hover:text-teal-400 transition-colors">taliakhalid23@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <Phone size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Phone</div>
                    <a href="tel:+923427019011" className="text-xl font-medium text-white hover:text-teal-400 transition-colors">03427019011</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-navy-light border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <ExternalLink size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Professional Profile</div>
                    <a href="https://linkedin.com/in/taliakhalid" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-white hover:text-teal-400 transition-colors flex items-center gap-2">
                      LinkedIn <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-navy-light border border-slate-800 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input type="text" className="w-full bg-navy border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input type="email" className="w-full bg-navy border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input type="text" className="w-full bg-navy border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea className="w-full bg-navy border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-teal-500 outline-none transition-all h-32" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="w-full btn btn-primary py-4 text-lg flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
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
