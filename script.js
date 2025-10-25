document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Terapkan state awal
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ganti ikon menjadi matahari
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const newIsDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', newIsDarkMode);
        
        // Ganti ikon
        if (newIsDarkMode) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // --- Animasi Fade-in Saat Scroll (Scroll Reveal) ---
    // Menggunakan Intersection Observer API untuk performa yang baik
    const revealElements = document.querySelectorAll('.reveal-on-scroll .design-card');
    
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Mulai animasi ketika 10% elemen terlihat
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Terapkan class 'visible' untuk memicu CSS transition
                entry.target.classList.add('visible');
                // Hentikan pengamatan setelah di-reveal
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // NOTE PENTING UNTUK ANIMASI HALUS:
    /* Untuk implementasi *production* dengan **Framer Motion** (seperti yang diminta):
    
    1. Proyek harus diinisiasi menggunakan **React/Next.js/Gatsby**.
    2. Komponen seperti `.design-card`, `.cta-primary`, dll., akan diubah menjadi komponen React.
    3. Animasi akan ditambahkan menggunakan properti `motion` dari Framer Motion.

    Contoh (React/Framer Motion):
    
    // Untuk button hover (mirip WhatsApp API)
    <motion.a 
        href="#" 
        className="cta-primary whatsapp-style-btn"
        whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)" }} 
        whileTap={{ scale: 0.95 }}
    >
        Lihat Portofolio
    </motion.a>

    // Untuk scroll reveal (fade-in)
    <motion.div 
        className="design-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
    >
        ... konten card ...
    </motion.div>
    
    Karena kita berada di HTML/CSS/JS murni, kita menggunakan CSS *transitions* dan *Intersection Observer* sebagai pengganti.
    */
    
    // --- Tombol Search (Placeholder) ---
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        alert('Fitur Pencarian akan segera diimplementasikan!');
        // Di sini bisa ditambahkan logika untuk menampilkan overlay atau search bar.
    });
});