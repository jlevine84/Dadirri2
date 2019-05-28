import React from 'react'
import './booleaninput.css'

function BooleanInput(props) {
  return (
    <div className="boolean">
      <div className="boolean-title">
      * {props.title}:
      </div>

      <div className="true-false">
        <span className="true">True</span>
        <span className="false">False</span>
      </div>

      <div className="true-false-radios">
          <input 
            className="form-check-input true-radio" 
            type="radio" 
            name={props.name}
            value="true"
            onClick={props.update}  
          />
          <input 
            className="form-check-input false-radio" 
            type="radio" 
            name={props.name}
            value="false"
            onClick={props.update} 
            defaultChecked="true"
          />
      </div>

    </div>
  )
}

export default BooleanInput