import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    const storedCancellation = sessionStorage.getItem('appointmentCancelled');

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }

    if (storedCancellation === 'true') {
      setShowNotification(false);
    }
  }, []);

  const handleCancelAppointment = () => {
    sessionStorage.setItem('appointmentCancelled', 'true');
    setShowNotification(false);
  };

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p><strong>User:</strong> {username}</p>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Date:</strong> {appointmentData?.date}</p>
            <p><strong>Time:</strong> {appointmentData?.time}</p>
            <button className="cancel-button" onClick={handleCancelAppointment}>Cancel Appointment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
