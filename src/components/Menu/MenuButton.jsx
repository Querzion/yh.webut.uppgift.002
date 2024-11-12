import React, {useState } from 'react'
import { Link } from "react-router-dom";


const MenuButton = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
        // Help from ChatGPT with prevState
        setShowMenu(prevState => !prevState);
    };

    return (
        <div>
            
            <button className="btn-mobile clickable" title="Menu" onClick={toggleMenu} aria-label="menu button">
                <i className="fa-solid fa-bars"></i>
            </button>

            {showMenu && (
                <div className="menu-box">
                    <ul className="f600 h4"> 
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/#features" onClick={toggleMenu}>Features</Link></li>
                        <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}

        </div>
    )
}

export default MenuButton