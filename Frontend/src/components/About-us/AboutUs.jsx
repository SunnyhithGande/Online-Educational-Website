<<<<<<< HEAD
import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Our Educational Blog Application is an interactive platform designed to foster learning through shared knowledge and personalized content. 
                Users can log in securely using Google or email, create and explore educational blog posts, and access tailored learning suggestions through the Personalized Learning Generator.
                 To promote balanced study habits, the application also features a Brain Break Puzzle section, offering fun and engaging mini-games. 
                 Built using React.js, Node.js, Express.js, and MongoDB, the platform combines functionality and user experience to support a modern, student-focused learning environment.
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
=======
import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                We are a passionate team dedicated to delivering high-quality
                services and solutions. Our mission is to empower individuals
                and businesses by providing innovative tools and resources that
                drive success and growth. We believe in the power of collaboration and aim to make a lasting impact in every project we take on.
              </p>

              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Patients Around the World</p>
                  </div>
                </div>

                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
>>>>>>> origin/main
