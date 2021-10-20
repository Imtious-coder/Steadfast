import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLock, faShieldAlt, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import SocialIcon from '../../Shared/SocialIcon/SocialIcon';
import './SignUpStart.css';

const SignUpStart = () => {
    return (
        <>
            <section className="container SignUpStart my-4">
                <section>
                    <div>
                        <p className="SignUpStartHeading">Join the industry's premier Talent Crowdsourcing Platform</p>
                        <p className="SignUpStartSubHeading">To join Steadfast, sign up below...it's free to join!</p>
                        <p className="SignUpStartDescription">Hiring employees? Click “Create Employer Account.” <br />
                            If you are an independent recruiter or represent a recruiting agency, click “Create Recruiter Account.”
                        </p>
                    </div>
                    <div className="SignUpStartCards container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-12 col-md-4 mt-5 SignUpStartRecruiterCards">
                                <p className="fs-3 text-center pt-5">Recruiters</p>
                                <p className="fs-6 text-center">Earn More Money</p>
                                <p className="fs-6 text-center pt-4">Sign Up with</p>
                                <p className="fs-3 text-center pb-3 text-danger"><FontAwesomeIcon icon={faGoogle} /></p>
                                <p className="fs-6 text-center pb-3">or</p>
                                <Link to="/signUpForm">
                                    <button className="SignUpStartRecruiterCardsButton mb-5">Create Recruiter Account</button>
                                </Link>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-12 col-md-4 mt-5 SignUpStartRecruiterCards">
                                <p className="fs-3 text-center pt-5">Employer/HR</p>
                                <p className="fs-6 text-center">Hire Top Talent</p>
                                <p className="fs-6 text-center pt-4">Sign Up with</p>
                                <p className="fs-3 text-center pb-3 text-danger"><FontAwesomeIcon icon={faGoogle} /></p>
                                <p className="fs-6 text-center pb-3">or</p>
                                <Link to="/signUpForm">
                                    <button className="SignUpStartRecruiterCardsButton mb-5">Create Employer Account</button>
                                </Link>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <p className="text-center text-success fs-1"><FontAwesomeIcon icon={faShieldAlt} /></p>
                                <p className="fw-bold text-center">Secure and Confidential</p>
                                <p className="text-center">Our system is built to protect the interest of the recruiter.Your candidate
                                    database is confidential and we do not share it with others.
                                </p>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <p className="text-center text-info fs-1"><FontAwesomeIcon icon={faLock} /></p>
                                <p className="fw-bold text-center">Security</p>
                                <p className="text-center"> Confidentiality and Privacy of your data is paramount to us.
                                </p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </section>
            </section>
            <SocialIcon />
            <Footer />
        </>
    );
};

export default SignUpStart;