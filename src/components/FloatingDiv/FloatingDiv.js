import './FloatingDiv.css';

const FloatingDiv = ({txt1,txt2}) => {
  return (
    <div className="floatingdiv">
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv