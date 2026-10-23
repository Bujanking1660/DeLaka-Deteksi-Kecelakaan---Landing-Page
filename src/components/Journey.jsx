import React from 'react';
import Phone from './Phone';

const STEPS = [
  {
    id: '01',
    title: 'Mulai perjalanan',
    desc: 'Cari tujuan, lihat perkiraan jarak dan waktu, lalu tekan Start. Tidak ada pengaturan tambahan.',
    meta: 'Braga Citywalk · 4,4 km · 13 menit',
    image: '/assets/web/5.webp',
    alt: 'Layar perencanaan tujuan DeLaka untuk Braga Citywalk',
  },
  {
    id: '02',
    title: 'Dipantau selama di jalan',
    desc: 'GPS dan accelerometer bekerja di latar belakang. Kecepatan dan jarak berjalan tercatat tanpa perlu membuka layar.',
    meta: 'GPS: Active · Accelerometer: Active',
    image: '/assets/web/6.webp',
    alt: 'Layar DeLaka saat perjalanan aktif dengan kecepatan dan jarak berjalan',
  },
  {
    id: '03',
    title: 'Ditutup dengan status',
    desc: 'Saat perjalanan dihentikan, DeLaka menyimpan ringkasan dan menandai status akhirnya.',
    meta: '45 km/jam · 5,4 km · 32 menit',
    image: '/assets/web/1.webp',
    alt: 'Beranda DeLaka berisi ringkasan perjalanan dan status akhir',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span className="text-sm font-medium text-slate-600">Alur perjalanan</span>
            </div>
            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Dari berangkat
              <span className="block text-slate-400">sampai ditutup.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-600 lg:pb-2">
            Tiga langkah yang sama setiap kali berkendara. Semuanya berjalan dari
            satu tombol di awal, lalu selesai tanpa perlu diingat.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
            >
              <div className="flex justify-center bg-slate-50 px-6 py-9">
                <div className="w-[190px] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none md:w-[160px] lg:w-[210px]">
                  <Phone src={step.image} alt={step.alt} />
                </div>
              </div>

              <div className="border-t border-slate-100 p-7">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-400">Langkah {step.id}</span>
                  <span className="h-px w-5 bg-slate-200" />
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
                <p className="mt-4 text-xs font-medium text-slate-500">{step.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
