import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavbarTab = () => {
    return (
        <div className='navbar-tab'>
            <div className="tab-return">
                <Link to="/home/choicestation">🏠 accueil</Link>
            </div>
            <div className="tab">
                <NavLink to="accomodation" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    ⏾ couchage
                </NavLink>
            </div>
            <div className="tab">
                <NavLink to="eat" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    🍽 se restaurer
                </NavLink>
            </div>
            <div className="tab">
                <NavLink to="store" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    🛒 shopping
                </NavLink>
            </div>


        </div>
    );
};

export default NavbarTab;