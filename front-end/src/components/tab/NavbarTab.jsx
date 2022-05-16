import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';
import { IoBedOutline, IoRestaurantOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavbarTab = () => {
    return (
        <div className='navbar-tab'>
            <div className="tab-return">
<<<<<<< HEAD
                <Link to="/home/choicestation"><BsHouseDoorFill />&nbsp;accueil</Link>
=======
                <Link to="/home/choice-station"><BsHouseDoorFill />&nbsp;accueil</Link>
>>>>>>> e5cb852bb7005c1e92aa2da956f3a3e75761db63
            </div>
            <div className="tab">
                <NavLink to="accomodation" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    <IoBedOutline /> &nbsp;couchage
                </NavLink>
            </div>
            <div className="tab">
                <NavLink to="eat" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    <IoRestaurantOutline /> &nbsp;se restaurer
                </NavLink>
            </div>
            <div className="tab">
                <NavLink to="store" className={({ isActive }) =>
                    "tab" + (isActive ? "--active" : "")}>
                    <AiOutlineShoppingCart /> &nbsp;shopping
                </NavLink>
            </div>


        </div>
    );
};

export default NavbarTab;