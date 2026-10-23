import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Status', href: '#status' },
  { name: 'Alur', href: '#journey' },
  { name: 'Kontak', href: '#contacts' },
  { name: 'Pengaturan', href: '#settings' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-white/0'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-950">
          DeLaka
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#status"
          className="group hidden items-center gap-2.5 rounded-full bg-[#0B2559] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#07193D] lg:inline-flex"
        >
          Lihat aplikasi
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-slate-700 transition-colors hover:text-slate-950 lg:hidden cursor-pointer"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? 'visible max-h-[420px] border-slate-100 opacity-100'
            : 'invisible max-h-0 border-transparent opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3 lg:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-100 py-3.5 text-base font-medium text-slate-700 transition-colors last:border-0 hover:text-slate-950"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#status"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B2559] px-5 py-3 text-sm font-semibold text-white"
          >
            Lihat aplikasi
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
