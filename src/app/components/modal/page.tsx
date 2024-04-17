import React, { useState } from "react";
import Image from "next/image";
import '../../components/modal/page.css';
import Btn from '../button/page';

export default function Modale({ statu, logo, title, text, alt }) {
  return (
    <section className="modale">
      <hr className="line" />
      <section className="logo">
        <Image src={logo} alt={alt} />
      </section>
      <h1>{title}</h1>
      <p>{text}</p>
      <Btn>{statu}</Btn>
    </section>
  );
}
