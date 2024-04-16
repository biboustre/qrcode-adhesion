// import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import Event from "../event/page";
// import LOGO from "../../assets/images/Group 112.png";

export default function Header({ logo, alt }) {
  return (
    <header>
      <section className="logo">
        <Image src={logo} alt={alt} />
      </section>
      <Event title="" name="" date=""/>
    </header>
  );
}
