import React from "react"
import { NavLink } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "5%",
        height: "1%",
        padding: ".75%",
        background: "black",
        textDecoration: "none",
        color: "white",
        cursor:"pointer"
  };


  return (
    <div id="navbar">
         <NavLink
        to="/"
        exact
        style={linkStyles}
        >
            Home
        </NavLink>

        <NavLink
        to="/display"
        exact
        style={linkStyles}

        >
            Display
        </NavLink>
    </div>
  )

}

export default NavBar