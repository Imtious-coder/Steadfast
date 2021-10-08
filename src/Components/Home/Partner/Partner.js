import React from 'react';
import './Partner.css';
import Image1 from '../../Images/C1.png'
import Image2 from '../../Images/C2.jpg'
import Image3 from '../../Images/C3.png'
import Image4 from '../../Images/C4.jpg'
import Image5 from '../../Images/C5.jpg'
import Image6 from '../../Images/C6.png'
import Image7 from '../../Images/C7.png'
import Image8 from '../../Images/C8.jpg'

const Partner = () => {
    return (
        <section className="container py-5">
            <p className="PartnerHeading">THE TRUSTED TALENT ACQUISITION SOLUTION</p>
            <p className="PartnerSubHeading"> Steadfast provides stellar talent to 200+ top companies across the U.S.</p>
            <div className="d-flex justify-content-center pb-5">
                <div>
                    <div className="Style1"></div>
                    <div className="Style2"></div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image1} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image2} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image3} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image4} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image5} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image6} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image7} alt="" />
                    </div>
                    <div className="ImageCol col-6 col-md-3">
                        <img className="Images" src={Image8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;