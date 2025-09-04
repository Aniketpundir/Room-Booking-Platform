import React, { useEffect } from 'react'
import "./Card.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



const Card = ({ img, name, price, location, distance, id, type }) => {

    const navigate = useNavigate();

    const token = localStorage.getItem("user_token");

    const handleClik = () => {
        if (token) {
            navigate(`/Search_Section/Room_info/${id}`)
        } else {
            navigate('/login');
            toast.error("Please login first!", {
                position: "bottom-left",
                autoClose: 5000,
            });
        }
    }

    return (
        <>
            <div className='room-Cards' onClick={handleClik}>
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