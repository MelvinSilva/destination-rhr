import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavbarTab = () => {
    return (
        <div className='navbar-tab'>
            <div className="tab-return">
                <Link className="fas fa-home" to="/home/choicestation"></Link>
            </div>
            <div className="tab">
                <NavLink to="accomodation" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    ⏾ Couchage
                </NavLink>
            </div>
            <div className="tab fas fa-house">
                <NavLink to="eat" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    🍽 Se restaurer
                </NavLink>
            </div>
            <div className="tab">
                <NavLink to="store" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    🛒 Shopping
                </NavLink>
            </div>


        </div>
    );
};

export default NavbarTab;