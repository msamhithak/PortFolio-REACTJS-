import "./App.css"
import Navbar from './components/navbar/navbar.js';  
import Home from './components/home/home.js';
import About from './components/About/About.js';
import Education from './components/Education/Education.js';
import Skill from './components/Skill/Skill.js';


const App=()=>{
  return <div>
    <section id="HOME">
      <Navbar/>
      <Home/>
    </section>
    <section id="ABOUT">
    <About/>
    </section>
    <section id="EDUCATION" style={{ height: '115vh' }}>
    <Education/>
    </section>
    <section id="SKILLS">
      <Skill/>
    </section>
    <section  id="PROJECTS">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Portfolio4</section>
    <section id="CONTACTS">CONTACTS</section>
  </div>;
};
export default App;
 