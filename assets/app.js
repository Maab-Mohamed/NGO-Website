// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const section = document.querySelector(this.hash);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 80;
    document.querySelectorAll('header nav a').forEach(link => {
        const section = document.querySelector(link.hash);
        if (!section) return;
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


