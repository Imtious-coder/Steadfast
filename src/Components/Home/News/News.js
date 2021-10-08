import React from 'react';
import './News.css';
import Image1 from '../../Images/E1.png'
import Image2 from '../../Images/E2.png'
import Image3 from '../../Images/E3.jpg'
import Image4 from '../../Images/E4.png'
import Image5 from '../../Images/E5.png'
import Image6 from '../../Images/E6.png'
import Image7 from '../../Images/E7.jpg'
import Image8 from '../../Images/E8.png'

const News = () => {
    return (
        <section className="container py-5">
            <p className="text-center fw-bold fs-3">REFLIK IN THE NEWS</p>
            <p className="text-center fs-5 fst-italic"> See where Reflik's been featured</p>
            <div className="d-flex justify-content-center mb-5">
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

export default News;