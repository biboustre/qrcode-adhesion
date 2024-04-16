"use client";
import Header from "./components/header/page";
import LOGO from "../assets/images/Group 112.png";
import Event from "../app/components/event/page";
import '../../src/app/page.css';

export default function Home() {
  return (
    <div className="containerHome">
      <Header logo={LOGO} alt="ok" className="headerHome">
        <Event className="eventHome" title="Merci de scaner le qr code admin pour démarer la session de scan" name="" date="" />
      </Header>
    </div>
  );
}
