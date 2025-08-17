import React from "react";
import '../styles.css';
export default function Footer() {
    var currentYear = new Date().getFullYear();
    return(
        <footer className='footer'>
            <p className='footer-text'>© {currentYear} Moviedux. All rights reserved.</p>
        </footer>
    );
}