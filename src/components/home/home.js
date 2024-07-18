import "./home.css";
import Github from '../../img/github.png';
import Linkedin from '../../img/linked.png';
import Insta from '../../img/insta.png';
import v1 from '../../img/v1.png';
import v2 from '../../img/v2.png';
import girl from '../../img/girl.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion';
import heart from '../../img/heartemoji.png';

const home = () => {
  return (
  <div className="home">
    <div className="i-left">
        <div className="i-name">
        <span className="font-effect-3d">Hey! I Am </span>
        <span className="font-effect-shadow-multiple ">Samhitha Kumar</span>
        <span>A Frontend Developer, a Passionate Programmer. Currently a Student pursing Bachelor's Degree.</span>
        </div> 
        <button className="i-button">Hire Me</button>     
        <div className="i-icons">
        <a href='https://github.com/msamhithak' target='_blank'>
        <img src={Github} alt=""/>           
        </a>
        <a href='https://www.linkedin.com/in/samhitha-kumar-69865426a/' target="_blank">
        <img src={Linkedin} alt=""/>
        </a>
        <a href="#insta" target="_blank"><img src={Insta} alt=""/></a>
        </div>
    </div>
    <div className="i-right"> 
     <img src={v1} alt=""/>
     <img src={v2} alt=""/>
     <img src={girl} alt=""/>
     <motion.img src={glassesimoji} alt=""/>
     <motion.img src={heart} alt=""/>
     <div style={{top:'6%', left:'80%'}}>
      <FloatingDiv txt1='Web' txt2='Developer'/>
     </div>
     <div className="text2" style={{bottom:'20%', left:'14%'}}>
      <FloatingDiv txt1='Passionate' txt2='Programmer'/>
     </div>
    
    </div>
  </div>
  )
}

export default home