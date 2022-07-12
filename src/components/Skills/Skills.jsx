import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1300}
                className="skill-slider"
              >
                <div className="item">
                  <div className="face2">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                  </div>
                </div>
                <div className="item">
                  <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                  </div>
                </div>
                <div className="item">
                  <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                  </div>
                </div>
                <div className="item">
                  <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                  </div>
                </div>
                <div className="item">
                  <div className="face7">
                    <FontAwesomeIcon icon={faBootstrap} color="#8712FC" />
                  </div>
                </div>
                <div className="item">
                  <div className="face8">
                    <FontAwesomeIcon icon={faSass} color="#28A4D9" />
                  </div>
                </div>
                <div className="item">
                  <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                  </div>
                </div>
                <div className="item">
                  <div className="face4">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                  </div>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
