import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
// import LOGO from "../../assets/images/Group 112.png";

export default function Header({ logo, title, name, date, alt }) {
  return (
    <header>
      <section className="logo">
        <Image src={logo} alt={alt} />
      </section>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <p>{date}</p>
    </header>
  );
}
