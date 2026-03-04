import React from 'react'


// updater function = A function passed as an argument to the setState() usually 
//                    ex. seYear(year + 1)
//                    Allows for safe updates based on the provious state Used with multiple state udpates and            synchrounus functions Good practice to use upadter functions
import { useState } from 'react'
function MyComponent() {
  const [count, setcount] = useState(0)


  function handleIncrement() {
    setcount(peices => peices + 1)
  }

  function handleReset() {
    setcount(0)
  }
  function handleDecrement() {
    setcount(count - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>

    

  )
}

export default MyComponent
