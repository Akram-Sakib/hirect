import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import FeaturesAll from '../FeaturesAll/FeaturesAll';

const Features = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <FeaturesAll/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default Features;