// script.js
// Add event listeners to navigation links
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation to hero button
document.querySelector('#hero button').addEventListener('mouseover', () => {
    document.querySelector('#hero button').style.transform = 'scale(1.1)';
});

document.querySelector('#hero button').addEventListener('mouseout', () => {
    document.querySelector('#hero button').style.transform = 'scale(1)';
});
