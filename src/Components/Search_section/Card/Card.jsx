import React, { useEffect } from 'react'
import "./Card.css";
import { useNavigate } from 'react-router-dom';



const Card = ({ img, name, price, location, distance, id, type }) => {

    const Navigate = useNavigate();

    return (
        <>
            <div className='room-Cards' onClick={() => Navigate(`/Search_Section/Room_info/${id}`)}>
                <div className='room-card'>
                    <div className='img-distance'>
                        <img loading='lazy' src={img} alt='Room Image' />
                        <div className='type-distance'>
                            <p>Distance: {distance}km</p>
                            <p>Type: {type}</p>
                        </div>
                    </div>
                    <div className='room-content'>
                        <div className='room-name-price'>
                            <h3>{name}</h3>
                            <h2>{price}</h2>
                        </div>
                        <div className='location'>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card