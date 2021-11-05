import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom"

function NavBar() {

    return(
    <>
        <div className="navBarPositionFixed textColor">
            <div className="navBarFlexCenter">
                
                <NavLink exact to="/" className="Links">
                <h6>Projects</h6>
                </NavLink>    
                <NavLink exact to="/about" className="Links">
                    <h6>About me</h6>
                </NavLink>
                
                
            </div>
        </div>
    </>
    )


}

export default NavBar; 