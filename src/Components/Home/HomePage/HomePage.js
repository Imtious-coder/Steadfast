import React from 'react';
import Banner from '../Banner/Banner';
import HelpSection from '../HelpSection/HelpSection';
import Navbar from '../Navbar/Navbar';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
import Video from '../Video/Video';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Partner />
            <HelpSection />
            <Video />
            <Review />
        </>
    );
};

export default HomePage;