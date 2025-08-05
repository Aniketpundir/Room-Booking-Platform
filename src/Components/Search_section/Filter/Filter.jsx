import React, { useState } from 'react';
import "./Filter.css";

const Filter = () => {
    const [formData, setFormData] = useState({
        min: '',
        max: '',
        roomType: '',
        facility: [] // now an array
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "facility") {
            setFormData((prev) => {
                let updatedFacilities = [...prev.facility];
                if (checked) {
                    updatedFacilities.push(value);
                } else {
                    updatedFacilities = updatedFacilities.filter(f => f !== value);
                }
                return { ...prev, facility: updatedFacilities };
            });
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    console.log(formData);

    return (
        <div className='filter'>
            <div className='filter-content'>
                <form /*onSubmit={handleSubmit}*/>
                    <div className='budget-content'>
                        <p>Budget</p>
                        <div className='budget'>
                            <input placeholder='Min' type='number' name='min' value={formData.min} onChange={handleChange} />
                            <input placeholder='Max' type='number' name='max' value={formData.max} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='Room-type'>
                        <p>Room Type</p>
                        <div className='Room'>
                            <label>
                                <input type='checkbox' name='roomType' value="Studio" checked={formData.roomType === 'Studio'} onChange={handleChange} /> Studio
                            </label>
                            <label>
                                <input type='checkbox' name='roomType' value="Private Room" checked={formData.roomType === 'Private Room'} onChange={handleChange} /> Private Room
                            </label>
                            <label>
                                <input type='checkbox' name='roomType' value="Apartment" checked={formData.roomType === 'Apartment'} onChange={handleChange} /> Apartment
                            </label>
                        </div>
                    </div>

                    <div className='facility-type'>
                        <p>Facility</p>
                        <div className='facility'>
                            {["Heating", "Air conditioning", "Dryer", "Washing Machine", "Private bathroom"].map((item) => (
                                <label key={item}>
                                    <input
                                        type='checkbox'
                                        name='facility'
                                        value={item}
                                        checked={formData.facility.includes(item)}
                                        onChange={handleChange}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button className='search-button' type='submit'>Apply Filter</button>
                </form>
            </div>
            <hr/>
        </div>
    );
};

export default Filter;
