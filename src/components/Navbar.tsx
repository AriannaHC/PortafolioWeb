import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
interface NavbarProps {
  onSearch: (value: string) => void;
}

export const Navbar = ({ onSearch }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

 const handleSearch = (term: string) => {
  onSearch(term); // 🔥 conecta con App
  const element = document.getElementById(term.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsSearchOpen(false);
  }
};

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full"
      >
        {/* Logo */}
        <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
          <span className="text-xl font-bold italic">A</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-6 glass-nav">
          <a href="#inicio" className="text-sm font-medium hover:text-white/70 transition-colors">Inicio</a>
          <a href="#habilidades" className="text-sm font-medium hover:text-white/70 transition-colors">Habilidades</a>
          <a href="#proyectos" className="text-sm font-medium hover:text-white/70 transition-colors">Proyectos</a>
          <a href="#contacto" className="text-sm font-medium hover:text-white/70 transition-colors">Contacto</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-dark/95 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 p-2 text-white/60 hover:text-white"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-2xl space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={24} />
                <input
  autoFocus
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') handleSearch(searchTerm);
  }}
  placeholder="Buscar proyectos, habilidades..."
  className="w-full bg-white/5 border-b-2 border-white/20 px-14 py-6 text-2xl focus:outline-none focus:border-accent-purple transition-all"
/>
              </div>
              <p className="text-white/40 text-sm">Presiona ESC para cerrar</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[100] w-80 bg-bg-dark border-l border-white/10 p-8 md:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="w-10 h-10 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold italic">A</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold hover:text-accent-purple transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
