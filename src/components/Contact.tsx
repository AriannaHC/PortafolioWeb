import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('submitting');

  const formData = new FormData(e.currentTarget);

  try {
    const response = await fetch("https://formspree.io/f/xqedgaeg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
};
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Contáctame</h2>
            <p className="text-white/60 max-w-md">
              ¿Tienes un proyecto en mente o buscas una ingeniera apasionada para tu equipo? ¡Me encantaría escucharte!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent-purple/50 transition-all">
                <Mail className="text-accent-purple" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</p>
                <a href="mailto:ariannahuamanicelis@gmail.com" 
   className="text-white/80 hover:text-accent-purple transition-colors">
  ariannahuamanicelis@gmail.com
</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent-purple/50 transition-all">
                <Phone className="text-accent-purple" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Teléfono</p>
                <a href="tel:+51950102986" 
   className="text-white/80 hover:text-accent-purple transition-colors">
  +51 950 102 986
</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent-purple/50 transition-all">
                <MapPin className="text-accent-purple" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Ubicación</p>
                <p className="text-white/80">Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold">¡Mensaje Enviado!</h3>
              <p className="text-white/60">Gracias por contactarme. Te responderé lo antes posible.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-accent-purple font-bold hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40 ml-1">Nombre</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40 ml-1">Email</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40 ml-1">Mensaje</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple/50 transition-all resize-none"
                />
              </div>
              <button 
                disabled={status === 'submitting'}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                <Send size={18} />
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
