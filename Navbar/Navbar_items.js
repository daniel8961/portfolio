
const navbarItems = [
    { name: 'Home', href: '#home' },
    { name: '3D Models', href: '#models' },
    { name: 'Build a Website', href: '#website' },
    { name: 'RC Car Milestone', href: '#rc-car' }
];

function createNavbar() {
    const navbar = document.querySelector('.navbar nav ul');
    navbar.innerHTML = '';

    navbarItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.name;
        li.appendChild(a);
        navbar.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', createNavbar);
