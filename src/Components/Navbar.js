import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function NavBar() {
    const [scrolled, setScrolled] = useState(false); // To track if scrolled
    // Handle scroll to change navbar background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // You can adjust the value as per your needs
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/code" >SOFTWARE</Link>
                <Link to="/games">GAMES</Link>
                <Link to="/art" >ART</Link>
                <Link to="/about-me" >ABOUT ME</Link>
            </nav>
        </header>
    );
}

export default NavBar;
