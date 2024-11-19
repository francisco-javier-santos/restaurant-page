function loadMenuPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = ''; // Clear existing content

    const menuPage = document.createElement('div');
    menuPage.id = 'menu';

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';
    menuPage.appendChild(h1);

    const menuList = document.createElement('ul');
    const items = ['Pizza', 'Pasta', 'Salad', 'Desserts'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
    });
    menuPage.appendChild(menuList);

    contentDiv.appendChild(menuPage);
}

export default loadMenuPage;
