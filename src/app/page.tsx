"use client";
import Header from "./components/header/page";
import LOGO from "../assets/images/Group 112.png";
import Event from "../app/components/event/page";
import '../../src/app/page.css';
import Image from "next/image";
import SCAN from '../assets/images/Subtract.png';
import Btn from './components/button/page'

export default function Home() {
  return (
    <div className="containerHome">
      <Header logo={LOGO} alt="ok" className="headerHome">
        <Event className="eventHome" title="Merci de scaner le qr code admin pour démarer la session de scan" name="" date="" />
      </Header>
      <main className="mainHome">
        <Image src={SCAN} alt="logo de scan" />
      </main>
      <Btn text="Mon appareil photo ne marche pas"/>
    </div>
  );
}
