import React from 'react';
import './Hire.css';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hire = () => {
    return (
        <section className="Hire">
            <div className="container">
                <div className="row py-5">
                    {/* Left side */}
                    <div
                        className="
                            col-md-5 
                            pt-5 
                            pb-3 
                            d-flex 
                            justify-content-center"
                    >
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="fs-1 mx-2 text-white"
                        />
                        <p className="fs-4 text-white">
                            WANT TO HIRE TOP TALENT?
                        </p>
                    </div>
                    <div className="col-md-4"></div>
                    {/* Button */}
                    <div
                        className="
                            col-md-3 
                            d-flex 
                            justify-content-center 
                            align-items-center"
                    >
                        <button className="HireButton">
                            SCHEDULE A DEMO
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hire;