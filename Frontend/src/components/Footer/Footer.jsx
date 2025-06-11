import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
<<<<<<< HEAD
    url: "/#about",
  },
  {
    display: "Blogs",
    url: "/blogs",
  },
  /*
  {
    display: "Testimonials",
    url: "#testimonials",
  },
  */
=======
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
>>>>>>> origin/main
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Purchases Guide",
    url: "#",
  },
  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
<<<<<<< HEAD
              <i className="ri-pantone-line"></i> EduBlog.
            </h2>
=======
              <i className="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a href="https://facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                <a href="https://instagram.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                <a href="https://linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                <a href="https://twitter.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
>>>>>>> origin/main
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>
<<<<<<< HEAD

            <p>Address: Sylhet, Bangladesh</p>
            <p>Phone: +88 0123456789</p>
            <p>Email: example@gmail.com</p>
=======
            <p>Address: Warangal, Telangana, India</p>
            <p>Phone: +91 9876543210</p>
            <p>Email: learners@gmail.com</p>
>>>>>>> origin/main
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
