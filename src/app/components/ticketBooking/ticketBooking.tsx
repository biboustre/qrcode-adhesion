import React from "react";
import { useState } from "react";
import Modale from "../modale/modale";

export default function TicketBooking() {
  const [status, setStatus] = useState(null);

  const handleQRCode = async () => {
    try {
      const response = await fetch("");
      if (response.ok) {
        setStatus("validé");
      } else if (response.status === 402) {
        setStatus("non-payé");
      } else {
        setStatus("invalide");
      }
    } catch (error) {
      console.error("Erreur lors de la réservation du billet :", error);
    }
  };

  return (
    <section>
      {status === "validé" && <Modale logo="" title="" text="" alt="" />}
      {status === "non-payé" && (
        <Modale logo="" title="" text="" alt="" />

        // <section className="logo">
        //   <Image src="/logo-non-payer.png" alt="Billet non payer" />
        // </section>
      )}
      {status === "invalide" && (
        <Modale logo="" title="" text="" alt="" />

        // <section className="logo">
        //   <Image src="/logo-invalide.png" alt="Billet invalide" />
        // </section>
      )}
    </section>
  );
}
