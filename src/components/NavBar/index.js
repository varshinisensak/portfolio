import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import ima from './../../images/ima.webp'

const NavBar = () => {
    const [state, setState] = useState(false);
    const [screen, setScreen] = useState(0);
    const location = useLocation();

    const trackscreen = () => {
        const width = window.innerWidth;
        setScreen(width);
        if (width > 600) {
            setState(true);
        }
    };

    const handleClose = () => {
        if (screen < 600) {
            setState(false);
        }
    };

    useEffect(() => {
        trackscreen();
        window.addEventListener("resize", trackscreen);
        return () => window.removeEventListener("resize", trackscreen);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img
                            src={ima}
                            alt="brand"
                        />
                    </Link>
                </div>
                <div className="list-wrapper">
                    <img
                        src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
                        alt="Menu bars"
                        style={{ opacity: !state ? 1 : 0 }}
                        onClick={() => {
                            setState(!state);
                        }}
                    />
                    <img
                        src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
                        alt="Menu cross"
                        style={{ opacity: state ? 1 : 0 }}
                        onClick={() => {
                            setState(!state);
                        }}
                    />

                    <ul style={{ left: state ? "0" : "-100vw" }}>
                        <li>
                            <Link
                                to="/"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/" && "#4071f4" }}
                            >
                                Home
              </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/about" && "#4071f4" }}
                            >
                                About
              </Link>
                        </li>
                        <li>
                            <Link
                                to="/skills"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/skills" && "#4071f4" }}
                            >
                                Skills
              </Link>
                        </li>
                        <li>
                            <Link
                                to="/works"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/works" && "#4071f4" }}
                            >
                                Works
              </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/contact" && "#4071f4" }}
                            >
                                Contact
              </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;