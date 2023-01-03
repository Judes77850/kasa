import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "../data.json"

function EquipmentsCreate(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    return(
        logement.equipments.map((equipments, index)=>(
            <div key={index} className="equips">{equipments}</div>
        ))
    )
}

export default EquipmentsCreate