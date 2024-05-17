import {Link} from "react-router-dom";
import  "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

function NavBar(){
    const navRef = useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav")
    }
    const divRef = useRef(null);

    const scrollToDiv = () => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <header className={"navbar-wrapper"}>
            <nav className={"navbar"} ref={navRef}>
                <Link to={'/'} style={{color:"#5F737B"}}>HOME</Link>
                <Link to={'/code'} style={{color:"#A2B3B2"}}>CODE</Link>
                <Link to={'/art'} style={{color:"#A53551"}}>ART</Link>
                {/*<Link style={{color:"#E18F89"}}>ABOUT ME</Link>
                <Link style={{color:"#E1C0A9"}}>CONTACTS & LINKS</Link>*/}
            </nav>
            <button className={"nav-btn"} onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>

    );
}

export default NavBar;