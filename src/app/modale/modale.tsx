import React from "react";
import Btn from "../button/btn";
import Image from 'next/image';


export default function Modale({ logo, title, text, alt }) {
  return (
    <section className="modale">
      <hr className="line" />

      <section className="logo">
        <Image src={logo} alt={alt} />
      </section>
      <h1>{title}</h1>
      <p>{text}</p>
      <Btn text="ok" />
    </section>
  );
}
