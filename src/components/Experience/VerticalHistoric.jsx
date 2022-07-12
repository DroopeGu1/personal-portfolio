import React from "react";
import {
  faAngular,
  faGitAlt,
  faReact,
  faBootstrap,
  faSass,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./VerticalHistoric.css";

function VerticalHistoric() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#FFFFFF">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Curitiba, PR, Brazil
          </h4>
          <p>
            Hoje venho me aperfeicoando cada vez mais no front-end e ser referencia nas linguagens:
          </p>
          <p className="icons">
            <FontAwesomeIcon
              className="icons-gap"
              icon={faAngular}
              color="#DD0031"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faReact}
              color="#5ED4F4"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faSass}
              color="#28A4D9"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faBootstrap}
              color="#8712FC"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faGitAlt}
              color="#EC4D28"
            />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022/06 - Present"
          iconStyle={{ background: "#7941B9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Curitiba, PR, Brazil
          </h4>
          <p>
            Desenvolvimento de Site e aplicativos com Ionic com TS, para
            cliente Internacional utilizando:
          </p>
          <p className="icons">
            <FontAwesomeIcon
              className="icons-gap"
              icon={faAngular}
              color="#DD0031"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faSass}
              color="#28A4D9"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faBootstrap}
              color="#8712FC"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faGitAlt}
              color="#EC4D28"
            />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022/02 - 2022/06"
          iconStyle={{ background: "#7941B9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Curitiba, PR, Brazil
          </h4>
          <p>Desenvolvimento de novas aplicacoes e manutencao de sites,utilizando: </p>
          <p className="icons">
            <FontAwesomeIcon
              className="icons-gap"
              icon={faAngular}
              color="#DD0031"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faJsSquare}
              color="#EFD81D"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faGitAlt}
              color="#EC4D28"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faBootstrap}
              color="#8712FC"
            />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021/06 - 2022/02"
          iconStyle={{ background: "#7941B9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Estagiario De Programacao
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Curitiba, PR, Brazil
          </h4>
          <p>Desenvolvimento de novas aplicacoes e manutencao de sites,utilizando: </p>
          <p className="icons">
            <FontAwesomeIcon
              className="icons-gap"
              icon={faJsSquare}
              color="#EFD81D"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faBootstrap}
              color="#8712FC"
            />
            <FontAwesomeIcon
              className="icons-gap"
              icon={faGitAlt}
              color="#EC4D28"
            />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default VerticalHistoric;
