import React from "react";
import { useState } from "react";
import Modale from "../modal/page";
import BilletNonPayer from "../../../assets/images/Group 1287.png";
import BilletInvalide from "../../../assets/images/Group 278 (1).png";
import BilletValide from "../../../assets/images/Group 278.png";

export default function TicketBooking() {
  const [status, setStatus] = useState("");
  const [btnText, setBtnText] = useState("Mon appareil photo ne marche pas");
  const STATUS_VALIDE = "valide";
  const STATUS_NON_PAYE = "non-payé";
  const STATUS_INVALIDE = "invalide";

  const handleQRCode = async () => {
    try {
      const response = await fetch("");
      if (response.ok) {
        setStatus(STATUS_VALIDE);
        setBtnText("OK");
      } else if (response.status === 402) {
        setStatus(STATUS_NON_PAYE);
        setBtnText("OK");
      } else {
        setStatus(STATUS_INVALIDE);
        setBtnText("OK");
      }
    } catch (error) {
      console.error("Erreur lors de la réservation du billet :", error);
    }
  };

  return (
    <section>
      {status === "valide" && (
        <Modale
          status={btnText}
          logo={BilletValide}
          title="Billet valide"
          text="API"
          alt="#"
        />
      )}
      {status === "non-payé" && (
        <Modale
          status={btnText}
          logo={BilletNonPayer}
          title="Billet non payé"
          text="API"
          alt="#"
        />
      )}
      {status === "invalide" && (
        <Modale
          status={btnText}
          logo={BilletInvalide}
          title="Billet invalide"
          text="API"
          alt="#"
        />
      )}
    </section>
  );
}
