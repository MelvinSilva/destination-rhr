import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <a href='/'><img className="logo" src="/images/logo.png" alt="logo" /></a>
            <h1>DESTINATION RHR</h1>
            <img className="logo-sncf" src="/images/logosncf.png" alt="logo-sncf" />
        </div>
    );
};

export default Header;