import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Noted © Azeem Idrisi {year}</p>
    </footer>
  );
}

export default Footer;
