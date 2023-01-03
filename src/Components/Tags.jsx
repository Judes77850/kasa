import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "../data.json"

function TagsCreate(){
    const {id} = useParams()
    const logement = Data.find(a => a.id === id)
    return(
        logement.tags.map((tags)=>(
            <p key={tags} className="tags">{tags}</p>
        ))
    )
}

export default TagsCreate