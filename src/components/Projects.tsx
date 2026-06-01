import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Database, Globe, Briefcase, Layout, Users, Eye, X, Image as ImageIcon } from 'lucide-react';

type Category = 'Todos' | 'Académico' | 'Personal' | 'Trabajo';

// Definimos el tipo de nuestros proyectos para mantener el orden
interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  category: Category;
  showDemo: boolean;
  github: string | null;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "Plan de Negocios SkinUp Gaming",
    description: "Desarrollo de estrategias comerciales y financieras para una plataforma de skins personalizables. Contribución en el diseño UX/UI de la interfaz web.",
    tech: ["Análisis de Mercado", "Estrategia Financiera", "UX/UI Design"],
    icon: <Globe className="text-accent-purple" />,
    category: "Académico",
    showDemo: false,
    github: null,
    images: []
  },
  {
    title: "Plataforma de Gestión de Datos",
    description: "Sistema integral para la visualización de datos de niños en situación de calle, utilizando herramientas de BI para la toma de decisiones informadas.",
    tech: ["Power BI", "SQL Server", "Data Cleaning"],
    icon: <Database className="text-accent-purple" />,
    category: "Académico",
    showDemo: false,
    github: null,
    images: []
  },
  {
    title: "Prototipo Funcional BI",
    description: "Implementación de dashboards intuitivos y dinámicos para la interpretación de tendencias y áreas críticas en entornos sociales.",
    tech: ["Business Intelligence", "Dashboards", "Análisis de Datos"],
    icon: <Code2 className="text-accent-purple" />,
    category: "Académico",
    showDemo: false,
    github: null,
    images: []
  },
  // 🔥 TUS 4 PROYECTOS DE TRABAJO ACTUALIZADOS
  {
    title: "Landing Page Corporativa Inmobiliaria",
    description: "Landing page desarrollada para la promoción de propiedades en venta y alquiler. Diseñé y desarrollé la interfaz completa, integrando un buscador de inmuebles, catálogo de propiedades destacadas y canales de contacto optimizados para la captación de clientes potenciales.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    icon: <Briefcase className="text-accent-purple" />,
    category: "Trabajo",
    showDemo: false, // Actívalo en true si tienes el link
    github: null,
    images: [] // Agrega aquí tus rutas (ej. ["/images/inmo1.png"])
  },
  {
    title: "Landing Page para Estudio Jurídico",
    description: "Diseño y desarrollo de una plataforma corporativa para brindar presencia digital a un estudio de abogados. Enfocada en transmitir confianza, estructurar la oferta de servicios legales y facilitar la captación de consultas a través de canales digitales.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    icon: <Layout className="text-accent-purple" />,
    category: "Trabajo",
    showDemo: false, 
    github: null,
    images: []
  },
  {
    title: "Sistema de Asistencia para Colaboradores",
    description: "Sistema web integral desarrollado para optimizar el control del personal en una consultora. Diseñé la interfaz de usuario y desarrollé la plataforma para registrar ingresos, tardanzas y ausencias de forma centralizada, facilitando reportes administrativos.",
    tech: ["React", "TypeScript", "PHP", "MySQL", "Hostinger"],
    icon: <Users className="text-accent-purple" />,
    category: "Trabajo",
    showDemo: false,
    github: null,
    images: []
  },
  {
    title: "Rediseño Web - Consultora Empresarial",
    description: "Rediseño estético y funcional del sitio web de una consultora. Desarrollé la maquetación avanzada con WordPress y Elementor, aplicando lógica personalizada mediante código PHP, HTML y CSS para adaptar plugins y optimizar la experiencia de usuario (UX/UI).",
    tech: ["WordPress", "Elementor", "PHP", "HTML5", "CSS3"],
    icon: <Globe className="text-accent-purple" />, // Usamos Globe para representar web/WordPress
    category: "Trabajo",
    showDemo: false,
    github: null,
    images: []
  }
];

const FILTERS: Category[] = ['Todos', 'Académico', 'Personal', 'Trabajo'];

export const Projects = ({ searchQuery = '' }: { searchQuery?: string }) => {
  const [activeFilter, setActiveFilter] = useState<Category>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProject]);

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
    <>
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
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[11px] uppercase tracking-widest font-black px-3 py-1.5 bg-white/5 rounded-lg text-white/30 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* Botonera inferior */}
                    <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-white/60 hover:text-accent-purple transition-colors font-bold text-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl"
                      >
                        <Eye size={18} />
                        Ver detalles
                      </button>

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

      {/* 🔥 Modal / Mini Ventana de Detalles */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            {/* Contenido del Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--color-bg-main)] border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl shadow-accent-purple/20"
            >
              {/* Encabezado del Modal */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-2xl font-black">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cuerpo del Modal (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                <p className="text-lg text-white/70 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-[12px] uppercase tracking-widest font-black px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-lg border border-accent-purple/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Galería de Imágenes */}
                <div className="space-y-6 pt-6 border-t border-white/5">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <ImageIcon className="text-accent-purple" size={24} />
                    Galería del Proyecto
                  </h4>
                  
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {selectedProject.images.map((img, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} - Imagen ${index + 1}`} 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 bg-white/5 rounded-2xl text-center border border-dashed border-white/20">
                      <p className="text-white/40 italic">Las imágenes de este proyecto se subirán próximamente.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};