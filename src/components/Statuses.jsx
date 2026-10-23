import React from 'react';

const STATUSES = [
  {
    id: '01',
    status: 'Normal',
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    dot: 'bg-emerald-500',
    title: 'Perjalanan selesai dengan aman',
    desc: 'Tidak ada pergerakan atau benturan tidak wajar sepanjang perjalanan.',
    rows: [
      ['Rata-rata', '45 km/jam'],
      ['Jarak', '5,4 km'],
    ],
  },
  {
    id: '02',
    status: 'Warning',
    chip: 'bg-amber-50 text-amber-700 ring-amber-100',
    dot: 'bg-amber-500',
    title: 'Benturan ringan terdeteksi',
    desc: 'Guncangan sempat terjadi, tetapi kendaraan kembali stabil dan perjalanan dilanjutkan.',
    rows: [
      ['Dampak', 'Rendah'],
      ['Catatan', 'Tanpa kecelakaan'],
    ],
  },
  {
    id: '03',
    status: 'Accident',
    chip: 'bg-red-50 text-red-700 ring-red-100',
    dot: 'bg-red-500',
    title: 'Benturan parah terdeteksi',
    desc: 'Kontak darurat sudah diberitahu, lengkap dengan lokasi kejadian di peta.',
    rows: [
      ['Dampak', 'Parah'],
      ['Lokasi', 'Terkirim'],
    ],
  },
];

export default function Statuses() {
  return (
    <section id="status" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span className="text-sm font-medium text-slate-600">Status perjalanan</span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Tiga status.
            <span className="block text-slate-400">Satu alur yang sama.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            Setiap perjalanan berakhir dengan salah satu dari tiga status ini.
            Istilahnya mengikuti tampilan di aplikasi.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STATUSES.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-colors hover:border-slate-300 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${s.chip}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {s.status}
                </span>
                <span className="text-sm font-medium text-slate-300">{s.id}</span>
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>

              <dl className="mt-7 space-y-3 border-t border-slate-100 pt-5 text-sm">
                {s.rows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4">
                    <dt className="text-slate-500">{k}</dt>
                    <dd className="font-medium text-slate-800">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Nilai pada kolom di atas mengikuti contoh data di layar aplikasi.
        </p>
      </div>
    </section>
  );
}
