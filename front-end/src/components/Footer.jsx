import React, { useContext } from 'react';
import AuthTokenContext from './context/AuthTokenContext';

<<<<<<< HEAD
function Footer() {
  return (
    <div className="footer">
      <div className="infos-footer">
        <p>@Destination RHR by Jean-Mi, Fred, Steph & Melvin</p>
        <p>Contact - Administration</p>
      </div>
    </div>
  );
}

export default Footer;
=======
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
>>>>>>> 5036116e349f92ddfb290e013c09d7c233bf321f
