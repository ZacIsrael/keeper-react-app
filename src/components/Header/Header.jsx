import React from "react";

// import "./Header.css";

// Create a Header.jsx component that render a <header>
// element to show the Keeper App name in an <h1>

function Header(props) {
  return (
    <header>
      <h1>{props.appName}</h1>
    </header>
  );
}

export default Header;
