/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/headshot.jpg";
import profileme from "assets/img/theme/profileme.jpg";
import headerbackground6 from "assets/img/theme/headerbackground6.jpg"

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div >
              <img
              className="shape shape-style-1 shape-default alpha-4"
              src={headerbackground6}
              width='1500'
              />
              {/* <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span /> */}
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="https://www.linkedin.com/in/jessivelazquez/" 
                        // onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profileme}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="https://www.linkedin.com/in/jessivelazquez/"
                          // onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Find me on Linked In
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">500+</span>
                          <span className="description">Followers</span>
                        </div>
                        <div>
                          <span className="heading">5</span>
                          <span className="description">Projects</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jessi Velazquez{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Seattle, Washington
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Full Stack Developer
                    </div>
                    <br></br>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Code Fellows Academy, 2021
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Washington, 2012
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Washington, 2008
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          I am a full stack javascript developer located in Seattle, WA.<br></br>
                          <br></br>

                          I am a skilled leader, communicator, and project manager with over ten years of public and private sector experience in the environmental science and natural resource fields, with a background in data analysis, GIS, and consulting.<br></br>
                          <br></br>

                          I have experience using the R language for visualizing and analyzing data, and experience deploying interactive GIS maps on the web. I also have experience using javascript to design interactive web applications.<br></br>
                          <br></br>

                          My interest in tech is based on the ability to creatively design needs-based software tools ad hoc, free of the confines of existing software currently on the market.<br></br>
                          <br></br>

                          I also have a background as a musician, where I have enjoyed working in creative team environments.<br></br>
                          <br></br>

                          I aim to pair my creative and collaborative side with my analytical thinking background to design meaningful, data driven, and sleekly designed web applications.<br></br>
                          <br></br>

                          I thrive in roles where I can leverage my leadership and communication skills to understand clients needs and deploy strategic technological solutions to deliver on those needs.

                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          {/* Show more */}
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
