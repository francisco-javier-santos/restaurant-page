function loadContactPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = ''; // Clear existing content

    const contactPage = document.createElement('div');
    contactPage.id = 'contact';

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    contactPage.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Phone: (123) 456-7890';
    contactPage.appendChild(p);

    const email = document.createElement('p');
    email.textContent = 'Email: info@restaurant.com';
    contactPage.appendChild(email);

    contentDiv.appendChild(contactPage);
}

export default loadContactPage;
