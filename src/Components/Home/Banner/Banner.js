import React from 'react';
import './Banner.css';

import Image2 from '../../Images/download.jfif';
import Image1 from '../../Images/istockphoto-1299152059-170667a.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Banner = () => {
    return (
        <section
            className="Banner"
            data-aos="fade-up"
        >
            <div
                id="carouselExampleControls"
                class="carousel slide w-100"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    {/* Slide 1 */}
                    <div class="carousel-item active">
                        {/* Image */}
                        <img
                            src={Image1}
                            class="d-block w-100 image"
                            alt="..."
                        />
                        {/* Content */}
                        <div
                            className="SliderContent"
                            data-aos="zoom-in"
                        >
                            <div>
                                <p className="SliderTitle">
                                    HARNESS THE POWER OF THE CROWD
                                </p>
                                <p className="SliderDescription">
                                    TO FILL JOB OPENINGS
                                </p>
                                {/* Buttons */}
                                <div className="SliderButtons">
                                    <button className="SliderButton1">
                                        Watch a demo
                                    </button>
                                    <button className="SliderButton2">
                                        Discover more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div class="carousel-item">
                        {/* Image */}
                        <img
                            src={Image2}
                            class="d-block w-100 image"
                            alt="..."
                        />
                        {/* Content */}
                        <div
                            className="SliderContent"
                            data-aos="zoom-in"
                        >
                            <div>
                                <p className="SliderTitle">
                                    TALENT ACQUISITION SOLUTION TO HELP YOU
                                </p>
                                <p className="SliderDescription">
                                    HIRE THE MOST QUALIFIED CANDIDATES
                                </p>
                                {/* Buttons */}
                                <div className="SliderButtons">
                                    <button className="SliderButton1">
                                        Watch a demo
                                    </button>
                                    <button className="SliderButton2">
                                        Discover more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Before After buttons */}
                <button
                    class="carousel-control-prev" t
                    ype="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">
                        Previous
                    </span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">
                        Next
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Banner;