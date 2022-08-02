import React from 'react'; 
import DemoLogin from '../../Login/DemoLogin';
import Login from '../../Login/Login';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import Banner from '../Banner/Banner';
import HireChat from '../HireChat/HireChat';
import HomeTestimonial from '../HomeTestimonial/HomeTestimonial';
import JobAvailable from '../JobAvailable/JobAvailable';
import Startup from '../Startup/Startup';

const Home = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Banner/> 
            <HireChat/>
            <JobAvailable/>
            <Startup/>
            <HomeTestimonial/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default Home;