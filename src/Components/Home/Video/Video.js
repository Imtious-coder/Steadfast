import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <section className="container py-5">
            <p className="fw-bold fs-3 text-center">WATCH A SHORT DEMO VIDEO </p>
            <div className="d-flex justify-content-center pb-5">
                <div>
                    <div className="Style1"></div>
                    <div className="Style2"></div>
                </div>
            </div>
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/C_TYCdq9VZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    );
};

export default Video;