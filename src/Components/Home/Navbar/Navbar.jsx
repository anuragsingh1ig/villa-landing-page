import React, { useEffect, useRef, useState } from 'react'
import "./navbar.css"

const Navbar = () => {
    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const offset = headerRef.current.offsetTop;
                if (window.scrollY > offset) {
                    setIsSticky(true);
                    headerRef.current.style.padding = "10px 5%"
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='navbar-container'>
            <div className="nav-container">
                <ul className="contact-links">
                    <li><i className="fa-solid fa-envelope icon-colors"></i> info@company.com</li>
                    <li><i className="fa-solid fa-map icon-colors"></i>Sunny Isles Beach, FL 33160</li>
                </ul>

                <ul className="social-links">
                    <li><a href="#"><i className="fab fa-facebook  icon-colors-active"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter icon-colors-active"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin icon-colors-active"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram icon-colors-active"></i></a></li>
                </ul>
            </div>

            <header ref={headerRef} className={isSticky ? "header-container sticky" : "header-container"}>
                <nav>
                    <a href="#" className='no-hover'>
                        <h2>VILLA</h2>
                    </a>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Properties</a></li>
                        <li><a href="#">Property Details</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li className='calendar'><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar