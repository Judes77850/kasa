import React from "react";
import "../styles/Footer.css";
import Logo from "./Logo"

function Footer(){
    return (
        <footer>
            {Logo()}
            <p>
            © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer