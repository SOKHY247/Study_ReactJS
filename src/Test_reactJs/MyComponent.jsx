import React from 'react'


// updater function = A function passed as an argument to the setState() usually 
//                    ex. seYear(year + 1)
//                    Allows for safe updates based on the provious state Used with multiple state udpates and            synchrounus functions Good practice to use upadter functions
import { useState } from 'react'
function MyComponent() {
  const [car, setcar] = useState(
    { brand: 'Toyota',
       model: 'Camry', 
       year: 2020 

    });

    function updateCar(event){
      setcar(car => ({
        ...car, year:
        event.target.value

      }));
    }
   function updateCar(event){
    setcar(car => ({
      ...car, brand:
      event.target.value
    }))
   }
    function updateCar1(event){
      setcar(car =>({
        ...car, model:
        event.target.value
      }))
    }



  return (
    <div>
      <h1>My Car : {car.brand} {car.model} {car.year} </h1>
      <input type="number" value={car.year} onChange={updateCar}/><br/>
      <input type="text" value={car.brand} onChange={updateCar}/><br/>
      <input type="text" value={car.model} onChange={updateCar1}/><br/>



    </div>

    

  )
}

export default MyComponent
