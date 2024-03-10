import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <span>
          <a href="https://github.com/AzeemIdrisi/Noted">Noted ©</a>
        </span>{" "}
        <span>
          <a href="https://github.com/AzeemIdrisi">Azeem Idrisi {year}</a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
