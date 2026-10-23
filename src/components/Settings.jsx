import React from 'react';
import { Bell, Languages, MapPin, Activity, Volume2 } from 'lucide-react';
import Phone from './Phone';

const SETTINGS = [
  { icon: MapPin, label: 'GPS Location', desc: 'Mencatat rute dan titik kejadian', value: 'Aktif' },
  { icon: Activity, label: 'Accelerometer', desc: 'Membaca guncangan kendaraan', value: 'Aktif' },
  { icon: Bell, label: 'Notification and sound', desc: 'Pemberitahuan saat status berubah', value: 'Aktif' },
  { icon: Volume2, label: 'Emergency Alarm Volume', desc: 'Volume alarm saat darurat', value: 'Tinggi' },
  { icon: Languages, label: 'Language', desc: 'Bahasa tampilan aplikasi', value: 'English' },
];

export default function Settings() {
  return (
    <section id="settings" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#E8EEF6] to-[#F8FAFC] px-5 pb-8 pt-10 sm:px-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.9),transparent)]" />
              <div className="relative mx-auto w-[220px] min-[360px]:w-[240px] sm:w-[300px]">
                <Phone
                  src="/assets/web/10.webp"
                  alt="Layar pengaturan DeLaka: notifikasi, bahasa, GPS, accelerometer, dan volume alarm"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              Pengaturan yang sama tersedia di menu Setting aplikasi.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span className="text-sm font-medium text-slate-600">Pengaturan</span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Anda yang menentukan
              <span className="block text-slate-400">apa yang berjalan.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Izin lokasi, sensor, dan alarm bisa dilihat dan diubah kapan saja.
              Tidak ada yang menyala diam-diam di belakang layar.
            </p>

            <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {SETTINGS.map((item) => (
                <li key={item.label} className="flex items-center gap-4 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-900">{item.label}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Jika GPS atau accelerometer dimatikan, deteksi benturan tidak dapat
              berjalan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
