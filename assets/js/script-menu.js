document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-links');

    toggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});