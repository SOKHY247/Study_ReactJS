import React from 'react'


// React Hook = A special function that allows you functional components to use Reat features without writting class components ( React v16.8)
//              (useState, useEffect, useContext, useRef, useReducer, useMemo, useCallback, useLayoutEffect, useDebugValue)


// useState  = A React hook that allows the creation of a stateful variable AND is setter function to update its value in the virtual DOM.
//             [name , setName]

import  { useState } from 'react'
function React_hook() {

  const [name, setName] = useState("Gust");

  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);



  const changeName = () => {
    setName("Sokhy hello world");
  }

const SetcountAge = () => {
  setAge(age + 3);
}
const resetAge = () => {
  setAge(0);
}

const changeEmployedStatus = () => {
  setIsEmployed(!isEmployed);
}
  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={changeName} style={{cursor : "pointer"}}>Change Name</button>

      <p>Age : {age}</p>
      <button onClick={SetcountAge} style={{cursor : "pointer"}}>Increase Age</button>


      <button onClick={resetAge} style={{cursor : "pointer"}}>Reset Age</button>

      <p>Employed : {isEmployed ? "Yes" : "No"}</p>
      <button onClick={changeEmployedStatus} style={{cursor : "pointer"}}>Change Employed Status</button>
    </div>
  )
}

export default React_hook
