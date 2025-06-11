import React, { Fragment } from "react";
<<<<<<< HEAD
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
=======
>>>>>>> origin/main

import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
<<<<<<< HEAD
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import BrainBreak from "../components/BrainBreak/BrainBreak";
import Footer from "../components/Footer/Footer";
import "./Home.css";
=======
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import BrainBreak from "../components/BrainBreak/BrainBreak";
>>>>>>> origin/main

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection id="home" />
<<<<<<< HEAD
     
      <AboutUs id="about" />
      <ChooseUs id="pages" />
      <Features id="blog" />
      <BrainBreak id="brain-break" />
      
=======
      <CompanySection />
      <AboutUs id="about" />
      <Courses id="courses" />
      <BrainBreak />
      <ChooseUs id="pages" />
      <Features id="blog" />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
>>>>>>> origin/main
      <Footer />
    </Fragment>
  );
};

export default Home;
