import React from 'react';
import { motion } from 'motion/react';
import { 
  SiPython, 
  SiHtml5, 
  SiPhp, 
  SiFigma, 
  SiAdobexd
} from 'react-icons/si';
import { FaJava, FaProjectDiagram } from 'react-icons/fa';
import { TbBinaryTree } from 'react-icons/tb';
import { BarChart3, Database, Layout, Code2 } from 'lucide-react';

const skillGroups = [
  {
    title: "Análisis de Datos & BI",
    skills: [
      { name: "Power BI", icon: <BarChart3 color="#F2C811" size={24} /> },
      { name: "SQL Server", icon: <Database color="#CC2927" size={24} /> },
      { name: "Microsoft Office", icon: <Layout color="#D83B01" size={24} /> }
    ]
  },
  {
    title: "Desarrollo & Código",
    skills: [
      { name: "Python", icon: <SiPython color="#3776AB" size={24} /> },
      { name: "Java", icon: <FaJava color="#007396" size={24} /> },
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" size={24} /> },
      { name: "PHP", icon: <SiPhp color="#777BB4" size={24} /> },
      { name: "VS Code", icon: <Code2 color="#007ACC" size={24} /> }
    ]
  },
  {
    title: "Diseño & Modelado",
    skills: [
      { name: "Figma", icon: <SiFigma color="#F24E1E" size={24} /> },
      { name: "Adobe XD", icon: <SiAdobexd color="#FF61F6" size={24} /> },
      { name: "Bizagi", icon: <FaProjectDiagram color="#7AB800" size={24} /> }, 
      { name: "Enterprise Architect", icon: <TbBinaryTree color="#005A9C" size={24} /> }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Tecnologías y Herramientas</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Dominio de diversas herramientas tecnológicas para el análisis de datos, desarrollo de software y diseño de interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-accent-purple">{group.title}</h3>
              <div className="space-y-3">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-purple/40 hover:bg-white/10 transition-all group cursor-default">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 p-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-black/20">
                      {skill.icon}
                    </div>
                    <span className="text-white/90 font-semibold tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
