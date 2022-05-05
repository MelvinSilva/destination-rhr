import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarTab from './NavbarTab';

const CityInfos = () => {
    return (
        <div>
            <NavbarTab />
            <Outlet />

            
        </div>
    );
};

export default CityInfos;