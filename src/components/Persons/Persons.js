import React, { PureComponent } from "react"

import Person from "./Person/Person"

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Person.js] getDerivedStateFromProps")
  //     return state
  //   }

  //   componentWillReceiveProps(props) {
  //     console.log("[Persons.js] componentWillReceiveProps", props)
  //   }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate")
  //   if (
  //     nextProps.per !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  //   // return true
  // }

  getSnapshotBeforeUpdate(pervProps, pervState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return { message: "Snapshot!" }
  }

  //   componentWillUpdate(){}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate")
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }

  render() {
    console.log("[Persons.js] rendering...")

    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        ></Person>
      )
    })
  }
}

export default Persons
