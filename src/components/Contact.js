import { Container, Row, Col } from "react-bootstrap";
import opening from "../assets/images/front-page-art.png";

export const Contact = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <div class="container" id="contacts">
            <h1 className="contactMe">Get in touch</h1>
            <form
              target="_blank"
              action="https://formsubmit.co/ad34da8025db01752fb94d2f33ef4f8f"
              method="POST"
            >
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Your Message"
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-lg btn-dark btn-block">
                Submit Form
              </button>
            </form>
          </div>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <div>
            <img src={opening} alt="Header Img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};