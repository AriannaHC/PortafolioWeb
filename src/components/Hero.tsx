import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import foto from "../assets/perfil1.png";
import cv from "../assets/CV.pdf";

export const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background blobs mejorados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#AD74C3]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#7A3A8E]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Contenido Central */}
      <div className="flex-grow flex items-center justify-center px-6 lg:px-16 pt-32 pb-16 relative z-10">
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* TEXTO */}
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 text-center lg:text-left order-1" 
          >
            <div className="w-14 h-[3px] bg-gradient-to-r from-[#AD74C3] to-[#7A3A8E] mx-auto lg:mx-0 rounded-full"></div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
  Hola, soy Arianna —
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AD74C3] via-[#D8B4E2] to-[#AD74C3] bg-[length:200%_auto] animate-gradient">
    Diseñadora UX/UI
  </span>
</h1>

<p className="text-[#EADFF0]/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
  Egresada de Ingeniería de Sistemas con pasión por el diseño. 
  Entiendo tanto al usuario como al desarrollador, y diseño 
  en ese punto medio donde todo encaja.
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#proyectos" 
                className="bg-gradient-to-r from-[#AD74C3] to-[#9156A6] text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-[#AD74C3]/30 hover:shadow-[#AD74C3]/50 transition-all duration-300 text-center"
              >
                Ver proyectos
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(248, 237, 251, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href={cv}
                download
                className="border border-[#F8EDFB]/30 text-white px-8 py-3 rounded-xl transition duration-300 text-center backdrop-blur-sm"
              >
                Descargar CV
              </motion.a>
            </div>
          </motion.div>

          {/* LADO DERECHO: Imagen con Aura */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center lg:justify-end order-2 relative"
>
  <div className="relative w-full max-w-[340px] lg:max-w-[480px] flex justify-center items-center">
    
    {/* 1. El Aura de luz detrás (Sin bordes, pura luz) */}
    <div className="absolute w-[80%] h-[80%] bg-[#AD74C3] rounded-full blur-[80px] opacity-40 animate-pulse"></div>
    
    {/* 2. Un círculo sutil más pequeño para dar centro */}
    <div className="absolute w-[60%] h-[60%] bg-[#EADFF0] rounded-full blur-[60px] opacity-20"></div>

    {/* 3. La imagen limpia encima */}
    <img
      src={foto}
      alt="Arianna Huamani Celis"
      className="relative z-10 w-full h-full object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
    />
  </div>
</motion.div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 w-full px-6 lg:px-16 py-6 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs md:text-sm">
            ©2026 Arianna Huamani Celis
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/20 hover:text-[#AD74C3] transition-all text-white/80">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};