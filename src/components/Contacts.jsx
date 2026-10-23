import React from 'react';
import Phone from './Phone';

const FIELDS = [
  ['Nama lengkap', 'My Mom'],
  ['Nomor telepon', '+62 811 …'],
  ['Email', 'Opsional'],
  ['Pesan darurat', 'Bisa diubah'],
];

export default function Contacts() {
  return (
    <section id="contacts" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span className="text-sm font-medium text-slate-600">Kontak darurat</span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Kontak yang Anda pilih,
              <span className="block text-slate-400">pesan yang sudah siap.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Simpan orang yang paling ingin Anda hubungi. Saat benturan parah
              terjadi, mereka menerima pesan beserta tautan lokasi tanpa Anda
              perlu membuka apa pun.
            </p>

            <blockquote className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-lg font-medium tracking-tight text-slate-900">
                “I have accident, help me.”
              </p>
              <footer className="mt-2 text-xs text-slate-500">
                Pesan contoh pada layar detail kontak.
              </footer>
            </blockquote>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              {FIELDS.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-slate-500">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-slate-800">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
              <div className="w-[84px] shrink-0">
                <Phone
                  src="/assets/web/8.webp"
                  alt="Form tambah kontak baru di DeLaka"
                  plain
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">Tambah kontak baru</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Isi nama, nomor telepon, email opsional, dan pesan darurat.
                  Kontak baru langsung tersedia untuk pesan otomatis.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Kontak bisa ditambah, diubah, atau dihapus kapan saja lewat menu
              Contact di aplikasi.
            </p>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(80%_100%_at_50%_0%,#F1F5F9,#FFFFFF)] px-4 pb-8 pt-10 sm:px-10">
              <div className="flex items-end justify-center">
                <div className="w-[125px] -mr-9 rotate-[-5deg] min-[360px]:w-[145px] min-[360px]:-mr-8 sm:w-[210px] sm:-mr-8">
                  <Phone
                    src="/assets/web/7.webp"
                    alt="Daftar kontak darurat DeLaka berisi My Mom, Dad, dan Brother"
                  />
                </div>
                <div className="relative z-10 w-[145px] rotate-[3deg] min-[360px]:w-[165px] sm:w-[240px]">
                  <Phone
                    src="/assets/web/9.webp"
                    alt="Detail kontak darurat My Mom dengan nomor telepon dan pesan kecelakaan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
