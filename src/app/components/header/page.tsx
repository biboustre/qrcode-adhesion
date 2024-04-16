import Image from "next/image";
import React from "react";
import '../header/page.css';

export default function Header({ logo, alt, children, className }) {
  return (
    <header className={`header ${className}`}>
      <section className="logo">
        <Image src={logo} alt={alt} />
      </section>
      {children}
    </header>
  );
}
