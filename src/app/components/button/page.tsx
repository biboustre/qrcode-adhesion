import React, { useState } from "react";
import "../button/page.css";

export default function btn({children}) {

  return <button className="btnModale">{children}</button>;
}
