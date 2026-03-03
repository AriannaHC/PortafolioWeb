import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import foto from "../assets/perfil1.png";
import cv from "../assets/CV.pdf";

export const Hero = () => {
  return (
    <section 
      id="inicio" 
      // CLAVE 1: 'min-h-screen' asegura altura completa. 'flex-col' organiza verticalmente.
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
    >

      {/* Background blobs (Luces de fondo) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] md:top-[-200px] md:right-[-200px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#AD74C3]/20 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-100px] left-[-100px] md:bottom-[-200px] md:left-[-200px] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#7A3A8E]/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* CONTENEDOR PRINCIPAL (El "Relleno" del sándwich) */}
      {/* CLAVE 2: 'flex-grow' empuja el footer abajo. 'flex items-center' centra el contenido verticalmente en escritorio */}
      <div className="flex-grow flex items-center justify-center px-6 lg:px-16 py-20 relative z-10">
        
        {/* GRID: Aquí definimos el layout interno */}
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LADO IZQUIERDO: Texto */}
          {/* En móvil orden 2 (abajo de foto si quisieras, pero aquí lo dejo normal), texto centrado. En PC texto a la izquierda */}
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left order-1" 
          >
            {/* Línea decorativa */}
            <div className="w-14 h-[2px] bg-[#AD74C3] mx-auto lg:mx-0"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Diseñadora UX/UI enfocada en crear 
              <span className="text-[#AD74C3]"> experiencias digitales </span>
              intuitivas
            </h1>

            <p className="text-[#EADFF0]/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transformo ideas complejas en interfaces simples, funcionales 
              y visualmente atractivas. Mi enfoque combina investigación, 
              estrategia y diseño centrado en el usuario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#proyectos" 
                className="bg-[#AD74C3] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(173,116,195,0.4)] transition duration-300 text-center"
              >
                Ver proyectos
              </a>

              <a
                href={cv}
                download
                className="border border-[#F8EDFB]/50 text-white px-8 py-3 rounded-lg hover:bg-[#F8EDFB]/10 transition duration-300 text-center"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>

          {/* LADO DERECHO: Imagen */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-2"
          >
            {/* CLAVE 3: Ajuste de tamaño. En PC rota un poco (-rotate-2), en móvil es recta */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] aspect-[3/4] lg:-rotate-2 lg:hover:rotate-0 transition duration-500">
              
              {/* Panel suave detrás de la foto */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm transform translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4"></div>

              <img
                src={foto}
                alt="Arianna Huamani Celis"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl z-10"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* FOOTER (Barra inferior) */}
      {/* Se queda abajo gracias a que el div de arriba tiene flex-grow */}
      <div className="relative z-10 w-full px-6 lg:px-16 py-6 border-t border-white/5 lg:border-none">
        <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          
          <p className="text-white/30 text-xs md:text-sm text-center md:text-left">
            ©2026 Arianna Huamani Celis - Todos los derechos reservados
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/Arianaaaaa.05/" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all text-white">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/drizzle_ari/" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all text-white">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/arianna-milagros-huamani-celis" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all text-white">
              <Linkedin size={18} />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};