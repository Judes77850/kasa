import React from "react"
import "../styles/LocPart.css"
import Data from "../data.json"
import { Link } from 'react-router-dom'

function CardCreate(){
    return(
        Data.map((logement)=>(
            <Link to={`../Hebergements/` + logement.id} key={logement.id}>
                <div className="loc" style={{ 
                    backgroundImage: "url(" + logement.cover + ")" 
                    }}>
                    <div className="locGradient">
                    <p className="locaTitle">{logement.title}</p>
                    </div>
                </div>
            </Link>
        ))
        )
}
    

function CardBox(){
    return(
        <div className="locBox">
            {CardCreate()}
        </div>
    )
}

export default CardBox
