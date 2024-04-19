"use client";
import React, { useState } from "react";
import Header from "./components/header/page";
import LOGO from "../assets/images/Group 112.png";
import LOGO2 from "../assets/images/Group 278.png";
import Event from "../app/components/event/page";
import "../../src/app/page.css";
import Image from "next/image";
import SCAN from "../assets/images/Subtract.png";
import Btn from "./components/button/page";
import TicketBooking from "./components/ticketBooking/page";
import Head from "next/head";
import Modale from "./components/modal/page";

export default function Home() {
  const [token, setToken] = useState(null);
  const [eventInfo, setEventInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [btnText, setBtnText] = useState("Mon appareil photo ne marche pas");

  const fetchEventData = async (token) => {
    try {
      const response = await fetch(`https://###/${token}`);

      if (!response.ok) {
        throw new Error("Événement introuvable");
      }
      const eventData = await response.json();

      return eventData;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'événement :",
        error
      );
      throw error;
    }
  };

  const handleScan = async (data) => {
    if (data) {
      try {
        setToken(data);

        const eventData = await fetchEventData(data);

        setEventInfo(eventData);
        setModalVisible(true);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'événement :",
          error
        );
      }
    }
  };

  return (
    <div className="containerHome">
      <Head>
        <title>App Adhesion Nextjs</title>
      </Head>
      <Header logo={LOGO} alt="#" className="headerHome">
        <Event
          className="eventHome"
          title="Merci de scaner le qr code admin pour démarrer la session de scan"
          name=""
          date=""
        />
      </Header>
      <main className="mainHome">
        <Image src={SCAN} alt="logo de scan" />
      </main>
      <Btn>{btnText}</Btn>
      <Modale
        status={btnText}
        logo={LOGO2}
        title="Billet invalide"
        text="API"
        alt="#"
      />
      <TicketBooking />
    </div>
  );
}
