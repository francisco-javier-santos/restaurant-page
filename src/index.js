import './style.css'; // Importa el CSS para que Webpack lo procese
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = ''; // Limpia todo el contenido
}

function initializeTabs() {
    // Selecciona las pestañas del HTML
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('about-tab');

    // Agrega los event listeners para cambiar las pestañas
    homeTab.addEventListener('click', () => {
        clearContent();
        loadHomePage();
    });

    menuTab.addEventListener('click', () => {
        clearContent();
        loadMenuPage();
    });

    contactTab.addEventListener('click', () => {
        clearContent();
        loadContactPage();
    });
}

// Carga inicial
loadHomePage();
initializeTabs();
