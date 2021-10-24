import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import SocialIcon from '../../Shared/SocialIcon/SocialIcon';
import Styles from './SignUpForm.module.css';

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        number: "",
        type: "",
        email: "",
        password: ""
    })

    const handleName = (e) => {
        const names = e.target.value;
        setFormData({ ...formData, name: names })

    }
    const handleCompanyName = (e) => {
        const companyName = e.target.value;
        setFormData({ ...formData, companyName: companyName })

    }
    const handleNumber = (e) => {
        const number = e.target.value;
        setFormData({ ...formData, number: number })

    }
    const handleType = (e) => {
        const type = e.target.value;
        setFormData({ ...formData, type: type })

    }
    const handleEmail = (e) => {
        const email = e.target.value;
        setFormData({ ...formData, email: email })

    }
    const handlePassword = (e) => {
        const password = e.target.value;
        setFormData({ ...formData, password: password })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("lol", formData)
    }


    return (
        <>
            <section className={Styles.SignUpForm}>
                <p className="fs-2 text-center mt-5">Hiring top talent is now easier than ever!</p>
                <p className="fs-5 text-center mt-5 mx-5 px-5 fw-bold">Create your own account</p>
                {/* Form Start */}
                <form onSubmit={handleSubmit} className={Styles.Form}>
                    <input
                        className={Styles.FormInput}
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleName} />
                    <input
                        className={Styles.FormInput}
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleCompanyName} />
                    <input
                        className={Styles.FormInput}
                        name="number"
                        type="number"
                        placeholder="Phone Number"
                        value={formData.number}
                        onChange={handleNumber} />
                    <select
                        className={Styles.FormInput}
                        onChange={handleType}
                    >
                        <option>Employee</option>
                        <option>HR</option>
                        <option>Recruiter</option>
                    </select>
                    <input
                        className={Styles.FormInput}
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleEmail} />
                    <input
                        className={Styles.FormInput}
                        name="password"
                        type="password"
                        placeholder="Password should be minimum 6 characters"
                        value={formData.password}
                        onChange={handlePassword} />
                    <button
                        className={Styles.SignUpButton}
                        type="submit" >
                        Sign Up
                    </button>
                </form>
                <p className="ms-5 mb-5">By creating an account you agree to Steadfast´s <span className="text-primary">Terms of Use</span> and <span className="text-primary"> Privacy Policy.</span></p>
            </section>
            <SocialIcon />
            <Footer />
        </>
    );
};

export default SignUpForm;