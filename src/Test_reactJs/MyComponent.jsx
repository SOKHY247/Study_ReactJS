import React, { use } from 'react'
// useState()    = Re-renders the component when the state value changes.

//useRef()       = "use Reference" Does not cause re-renders when its valuse changes.
//                  When you wnat a component to "remember" some information,
//                   but you don't want that information to trigger new renders.

//               1. Acessing/ Information with DOM elements
//               2. Handling Focus, Animations , and Transitions.
//               3. Managing Timers and Intervals.

import { useRef, useEffect, useState } from 'react'

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick1(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "blue";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2(){
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "blue";
    inputRef3.current.style.backgroundColor = "";
  
  }

  function handleClick3(){
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "blue";
  }

  return (
    <div>
      <button onClick={handleClick1} style={{color : "blue"}}>
        Click me!
      </button>
      <input ref={inputRef1}/>

      <button onClick={handleClick2} style={{color : "blue"}}>
        Click me!
      </button>
      <input ref={inputRef2}/>

      <button onClick={handleClick3} style={{color : "blue"}}>
        Click me!
      </button>
      <input ref={inputRef3}/>
    </div>
  )
}

export default MyComponent
