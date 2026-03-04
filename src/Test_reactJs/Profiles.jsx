import React from 'react'

// click event = An interaction when a user clicks on a specific elment We can respond to click by passing a callback to the onClick event handler.
function Profiles() {
    const profiles = './src/assets/DSC_5903.webp';

    const handleClick = (e) => e.target.style.display = "none";
  return (
    <div>
      <img src={profiles} alt="" style={{width : 500, height : 350 , marginTop : 10, cursor : "pointer"}} onClick={(e) => handleClick(e)}/>

      
    </div>
  )
}

export default Profiles
