document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Logic
    const cursor = document.querySelector('#cursor');
    const cursorDot = document.querySelector('#cursor-dot');
    
    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
            cursorDot.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
        });

        // Hover Effect
        const links = document.querySelectorAll('a, button, [role="button"]');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.width = '64px';
                cursor.style.height = '64px';
                cursor.style.transform = `${cursor.style.transform} scale(1.5)`;
                cursor.style.opacity = '0.5';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.width = '32px';
                cursor.style.height = '32px';
                cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
                cursor.style.opacity = '1';
            });
        });
    }

    // Scroll Reveal Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-delayed').forEach(el => {
        revealObserver.observe(el);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.paddingLeft = '4rem';
            navbar.style.paddingRight = '4rem';
            navbar.style.backgroundColor = 'rgba(6, 6, 6, 0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.paddingLeft = '';
            navbar.style.paddingRight = '';
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Parallax Effect for absolute visual layer
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxHero = document.querySelector('.absolute.right-\\[5\\%\\].top-\\[20\\%\\]');
        if (parallaxHero) {
            parallaxHero.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});
