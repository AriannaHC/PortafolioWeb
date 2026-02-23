import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import foto from "../assets/perfil1.png";
import cv from "../assets/CV.pdf";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Bienvenido a mi <br /> portafólio web
          </h1>
          <p className="text-white/60 text-lg max-w-md mx-auto lg:mx-0">
            Soy Ingeniera de Sistemas apasionada por el <span className="text-white font-bold">Diseño UX/UI</span>, creando experiencias digitales que conectan con las personas.
          </p>
          <div className="flex justify-center lg:justify-start">
  <a href="#contacto" className="btn-primary w-full sm:w-auto text-center">
    Contáctame
  </a>
</div>
        </motion.div>

        {/* Center Image */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-first lg:order-none"
        >
       <div className="hero-image-container relative w-full max-w-[400px] aspect-[3/4] flex items-center justify-center">
  
  {/* Glow detrás */}
  <div className="absolute w-[85%] h-[85%] bg-white rounded-full blur-[80px] opacity-70"></div>

  {/* Imagen */}
  <img
    src={foto}
    alt="Arianna Huamani Celis"
    className="relative w-full h-full object-contain"
  />


</div>
          
          {/* Decorative element like in the image */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
             <div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold">Sobre mí</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Como especialista en UX/UI, mi objetivo es transformar problemas complejos en interfaces simples y elegantes. Me enfoco en la investigación de usuarios y el diseño visual para garantizar productos digitales de alto impacto.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
  href={cv}
  download
  className="btn-outline flex items-center gap-3 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
>
  Descargar CV
</a>
          </div>
        </motion.div>
      </div>

      {/* Footer-like bottom bar inside hero as per image */}
      <div className="absolute bottom-10 left-0 right-0 px-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto w-full">
        <p className="text-white/40 text-sm">@2026 Arianna Huamani Celis - Todos los derechos reservados</p>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/Arianaaaaa.05/" className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/20 transition-all">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/drizzle_ari/" className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/20 transition-all">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/arianna-milagros-huamani-celis" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/20 transition-all">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
