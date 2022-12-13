import { Container, Row, Col } from "react-bootstrap";
import envelope from "../assets/images/envelope.svg";
import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>PORTFOLIO</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:rahma.bilal15@gmail.com">
                <img src={envelope} alt="Icon" />
              </a>
              <a href="https://github.com/RahmaBilal">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://twitter.com">
                <img src={twitter} alt="Icon" />
              </a>
              <a href="https://linkedin.com/in/rahmabilal">
                <img src={linkedin} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};