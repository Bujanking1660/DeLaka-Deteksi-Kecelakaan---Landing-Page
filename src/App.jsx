import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statuses from './components/Statuses';
import Journey from './components/Journey';
import Impact from './components/Impact';
import Contacts from './components/Contacts';
import Settings from './components/Settings';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Statuses />
        <Journey />
        <Impact />
        <Contacts />
        <Settings />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
