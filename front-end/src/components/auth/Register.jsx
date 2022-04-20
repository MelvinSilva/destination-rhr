import React from 'react';

const Register = () => {
    return (
        <div className="auth">
            <div className="register">
                <video id="background-video" autoPlay loop muted>

                    <source src="./images/production ID_4789847.mp4" type="video/mp4" />

                </video>
                <div className="card-auth">
                    <form>
                        <input type="text" placeholder='Numéro de CP*' />
                        <input type="text" placeholder='Nom*' />
                        <input type="text" placeholder='Prénom*' />
                        <input type="email" placeholder='Email*' />
                        <input type="password" placeholder='Mot de passe*' />
                        <input type="password" placeholder='Confirmation mot de passe*' />
                        <button className='btn' type="submit">VALIDER</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Register;