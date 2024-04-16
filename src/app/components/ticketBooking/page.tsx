import React from "react";
import { useState } from "react";
import Modale from "../modale/page";
import BilletNonPayer from "../../../assets/images/Group 1287.png";
import BilletInvalide from "../../../assets/images/Group 278 (1).png";
import BilletValide from "../../../assets/images/Group 278.png";

export default function TicketBooking() {
  const [status, setStatus] = useState("");
  const [btnText, setBtnText] = useState("Mon appareil photo ne marche pas");
  const STATUT_VALIDE = "valide";
  const STATUT_NON_PAYE = "non-payé";
  const STATUT_INVALIDE = "invalide";

  const handleQRCode = async () => {
    try {
      const response = await fetch("");
      if (response.ok) {
        setStatus(STATUT_VALIDE);
        setBtnText("OK");
      } else if (response.status === 402) {
        setStatus(STATUT_NON_PAYE);
        setBtnText("OK");
      } else {
        setStatus(STATUT_INVALIDE);
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
          status={status}
          logo={BilletValide}
          title="Billet valide"
          text="ok"
          alt="ok"
        />
      )}
      {status === "non-payé" && (
        <Modale
          status={status}
          logo={BilletNonPayer}
          title="Billet non payé"
          text="ok"
          alt="ok"
        />
      )}
      {status === "invalide" && (
        <Modale
          status={status}
          logo={BilletInvalide}
          title="Billet invalide"
          text="ok"
          alt="ok"
        />
      )}
    </section>
  );
}


