import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindDoctorSearch.css';

const specialities = [
    'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 'Dermatologist', 'ENT Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
    const [searchDoctor, setSearchDoctor] = useState('');
    const [showSpecialities, setShowSpecialities] = useState(false);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setShowSpecialities(false);
        navigate(`/instant-consultation?speciality=${speciality}`);
    };

    return (
        <div className='find-doctor-search'>
            <h1>Find a Doctor</h1>
            <div className='search-container'>
                <input 
                    type='text' 
                    className='search-input' 
                    placeholder='Search for a doctor by specialty...'
                    value={searchDoctor} 
                    onChange={(e) => setSearchDoctor(e.target.value)}
                    onFocus={() => setShowSpecialities(true)} 
                    onBlur={() => setTimeout(() => setShowSpecialities(false), 200)}
                />
                {showSpecialities && (
                    <div className='search-results'>
                        {specialities.filter(spec => spec.toLowerCase().includes(searchDoctor.toLowerCase()))
                            .map((speciality) => (
                                <div 
                                    key={speciality} 
                                    className='search-item' 
                                    onMouseDown={() => handleDoctorSelect(speciality)}
                                >
                                    {speciality}
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindDoctorSearch;