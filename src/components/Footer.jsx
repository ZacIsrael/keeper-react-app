import React from "react";

// Create a Footer.jsx component that renders a <footer>
// element to show a copyright message in a <p> with a
// dynamically updated year.

function Footer(props) {
  return <div>Copyright {new Date().getFullYear()}</div>;
}

export default Footer;
