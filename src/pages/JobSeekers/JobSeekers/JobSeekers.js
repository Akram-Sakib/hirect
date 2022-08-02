import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import JobSeekersAll from '../JobSeekersAll/JobSeekersAll'; 
import SeekersTestimonial from '../SeekersTestimonial/SeekersTestimonial';

const JobSeekers = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <JobSeekersAll/>
            <SeekersTestimonial/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default JobSeekers;