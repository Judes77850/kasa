import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "../data.json"
import EquipmentsCreate from '../Components/EquipementsCreate'
import Collapse from "../Components/Collapse"

function AddDetails(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    const logementDetails = [
        { title:"Description", text:logement.description},
        { title:"Equipements", text:EquipmentsCreate()}
    ]
    return (
        logementDetails.map((logementDetails, index)=>(
            <div className="container" key={index}>
                {Collapse(logementDetails)}
            </div>
        ))
    )
}

export default AddDetails