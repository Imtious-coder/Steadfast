import React from 'react';
import './Banner.css';
import i from '../../Images/download.jfif';
import i2 from '../../Images/istockphoto-1299152059-170667a.jpg';

const Banner = () => {
    return (
        <section className="Banner">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={i2} class="d-block w-100 image" alt="..." />
                        <div className="SliderContent">
                            <div>
                                <p className="SliderTitle">HARNESS THE POWER OF THE CROWD</p>
                                <p className="SliderDescription">TO FILL JOB OPENINGS</p>
                                <div className="SliderButtons">
                                    <button className="SliderButton1">Watch a demo</button>
                                    <button className="SliderButton2">Discover more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={i} class="d-block w-100 image" alt="..." />
                        <div className="SliderContent">
                            <div>
                                <p className="SliderTitle">TALENT ACQUISITION SOLUTION TO HELP YOU</p>
                                <p className="SliderDescription">HIRE THE MOST QUALIFIED CANDIDATES</p>
                                <div className="SliderButtons">
                                    <button className="SliderButton1">Watch a demo</button>
                                    <button className="SliderButton2">Discover more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Banner;