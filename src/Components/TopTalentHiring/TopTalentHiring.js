import React from 'react';
import Styles from './TopTalentHiring.module.css';
import Footer from '../Shared/Footer/Footer';
import SocialIcon from '../Shared/SocialIcon/SocialIcon';
// Images
import Image1 from '../Images/ProfileF.jfif';
import Image2 from '../Images/ProfileM.jfif';
// Fontawesome
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopTalentHiring = () => {
    return (
        <>
            <section className="container my-5">
                {/* Title */}
                <p className="fs-1">Steadfast Reviews – How Employers Unlock Talent Acquisition Success</p>
                {/* Top section start */}
                <div className="container py-3">
                    <div className="row px-5">
                        {/* Left side */}
                        <div className="col-md-6 shadow rounded p-5">
                            <p className="fs-1 fw-bold">6 Talent Acquisition Leaders Talk About Why Crowdsourcing  Works </p>
                            <p className="fs-5">Here's a collection of success stories about talent acquisition leaders across industries, who have had unparalleled success in acquiring top talent with Steadfast.</p>
                        </div>
                        <div className="col-md-1"></div>
                        {/* Right side */}
                        <div className="col-md-5 mt-5">
                            <p className="fs-5 fw-bold">Hear from HR, Talent Acquisition, and Recruiting directors in the following industries:</p>
                            <p className="fs-5 fw-bold"><FontAwesomeIcon icon={faArrowCircleRight} /> Financial Services</p>
                            <p className="fs-5 fw-bold"><FontAwesomeIcon icon={faArrowCircleRight} /> Telecommunications</p>
                            <p className="fs-5 fw-bold"><FontAwesomeIcon icon={faArrowCircleRight} /> Manufacturing</p>
                            <p className="fs-5 fw-bold"><FontAwesomeIcon icon={faArrowCircleRight} /> Technology</p>
                            <p className="fs-5 fw-bold"><FontAwesomeIcon icon={faArrowCircleRight} /> Engineering</p>
                            <p className="fs-5 fw-bold"><FontAwesomeIcon icon={faArrowCircleRight} /> And More...</p>
                            {/* Grab button */}
                            <button className={`${Styles.GrabButton} mt-3`}>Grab your copy right now!</button>
                        </div>
                    </div>
                </div>
                {/* Top section end */}
                {/* Story start */}
                <div className={Styles.Stories}>
                    <p>Glimpse into the stories...</p>
                </div>
                {/* Stories cards */}
                <div className="container">
                    <div className="row">
                        {/* Card1 */}
                        <div className="d-flex col-md-6">
                            {/* Image */}
                            <img className={Styles.StoryCardImage} src={Image2} alt="" />
                            {/* Content */}
                            <div className="mx-5 mt-3">
                                <p>"What made me go with Reflik was their...centralized platform."</p>
                                <p className="fw-bold">Evan Lerman, Director of Recruiting Interactive Brokers </p>
                            </div>
                        </div>
                        {/* Card2 */}
                        <div className="d-flex col-md-6">
                            {/* Image */}
                            <img className={Styles.StoryCardImage} src={Image1} alt="" />
                            {/* Content */}
                            <div className="mx-5 mt-3">
                                <p>“With Reflik, we have access to many recruiters without having to manage any of them.”</p>
                                <p className="fw-bold">Melanie Shellhorn, HR Director Comodo  </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Story ends */}
            </section>
            <SocialIcon />
            <Footer />
        </>
    );
};

export default TopTalentHiring;