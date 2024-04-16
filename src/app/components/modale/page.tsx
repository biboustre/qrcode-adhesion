import React, { useState } from "react";
import Btn from "../button/page";
import Image from "next/image";

export default function Modale({ status, logo, title, text, alt }) {
  return (
    <section className="modale">
      <hr className="line" />

      <section className="logo">
        <Image src={logo} alt={alt} />
      </section>
      <h1>{title}</h1>
      <p>{text}</p>
      <Btn text={status} />
    </section>
  );
}
