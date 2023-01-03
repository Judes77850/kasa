import React from "react";
import { useParams } from 'react-router-dom'
import Data from "../data.json"
import ImageSlider from "./ImageSlider";
import "../styles/Slide.css"


function Slideshow(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    if (logement){
        const slides = logement.pictures
        return (
            <div className="slideBox">
            <ImageSlider slides={slides} />
        </div>
        )
    }else{
        return (
            <div>""</div>
        )
    }
}

export default Slideshow