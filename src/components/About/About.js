import './About.css'
import girl2 from '../../img/girl2.png';

const About = () => {
  return (
  <div className="about">
    <div className="a-left">
        <img src={girl2} alt=""/>
    </div>
    <div className="a-right">
        <div className='title font-effect-anaglyph'>
        ABOUT ME
        </div>
        <div className='content'>
            I am <span>SAMHITHA KUMAR MOLUGARAM</span> a dedicated student on the journey to earn a Bachelor's degree in Computer 
            Science and Engineering. Passionate about AI/ML and programming, with proficiency in Problem Solving, Data Structures, 
            DBMS and I am good at Java And Python. Furthermore, I have a solid foundation in web development. I enjoy learning about 
            new technology and adapt to them.Join me on this learning adventure, and let's explore the future of tech together!
        </div>
    </div>
   </div>
  )
}
export default About