import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = function() {



return (

    <div className= "Header">
        <div className="logoname">
            <div><img id='logo' src="https://image.flaticon.com/icons/svg/53/53933.svg" alt="logo"/></div>
            <div><h1 id= 'title'>SHELFIE</h1></div>
        </div>
        
        <nav className= "links">
             <button className="header_button">   <Link to= "/" className="header-link">Dashboard</Link> </button>
             <button className="header_button"> <Link to="/add" className="header-link">Add Inventory</Link> </button>
        </nav>
       
   
    </div>

    )

};

export default Header;