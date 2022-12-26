import React from "react"
import "../styles/LocPart.css"
import Data from "../data.json"
import { Link } from 'react-router-dom'

function CardCreate(){
    return(
        Data.map((Data)=>(
            <Link to={`../Hebergements/` + Data.id} key={Data.id}>
                <div className="loc" >
                    <div className="locGradient">
                    <p className="locaTitle">{Data.title}</p>
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
