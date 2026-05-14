import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';

const projectCategories = [
  {
    title: "Startup Acceleration & Ecosystem",
    projects: [
      {
        name: "Acceleration Cohort 1",
        metric: "100% Success Rate",
        description: "Led the evaluation and impact measurement of the first major startup cohort at NIC Karachi.",
        tags: ["Evaluation", "Impact Measurement", "Analytics"],
        icon: Zap
      },
      {
        name: "Shark Tank Initiatives",
        metric: "Investor Readiness",
        description: "Assessed startup readiness for investor pitching, refining presentations and curating high-potential ventures.",
        tags: ["Strategic Planning", "Investor Relations"],
        icon: Target
      },
      {
        name: "Startup Networking & Pitching",
        metric: "End-to-End Management",
        description: "Strategically engaged investors and ecosystem stakeholders, curating quality startups for investment decision-making.",
        tags: ["Ecosystem Operations", "Stakeholder Management"],
        icon: Users
      }
    ]
  },
  {
    title: "Social Impact & Governance",
    projects: [
      {
        name: "Women in Tech Council",
        metric: "Gender Parity",
        description: "Managed governance meetings and tracked ESG-aligned initiatives for women-led startup acceleration.",
        tags: ["ESG", "Governance", "Diversity"],
        icon: Award
      },
      {
        name: "Built By Her 4",
        metric: "Success Reporting",
        description: "Monitored women-led startup acceleration program, reporting success metrics and long-term program impact.",
        tags: ["M&E", "Women Empowerment"],
        icon: Users
      },
      {
        name: "Impact Collective",
        metric: "KPI Tracking",
        description: "Monitored and evaluated sector-specific startup programs, preparing comprehensive impact summaries.",
        tags: ["Performance Tracking", "Reporting"],
        icon: Target
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic <span className="text-gradient">Projects</span></h2>
          <p className="text-slate-400 text-base">Operationalizing M&E frameworks across high-impact initiatives.</p>
        </div>

        <div className="space-y-12">
          {projectCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-3 uppercase tracking-[0.2em]">
                {category.title}
                <div className="h-px bg-slate-800 flex-grow" />
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, pIndex) => (
                  <motion.div 
                    key={pIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: pIndex * 0.05 }}
                    className="group p-6 rounded-xl bg-navy-light border border-slate-800 hover:border-teal-500/20 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <project.icon size={20} className="text-teal-400" />
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-white mb-0.5 group-hover:text-teal-400 transition-colors">{project.name}</h4>
                      <div className="text-[10px] font-mono text-teal-500/80 font-bold uppercase tracking-wider">{project.metric}</div>
                    </div>
                    
                    <p className="text-xs text-slate-400 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-2 py-0.5 bg-navy text-slate-500 text-[9px] rounded-md border border-slate-800 font-bold uppercase tracking-tight">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
