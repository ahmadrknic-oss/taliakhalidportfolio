import { motion } from 'framer-motion';
import { Database, TrendingUp, Cpu, BarChart2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Analytical & Data",
    icon: Database,
    skills: ["Impact Evaluation", "Data Management & Reporting", "Performance Metrics", "Baseline/Midline/Endline Studies", "Microsoft Excel (Advanced)"]
  },
  {
    title: "Project & Governance",
    icon: Cpu,
    skills: ["Project Management", "Governance Oversight", "Policy Documentation", "Sub-committee Coordination", "Stakeholder Engagement"]
  },
  {
    title: "Technical Stack",
    icon: BarChart2,
    skills: ["ERP Systems", "Agile/Scrum", "LinkedIn Analytics", "PowerPoint", "Program Dashboards"]
  },
  {
    title: "Operational Strategy",
    icon: TrendingUp,
    skills: ["Startup Acceleration", "Investor Pitch Readiness", "ESG Alignment", "Ecosystem Operations", "Risk Assessment"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-navy-dark/50">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core <span className="text-gradient">Competencies</span></h2>
          <p className="text-slate-400 text-base">Specialized skill set focused on institutional growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-navy-light border border-slate-800 hover:border-teal-500/10 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon size={20} className="text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 bg-navy text-slate-400 rounded-lg border border-slate-700 text-[10px] font-bold uppercase tracking-wider hover:border-teal-500/30 hover:text-teal-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
