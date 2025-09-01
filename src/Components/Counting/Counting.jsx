import React from 'react'
import "./Counting.css"

const counting = [
    {
        id: 1,
        Number: "4235",
        type: "Room",
    },
    {
        id: 2,
        Number: "535",
        type: "Reservation",
    },
    {
        id: 1,
        Number: "19905",
        type: "Students",
    },
];

const Counting = () => {
    return (
        <>
            <div className="header-digits">
                {counting.map((items, index) => {
                    return (
                        <div key={index} className="counting">
                            <h1>
                                {items.Number}
                                <span>+</span>
                            </h1>
                            <p>{items.type}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Counting