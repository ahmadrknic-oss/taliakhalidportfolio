import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "NIC Karachi",
    role: "Monitoring & Evaluation Specialist",
    period: "March 2023 - Present",
    location: "Karachi, Pakistan",
    description: "Driving impact measurement and operational frameworks for Pakistan's leading startup incubator.",
    bullets: [
      "Designed and monitored M&E frameworks for startup acceleration programs and Women in Tech Council initiatives.",
      "Led evaluation of Acceleration Cohort 1, reporting 100% startup success rate through follow-up analysis.",
      "Documented and managed 11+ tech council meetings and stakeholder engagement sessions for ESG-oriented startups.",
      "Prepared project reports, policy briefs, and sub-committee updates for NIC governance and donor presentations.",
      "Owned end-to-end management of Startup Networking & Pitching events, ensuring investor feedback integration."
    ]
  },
  {
    company: "Ripple Match",
    role: "Freelance Recruiter",
    period: "June 2021 - Dec 2022",
    location: "Remote",
    description: "Managed recruitment pipelines for U.S.-based teams using AI-powered platforms.",
    bullets: [
      "Optimized hiring outcomes through data-backed recommendations during candidate shortlisting.",
      "Maintained accurate record dashboards reflecting candidate metrics, performance, and placement data."
    ]
  },
  {
    company: "TCS Express & Logistics Headquarters",
    role: "Sr. Customer Care Claims Executive",
    period: "Oct 2015 - Jan 2019",
    location: "Karachi, Pakistan",
    description: "Streamlined operations and monitored performance across key logistics campaigns.",
    bullets: [
      "Analyzed customer claim trends and developed documentation workflows to improve resolution efficiency.",
      "Monitored project performance for major campaigns like Black Friday and 60-minute delivery services.",
      "Revamped claims policy by identifying process inefficiencies and proposing corrective measures.",
      "Coordinated with Operations, Finance, and Legal teams to ensure compliance and timely execution."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-navy-dark/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional <span className="text-gradient">Timeline</span></h2>
            <p className="text-slate-400 text-lg">A track record of operational excellence, impact measurement, and strategic program management.</p>
          </div>
        </div>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-800 md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-navy border-4 border-navy-light flex items-center justify-center z-10 md:left-1/2 md:-translate-x-5">
                <Briefcase size={16} className="text-teal-500" />
              </div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className={`p-8 rounded-2xl bg-navy-light border border-slate-800 hover:border-teal-500/30 transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-navy px-3 py-1 rounded-full border border-slate-800">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-slate-300 font-medium">
                    <span className="text-teal-500">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <div className="flex items-center gap-1.5 text-sm">
                      <MapPin size={14} className="text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 italic">{exp.description}</p>
                  
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex gap-3 text-slate-400 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-teal-500/50 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
