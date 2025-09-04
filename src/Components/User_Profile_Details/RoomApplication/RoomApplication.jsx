import React from 'react'
import "./RoomApplication.css";
import image1 from "../../../assets/room_1.jpg";
import image2 from "../../../assets/room_2.jpg";
import image3 from "../../../assets/room_3.jpg";
import image4 from "../../../assets/room_4.jpg";


const room_details = [
    {
        id: "1",
        image: image1,
        price: "30000",
        landload_Name: "Aniket Pundir",
        Booking_Date: "03/09/2025",
        property_type: "Room",
        waiting_approval: "Pending",
    },
    {
        id: "2",
        image: image2,
        price: "30000",
        landload_Name: "Aniket Pundir",
        Booking_Date: "03/09/2025",
        property_type: "Room",
        waiting_approval: "Pending",
    },
    {
        id: "3",
        image: image3,
        price: "30000",
        landload_Name: "Aniket Pundir",
        Booking_Date: "03/09/2025",
        property_type: "Room",
        waiting_approval: "Pending",
    },
    {
        id: "4",
        image: image4,
        price: "30000",
        landload_Name: "Aniket Pundir",
        Booking_Date: "03/09/2025",
        property_type: "Room",
        waiting_approval: "Pending",
    },
]

// console.log(room_details);

const RoomApplication = () => {
    return (
        <>
            <div className='booked-room-details'>
                <div className='booked-room-details'>
                    <div className='section-title'>
                        <h1>Your Booked Property</h1>
                        <hr />
                    </div>
                    <div className='booked-room-list-details'>
                        <div className='booked-room-list-details-title'>
                            <ul>
                                <li>Room</li>
                                <li>Type</li>
                                <li>Price</li>
                                <li>Landload</li>
                                <li>Booking Date</li>
                                <li>Waiting Aprove</li>
                            </ul>
                            <hr />
                        </div>
                        <div className='items-list'>
                            {
                                room_details.map((items, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='items-lists' key={items.id}>
                                                <img src={items.image} alt='Proper Image' />
                                                <p>{items.property_type}</p>
                                                <p>{items.price}</p>
                                                <p>{items.landload_Name}</p>
                                                <p>{items.Booking_Date}</p>
                                                <p>Approval- {items.waiting_approval}</p>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomApplication