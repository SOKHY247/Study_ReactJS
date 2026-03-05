import React from 'react'


// updater function = A function passed as an argument to the setState() usually 
//                    ex. seYear(year + 1)
//                    Allows for safe updates based on the provious state Used with multiple state udpates and            synchrounus functions Good practice to use upadter functions
import { useState } from 'react'

// update list in react js
function MyComponent() {

  const [people, setPeople] = useState(['John', 'Jane', 'Doe', 'Smith'])


  function addPeople() {

    const InputNewPerson = document.getElementById('peopleInput').value;
    document.getElementById('peopleInput').value = '';

    setPeople(P =>[...P, InputNewPerson]);

  }
  function removePeople(index) {
    setPeople(people.filter((_p, i) => i!== index));

  }

  return (
    <div >
      <h2>List of The People : </h2>
    <ul style={{cursor : "pointer"}}>
      {people.map((Person, Index) => <li key={Index} onClick={() => removePeople(Index)}>{Person}</li>)}
    </ul>
    <input type="text" id='peopleInput' placeholder='Enter people ' />
    <button onClick={addPeople} style={{cursor: "pointer"}}>Add People</button>
    
    </div>

    

  )
}

export default MyComponent
