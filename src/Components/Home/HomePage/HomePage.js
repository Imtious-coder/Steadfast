import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import HelpSection from '../HelpSection/HelpSection';
import Hire from '../Hire/Hire';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
import SocialIcon from '../../Shared/SocialIcon/SocialIcon';
import Video from '../../Shared/Video/Video';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <Banner />
            <Partner />
            <HelpSection />
            <Video />
            <Review />
            <News />
            <Hire />
            <SocialIcon />
            <Footer />
        </>
    );
};

export default HomePage;