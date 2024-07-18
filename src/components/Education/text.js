import jgs from '../../img/jgs.png';
import ts from '../../img/ts.png';
import school from '../../img/school.svg';


export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

let text = [
    {
      id: 1,
      title: "Bachelor of Engineering CSE",
      location: "Chaitanya Bharathi Institute of Technology",
      description:
        "Improved coding skills, gained knowledge about different technologies.",
      date: "December 2021 - present",
      icon:<img src={school} alt=""/>,
    },
    {
      id: 2,
      title:  "TS-Board of Intermediate",
      location: "Narayana Junior College",
      description:
        "Improved mathematical concepts, improved team collaboration and soft skills.",
      date: "April 2019 - March 2021",
      icon: <img src={ts} alt=""/>,
    },
    {
      id: 3,
      title: "Indian Certificate of Secondary Education",
      location:  "Johnson Grammar School(ICSE)",
      description:
        "Gained interest for programming, participated in sports. Gained critical-thinking,communication skills. ",
      
      date: "June 2007 - March 2019",
      icon: <img src={jgs} alt=""/>,
    },
  ];
  
  export default text;