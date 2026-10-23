import React from 'react';

const APP_LINKS = [
  { label: 'Status perjalanan', href: '#status' },
  { label: 'Alur', href: '#journey' },
  { label: 'Kontak darurat', href: '#contacts' },
  { label: 'Pengaturan', href: '#settings' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold tracking-tight text-slate-950">DeLaka</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Pencatatan perjalanan dan deteksi benturan lewat sensor ponsel.
              Dirancang untuk memberi kabar saat Anda tidak sempat.
            </p>
            <p className="mt-5 text-xs text-slate-500">
              Masih dalam pengembangan. Tampilan dapat berubah.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Aplikasi
            </h2>
            <ul className="mt-4 space-y-3">
              {APP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Bantuan
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                >
                  Pertanyaan umum
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@delaka.id"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                >
                  halo@delaka.id
                </a>
              </li>
              <li className="pt-2 text-sm leading-6 text-slate-600">
                Darurat:{' '}
                <a href="tel:112" className="font-medium text-slate-900 hover:underline">
                  112
                </a>{' '}
                ·{' '}
                <a href="tel:118" className="font-medium text-slate-900 hover:underline">
                  118
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DeLaka. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-slate-500">Proyek desain antarmuka DeLaka.</p>
        </div>
      </div>
    </footer>
  );
}
