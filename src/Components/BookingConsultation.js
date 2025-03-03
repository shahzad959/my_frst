import React, { useState } from 'react';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';
import './BookingConsultation.css';

const doctorsData = [
    { name: 'Dr. Smith', speciality: 'Dentist', experience: 10, ratings: 4.5, profilePic: '' },
    { name: 'Dr. Jane Doe', speciality: 'Dermatologist', experience: 8, ratings: 4.7, profilePic: '' },
];

const BookingConsultation = () => {
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const handleSearch = (searchText) => {
        if (!searchText) {
            setFilteredDoctors([]);
        } else {
            const filtered = doctorsData.filter(doctor =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
        }
    };

    return (
        <div className="booking-consultation-container">
            <FindDoctorSearch onSearch={handleSearch} />
            <div className="doctor-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => <DoctorCard key={doctor.name} {...doctor} />)
                ) : (
                    <p>No doctors found. Try searching for a specialty.</p>
                )}
            </div>
        </div>
    );
};

export default BookingConsultation;
