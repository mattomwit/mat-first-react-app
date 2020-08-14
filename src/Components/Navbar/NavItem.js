import React from 'react';
import { NavLink } from "react-router-dom";

function NavItem(props){
    return(
        <li className="nav-item">
            <NavLink activeClassName={props.activeClass} className="nav-link" aria-current="page" to={props.to}>{props.to}</NavLink>
        </li>
    );
}

export default NavItem;