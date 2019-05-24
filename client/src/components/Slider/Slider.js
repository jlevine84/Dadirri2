import React from 'react'
import './slider.css'

function Slider(props) {
  return (
    <div className = "float">
      <label>* {props.name}</label>
      <br/>
      <input className="sliders"
        name={props.name}
        type="range"
        min="1"
        max="10"
        defaultValue={props.defaultValue}
        onChange={props.update}
      />
      <p>{props.display}</p>
    </div>
  )
}

export default Slider