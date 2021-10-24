import React from 'react';
import './Review.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import Image1 from '../../Images/ProfileM.jfif';
import Image2 from '../../Images/ProfileF.jfif';

AOS.init();

const Review = () => {
    return (
        <section className="container my-5">
            {/* Ttitle */}
            <p className="
                fw-bold 
                fs-3 
                text-center">
                CLIENT TESTIMONIALS
            </p>
            {/* Sub title */}
            <p className="
                fs-5 
                fst-italic 
                text-center">
                What clients say about us
            </p>
            {/* CSS Design */}
            <div className="
                d-flex 
                justify-content-center">
                <div>
                    <div className="Style1"></div>
                    <div className="Style2"></div>
                </div>
            </div>
            {/* Cards start */}
            {/* Card1 */}
            <div
                className="row my-5"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
            >
                {/* Card1 Image */}
                <div className="col-md-3">
                    <img
                        className="w-100 h-100"
                        src={Image1}
                        alt=""
                    />
                </div>
                {/* Card1 Information */}
                <div
                    className="
                        col-md-9 
                        mt-5 
                        py-5 
                        shadow-sm 
                        h-50"
                >
                    <p className="pt-3">
                        "I’ve never received so many candidates from one vendor that have made it through the interview stage in such a short time."
                    </p>
                    <p>
                        <b>EVAN LERMAN</b>
                        Director of Recruiting, Interactive Brokers, LLC
                    </p>
                </div>
            </div>
            {/* Card 2 */}
            <div
                className="row my-5"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
            >
                <div
                    className="
                        col-md-9 
                        mt-5 
                        py-5 
                        shadow-sm h-50"
                >
                    {/* Card2 Information */}
                    <p className="pt-3">
                        "I'm always looking for the best talent to work for our organization. With Steadfast's crowdsourcing capabilities, I am able to find the right people before they're even looking."
                    </p>
                    <p>
                        <b>Keith E. Stecher</b>
                        Director of Human Resources, SB International, Inc.
                    </p>
                </div>
                {/* Card2 Image */}
                <div className="col-md-3">
                    <img
                        className="w-100 h-100"
                        src={Image1}
                        alt=""
                    />
                </div>
            </div>
            {/* Card 3 */}
            <div
                className="row my-5"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
            >
                {/* Card3 Image */}
                <div className="col-md-3">
                    <img
                        className="w-100 h-100"
                        src={Image2}
                        alt=""
                    />
                </div>
                {/* Card3 Information */}
                <div
                    className="
                        col-md-9 
                        mt-5 
                        py-5 
                        shadow-sm 
                        h-50"
                >
                    <p className="pt-3">
                        "Recruiting a Mumps Developer through Steadfast ltd. was a breeze and I saved more than $6,000 on recruiting costs!."
                    </p>
                    <p>
                        <b>Rochelle Simkins</b>
                        Sr. Talent Acquisition Consultant, New Century Health.
                    </p>
                </div>
            </div>
            {/* Cards end */}
        </section>
    );
};

export default Review;