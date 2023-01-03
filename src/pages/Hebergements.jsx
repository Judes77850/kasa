import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Data from "../data.json"
import "../styles/Hebergements.css"
import RatingStars from '../Components/RatingStars'
import TagsCreate from '../Components/Tags'
import AddDetails from '../Components/AddDetails'


function FicheLogement(){
    const {id} = useParams()
    const logement = Data.find(logement => logement.id === id)
    if (logement){
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
                                {RatingStars()}
                            </div>
                    </div>
                </div>
                    <div className="details">
                        {AddDetails()}
                    </div>
            </div>
        )
    }else{
        return (
            <Navigate to="/error" />
        )

    }
}

export default FicheLogement;
