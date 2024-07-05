import React from 'react';

const navbarItems = [
  { name: 'Home', href: '#home' },
  { name: '3D Models', href: '#models' },
  { name: 'Build a Website', href: '#website' },
  { name: 'RC Car Concept', href: '#rc-car' }
];

function NavbarItems() {
  return (
    <>
      {navbarItems.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </>
  );
}

export default NavbarItems;
