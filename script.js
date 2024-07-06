/*
    Autor: Kelly Johana Solano C.
    Fecha: 06 de Julio de 2024.
    Descripción: Archivo de JS que contiene funciones utilizadas para interactividad de la Landing Page.
*/

// Funcionalidad de menú desplegable

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.home-navbar-burgermenu');
    const closeMenu = document.querySelector('.home-navbar-closemenu');
    const menuWindow = document.querySelector('.home-navbar-burgermenu-menu');

    if (burgerMenu && closeMenu && menuWindow) {
        const show = () => {
            // menuWindow.style.display = 'flex';
            menuWindow.style.top = '0';
            console.log('Se abrió');
        }

        const close = () => {
            menuWindow.style.top = '-100%';
            console.log('Se cerró');
        }

        burgerMenu.addEventListener('click', show);
        closeMenu.addEventListener('click', close);
    } else {
        console.log('Alguno de los elementos no se encontró');
    }
});
