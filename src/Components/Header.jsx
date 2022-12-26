import React from "react"
import "../styles/Header.css"

function Header(){
    return (
        <header>
            <div className="headerTop">
                <div className="logo">

                </div>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="../Apropos">A Propos</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header