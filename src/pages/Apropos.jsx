import React, { useState } from "react"
import "../styles/Apropos.css"
import MyImage from "../img/Vector.png"
import AproposData from "../Components/aproposData";


function CreateFiabilite(){
    const [open, setOpen] = useState(false);
    const content = () => {
        setOpen(!open);
    }
    return(
        <div className="box">
            <div className="apropostopPart">
                <h2>Fiabilité</h2>
                <button className="btn" onClick={content}>
                    <img className="fleche" src={MyImage} alt="logo fleche"></img>
                </button>
            </div>
            {open && <div className="content">
                <p>
                    {AproposData.fiabilite}
                </p>
            </div>}
        </div>
    )
}

function CreateRespect(){
    const [open, setOpen] = useState(false);
    const content = () => {
        setOpen(!open);
    }
    return(
        <div className="box">
            <div className="apropostopPart">
                <h2>Respect</h2>
                <button className="btn" onClick={content}>
                    <img className="fleche" src={MyImage} alt="logo fleche"></img>
                </button>
            </div> 
            {open && <div className="content">
                <p>
                {AproposData.respect}
                </p>
            </div>}
        </div>
    )
}

function CreateService(){
    const [open, setOpen] = useState(false);
    const content = () => {
        setOpen(!open);
    }
    return(
        <div className="box">
            <div className="apropostopPart">
                <h2>Service</h2>
                <button className="btn"onClick={content}>
                    <img className="fleche" src={MyImage} alt="logo fleche"></img>
                </button>
            </div>
            {open && <div className="content">
                <p>
                {AproposData.service}
                </p>
            </div>}
        </div>
    )
}

function CreateSecurite(){
    const [open, setOpen] = useState(false);
    const content = () => {
        setOpen(!open);
    }
    return(
        <div className="box">
            <div className="apropostopPart">
                <h2>Sécurité</h2>
                <button className="btn"onClick={content}>
                    <img className="fleche" src={MyImage} alt="logo fleche"></img>
                </button>
            </div>
            {open && <div className="content">
                <p>
                {AproposData.securite}
                </p>
            </div>}
        </div>
    )
}


function Apropos(){
    return (
        <div className="container">
            {CreateFiabilite()}
            {CreateRespect()}
            {CreateService()}
            {CreateSecurite()}
            
        </div>
    )
}

export default Apropos