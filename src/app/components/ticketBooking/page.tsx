import React from "react";
import { useState } from "react";
import Modale from "../modal/page";
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
          statu={btnText}
          logo={BilletValide}
          title="Billet valide"
          text="API"
          alt="#"
        />
      )}
      {status === "non-payé" && (
        <Modale
          statu={btnText}
          logo={BilletNonPayer}
          title="Billet non payé"
          text="API"
          alt="#"
        />
      )}
      {status === "invalide" && (
        <Modale
          statu={btnText}
          logo={BilletInvalide}
          title="Billet invalide"
          text="API"
          alt="#"
        />
      )}
    </section>
  );
}
