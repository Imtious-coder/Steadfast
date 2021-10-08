import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialIcon.css';

const SocialIcon = () => {
    return (
        <section className="Social">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center py-5">
                        <FontAwesomeIcon icon={faFacebookF} className="SocialIcon" />
                        <FontAwesomeIcon icon={faLinkedin} className="SocialIcon" />
                        <FontAwesomeIcon icon={faTwitter} className="SocialIcon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialIcon;