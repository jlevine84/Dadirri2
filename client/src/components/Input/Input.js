import React from 'react'
import './input.css'


function Input(props) {
  return (
    <div className="form-group input">
      <label>{props.title}</label>
      <textarea 
        className="form-control" 
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.update}
        rows="5"/>
    </div>
  )
}

export default Input