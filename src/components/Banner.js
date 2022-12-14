import { Container, Row, Col } from "react-bootstrap";
import opening from "../assets/images/art-for-webpage.png";

export const Banner = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="opening">Welcome to my Portfolio</span>
            <div className="header">
              <br />
              <h1>
                Hi, <span></span>
              </h1>
              <h1>
                My name is Rahma Bilal. <span></span>
              </h1>
              <h1>
                Junior Web Developer<span></span>
              </h1>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={opening} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};