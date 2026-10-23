import React from 'react';
import { Check, MapPin, ShieldAlert, Gauge } from 'lucide-react';
import Phone from './Phone';

const DETAILS = [
  {
    icon: ShieldAlert,
    title: 'Status berubah menjadi Accident',
    desc: 'Perjalanan langsung ditandai dan tidak bisa tertukar dengan perjalanan biasa.',
  },
  {
    icon: Gauge,
    title: 'Dampak tercatat Severe',
    desc: 'Tingkat benturan disimpan bersama ringkasan perjalanan.',
  },
  {
    icon: MapPin,
    title: 'Open Location membuka peta',
    desc: 'Titik kejadian bisa dibuka penerima pesan lewat tautan lokasi.',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#E8EEF6] to-[#F8FAFC] px-5 pb-8 pt-10 sm:px-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.9),transparent)]" />

              <div className="relative mx-auto w-[220px] min-[360px]:w-[240px] sm:w-[300px]">
                <Phone
                  src="/assets/web/2.webp"
                  alt="Layar DeLaka saat benturan parah: status Accident, kontak darurat diberitahu, dan peta lokasi"
                />
              </div>

              <div className="absolute right-5 top-6 hidden items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur sm:flex">
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                Emergency contacts notified
              </div>
              <div className="absolute bottom-[14%] left-5 hidden items-center gap-2 rounded-full bg-[#0B2559] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm sm:flex">
                <MapPin className="h-3.5 w-3.5" />
                Open Location
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Contoh layar menampilkan lokasi di Jl. Dipati Ukur, Bandung.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="text-sm font-medium text-slate-600">Saat benturan</span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Kabar terkirim
              <span className="block text-slate-400">tanpa perlu mengetik.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Ketika sensor membaca benturan parah, DeLaka menandai perjalanan
              sebagai kecelakaan dan mengirim pesan ke kontak darurat yang sudah
              Anda simpan sebelumnya.
            </p>

            <ul className="mt-9 space-y-6">
              {DETAILS.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
              DeLaka mengirim pesan ke kontak pilihan Anda. Aplikasi ini bukan
              pengganti layanan darurat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
