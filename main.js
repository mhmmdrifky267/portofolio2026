 // Logic Hamburger Menu
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        if (!isHidden) {
          menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icon X
        } else {
          menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Icon Hamburger
        }
      });

      // Tutup menu saat link diklik
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        });
      });