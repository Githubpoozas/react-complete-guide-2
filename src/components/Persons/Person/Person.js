import React, { Component } from "react"
import classes from "./Person.css"

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...")
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name || "John"} and I am {this.props.age || 18} years
          old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
}

export default Person
