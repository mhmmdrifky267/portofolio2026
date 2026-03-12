
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 1. Inisialisasi ScrollSmoother
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  smoothTouch: 0.1,
});

// 2. Logika Navigasi Smooth Klik (Solusi Masalah Kamu)
// Logika Navigasi Smooth Klik dengan Offset Navbar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const navbarHeight = document.querySelector('nav').offsetHeight; // Menghitung tinggi navbar otomatis
    
    if (targetId === "#") {
      smoother.scrollTo(0, true);
    } else {
      // Kita tambahkan offset agar section muncul tepat di bawah navbar
      // "top top" berarti bagian atas target bertemu bagian atas viewport
      // Lalu dikurangi navbarHeight agar tidak tertutup
      smoother.scrollTo(targetId, true, `top ${navbarHeight}`);
    }
  });
});

// 3. Logika Hamburger Menu (Tetap seperti sebelumnya)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    if (!isHidden) {
      menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); 
    } else {
      menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
    }
  });
}

// 4. Inisialisasi AOS
window.addEventListener("load", () => {
  AOS.init({ once: true, duration: 1000 });
});