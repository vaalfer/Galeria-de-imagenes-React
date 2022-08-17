import React from "react";
import '../style-sheets/Header.css'

function Header (props) {
    return (
    <h1 className="header">{props.titulo}</h1>
    )
}

export default Header