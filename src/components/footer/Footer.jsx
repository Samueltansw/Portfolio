import "./Footer.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import LinkIcon from "../home/LinkIcon";

const Footer = () => {
  return (
    <footer id="contact">
      <h2>CONTACT ME</h2>
      <h3>samueltansw@u.nus.edu</h3>
      <div>
        <LinkIcon
          icon={<FaSquareGithub />}
          url="https://github.com/Samueltansw"
        />
        <LinkIcon
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/samuel-tan-a5948921b/"
        />
      </div>
    </footer>
  );
};

export default Footer;
