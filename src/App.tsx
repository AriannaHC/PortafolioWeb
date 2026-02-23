/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative selection:bg-accent-purple selection:text-white">
      <Navbar onSearch={setSearchQuery} />
      <main>
        <Hero />
        <Skills />
        <Projects searchQuery={searchQuery} />
        <Contact />
      </main>
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
