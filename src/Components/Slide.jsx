import React from "react";
import { useParams } from 'react-router-dom'
import Data from "../data.json"
import ImageSlider from "./ImageSlider";
import "../styles/Slide.css"


function Slideshow(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    const slides = logement.pictures
    return(
        <div className="slideBox">
            <ImageSlider slides={slides} />
        </div>
    )
}

export default Slideshow