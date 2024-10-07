function checkScroll() {
    const elements = document.querySelectorAll('.left, .right');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = null;
        }
    });
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
checkScroll();