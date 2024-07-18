import React from "react";
import "./Education.css";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import text from './text';
import { textVariant } from "./text";



function Education() {

    return (
    <div className="educt">
      <motion.div className="title" variants={textVariant()}>
      <h1 className="title1">WHERE DID I STUDY</h1>
      <h1 className="title2 font-effect-outline" >EDUCATION</h1>
      </motion.div>
      <VerticalTimeline>
      {text.map((element) => {
        return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: '#00428c'}}
              icon={element.icon}
            >
            <h3 className="vertical-timeline-element-title">
                {element.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
                {element.location}
            </h5>
            <p id="description">{element.description}</p>
            </VerticalTimelineElement>
        );
      })}
      </VerticalTimeline>    
    </div>    
    );
}

export default Education