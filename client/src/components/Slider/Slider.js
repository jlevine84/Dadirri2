import React from 'react'
import './slider.css'

function Slider(props) {
  return (
    <div className="slider">
      <label>* {props.name}: {props.display}</label>
      <br/>
      <input className=""
        name={props.name}
        type="range"
        min="1"
        max="10"
        defaultValue={props.defaultValue}
        onChange={props.update}
      />
    </div>
  )
}

export default Slider