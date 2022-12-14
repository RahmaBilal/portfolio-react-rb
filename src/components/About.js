import { Container, Row, Col } from "react-bootstrap";
import image from "../assets/images/my-image.jpeg";

export const About = () => {
  return (
    <section className="about-me" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box ">
              <h2>A little about myself</h2>
              <Container>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <p>
                      My name is Rahma Bilal. I am a newly qualified{" "}
                      <b>Full-Stack Developer Web Developer</b> who decided to
                      take a different route than what I had originally planned
                      after finishing University. Prior to this, I had studied
                      Criminology with Law at Coventry University. Decided to
                      pursue a different career and now I have a certificate
                      from the University of Birmingham for Full Stack Web
                      Development.
                    </p>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                    <div>
                      <img src={image} alt="My img" />
                    </div>
                    <a href="https://docs.google.com/document/d/1G74p7fZJdw8e69fMK6v14LIKXZd7PtLUwyOEY8u_d-E/edit?usp=sharing">
                      Resume
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
