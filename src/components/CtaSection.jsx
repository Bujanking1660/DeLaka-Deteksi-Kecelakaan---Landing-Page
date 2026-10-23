import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="bg-white pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B2559] px-6 py-16 sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Dalam pengembangan
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              DeLaka belum dirilis.
              <span className="block text-white/50">Tapi ceritanya bisa Anda ikuti.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Ada masukan untuk alur, status, atau pesan daruratnya? Kirim email.
              Kami membaca setiap pesan sebelum versi pertama dibagikan.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:halo@delaka.id?subject=Masukan%20untuk%20DeLaka"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#0B2559] transition-colors hover:bg-slate-100"
              >
                <Mail className="h-4 w-4" />
                Kirim masukan
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2559] text-white transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Baca FAQ
              </a>
            </div>

            <p className="mt-6 text-xs text-white/50">halo@delaka.id</p>
          </div>
        </div>
      </div>
    </section>
  );
}
