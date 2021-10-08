import { faEnvelope, faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="Footer text-secondary">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-3">
                        <p className="fw-bold fs-5 White">ABOUT US</p>
                        <small>Reflik, the leader in crowdsourcing talent,
                            finds top candidates in half the time and for half the cost, through its extensive network
                            of recruiters and industry professionals.</small>
                    </div>
                    <div className="col-md-3">
                        <p className="fw-bold fs-5 White">CONTACT INFO</p>
                        <small><FontAwesomeIcon icon={faHome} /> 100 Franklin Square Dr, Suite 402.</small>
                        <small>Somerset, NJ 08873</small>
                        <br />
                        <small><FontAwesomeIcon icon={faPhone} /> 1-855-573-3545</small>
                        <br />
                        <small><FontAwesomeIcon icon={faEnvelope} />info@reflik.com</small>
                    </div>
                    <div className="col-md-3">
                        <p className="fw-bold fs-5 White mb-4">NEWSLETTER</p>
                        <small>Subscribe to our newsletter for latest updates about Reflik</small>
                    </div>
                    <div className="col-md-3">
                        <p className="fw-bold fs-5 White mb-4">CAREERS</p>
                        <small>To learn about working with Reflik, please click here</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;