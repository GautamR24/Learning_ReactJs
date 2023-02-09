import React ,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text,setText] = useState("Enter the text here");
    const handleUpperCase = () =>{
        //console.log("handle upper case button was clicked");
        let value = text.toUpperCase();
        setText(value);
    }

    const handleTextBox = (event)=>{//evert variable is by default given by the onChange
        //console.log("text is changed");
        setText(event.target.value);//we are setting the new value of text everytime we are making a change in input box
    }
  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            {/* here on change is imp to update the state of text variable */}
            <textarea className="form-control" id="myBox1" value={text} onChange={handleTextBox} rows="8"></textarea> 
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Upper case</button>
    </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}