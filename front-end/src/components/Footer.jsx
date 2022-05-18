import React, { useContext } from 'react';
import AuthTokenContext from './context/AuthTokenContext';

const Footer = () => {
    const { token } = useContext(AuthTokenContext)
    
    return (
        <div className="footer">
            <div className="infos-footer">
                <p>@Destination RHR by Jean-Mi, Fred, Steph & Melvin</p>
                <p>Contact - Administration</p>
            </div>
        </div>
    );
};

export default Footer;