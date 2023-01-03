import React, { useState } from "react";
import fleche from "../img/VectorBas.png";
import "../styles/Collapse.css";


function Collapse(props){
    const [open, setOpen] = useState(false);
    const content = () => {
        setOpen(!open);
    }
    function ArrowAnim() {
        if (open){
            return(
                <img className="flecheBas" src={fleche} alt="logo fleche"></img>
            )
        }else{
            return(
                <img className="fleche" src={fleche} alt="logo fleche"></img>
            )
        }
    }
    function ContentAnim() {
        if (!open){
            return(
                <div className="contentToTop">{props.text}</div>
                )
        }else{
            return(    
                <div className="contentToBottom">{props.text}</div>
            )
        }
    }
        return(
            <div className="box">
                <div className="collapseTopPart">
                    <h2>{props.title}</h2>
                    <button className="btn"onClick={content}>
                        {ArrowAnim()}
                    </button>
                </div>
                {open && <div>
                    {ContentAnim()}
                </div>}
            </div>
        )
}

export default Collapse