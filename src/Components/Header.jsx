import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Header.css"

function Header(){
    return (
        <header>
            <div className="headerTop">
                <div className="logo"></div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => (isActive ? 'linkActive' : 'link')}>
                        Accueil
                    </NavLink></li>
                    <li><NavLink to="/Apropos" className={({isActive}) => (isActive ? 'linkActive' : 'link')}>
                        A Propos
                    </NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header