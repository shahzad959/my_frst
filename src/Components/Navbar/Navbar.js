import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const handleClick = () => setClick(!click);

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedEmail.split("@")[0]);
        }
    }, []);

    return (
        <nav>
            <div className="nav__logo"><Link to="/">StayHealthy</Link></div>
            <div className="nav__icon" onClick={handleClick}><i className={click ? "fa fa-times" : "fa fa-bars"}></i></div>
            <ul className={click ? "nav__links active" : "nav__links"}>
                <li className="link"><Link to="/landing-page">Home</Link></li>
                <li className="link"><Link to="/instant-consultation-booking">Appointments</Link></li>
                {isLoggedIn ? (
                    <>
                        <li className="link"><span className="username">Hi, {username}</span></li>
                        <li className="link"><button className="btn1" onClick={() => { setIsLoggedIn(false); setUsername(""); sessionStorage.clear(); }}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li className="link"><Link to="/signup"><button className="btn1">Sign Up</button></Link></li>
                        <li className="link"><Link to="/login"><button className="btn1">Login</button></Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
