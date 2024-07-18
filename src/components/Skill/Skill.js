import './Skill.css';
import React, { useContext } from "react";

import Star from "../../img/star.png";
import Humble from "../../img/humble.png";
import cute from "../../img/cute.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import Resume from './resume.pdf';

const Skill = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="skills">

        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Skills</span>
        <spane>
          Following section showcases the skills, technologies and languages
          <br/>
          I am proficient in. You can also have a look at my resume.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>

      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};



export default Skill;