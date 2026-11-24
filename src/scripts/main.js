// =========================================================
// LUQS COLLECTION — Script
// Nombor WhatsApp: tukar di sini jika berubah (format: 60 + nombor tanpa 0 depan)
// =========================================================
const WHATSAPP_NUMBER = "601157812217";

// --- Menu mobile (butang 3 garis) ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// --- Lightbox: klik gambar untuk besarkan ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

document.querySelectorAll(".zoomable").forEach((el) => {
  el.addEventListener("click", () => {
    const img = el.querySelector("img");
    if (!img) return; // gambar belum ada
    lightboxImg.src = img.dataset.full || img.currentSrc;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = el.dataset.caption || img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

// --- Butang "Lock Slot Pakej RM35" pilih jenis tempahan automatik ---
document.querySelectorAll("[data-jenis]").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.getElementById("jenisTempahan").value = btn.dataset.jenis;
  })
);

// --- Borang tempahan: hantar terus ke WhatsApp ---
const form = document.getElementById("orderForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const empty = !field.value.trim();
    field.classList.toggle("invalid", empty);
    if (empty) ok = false;
  });
  formError.hidden = ok;
  if (!ok) return;

  const d = Object.fromEntries(new FormData(form));
  const message =
    "Hi LUQS Collection! Saya nak tempah / lock slot:\n\n" +
    "Nama / Organisasi: " + d.nama + "\n" +
    "No. Telefon: " + d.telefon + "\n" +
    "Jenis Tempahan: " + d.jenis + "\n" +
    "Anggaran Kuantiti: " + d.kuantiti + "\n" +
    "Catatan: " + (d.catatan.trim() || "-");

  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message), "_blank");
});
