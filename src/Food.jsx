import React from 'react'

function Food() {

    const food1 = "Orange"
    const food2 = "Apple"
    const food3 = "Banana"

  return (
    <div>
        <ul>
            <li>Fruits</li>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3}</li>
        </ul>
      
    </div>
  )
}

export default Food
