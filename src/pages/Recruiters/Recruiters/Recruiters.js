import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import RecruiterBanner from '../RecruiterBanner/RecruiterBanner';
import RecruiterStartup from '../RecruiterStartup/RecruiterStartup';

const Recruiters = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <RecruiterBanner/>
            <RecruiterStartup/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default Recruiters;