import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

// import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/withClass"
import classes from "./Person.css"
import AuthContext from "../../../context/auth-context"

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }

  render() {
    console.log("[Person.js] rendering...")
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name || "John"} and I am {this.props.age || 18} years
          old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {
          //   this.inputElement = inputEl
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  nane: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person)
