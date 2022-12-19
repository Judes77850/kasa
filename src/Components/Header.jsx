import React from "react"
import "../styles/Header.css"
import Logo from "./Logo"

function Banner(){
    return(
        <div className="banner">
            <div className="bannerFilter">
                <div className="textPart">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
        </div>
    )
}

function Header(){
    return (
        <header>
            <div className="headerTop">
                {Logo()}
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="../pages/Apropos">A Propos</a></li>
                </ul>
            </div>
            {Banner()}
        </header>
    )
}

export default Header