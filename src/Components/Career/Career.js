import React from 'react';
import Styles from './Career.module.css';

import SocialIcon from '../Shared/SocialIcon/SocialIcon';
import Footer from '../Shared/Footer/Footer';

// Images
import Image1 from '../Images/1C.jpg';
import Image2 from '../Images/2C.jpg';
import Image3 from '../Images/3C.jpg';
import Image4 from '../Images/4C.jpg';
import Image5 from '../Images/5C.jpg';
import Image6 from '../Images/6C.jpg';
import Image7 from '../Images/7C.jpg';

const JobData = [
    {
        image: Image1,
        location: "Dhaka",
        country: "Bangladesh",
        openings: "122 open jobs"
    },
    {
        image: Image2,
        location: "Cumilla",
        country: "Bangladesh",
        openings: "22 open jobs"
    },
    {
        image: Image3,
        location: "Feni",
        country: "Bangladesh",
        openings: "20 open jobs"
    },
    {
        image: Image4,
        location: "Dinajpur",
        country: "Bangladesh",
        openings: "2 open jobs"
    },
    {
        image: Image5,
        location: "Barishal",
        country: "Bangladesh",
        openings: "4 open jobs"
    },
    {
        image: Image6,
        location: "Bogura",
        country: "Bangladesh",
        openings: "6 open jobs"
    },
    {
        image: Image7,
        location: "Chattogram",
        country: "Bangladesh",
        openings: "44 open jobs"
    },
    {
        image: Image1,
        location: "Delhi",
        country: "India",
        openings: "122 open jobs"
    },
    {
        image: Image3,
        location: "Karachi",
        country: "Pakistan",
        openings: "132 open jobs"
    },
    {
        image: Image2,
        location: "New York",
        country: "USA",
        openings: "1224 open jobs"
    }
]

const Career = () => {
    return (
        <>
            {/* Search section start */}
            <section className={Styles.SearchContainer}>
                <div className="row">
                    <p
                        className={`${Styles.Heading} col-md-12`}>
                        Find jobs
                    </p>
                    <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="Search for your jobs by keywords or title"
                            className={Styles.Inputs}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            placeholder="Location"
                            className={Styles.Inputs}
                        />
                    </div>
                    <div className="col-md-2">
                        <button
                            type="submit"
                            className={Styles.SearchButton}>
                            Search
                        </button>
                    </div>
                </div>
            </section>
            {/* Search section ends */}

            {/* Jobs by location start */}
            <section className="container my-4">
                <div className="row">
                    <div className="col-md-12">
                        <p className="fs-3 fw-bold my-4">Find jobs by loaction</p>
                    </div>
                    {
                        JobData.map((data) => {
                            return (
                                <div className="col-md-3">
                                    <div className={Styles.JobsCard}>
                                        <img src={data.image} className={Styles.JobsCardImages} alt="" />
                                        <div className={Styles.JobsCardsDetails}>
                                            <p className="fs-4 fw-bold text-center text-white mb-1">{data.location} </p>
                                            <p className="fs-6 text-center text-white">{data.country} </p>
                                            <p className={Styles.JobsCardsOpenings}>{data.openings} </p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
            {/* Jobs by location ends */}

            <SocialIcon />
            <Footer />
        </>
    );
};

export default Career;