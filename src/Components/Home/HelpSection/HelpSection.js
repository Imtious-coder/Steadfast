import React from 'react';
import './HelpSection.css';

// Images
import Image1 from '../../Images/D1.png'
import Image2 from '../../Images/D2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HelpSection = () => {
    return (
        <section
            className="
                container 
                mt-5 
                mb-5 
                text-center"
        >
            {/* Title */}
            <p className="fw-bold fs-3">
                TALENT CROWDSOURCING TO HELP YOU RECRUIT
            </p>
            {/* Subtitle */}
            <p className="fs-5 fst-italic">
                Bringing recruiters & employers together through crowdsourcing
            </p>
            {/* Design */}
            <div
                className="
                    d-flex 
                    justify-content-center"
            >
                <div>
                    <div className="Style1"></div>
                    <div className="Style2"></div>
                </div>
            </div>
            {/* Cards */}
            <div className="row py-5">
                {/* card 1 */}
                <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <img
                        className="HelpSectionImage1"
                        src={Image1}
                        alt=""
                    />
                    <p className="fw-bold">
                        EMPLOYERS
                    </p>
                    <p
                        className="
                            text-secondary 
                            fs-6">
                        The 10 most qualified candidates in less than 10 days!
                    </p>
                    <small className="text-secondary">
                        Thousands of recruiters, a team of dedicated account managers, and a powerful algorithm to get you the 10 most qualified candidates in less than 10 days.
                    </small>
                    <br />
                    {/* Learn more button */}
                    <button className="HelpSectionButton">
                        Learn more
                    </button>
                </div>
                {/* Card2 */}
                <div
                    className="col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    <img
                        className="HelpSectionImage2"
                        src={Image2}
                        alt=""
                    />
                    <p className="fw-bold mt-5">
                        RECRUITERS
                    </p>
                    <p className="text-secondary">
                        Earn more placement fees.
                    </p>
                    <small className="text-secondary">
                        Just sign in, choose the jobs you want to work on, and start recruiting. Earn placement fees for each successful hire. It???s simple.
                    </small>
                    <br />
                    {/* Learn more button */}
                    <button className="HelpSectionButton">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;