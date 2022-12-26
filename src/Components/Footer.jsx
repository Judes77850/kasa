import React from "react";
import "../styles/Footer.css";
import LogoFooter from "./LogoFooter"

function Footer(){
    return (
        <footer>
            <div className="logoFooter">
                {LogoFooter()}
            </div>
            <p>
            © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer