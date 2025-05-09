import React from "react";

// Create a Header.jsx component that render a <header> 
// element to show the Keeper App name in an <h1>

function Header(props) {
    return (
        <h1>{props.appName}</h1>
    );
}

export default Header;