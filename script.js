/**
 * Café Solo - Montpellier
 * Script Multi-pages Global
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SÉLECTEUR DE THÈME ---
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'auto';
    
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            let newTheme = 'light';
            
            if (currentTheme === 'light' || currentTheme === 'auto') {
                if (currentTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    newTheme = 'light';
                } else {
                    newTheme = 'dark';
                }
            } else {
                newTheme = 'light';
            }

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- 2. MENU MOBILE HAMBURGER ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- 3. MENU DÉROULANT : LA CARTE ---
    const openMenuBtn = document.getElementById('openMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const backdrop = document.getElementById('backdrop');

    if (openMenuBtn && closeMenuBtn && menuOverlay && backdrop) {
        function toggleOverlay() {
            menuOverlay.classList.toggle('open');
            backdrop.classList.toggle('active');
        }

        openMenuBtn.addEventListener('click', toggleOverlay);
        closeMenuBtn.addEventListener('click', toggleOverlay);
        
        backdrop.addEventListener('click', () => {
            menuOverlay.classList.remove('open');
            backdrop.classList.remove('active');
        });
    }
});