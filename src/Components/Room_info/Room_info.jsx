import React, { useState, useEffect } from 'react';
import "./Room_info.css";
import Room1 from "../../assets/room_1.jpg"
import Room2 from "../../assets/room_2.jpg"
import Room3 from "../../assets/room_3.jpg"
import Room4 from "../../assets/room_4.jpg"
import Room_video from "../../assets/video_1.mp4"
import { FaLocationDot } from "react-icons/fa6";
import Card from '../Search_section/Card/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Room_info = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const media = [
        { type: 'video', src: Room_video },
        { type: 'image', src: Room1 },
        { type: 'image', src: Room2 },
        { type: 'image', src: Room3 },
        { type: 'image', src: Room4 },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + media.length) % images.length);
    };

    const [data, setData] = useState({
        Date: "",
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    const facility = [
        {
            id: "1",
            facilities: "Shared Living Room"
        },
        {
            id: "2",
            facilities: "Balcony"
        },
        {
            id: "3",
            facilities: "Wi-Fi"
        },
        {
            id: "4",
            facilities: "Heating"
        },
        {
            id: "5",
            facilities: "Washing Machine"
        },
        {
            id: "6",
            facilities: "Air Conditioner"
        },
    ]

    const Landlord_Rules = [
        {
            id: "1",
            facilities: "No smoking allowed"
        },
        {
            id: "2",
            facilities: "Pet are not allowed"
        },
        {
            id: "3",
            facilities: "Overnight guests are allowed"
        },
        {
            id: "4",
            facilities: "No girls with boy"
        },
        {
            id: "5",
            facilities: "No boy with girls"
        },
    ]

    const room = [
        {
            _id: "1",
            img: Room1,
            name: "Room 7 in Casa Monteiro II",
            price: "200",
            location: "R. Damasceno Monteiro, 1170 Lisboa",
            Distance: "12",
            type: "Studio"
        },

        {
            _id: "2",
            img: Room2,
            name: "Room 7 in Casa Monteiro II",
            price: "200",
            location: "R. Damasceno Monteiro, 1170 Lisboa",
            Distance: "12",
            type: "Private Room"
        },

        {
            _id: "3",
            img: Room3,
            name: "Room 7 in Casa Monteiro II",
            price: "200",
            location: "R. Damasceno Monteiro, 1170 Lisboa",
            Distance: "12",
            type: "Apartment"
        },

        {
            _id: "4",
            img: Room4,
            name: "Room 7 in Casa Monteiro II",
            price: "200",
            location: "R. Damasceno Monteiro, 1170 Lisboa",
            Distance: "12",
            type: "Studio"
        },
        {
            _id: "5",
            img: Room4,
            name: "Room 7 in Casa Monteiro II",
            price: "200",
            location: "R. Damasceno Monteiro, 1170 Lisboa",
            Distance: "12",
            type: "Studio"
        },
        {
            _id: "6",
            img: Room4,
            name: "Room 7 in Casa Monteiro II",
            price: "200",
            location: "R. Damasceno Monteiro, 1170 Lisboa",
            Distance: "12",
            type: "Studio"
        },

    ];

    return (
        <div className="container">
            <div className="room-section">
                <div className='room-info'>
                    <div className="slider">
                        <button onClick={prevSlide} className="slider-btn left">&#10094;</button>
                        {media[currentSlide].type === 'image' ? (
                            <img loading='lazy' src={media[currentSlide].src} alt="Room Images" className="main-image" />
                        ) : (
                            <video
                                loading='lazy'
                                src={media[currentSlide].src}
                                className="main-image"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        )}

                        <button onClick={nextSlide} className="slider-btn right">&#10095;</button>
                        <div className='Room-name'>
                            <h2>Room 3 in Casa Monteiro II</h2>
                            <p className="price">$450 <span>Bills included</span></p>
                            <div className='room-location'>
                                <FaLocationDot />
                                <p>R. Damasceno Monteiro, 1170 Lisboa</p>
                            </div>
                        </div>
                    </div>
                    <div className='room-booking'>
                        <div className='landlord-details'>
                            <label>Landlord Detail:-</label>
                            <img src={Room4} alt='Landlord Image' />
                            <p>Landlord Name:- <span>Aniket Pundir</span></p>
                        </div>
                        <div className="description">
                            <h1>Description:-</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Sit dui fermentum vitae in dui gravida lectus molestie. Dui a netus interdum enim. Vitae id ornare amet curabitur cursus arcu ante sed. Orci ipsum libero sed in eget vitae. Nulla fringilla integer viverra aenean massa. Metus consequat purus enim tortor malesuada morbi. Eget mattis risus mauris egestas. Aenean quis amet habitant tortor facilisis viverra erat viverra velit. Velit mattis magna cursus purus vitae mauris senectus maed,</p>
                        </div>
                        <hr />
                        <div className='Book-Room'>
                            <h4>Book your Room/PG/Apartment.</h4>
                            <form>
                                <input
                                    placeholder='Select Date'
                                    type='date'
                                    name='Date'
                                    value={data.Data}
                                    required
                                    onChange={onChangeHandler}
                                />
                                <button>Check Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Facilities-Rules'>
                    <div className='Facilities'>
                        <h2>Facilities</h2>
                        <div className='Facilitie'>
                            {facility.map((items, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{items.facilities}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                    <div className='Landlord_Rules'>
                        <h2>Landlord Rules</h2>
                        <div className='Landlord_Rule'>
                            {Landlord_Rules.map((items, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{items.facilities}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='similar-properties-container'>
                <div className='similar-properties'>
                    <h2>Similar Properties</h2>
                </div>
                <div className="similar-properties-slider">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {room.map((items, index) => (
                            <SwiperSlide key={index}>
                                <Card
                                    id={items._id}
                                    img={items.img}
                                    name={items.name}
                                    price={items.price}
                                    location={items.location}
                                    distance={items.Distance}
                                    type={items.type}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Room_info;