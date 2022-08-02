import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import AboutDetails from '../AboutDetails/AboutDetails';
import MeetTeam from '../MeetTeam/MeetTeam';

const AboutUs = () => {
    return (
        <div>
            <AboutDetails/>
            <MeetTeam/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default AboutUs;