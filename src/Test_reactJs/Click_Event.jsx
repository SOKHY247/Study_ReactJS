// click event = an interaction when a user clicks on a specific element.
//               We can respond to click by passing 
//               a function as the onClick event handler.


import React from 'react'

function Click_Event() {

  let count  = 0;
    const handleClick = ( name ) => {
      if(count < 3){
        console.log(`You can click me ${name} !`);
        count++;
      }
      else{
        console.log( `${name} you have clicked me 3 times, please stop clicking me!` );
      }
    }

    const handleClick2 = (event) => event.target.textContent = "You have clicked me!";

       
  return (
    <div>
      <button onClick={() => handleClick("Say Hellobn")}>Say Hello </button>
      <button onDoubleClick={(e) => handleClick2(e)}>Click me too!</button>
    </div>
  )
}

export default Click_Event
