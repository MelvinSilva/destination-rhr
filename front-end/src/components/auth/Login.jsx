import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <video id="background-video" autoPlay loop muted>

                <source src="./images/production ID_4789847.mp4" type="video/mp4" />

            </video>
            <div className="card-login">
                <img src='./images/logo.png' alt='logo' />
                <form>
                    <input type="text" placeholder='Numéro de CP*' />
                    <input type="password" placeholder='Mot de passe*' />
                    <p>Mot de passe oublié ?</p>
                    <button className='btn-login' type="submit">SE CONNECTER</button>
                    <span> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ OU ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
                    <button className='btn-register'>S'INSCRIRE</button>
                </form>
            </div>



        </div>
    );
};

export default Login;