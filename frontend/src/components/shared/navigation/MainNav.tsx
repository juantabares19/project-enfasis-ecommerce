import React from "react";

export default function MainNav() {
  const navLinks = [
    {
      label: "New Arrivals",
      href: "/products",
    },
    {
      label: "Tops",
      href: "/products",
    },
    {
      label: "Bottoms",
      href: "/products",
    },
    {
      label: "Shoes",
      href: "/products",
    },
    {
      label: "Sale",
      href: "/products",
    },
  ];
  return (
    <nav id="main-nav">
      <ul>
        <li key="home">
          <a href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}>
            Store
          </a>
        </li>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} style={{ textDecoration: "none", color: "inherit" }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

