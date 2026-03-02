import React from 'react'
// import style from './Button.module.css'
function Button() {

  const styles = {
       backgroundColor: "aquamarine",
       color: "white",
       padding: "20px 20px",
       borderRadius: "5px",
       border: "none",
       cursor: "pointer",
      
    }
  return (

    <>
    <div>
      <button style={styles}>Click Me</button>
    </div>

    
    </>
  )
}

export default Button
