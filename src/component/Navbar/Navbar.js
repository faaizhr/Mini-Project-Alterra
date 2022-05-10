import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    let scrollNavbar;

    window.onscroll = () => {scrollNavbar()};

    scrollNavbar = () => {
        // Target elements
        const navBar = document.getElementById("navBar");
        const links = document.querySelectorAll("#navBar a");

        if (document.documentElement.scrollTop > 100) {
            navBar.classList.add("pa-fixed-header");

            // Change the color of links on scroll
            for (let i = 0; i < links.length; i++) {
                const element = links[i];
                element.classList.remove('text-white');
                element.classList.add('text-black');
            }

        } else {
            navBar.classList.remove("pa-fixed-header");
            
            // Change the color of links back to default
            for (let i = 0; i < links.length; i++) {
                const element = links[i];
                element.classList.remove('text-black');
                element.classList.add('text-white');
            }
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top navbarCustom" id="navBar">
            <div className="container">
                <a className="navbar-brand" href="#">YOMU</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link me-3" aria-current="page" to="/home">Home</Link>
                    <Link className="nav-link me-3" to="/comics">Comics</Link>
                    <Link className="nav-link me-3" to="/genres">Genres</Link>
                    <a className="nav-link" href="#">About Us</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;