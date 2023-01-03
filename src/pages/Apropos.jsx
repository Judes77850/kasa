import React from "react"
import "../styles/Apropos.css"
import AproposData from "../Components/aproposData";
import Collapse from "../Components/Collapse"


function Apropos(){
  return (
    AproposData.map((AproposData, index)=>(
        <div className="AproposContainer" key={index}>
            {Collapse(AproposData)}
        </div>
    ))
  )
}

export default Apropos