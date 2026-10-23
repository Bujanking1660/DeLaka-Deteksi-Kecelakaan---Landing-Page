import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'Apa yang dipakai DeLaka untuk mendeteksi benturan?',
    a: 'Sensor accelerometer yang sudah ada di ponsel, ditambah GPS untuk mencatat rute dan titik kejadian. Tidak ada perangkat tambahan yang perlu dipasang.',
  },
  {
    q: 'Apa perbedaan status Warning dan Accident?',
    a: 'Warning berarti benturan ringan terdeteksi, pergerakan kembali stabil, dan perjalanan dilanjutkan tanpa kecelakaan. Accident berarti benturan parah, dampak tercatat Severe, dan kontak darurat sudah diberitahu.',
  },
  {
    q: 'Bagaimana kontak darurat menerima lokasi?',
    a: 'Pesan yang dikirim menyertakan tautan lokasi. Penerima cukup membuka tautan lewat tombol Open Location untuk melihat titik kejadian di peta.',
  },
  {
    q: 'Bisakah pesan darurat diubah?',
    a: 'Bisa. Setiap kontak punya nama, nomor telepon, email opsional, dan pesan daruratnya sendiri. Semuanya dapat diubah dari menu Contact.',
  },
  {
    q: 'Apakah sensor bisa dimatikan?',
    a: 'GPS, accelerometer, notifikasi, dan volume alarm semuanya ada di menu Setting. Perlu diingat, tanpa GPS dan accelerometer deteksi benturan tidak dapat berjalan.',
  },
  {
    q: 'Apakah DeLaka sudah bisa dipakai sekarang?',
    a: 'DeLaka masih dalam pengembangan. Halaman ini memperlihatkan tampilan dan alur yang sudah dirancang; belum ada versi yang dibagikan untuk umum.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span className="text-sm font-medium text-slate-600">FAQ</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Pertanyaan
            <span className="block text-slate-400">yang sering muncul.</span>
          </h2>
        </div>

        <div className="mt-12 border-t border-slate-200">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-slate-200">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-slate-900">{item.q}</span>
                    <Plus
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10"
                >
                  <p className="text-sm leading-7 text-slate-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
