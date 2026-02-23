import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';
showDemo: false

const projects = [
  {
    title: "Plan de Negocios SkinUp Gaming",
    description: "Desarrollo de estrategias comerciales y financieras para una plataforma de skins personalizables. Contribución en el diseño UX/UI de la interfaz web.",
    tech: ["Análisis de Mercado", "Estrategia Financiera", "UX/UI Design"],
    icon: <Globe className="text-accent-purple" />,
    showDemo: false
  },
  {
    title: "Plataforma de Gestión de Datos",
    description: "Sistema integral para la visualización de datos de niños en situación de calle, utilizando herramientas de BI para la toma de decisiones informadas.",
    tech: ["Power BI", "SQL Server", "Data Cleaning"],
    icon: <Database className="text-accent-purple" />,
    showDemo: false
  },
  {
    title: "Prototipo Funcional BI",
    description: "Implementación de dashboards intuitivos y dinámicos para la interpretación de tendencias y áreas críticas en entornos sociales.",
    tech: ["Business Intelligence", "Dashboards", "Análisis de Datos"],
    icon: <Code2 className="text-accent-purple" />,
    showDemo: false
  }
];

export const Projects = ({ searchQuery = '' }: { searchQuery?: string }) => {
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="proyectos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-6 text-center lg:text-left">
          <h2 className="text-5xl font-black tracking-tight">Proyectos Destacados</h2>
          <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
            Una muestra de mi trabajo donde fusiono la ingeniería de sistemas con el diseño centrado en el usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-accent-purple/40 transition-all"
              >
                <div className="h-full p-8 rounded-[2.4rem] bg-bg-dark/90 backdrop-blur-xl flex flex-col">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-purple transition-colors">{project.title}</h3>
                  <p className="text-white/50 mb-8 text-lg leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] uppercase tracking-widest font-black px-3 py-1.5 bg-white/5 rounded-lg text-white/30 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                    <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold text-sm">
                      <Github size={18} />
                      Code
                    </a>
                    {project.showDemo && (
  <a href="#" className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold text-sm">
    <ExternalLink size={18} />
    Demo
  </a>
)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/40 text-xl italic">No se encontraron proyectos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
