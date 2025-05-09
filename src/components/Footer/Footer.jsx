import React from "react";
import "./Footer.css";

// Create a Footer.jsx component that renders a <footer>
// element to show a copyright message in a <p> with a
// dynamically updated year.

function Footer(props) {
  return (
    <footer>
      <p>Copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
