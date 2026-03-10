
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

  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED")
    return () =>{
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED")

    }
  }, []);

  useEffect(() => {
    document.title = `Size : ${width} x ${height}`;
  })

  function handleResize(){
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  }

  return (
    <div>
      <p>Width : {width}px</p>
      <p>Height : {height}px</p>
    </div>
  )
}

export default Effect
