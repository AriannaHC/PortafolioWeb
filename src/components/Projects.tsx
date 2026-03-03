import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';

type Category = 'Todos' | 'Académico' | 'Personal' | 'Trabajo';

const projects = [
  {
    title: "Plan de Negocios SkinUp Gaming",
    description: "Desarrollo de estrategias comerciales y financieras para una plataforma de skins personalizables. Contribución en el diseño UX/UI de la interfaz web.",
    tech: ["Análisis de Mercado", "Estrategia Financiera", "UX/UI Design"],
    icon: <Globe className="text-accent-purple" />,
    category: "Académico" as Category,
    showDemo: false,
    github: null,
  },
  {
    title: "Plataforma de Gestión de Datos",
    description: "Sistema integral para la visualización de datos de niños en situación de calle, utilizando herramientas de BI para la toma de decisiones informadas.",
    tech: ["Power BI", "SQL Server", "Data Cleaning"],
    icon: <Database className="text-accent-purple" />,
    category: "Académico" as Category,
    showDemo: false,
    github: null,
  },
  {
    title: "Prototipo Funcional BI",
    description: "Implementación de dashboards intuitivos y dinámicos para la interpretación de tendencias y áreas críticas en entornos sociales.",
    tech: ["Business Intelligence", "Dashboards", "Análisis de Datos"],
    icon: <Code2 className="text-accent-purple" />,
    category: "Académico" as Category,
    showDemo: false,
    github: null,
  }
];

const FILTERS: Category[] = ['Todos', 'Académico', 'Personal', 'Trabajo'];

export const Projects = ({ searchQuery = '' }: { searchQuery?: string }) => {
  const [activeFilter, setActiveFilter] = useState<Category>('Todos');

  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter =
      activeFilter === 'Todos' || project.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="proyectos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 space-y-6 text-center lg:text-left">
          <h2 className="text-5xl font-black tracking-tight">Proyectos Destacados</h2>
          <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
            Una muestra de mi trabajo donde fusiono la ingeniería de sistemas con el diseño centrado en el usuario.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                ${activeFilter === filter
                  ? 'bg-accent-purple text-white border-accent-purple shadow-lg shadow-accent-purple/30'
                  : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-[#AD74C3]/40 transition-all"
              >
                <div className="h-full p-8 rounded-[2.4rem] bg-[var(--color-bg-main)]/90 backdrop-blur-xl flex flex-col">

                  {/* Categoría badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>
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
                    {project.github && (
                      <a href={project.github} className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold text-sm">
                        <Github size={18} />
                        Code
                      </a>
                    )}
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
              <p className="text-white/40 text-xl italic">
                No se encontraron proyectos en esta categoría.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};