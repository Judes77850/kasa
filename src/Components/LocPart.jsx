import React from "react"
import "../styles/LocPart.css"
import Data from "../data.json"
import { Link, useParams } from 'react-router-dom'

Data.map((Data)=>(
    console.log(Data.id)
))


function CardCreate(){
    return(
        Data.map((Data)=>(
            <Link to="../pages/FicheLogement/">
                <div className="loc" key={Data.id}>
                    <div className="locGradient">
                    <div className="cardCover"><img src={Data.cover} alt="couverture"></img></div>
                    <p className="locaTitle">{Data.title}</p>
                    </div>
                </div>
            </Link>
        ))
        )
    }
    
export default CardCreate
