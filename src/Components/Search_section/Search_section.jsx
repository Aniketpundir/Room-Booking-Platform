// Search_section.js
import React from 'react';
import './Search_section.css';
import Filter from './Filter/Filter';
import Card from './Card/Card';
import room1 from "../../assets/room_1.jpg";
import room2 from "../../assets/room_2.jpg";
import room3 from "../../assets/room_3.jpg";
import room4 from "../../assets/room_4.jpg";

const room = [
    {
        _id: "1",
        img: room1,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Studio"
    },

    {
        _id: "2",
        img: room2,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Private Room"
    },

    {
        _id: "3",
        img: room3,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Apartment"
    },

    {
        _id: "4",
        img: room4,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Studio"
    },
    {
        _id: "5",
        img: room1,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Private Room"
    },

    {
        _id: "6",
        img: room2,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Apartment"
    },

    {
        _id: "7",
        img: room3,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Studio"
    },

    {
        _id: "8",
        img: room4,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Private Room"
    },
    {
        _id: "9",
        img: room1,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Apartment"
    },

    {
        _id: "10",
        img: room2,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Studio"
    },

    {
        _id: "11",
        img: room3,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Private Room"
    },

    {
        _id: "12",
        img: room4,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Apartment"
    },
    {
        _id: "13",
        img: room1,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Studio"
    },

    {
        _id: "14",
        img: room2,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Private Room"
    },

    {
        _id: "15",
        img: room3,
        name: "Room 7 in Casa Monteiro II",
        price: "200",
        location: "R. Damasceno Monteiro, 1170 Lisboa",
        Distance: "12",
        type: "Apartment"
    },

];

const Search_section = () => {
    return (
        <div className="search-section">
            <div className="filter-panel">
                <Filter />
            </div>
            <div className="card-show">
                <h2 className="total">Total Rooms: {room.length}</h2>
                <div className="show-result">
                    {room.map((items, index) => (
                        <div className="result" key={index}>
                            <Card
                                id={items._id}
                                img={items.img}
                                name={items.name}
                                price={items.price}
                                location={items.location}
                                distance={items.Distance}
                                type={items.type}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search_section;
