import React from 'react';
import { ArrowRight } from 'lucide-react';
import Phone from './Phone';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered copy */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Aplikasi Android · Sensor ponsel
          </div>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950 sm:text-6xl lg:text-[4.3rem]">
            Perjalanan tercatat.
            <span className="block text-slate-400">Benturan terdeteksi.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            DeLaka membaca guncangan lewat sensor ponsel dan mencatat setiap
            perjalanan. Saat benturan parah terjadi, kontak darurat menerima
            kabar beserta lokasi kejadian.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#status"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B2559] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#07193D]"
            >
              Jelajahi fitur
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#faq"
              className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Baca FAQ
            </a>
          </div>
        </div>

        {/* Phone stage */}
        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#E8EEF6] via-[#F1F5F9] to-white px-4 pt-10 sm:px-10 sm:pt-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.95),transparent)]" />

            <div className="relative flex items-end justify-center">
              <div className="hidden w-[170px] translate-y-10 rotate-[-7deg] sm:block lg:w-[250px]">
                <Phone
                  src="/assets/web/1.webp"
                  alt="Beranda DeLaka berisi riwayat perjalanan dengan status normal, peringatan, dan kecelakaan"
                  loading="eager"
                />
              </div>

              <div className="relative z-20 -mx-8 w-[210px] sm:w-[250px] lg:w-[320px]">
                <Phone
                  src="/assets/web/2.webp"
                  alt="Layar DeLaka saat benturan parah terdeteksi, kontak darurat sudah diberitahu, dan lokasi tampil di peta"
                  loading="eager"
                />
              </div>

              <div className="hidden w-[170px] translate-y-10 rotate-[7deg] sm:block lg:w-[250px]">
                <Phone
                  src="/assets/web/6.webp"
                  alt="Layar DeLaka saat perjalanan aktif dengan status GPS dan accelerometer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating status chips */}
            <div className="absolute left-[5%] top-[18%] hidden items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              GPS: Active
            </div>
            <div className="absolute right-[4%] top-[12%] hidden items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Accelerometer: Active
            </div>
            <div className="absolute bottom-[22%] left-[7%] hidden rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur lg:block">
              Normal
            </div>
            <div className="absolute bottom-[26%] right-[6%] hidden rounded-full border border-red-100 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-red-600 shadow-sm backdrop-blur lg:block">
              Accident
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            Tampilan asli aplikasi DeLaka. Data perjalanan pada layar adalah contoh.
          </p>
        </div>
      </div>
    </section>
  );
}
