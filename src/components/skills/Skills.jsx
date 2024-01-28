import "./Skills.css";
import SkillElement from "./SkillElement";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaGears } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaMicrochip } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="container skills__container">
      <h4>LEARN ABOUT MY</h4>
      <h2>TECHNICAL SKILLS</h2>
      <div className="skills__content">
        <div className="skills__content-component">
          <h3>Frontend</h3>
          <div>
            <SkillElement skill="HTML" icon={<FaHtml5 />} />
            <SkillElement skill="CSS" icon={<FaCss3Alt />} />
            <SkillElement skill="BootStrap 5" icon={<FaBootstrap />} />
            <SkillElement skill="JavaScript" icon={<IoLogoJavascript />} />
            <SkillElement skill="ReactJS" icon={<RiReactjsLine />} />
          </div>
        </div>

        <div className="skills__content-component">
          <h3>Backend</h3>
          <div>
            <SkillElement skill="NodeJS" icon={<IoLogoNodejs />} />
            <SkillElement skill="ExpressJS" icon={<SiExpress />} />
            <SkillElement skill="Restful API" icon={<FaGears />} />
            <SkillElement skill="MongoDB" icon={<SiMongodb />} />
            <SkillElement skill="PostgreSQL" icon={<BiLogoPostgresql />} />
          </div>
        </div>

        <div className="skills__content-component">
          <h3>Data Analytics</h3>
          <div>
            <SkillElement skill="Power BI" icon={<SiPowerbi />} />
            <SkillElement skill="Excel VBA" icon={<SiMicrosoftexcel />} />
            <SkillElement skill=" Python" icon={<FaPython />} />
          </div>
        </div>

        <div className="skills__content-component">
          <h3>Others</h3>
          <div>
            <SkillElement skill="Java" icon={<FaJava />} />
            <SkillElement skill="C/C++" icon={<TbBrandCpp />} />
            <SkillElement skill="Keil RTX" icon="" />
            <SkillElement skill="RTOS" icon="" />
            <SkillElement skill="Verilog HDL" icon={<FaMicrochip />} />
            <SkillElement skill="Git" icon={<FaGitAlt />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
