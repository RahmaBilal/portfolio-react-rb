import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, deployed, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="portfolio-box">
        <img src={imgUrl} alt={"my img"}/>
        <div className="portfolio-text">
          <h4>{title}</h4>
          <li>
            <a href={deployed}>Deployed Link</a>
          </li>
          <li>
            <a href={github}>Github Link</a>
          </li>
        </div>
      </div>
    </Col>
  );
};