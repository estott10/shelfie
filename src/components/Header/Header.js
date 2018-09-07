import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = function() {



return (

    <div className= "Header">
        <div className="logoname">
            <img id='logo' src="http://bestbuy.com" alt="logo"/>
            <h1 id= 'title'>SHELFIE</h1>
        </div>
        <div>
            <nav className= "links">
                <Link to= "/" className="header-link">Dashboard</Link>
                <Link to="/add" className="header-link">Add Inventory</Link>
            </nav>
        </div>
   
    </div>

    )

};

export default Header;