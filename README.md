# LUQS Collection — Website

Laman web statik untuk **LUQS Collection** (Custom Jersey & Sublimation Printing).
Tiada framework, tiada install, cuma HTML + CSS + JavaScript biasa.

## Struktur fail

```
index.html              ← SEMUA teks & harga ada di sini
assets/css/style.css    ← warna & rupa (tukar warna di bahagian :root paling atas)
assets/js/main.js       ← menu, popup gambar, borang ke WhatsApp
images/                 ← letak semua gambar di sini
.github/workflows/      ← auto-publish ke GitHub Pages
```

## Gambar yang perlu dimasukkan

Upload gambar ke folder `images/` dengan **nama fail tepat** seperti di bawah (huruf kecil, `.jpg`).
Selagi gambar belum ada, website akan tunjuk kotak kelabu dengan nama fail yang diperlukan.

| Nama fail | Gambar |
|---|---|
| `pakej-larian.jpg` | Set Lengkap Neon Run (baju + bib + medal) |
| `poster-harga.jpg` | Poster senarai harga rasmi |
| `galeri-futsal.jpg` | Jersi Futsal / Sukan RNI |
| `galeri-sekolah-ppki.jpg` | Baju Program Sekolah / PPKI |
| `galeri-catur.jpg` | Baju Kejohanan Catur |
| `galeri-universiti.jpg` | Baju Batik Kontinjen Universiti |
| `galeri-neon-run.jpg` | Set Neon Run (galeri) |
| `testimoni-mahasiswa.jpg` | Screenshot WhatsApp: Program Mahasiswa |
| `testimoni-danish.jpg` | Screenshot WhatsApp: Danish Adam (UTM) |

Tip: kecilkan saiz gambar dulu (contoh guna https://squoosh.app) supaya website laju — sasaran bawah 300KB setiap gambar.

## Cara publish (sekali sahaja)

1. Push semua fail ke branch `main` di GitHub.
2. Pergi ke repo → **Settings** → **Pages**.
3. Di bawah **Build and deployment → Source**, pilih **GitHub Actions**.
4. Pergi tab **Actions** dan tunggu tanda ✅ hijau (lebih kurang 1 minit).
5. Website live di: `https://<username>.github.io/luqs-collection/`

Lepas ni, setiap kali edit & push ke `main`, website akan update sendiri.

## Cara edit tanpa coding

- Di GitHub, buka `index.html` → tekan ikon pensel ✏️ → ubah teks / harga → **Commit changes**.
- Untuk tambah gambar: buka folder `images` → **Add file → Upload files**.

## Tengok di komputer sendiri

Double-click `index.html` — terus buka dalam browser.
