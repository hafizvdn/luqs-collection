# LUQS Collection — Website

Laman web statik untuk **LUQS Collection** (Custom Jersey & Sublimation Printing).
Dibina dengan [Astro](https://astro.build) — hasilnya tetap HTML statik yang laju.

## Struktur fail

```
src/pages/index.astro      ← SEMUA teks & harga ada di sini (senarai harga/galeri/testimoni di bahagian atas fail)
src/styles/style.css       ← warna & rupa (tukar warna di bahagian :root paling atas)
src/scripts/main.js        ← menu, popup gambar, borang ke WhatsApp
src/components/Pic.astro   ← paparan gambar (auto-kecilkan saiz)
src/assets/images/         ← letak semua gambar di sini
.github/workflows/         ← auto-build & publish ke GitHub Pages
```

## Gambar yang perlu dimasukkan

Upload gambar ke folder `src/assets/images/` dengan **nama fail tepat** seperti di bawah (huruf kecil, `.jpeg`).
Selagi gambar belum ada, website akan tunjuk kotak kelabu dengan nama fail yang diperlukan.

| Nama fail | Gambar |
|---|---|
| `pakej-larian.jpeg` | Set Lengkap Neon Run (baju + bib + medal) |
| `poster-harga.jpeg` | Poster senarai harga rasmi |
| `galeri-futsal.jpeg` | Jersi Futsal / Sukan RNI |
| `galeri-sekolah-ppki.jpeg` | Baju Program Sekolah / PPKI |
| `galeri-catur.jpeg` | Baju Kejohanan Catur |
| `galeri-universiti.jpeg` | Baju Batik Kontinjen Universiti |
| `galeri-neon-run.jpeg` | Set Neon Run (galeri) |
| `testimoni-mahasiswa.jpeg` | Screenshot WhatsApp: Program Mahasiswa |
| `testimoni-danish.jpeg` | Screenshot WhatsApp: Danish Adam (UTM) |

Saiz gambar tak perlu dikecilkan sendiri — Astro auto-tukar ke WebP & beberapa saiz masa build.

## Cara publish (sekali sahaja)

1. Push semua fail ke branch `main` di GitHub.
2. Pergi ke repo → **Settings** → **Pages**.
3. Di bawah **Build and deployment → Source**, pilih **GitHub Actions**.
4. Pergi tab **Actions** dan tunggu tanda ✅ hijau (lebih kurang 1 minit).
5. Website live di: `https://<username>.github.io/luqs-collection/`

Lepas ni, setiap kali edit & push ke `main`, website akan update sendiri.

## Cara edit tanpa coding

- Di GitHub, buka `src/pages/index.astro` → tekan ikon pensel ✏️ → ubah teks / harga → **Commit changes**.
- Untuk tambah gambar: buka folder `src/assets/images` → **Add file → Upload files**.

## Tengok di komputer sendiri

Perlu [Node.js](https://nodejs.org) (versi LTS).

```
npm install      # sekali sahaja
npm run dev      # buka http://localhost:4321/luqs-collection/
npm run build    # semak build (sama macam GitHub Actions)
```
