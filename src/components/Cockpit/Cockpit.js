import React, { useEffect, useRef, useContext } from "react"

import classes from "./Cockpit.css"
import AuthContext from "../../context/auth-context"

const cockpit = props => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)

  // run first time and run then props.persons change
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect")

  // HTTP request...
  //   setTimeout(() => {
  //     alert("Saved data to cloud!")
  //   }, 1000)
  // }, [props.persons])

  // useEffect() can use more then one

  // run first time only
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("only run once")
  //   }, 500)
  // }, [])

  // useEffect clean up
  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    // HTTP request...
    // const timer = setTimeout(() => {
    //   alert("useEffect run but not cleanup yet")
    // }, 1000)
    toggleBtnRef.current.click()

    return () => {
      // clearTimeout(timer)
      console.log("[Cockpit.js] cleanup work in useEffect")
    }
  }, [])

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect")
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect")
    }
  })

  const assignedClasses = []
  let btnClass = ""
  if (props.showPersons) {
    btnClass = classes.Red
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>

      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      {<button onClick={authContext.login}>Login</button>}
    </div>
  )
}

export default React.memo(cockpit)
