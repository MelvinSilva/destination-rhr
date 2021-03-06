import React from 'react';
import { Outlet } from 'react-router-dom';

function Auth() {
  return (
    <div className="auth">
      <video id="background-video" autoPlay loop muted>
        <source src="/images/bg-video.webm" type="video/mp4" />
      </video>
      <Outlet />
    </div>
  );
}

export default Auth;
