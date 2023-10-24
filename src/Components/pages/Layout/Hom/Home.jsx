// import React from 'react';

import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Courses from "../Courses/Courses";
import EduHappen from "../EduHapppen/EduHappen";
import EduNews from "../EduNews/EduNews";
import WhyEdu from "../WhyEdu/WhyEdu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EduHappen></EduHappen>
            <Courses></Courses>
            <WhyEdu></WhyEdu>
            <ContactUs></ContactUs>
            <EduNews></EduNews>
        </div>
    );
};

export default Home;