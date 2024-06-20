import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists in the same directory

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Navbar;
