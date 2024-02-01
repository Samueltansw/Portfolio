import "./Academics.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import NusIcon from "../../assets/nusIcon.png";
import TmjcIcon from "../../assets/TmjcIcon.jpeg";

const Academics = () => {
  return (
    <section id="academics" className="container container__academics">
      <h4>MY</h4>
      <h2>ACADEMICS</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--bg-secondary)" }}
          date="2021 - Present"
          iconStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          icon={<IoSchool />}
        >
          <div className="top">
            <div>
              <h3 className="vertical-timeline-element-title">
                National University of Singapore
              </h3>
            </div>
            <img src={NusIcon} alt="" />
          </div>
          <ul>
            <li>
              Bachelor of Engineering in Computer Engineering
              <ul>
                <li>
                  <li>Minor in Data Engineering</li>
                </li>
              </ul>
            </li>

            <li>Expected Date of Graduation: July 2025</li>
            <li>Cumuative Average Point: 4.43 / 5.0</li>
            <li>
              Relevant Course work:
              <ul>
                <li>Software Engineering & Object-Oriented Programming (A)</li>
                <li>Database Systems (A)</li>
                <li>Computer Networks (A)</li>
                <li>Introduction to Information Security (A-)</li>
              </ul>
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--bg-secondary)" }}
          date="2018 - 2019"
          iconStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          icon={<IoSchool />}
        >
          <div className="top">
            <div>
              <h3 className="vertical-timeline-element-title">
                Tampines Meridian Junior College
              </h3>
            </div>
            <img src={TmjcIcon} alt="" />
          </div>
          <ul>
            <li>
              Relevant Course work:
              <ul>
                <li>Higher 3 Mathematics (Merit)</li>
                <li>Higher 2 Physics (A)</li>
                <li>Higher 2 Mathematics (A)</li>
                <li>Higher 2 Chemistry (A)</li>
                <li>Higher 1 Economics (B)</li>
              </ul>
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Academics;
