import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarTab from './NavbarTab';

const HomeStation = () => {
    return (
        <div>
            <NavbarTab />
            <Outlet />

            
        </div>
    );
};

export default HomeStation;