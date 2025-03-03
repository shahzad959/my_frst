import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, appointmentDate, appointmentTime });
        setName('');
        setPhoneNumber('');
        setAppointmentDate('');
        setAppointmentTime('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <h2>Book an Appointment</h2>
            <p>Doctor: {doctorName} ({doctorSpeciality})</p>
            <div className="form-group">
                <label htmlFor="name">Patient Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input
                    type="date"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="appointmentTime">Appointment Time:</label>
                <input
                    type="time"
                    id="appointmentTime"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm;
