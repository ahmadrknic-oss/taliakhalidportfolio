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
    <section id="skills" className="py-24 px-6 bg-navy-dark/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core <span className="text-gradient">Competencies</span></h2>
            <p className="text-slate-400 text-lg">Specialized skill set focused on institutional growth and data-driven program management.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-navy-light border border-slate-800 hover:border-teal-500/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon size={28} className="text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-4 py-2 bg-navy text-slate-300 rounded-xl border border-slate-700 text-sm font-medium hover:border-teal-500/50 hover:text-teal-400 transition-all cursor-default"
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
