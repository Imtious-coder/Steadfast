import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
    return (
        <section>
            {/* Main Footer starts */}
            <section
                className="Footer text-secondary"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="container py-5">
                    <div className="row pt-5">
                        {/* About us */}
                        <div className="col-6 col-md-3 mb-5">
                            <p className="fw-bold fs-5 White">ABOUT US</p>
                            <small>Steadfast, the leader in crowdsourcing talent,
                                finds top candidates in half the time and for half the cost, through its extensive network
                                of recruiters and industry professionals.</small>
                        </div>
                        {/* Contact information */}
                        <div className="col-6 col-md-3">
                            <p className="fw-bold fs-5 White">CONTACT INFO</p>
                            <small><FontAwesomeIcon icon={faHome} /> 100 Franklin Square Dr, Suite 402.</small>
                            <small>Somerset, NJ 08873</small>
                            <br />
                            <small><FontAwesomeIcon icon={faPhone} /> +8801698749818</small>
                            <br />
                            <small><FontAwesomeIcon icon={faEnvelope} />info@steadfast.com</small>
                        </div>
                        {/* Subscribe */}
                        <div className="col-6 col-md-3">
                            <p className="fw-bold fs-5 White mb-4">NEWSLETTER</p>
                            <small>Subscribe to our newsletter for latest updates about Steadfast</small>
                            <input type="email" placeholder="E-mail address ..." className="FooterEmailInput" />
                        </div>
                        {/* Career */}
                        <div className="col-6 col-md-3">
                            <p className="fw-bold fs-5 White mb-4">CAREERS</p>
                            <small>To learn about working with Steadfast, please <a href="Coming soooooon">click here</a></small>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Footer ends */}

            {/* Copyright */}
            <section className="bg-black White">
                <p className="text-center m-0 py-4 fs-6">© 2021 COPYRIGHT STEADFAST, INT. SERVICES ALL RIGHTS RESERVED.</p>
            </section>
        </section>
    );
};

export default Footer;