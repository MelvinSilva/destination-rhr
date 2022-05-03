import React from 'react';

const Accomodation = () => {
    return (
        <div className="accomodation">
            <div className="container-left">
                <div className="map">
                    <h2>Maps</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21132.28412833883!2d2.637735875122883!3d48.54213257248209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5fa64b0617d79%3A0xc7b890eb02e993a!2s%C3%89glise%20Saint-Aspais%20de%20Melun!5e0!3m2!1sfr!2sfr!4v1651498046192!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="change-services">
                    <button className="btn">Mettre à jour les services</button>
                    <button className="btn btn--red">Supprimer la fiche (admin)</button>
                </div>

            </div>
            <div className="container-center">
                <div className="info-accomodation">
                </div>
            </div>
            <div className="container-right">
                <div className="services-accomodation">
                </div>
            </div>
        </div >
    );
};

export default Accomodation;