import { useParams } from 'react-router-dom'
import Data from "../data.json"

function RatingStars(){
        const {id} = useParams()
        const pinkStar = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#ff6060"/>
                    </svg>
        const greyStar = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                    </svg>
        const logement = Data.find(a => a.id === id)
        const rate = logement.rating
        const stars = [1, 2, 3, 4, 5]
        return(
            stars.map((i, index) => {
                if (i <= rate){
                    return (
                        <div className='stars' key={index}>{pinkStar}</div>
                    )
                }else {
                    return(
                        <div className='stars' key={index}>{greyStar}</div>
                    )
                }
            }
            ))
        
}

export default RatingStars