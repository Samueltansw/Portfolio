import "./Experiences.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import Rsaf from "../../assets/RSAF_Crest.svg.png";

const Experiences = () => {
  return (
    <section id="experiences" className="container container__experiences">
      <h4>MY WORK</h4>
      <h2>EXPERIENCES</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--bg-secondary)" }}
          date="May 2023 - Jul 2023"
          iconStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          icon={<CgWorkAlt />}
        >
          <div className="top">
            <div>
              <h3 className="vertical-timeline-element-title">
                Project Officer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Republic of Singapore Air Force (RSAF)
                <br />
                HQ Air Force Supply Center
              </h4>
            </div>
            <img src={Rsaf} alt="" />
          </div>
          <ul>
            <li>
              Leveraged Excel Macros (VBA) to streamline and automate the
              extraction of data from multiple Excel spreadsheets, reducing data
              retrieval time
            </li>
            <li>
              Automated the generation of emails in Microsoft Outlook using VBA,
              with dynamic content based on the extracted data, enhancing
              communication efficiency
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
          date="May 2022 - Jul 2022"
          iconStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          icon={<CgWorkAlt />}
        >
          <div className="top">
            <div>
              <h3 className="vertical-timeline-element-title">
                Project Officer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                RSAF
                <br />
                Air Engineering & Logistic Department
              </h4>
            </div>
            <img src={Rsaf} alt="" />
          </div>
          <ul>
            <li>
              Designed a user-friendly GUI form using Python's Tkinter framework
              to collect essential user parameters necessary for the execution
              of a backend Python program simulating aircraft faults
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
          date="Dec 2020 - Jul 2021"
          iconStyle={{
            background: "var(--bg-secondary)",
            color: "var(--color-white)"
          }}
          icon={<CgWorkAlt />}
        >
          <div className="top">
            <div>
              <h3 className="vertical-timeline-element-title">
                Project Officer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                RSAF
                <br />
                Network Sensor Flight
              </h4>
            </div>
            <img src={Rsaf} alt="" />
          </div>
          <ul>
            <li>
              Utilized Microsoft Power BI to analyse and visualize fault data,
              developing interactive dashboards for tracking fault trends,
              identifying trend patterns, and providing actionable insights to
              support data-driven decision-making
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experiences;
