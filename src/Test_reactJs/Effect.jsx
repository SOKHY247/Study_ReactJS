
// useEffect()      = React Hook that tells React DO SOME code when ( pick one ):
                //   This component  re-renders 
                //   This component mounts
                //    The state of a value 

// useEffect(function, [dependencies])

//1. useEffect(() =>{})                runs after every render (re-render) of the component
//2. useEffect(() =>{}, [])             runs only once after the initial render (componentDidMount)
//3. useEffect(() =>{}, [value])        runs after the initial render and every time the value changes (componentDidUpdate)

//Use 
//1 . Event Listeners
//2. DOM manipulations 
//3. Subscriptions (real-time updates)
//4. Fetching data from an API
//5. Cleanup when a component unmounts (componentWillUnmount)

import { func } from 'prop-types';
import React, { useEffect , useState} from 'react'

function Effect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");


    function addCount() {
      setCount(c => c + 1)
    }
    function subtractCount() {
      setCount(c => c - 1)
    }
    function resetCount() {
      setCount(0)
    }
    useEffect(() => {
        document.title = `Count : ${count} ${color}`;
    }, [count, color])

    function chagneColor(){
      setColor(color === "green" ? "red" : "green")

    }


  return (
    <div>
      <p style={{color : color}}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={chagneColor}>change color</button>
    </div>
  )
}

export default Effect
