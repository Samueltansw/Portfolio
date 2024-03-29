import "./Projects.css";
import Brokeman from "../../assets/brokeman.png";
import PersonalWebsite from "../../assets/personal-website.png";
import { Swiper, SwiperSlide } from "swiper/react";
import PersonalWebsiteAbout from "../../assets/personal-website-aboutMe.png";
import PersonalWebsiteAcademics from "../../assets/personal-website-academics.png";
import PersonalWebsiteExperiences from "../../assets/personal-website-experiences.png";
import PersonalWebsiteProjects from "../../assets/personal-website-myProjects.png";
import PersonalWebsiteSkills from "../../assets/personal-website-skills.png";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/swiper-element-bundle.min.mjs";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import BrokemanArchitecture from "../../assets/brokeman-architecture.png";
import { FaJava } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import LinkButton from "./LinkButton";

const Projects = () => {
  return (
    <section id="projects" className="container projects__container">
      <h4>TAKE A LOOK AT</h4>
      <h2>MY PROJECTS</h2>
      <div className="projects-content">
        <div className="project-content">
          {/* <img src={Brokeman} alt="" /> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Brokeman} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BrokemanArchitecture} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="project-content-body">
            <h3>CLI Budget Manager School Project</h3>
            <div>
              <p>
                Command line interface budget manager application that can
                perform CRUD operations on income and expense, sorting of
                expenses based on categores, and with local storage upon exit.
              </p>
              <div className="tech-stack-icons">
                <article>
                  <div>
                    <FaJava />
                  </div>
                  <span>Java</span>
                </article>
              </div>
              <LinkButton
                text="Github"
                url="https://github.com/Samueltansw/tp"
              />
            </div>
          </div>
        </div>
        <div className="project-content">
          {/* <img src={PersonalWebsite} alt="" /> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={PersonalWebsite} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={PersonalWebsiteAbout} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={PersonalWebsiteExperiences} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={PersonalWebsiteProjects} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={PersonalWebsiteAcademics} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={PersonalWebsiteSkills} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="project-content-body">
            <h3>Personal Website</h3>
            <div>
              <p>
                It is a fun project that I have built to practice and display my
                frontend skills. Although I had to kill my braincells debugging
                some of the faults, it was overall a fun and interesting little
                project.
              </p>
              <div className="tech-stack-icons">
                <article>
                  <div>
                    <RiReactjsLine />
                  </div>
                  <span>React</span>
                </article>
                <article>
                  <div>
                    <FaHtml5 />
                  </div>
                  <span>HTML</span>
                </article>
                <article>
                  <div>
                    <FaCss3Alt />
                  </div>
                  <span>CSS</span>
                </article>
                <article>
                  <div>
                    <IoLogoJavascript />
                  </div>
                  <span>Javascript</span>
                </article>
              </div>
              <LinkButton
                text="Github"
                url="https://github.com/Samueltansw/Portfolio"
              />
            </div>
          </div>
        </div>
        {/* <div className="project-content">
          <img src={PersonalWebsite} alt="" />
          <div className="project-content-body">
            <h3>Personal Website</h3>
            <div>
              <p>
                It is a fun project that I have built to practice and display my
                frontend skills. Although I had to kill my braincells debugging
                some of the faults, it was overall a fun and interesting little
                project.
              </p>
              <div className="tech-stack-icons">
                <article>
                  <div>
                    <FaJava />
                  </div>
                  <span>Java</span>
                </article>
                <article>
                  <div>
                    <FaJava />
                  </div>
                  <span>Java</span>
                </article>
              </div>
              <LinkButton
                text="Github"
                url="https://github.com/Samueltansw/tp"
              />
            </div>
          </div>
        </div>
        <div className="project-content">
          <img src={BrokemanArchitecture} alt="" />
          <div className="project-content-body">
            <h3>CLI Budget Manager School Project</h3>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique praesentium accusamus assumenda ipsum ea, mollitia
                amet minus, dolores, quas laborum quam accusantium inventore
                impedit corrupti dicta. Unde, ab. Sint, illum? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Veritatis, sunt
                nobis cum explicabo facere illum tempore culpa repellendus,
                expedita amet deleniti vitae. Quidem sit labore aspernatur,
                numquam provident maiores a?
              </p>
              <div className="tech-stack-icons">
                <article>
                  <div>
                    <FaJava />
                  </div>
                  <span>Java</span>
                </article>
                <article>
                  <div>
                    <FaJava />
                  </div>
                  <span>Java</span>
                </article>
              </div>
              <LinkButton
                text="Github"
                url="https://github.com/Samueltansw/tp"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
