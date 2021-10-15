import React from 'react';
import RecruiterVideo from '../Shared/RecruiterVideo/RecruiterVideo';
import './Recruiters.css';

import Image1 from '../Images/R1.png'
import Image2 from '../Images/R2.png'
import Image3 from '../Images/R3.png'
import Image4 from '../Images/R4.png'
import SocialIcon from '../Shared/SocialIcon/SocialIcon';
import Footer from '../Shared/Footer/Footer';

const Recruiters = () => {
    return (
        <>
            <section className="RecruiterBanner">
                {/* Banner Part starts */}
                <div className="RecruiterBannerContent">
                    <div>
                        <p className="RecruiterBannerTitle">HELPING INDEPENDENT RECRUITERS AND AGENCIES</p>
                        <p className="RecruiterBannerDescription">EARN MORE IN PLACEMENT FEES</p>
                        <div className="RecruiterBannerButton">
                            <button className="RecruiterBannerButton1">Sign up!</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Video */}
            <RecruiterVideo />
            {/* Recruiters Help Section */}
            <section className="container">
                {/* Title */}
                <p className="PartnerHeading">SEE HOW REFLIK HELPS YOU SUCCEED</p>
                {/* Subtitle */}
                <p className="PartnerSubHeading"> Plus, it's free to join!</p>
                {/* Design */}
                <div className="d-flex justify-content-center pb-5">
                    <div>
                        <div className="Style1"></div>
                        <div className="Style2"></div>
                    </div>
                </div>
                {/* Cards */}
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3 mb-5">
                            <img className="RecruiterHelpCardImages" src={Image1} alt=""></img>
                            <p className="RecruiterHelpCardTitle">Make more money</p>
                            <p className="RecruiterHelpCardButton">Learn more</p>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <img className="RecruiterHelpCardImages" src={Image2} alt=""></img>
                            <p className="RecruiterHelpCardTitle">Be your own boss</p>
                            <p className="RecruiterHelpCardButton">Learn more</p>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <img className="RecruiterHelpCardImages" src={Image3} alt=""></img>
                            <p className="RecruiterHelpCardTitle">No hassle recruiting</p>
                            <p className="RecruiterHelpCardButton">Learn more</p>
                        </div>
                        <div className="col-6 col-md-3 mb-5">
                            <img className="RecruiterHelpCardImages" src={Image4} alt=""></img>
                            <p className="RecruiterHelpCardTitle">easy to use platform</p>
                            <p className="RecruiterHelpCardButton">Learn more</p>
                        </div>
                    </div>
                </div>
                {/* Info */}
                <div className="py-5">
                    <p className="RecruiterHelpInfoTitle mt-5">Recruiters earn on average $10,000 placement fee per successful hire</p>
                    <p className="RecruiterHelpInfoDescription mt-2 mb-5">As a Reflik recruiter, you have access to hundreds of open positions that would have been difficult for you to get access to. You can start referring qualified candidates immediately. No need to wait for companies to approve you as a vendor.</p>
                </div>
            </section>
            <SocialIcon />
            <Footer />
        </>
    );
};

export default Recruiters;