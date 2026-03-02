import React from 'react'
import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className='student'>
      <p>Name student : {props.name}</p>
      <p>Age student : {props.age}</p>
      <p>Grade student : {props.grade}</p>
      <p>Student : {props.isStudent ? "True" : "False"}</p>
    </div>
  )
}

Student.propTypes = {   // ✅ FIXED
  name: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.string,
  isStudent: PropTypes.bool,
}
Student.defaultProps = {
  name: "Guest",
  age: 0,
  grade: "C",
  isStudent: true,
}

export default Student