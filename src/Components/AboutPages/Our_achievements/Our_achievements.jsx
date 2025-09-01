import React from 'react'
import "./Our_achievements.css"
import img from "../../../assets/aboutimag.webp"
import Counting from "../../Counting/Counting";

const Our_achievements = () => {
    return (
        <>
            <div className='Our_achievements' data-aos="fade-up">
                <div className='Our_achievements_img' data-aos="fade-right">
                    <img src={img} alt='About Image' />
                </div>
                <div className='Our_achievements_text' data-aos="fade-left">
                    <h3>Our Achievements</h3>
                    <p>
                        Since 2025, our team has helped tons of students discover their ideal place. We’ve got a wide selection of student-friendly rooms, all built and managed just for you. Explore different neighborhoods, compare options, and make the right choice for a safe and inspiring home. Your journey is important, and the right housing sets the stage for a fantastic experience and personal growth.
                    </p>
                    <Counting />
                </div>
            </div>
        </>
    )
}

export default Our_achievements