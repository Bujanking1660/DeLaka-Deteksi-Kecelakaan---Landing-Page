# DeLaka — Landing Page

Landing page resmi untuk aplikasi deteksi kecelakaan dan pencatatan perjalanan kendaraan berbasis sensor smartphone (Android).

Dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS v4** dengan pendekatan editorial modern dan performa tinggi (optimasi WebP, layout responsif tanpa overflow di semua ukuran layar dari 320px hingga desktop).

---

## 📱 Fitur Utama Aplikasi yang Ditampilkan

1. **Status Perjalanan Otomatis**
   - **Normal**: Perjalanan aman dan selesai tanpa benturan atau pergerakan abnormal.
   - **Warning**: Guncangan ringan terdeteksi, pergerakan kembali stabil, perjalanan dilanjutkan.
   - **Accident**: Benturan parah terdeteksi, notifikasi otomatis terkirim ke kontak darurat beserta titik lokasi kejadian.

2. **Alur Perjalanan Simpel**
   - Pencarian tujuan & estimasi jarak/waktu.
   - Pemantauan latar belakang menggunakan GPS dan Accelerometer bawaan smartphone.
   - Ringkasan jarak, durasi, dan kecepatan rata-rata setelah selesai.

3. **Kontak Darurat Terintegrasi**
   - Pengaturan kontak darurat (nama, nomor telepon, email, pesan darurat kustom).
   - Tautan langsung ke peta titik lokasi kejadian (*Open Location*).

4. **Transparansi Sensor & Kontrol Pengguna**
   - Pengaturan izin GPS, sensor accelerometer, suara notifikasi, dan volume alarm darurat.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler / Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 🚀 Memulai Proyek (Local Development)

### 1. Prasyarat
- Node.js (v20+ atau v22+)
- npm atau pnpm

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:5173`.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di folder `dist/`.

### 5. Preview Hasil Build
```bash
npm run preview
```

---

## 📁 Struktur Direktori

```text
├── public/
│   └── assets/
│       ├── web/           # Asset mockup teroptimasi format WebP
│       └── *.png          # Mockup resolusi asli
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Navigasi responsif + mobile drawer
│   │   ├── Hero.jsx       # Hero editorial + mockup multi-phone
│   │   ├── Statuses.jsx   # Penjelasan 3 status perjalanan
│   │   ├── Journey.jsx    # Alur 3 langkah perjalanan
│   │   ├── Impact.jsx     # Penjelasan deteksi benturan parah
│   │   ├── Contacts.jsx   # Pengaturan & form kontak darurat
│   │   ├── Settings.jsx   # Transparansi sensor & konfigurasi
│   │   ├── FaqSection.jsx # Akordeon tanya-jawab
│   │   ├── CtaSection.jsx # Kontak masukan tim pengembang
│   │   ├── Footer.jsx     # Navigasi bawah & nomor darurat
│   │   └── Phone.jsx      # Reusable frame & image loader
│   ├── App.jsx            # Komposisi layout utama
│   ├── main.jsx           # Entry point React
│   └── index.css          # Tailwind CSS v4 setup & typography
├── index.html             # HTML shell + font import
└── vite.config.js         # Konfigurasi Vite & Tailwind plugin
```

---

## 📄 Lisensi

Hak cipta dilindungi. Proyek antarmuka dan konsep aplikasi **DeLaka**.
