import React, { Component } from "react"
import classes from "./App.css"
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js] constructor")

    // init state old way
    // this.state = {
    //   persons: [
    //     { id: "asdf", name: "Max", age: 28 },
    //     { id: "ewrgfd", name: "Manu", age: 29 },
    //     { id: "saewr", name: "Stephanie", age: 26 },
    //   ],
    //   otherState: "some other value",
    //   showPersons: false,
    // }

    // do not this.setState() because there is no state to merge
  }

  // init state modern way
  state = {
    persons: [
      { id: "asdf", name: "Max", age: 28 },
      { id: "ewrgfd", name: "Manu", age: 29 },
      { id: "saewr", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props, state)
    return state
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount")
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate")
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons,
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    // get copy of this object by index
    const person = { ...this.state.persons[personIndex] }

    // const persons = Object.assign({}, this.state.persons[personIndex])

    // mutate name value
    person.name = event.target.value

    // get copy of persons array
    const persons = [...this.state.persons]

    // mutate copy persons array
    persons[personIndex] = person

    // setState original persons array
    this.setState({
      persons: persons,
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow,
    })
  }

  render() {
    console.log("[App.js] render")

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
