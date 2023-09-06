import React, {useState} from "react";
import axios from "axios";
import {FaStar} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";

 

const StarBtn = ({trackData}) => {
    const [activeStar, setActiveStar] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleStar = () =>  {
        setActiveStar(activeStar => !activeStar);
        
        if (isFavorite) {
            axios.delete(`http://localhost:5000/favorites/${trackData.track.id}`)
              .then(() => {
                setIsFavorite(false);
              })
              .catch(error => {
                console.error('Ошибка при удалении объекта', error);
              });
          } else {
            const favoriteTrack = { ...trackData, id: trackData.id };

        
            axios.post('http://localhost:5000/favorites', favoriteTrack)
              .then(() => {
                setIsFavorite(true);
              })
              .catch(error => {
                console.error('Ошибка при добавлении объекта', error);
              });
        }
    }
    let toggleStar = activeStar ? 'active_StarBtn' : '';

    return (
        <div>
            <button 
                className={`${toggleStar}`}
                onClick={handleStar}
            >
                { activeStar ? <FaStar size={24} /> : <FaRegStar size={24} /> }
            </button>
        </div>
    )
}
export default StarBtn;