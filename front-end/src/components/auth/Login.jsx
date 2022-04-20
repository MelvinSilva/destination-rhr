import React from 'react';

const Login = () => {
    return (
        <div className="auth">
            <div className="login">
                <video id="background-video" autoPlay loop muted>

                    <source src="./images/production ID_4789847.mp4" type="video/mp4" />

                </video>
                <div className="card-auth">                   
                    <form>
                    <img src='./images/logo.png' alt='logo' />
                        <input type="text" placeholder='Numéro de CP*' />
                        <input type="password" placeholder='Mot de passe*' />
                        <p>Mot de passe oublié ?</p>
                        <button className="btn-login" type="submit">SE CONNECTER</button>
                        <p className="ligne_horizontal">&nbsp; OU &nbsp;</p>
                        <button className="btn">S'INSCRIRE</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;