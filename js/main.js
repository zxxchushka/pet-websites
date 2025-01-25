function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

const parallaxImage = document.querySelector('.parallax-image');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxImage.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.32}px))`;
});

document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            document.querySelectorAll('.faq-content.active').forEach(innerContent => {
                innerContent.classList.remove('active');
                innerContent.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
            });
            content.classList.add('active');
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
