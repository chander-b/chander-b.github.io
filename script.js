
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

// Mobile navigation toggle
toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
});

// Close navigation after clicking a link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// Dynamic copyright year
document.querySelector('#year').textContent = new Date().getFullYear();
