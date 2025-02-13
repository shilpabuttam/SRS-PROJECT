import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUserTie, FaCrown, FaProjectDiagram, FaBook } from 'react-icons/fa';

import './about.css';

const About = () => {
  return (
    <div>
      <div className="d-section">
        <Container className="mt-1">
          {/* About Us Section */}
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center display-5 fw-bold">About Us</h1>
              <p className="mt-3 text-muted text-center">
                We are a team of passionate developers building innovative web
                solutions. Our goal is to provide high-quality applications that
                enhance user experience and productivity.
              </p>
            </Col>
          </Row>

          {/* Our Team, Vision, Mission */}
          <Row className="justify-content-center mt-4">
            <Col md={10}>
              <div className="d-flex flex-column flex-md-row justify-content-between gap-4 border-black">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="card-container "
                >
                  {/* Our Team */}
                  <Card className="hover-card">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://www.lomaait.com/images/icon1_about.png"
                        alt="Our Team"
                        className="image-1"
                      />
                    </motion.div>
                    <Card.Body>
                      <h3 className="fw-bold">Our Team</h3>
                      <p className="text-muted">
                        We <strong> IT Solutions</strong> have a passionate team
                        with over
                        <strong> 4 years of experience</strong> in all IT
                        sectors.
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="card-container"
                >
                  {/* Vision */}
                  <Card className="hover-card">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://www.lomaait.com/images/icon2_about.png" // Add your image URL here
                        alt="Vision"
                        className="image-1"
                      />
                    </motion.div>
                    <Card.Body>
                      <h3 className="fw-bold">Vision</h3>
                      <p className="text-muted">
                        We are here in <strong>Hyderabad</strong>, with a lot of
                        emerging IT sectors. By <strong>2025</strong>, we will
                        be one of the most booming companies in Vijayawada with
                        all high-standard corporate emerging IT sectors.
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="card-container"
                >
                  {/* Mission */}
                  <Card className="hover-card">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://www.lomaait.com/images/icon3_about.png" // Add your image URL here
                        alt="Mission"
                        className="image-1"
                      />
                    </motion.div>
                    <Card.Body>
                      <h3 className="fw-bold">Mission</h3>
                      <p className="text-muted">
                        Our company is built with success tactics and strategies
                        for the best growth of clients and their businesses who
                        are owed to <strong>OUR COMPANY</strong>.
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="d-section__inner">
          <div className="con-section">
            <div className="img">
              <FaUserTie size={50} className="text-primary mb-2" />
              <h1>Director</h1>
            </div>
            <em>
              Our best comes out when we have efficient and knowledgeable
              individuals who are passionate, dedicated, and perceptiveness,
              continuously drive for our own firm.
            </em>
          </div>
          <div className="con-section" id="con-section2">
            <div className="img">
              <FaCrown size={50} className="text-warning mb-2" />
              <h1>managing Director</h1>
            </div>
            <em>
              Our best comes out when we have efficient and knowledgeable
              individuals who are passionate, dedicated, and perceptiveness,
              continuously drive for our own firm.
            </em>
          </div>
          <div className="con-section">
            <div className="img">
              <FaProjectDiagram size={50} className="text-success mb-2" />
              <h1>chief executive officer</h1>
            </div>
            <em>
              Our best comes out when we have efficient and knowledgeable
              individuals who are passionate, dedicated, and perceptiveness,
              continuously drive for our own firm.
            </em>
          </div>
          <div className="con-section" id="con-section2">
            <div className="img">
              <FaBook size={50} className="text-info mb-2" />
              <h1>project managee</h1>
            </div>
            <em>
              Our best comes out when we have efficient and knowledgeable
              individuals who are passionate, dedicated, and perceptiveness,
              continuously drive for our own firm.
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
