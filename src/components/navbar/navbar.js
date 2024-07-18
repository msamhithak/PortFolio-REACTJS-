import "./navbar.css"
import cvImage from '../../img/cv.jpg';
import resume from '../../img/resume.pdf';
import Sidebar from '../sidebar/sidebar.js'


const Navbar = () => {
    return (
        <div className="navbar">
        {/*sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <span><h1 className="font-effect-anaglyph">Samhitha Kumar</h1></span>
            <button>Download CV <img src={cvImage} height="30px" alt="CV" /></button>
        </div>
        </div>
    )
};
export default Navbar;


 