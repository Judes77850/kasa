import React, { useState } from "react"
import { useParams } from 'react-router-dom'
import Data from "../data.json"
import "../styles/Hebergements.css"
import flecheHaut from "../img/Vector.png"
import pinkStar from "../img/pinkStar.png"
import greyStar from "../img/greyStar.png"

function TagsCreate(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    return(
        logement.tags.map((tags)=>(
            <p key={tags} className="tags">{tags}</p>
        ))
    )
}

function EquipmentsCreate(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    return(
        logement.equipments.map((equipments)=>(
            <div key={equipments} className="equips">{equipments}</div>
        ))
    )
}

function RateCreate1(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    let a = logement.rating - 0
    return(
        [...Array(a)].map((e, index)=> <img key={index + logement.id} src={pinkStar} alt="étoile de notation"></img>)
    )
}

function RateCreate2(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    let b = 5 - logement.rating
    return(
        [...Array(b)].map((e, index)=> <img key={index + logement.id} src={greyStar} alt="étoile de notation"></img>)
    )
}

function FicheLogement(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const hebContent1 = () => {
        setOpen1(!open1);
    }
    const hebContent2 = () => {
        setOpen2(!open2);
    }
        return (
            <div className="ficheLogement">
                    <div className="topPart">
                        <div className="topLeftPart">
                            <h1>
                                {logement.title}
                            </h1>
                            <div className="location">
                                {logement.location}
                            </div>
                            <div className="tagsBox">
                                {TagsCreate()}
                            </div>
                        </div>
                        <div className="topRightPart">
                            <div className="hostBox">
                                <div className="hostName">
                                    {logement.host.name}
                                </div>
                                <div className="profilPicture">
                                    <img src={logement.host.picture} alt="Votre hôte"></img>
                                </div>
                            </div>
                            <div className="rateBox">
                                {RateCreate1()}
                                {RateCreate2()}
                            </div>
                        </div>
                    </div>
                    <div className="bottomPart">
                        <div className="details">
                            <div className="description">
                                <div className="topDetailsPart">
                                    <h3>Description</h3>
                                    <button className="btn" onClick={hebContent1}>
                                        <img src={flecheHaut} alt="logo fleche haut"></img>
                                    </button>
                                </div>
                                {open1 && <div className="hebContent1">{logement.description}</div>}
                            </div>
                            <div className="equipements">
                                <div className="topDetailsPart">
                                    <h3>Équipements</h3>
                                    <button className="btn" onClick={hebContent2}>
                                        <img src={flecheHaut} alt="logo fleche"></img>
                                    </button>
                                </div>
                                {open2 && <div className="hebContent2">{EquipmentsCreate()}</div>}
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default FicheLogement;