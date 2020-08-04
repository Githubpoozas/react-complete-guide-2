import React from 'react'

import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name || 'John'} and I am {props.age || 18} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
