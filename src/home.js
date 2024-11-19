import restaurantImage from './images/restaurant.jpeg'; // Importa la imagen

function loadHomePage() {
    const contentDiv = document.getElementById('content');

    const homepage = document.createElement('div');
    homepage.id = 'homepage';

    // Título
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Our Restaurant!';
    homepage.appendChild(h1);

    // Descripción
    const p = document.createElement('p');
    p.textContent = 'We offer a variety of delicious dishes. Come and try them!';
    homepage.appendChild(p);

    // Imagen
    const img = document.createElement('img');
    img.src = restaurantImage; // Usa la imagen importada
    img.alt = 'Restaurant Image';
    homepage.appendChild(img);

    contentDiv.appendChild(homepage);
}

export default loadHomePage;
