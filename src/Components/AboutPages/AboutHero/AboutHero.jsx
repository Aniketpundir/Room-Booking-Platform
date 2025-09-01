import React from 'react'
import "./AboutHero.css";

const AboutHero = () => {
    return (
        <>
            <div className='about-hero'>
                <div className='about-hero-left' data-aos="fade-right">
                    <h4>About Us</h4>
                    <h2>
                        Erasmus Life Housing - your go-to hub for finding the perfect home for students, by students
                    </h2>
                </div>
                <div className='about-hero-right' data-aos="fade-left">
                    <p>
                        Whether you are coming to Lisbon for Erasmus, Exchange, Traineeship, Full Masters or Work we definitely have a Room, Studio or Apartment that suits your needs!
                    </p>
                    <p>
                        Our ultimate goal is to make Lisbon the number one destination for International Students and Young Workers, and we most surely don’t want that your experience finding accommodation to be a negative point of that experience!
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutHero