import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign_Up.css";

const Sign_Up = () => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Sign-up successful!");
        navigate("/login");
    };

    return (
        <div className="container" style={{ marginTop: "5%" }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: "left" }}>
                    Already a member? <span><a href="/login" style={{ color: "#2190FF" }}>Login</a></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={form.password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <button type="reset" className="btn btn-danger">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;