import "./Home.css";
import ME from "../../assets/myImage1.webp";
import CV from "../../assets/Samuel_Tan_resume.pdf";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import LinkIcon from "./LinkIcon";

function Home() {
  return (
    <header id="home" className="container home__container">
      <div className="home-image">
        <img src={ME} alt="my image" />
        <LinkIcon
          icon={<FaSquareGithub />}
          url="https://github.com/Samueltansw"
        />
        <LinkIcon
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/samuel-tan-a5948921b/"
        />
      </div>
      <div className="home-content">
        <h4 className="text-light">HI THERE!</h4>
        <h1>
          I'M <span>SAMUEL TAN</span>
        </h1>
        <h4 className="text-light">AN ASPIRING COMPUTER ENGINEER</h4>
        <a href={CV} download className="btn btn__home">
          Download Resume
        </a>
      </div>
      {/* <LinkIcon
        icon={<FaSquareGithub />}
        url="https://github.com/Samueltansw"
      />
      <LinkIcon
        icon={<FaLinkedin />}
        url="https://www.linkedin.com/in/samuel-tan-a5948921b/"
      /> */}
    </header>
  );
}

export default Home;
