import React from 'react';
import { motion } from 'motion/react';

// 1. IMPORTS DE ICONOS (Solo los que son seguros y estables)
import { 
  SiPython, 
  SiHtml5, 
  SiPhp, 
  SiFigma, 
  SiAdobexd
} from 'react-icons/si';

// Usamos FaWindows para Microsoft Office (es infalible)
import { FaJava, FaProjectDiagram, FaWindows } from 'react-icons/fa';
import { TbBinaryTree } from 'react-icons/tb';

// Usamos BarChart3 de Lucide para Power BI (se ve igual y no falla)
import { Code2, Palette, Database, CheckCircle2, BarChart3 } from 'lucide-react'; 

// 2. DATA CON LOS NUEVOS ICONOS SEGUROS
const skillGroups = [
  {
    title: "Análisis de Datos & BI",
    groupIcon: <Database size={20} />,
    color: "from-yellow-400/20 to-orange-500/20",
    glow: "group-hover:shadow-yellow-500/20",
    skills: [
      // REEMPLAZO 1: Power BI -> BarChart3 (Lucide) amarillo
      { name: "Power BI", icon: <BarChart3 color="#F2C811" size={28} /> },
      // REEMPLAZO 2: SQL Server -> Database (Lucide) rojo
      { name: "SQL Server", icon: <Database color="#CC2927" size={28} /> }, 
      // REEMPLAZO 3: Office -> FaWindows (FontAwesome) azul
      { name: "Microsoft Office", icon: <FaWindows color="#00A4EF" size={28} /> }
    ]
  },
  {
    title: "Desarrollo & Código",
    groupIcon: <Code2 size={20} />,
    color: "from-blue-400/20 to-cyan-500/20",
    glow: "group-hover:shadow-blue-500/20",
    skills: [
      { name: "Python", icon: <SiPython color="#3776AB" size={26} /> },
      { name: "Java", icon: <FaJava color="#007396" size={26} /> },
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" size={26} /> },
      { name: "PHP", icon: <SiPhp color="#777BB4" size={28} /> },
      { name: "VS Code", icon: <Code2 color="#007ACC" size={26} /> }
    ]
  },
  {
    title: "Diseño & Modelado",
    groupIcon: <Palette size={20} />,
    color: "from-purple-400/20 to-pink-500/20",
    glow: "group-hover:shadow-pink-500/20",
    skills: [
      { name: "Figma", icon: <SiFigma color="#F24E1E" size={26} /> },
      { name: "Adobe XD", icon: <SiAdobexd color="#FF61F6" size={26} /> },
      { name: "Bizagi", icon: <FaProjectDiagram color="#7AB800" size={26} /> }, 
      { name: "Ent. Architect", icon: <TbBinaryTree color="#005A9C" size={26} /> }
    ]
  }
];

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const Skills = () => {
  return (
    <section id="habilidades" className="relative py-24 px-6 overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#AD74C3]/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-20 text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Tecnologías y 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AD74C3] to-[#E0C3FC]"> Herramientas</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#EADFF0]/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Mi stack tecnológico para transformar datos en decisiones y diseños en experiencias funcionales.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-[2rem] border border-white/5 bg-[#1a1025] overflow-hidden transition-all duration-300 hover:border-white/10 ${group.glow}`}
            >
              
              {/* Degradado interno al hacer hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Título y Icono de Grupo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#AD74C3]">
                    {group.groupIcon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{group.title}</h3>
                </div>

                {/* Lista de Skills */}
                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group/item cursor-default"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0f0915] border border-white/5 group-hover/item:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-[#EADFF0]/90 font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      
                      {/* Check de validación */}
                      <CheckCircle2 size={16} className="text-white/10 group-hover/item:text-[#AD74C3] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};