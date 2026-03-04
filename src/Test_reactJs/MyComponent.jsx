import React from 'react'


// onChange = event hadler used primarily with form elments 
//            ex. input, textarea, select
//            Triggered a function every time the value of the input

import { useState } from 'react'
function MyComponent() {
    const [name , setNmame] = useState("Guest");

    const [Quantity , setQuantity] = useState(0);

    const [choose , setChoose] = useState();

    const [shipping , setShipping] = useState("Pick up motor");

    function handleChangeName(event){
        setNmame(event.target.value)
    }
    function handleChangeQuantity(event){
        setQuantity(event.target.value)
    }
    function handleChangeChoose(event){
        setChoose(event.target.value)
    }
    function handleChangeShipping(event){
        setShipping(event.target.value)
    }


  return (
    <div>
      <input 
        type='text'
        onChange={handleChangeName}
        value={name}
        style={{marginTop : 5}}
        placeholder='Enter name here '
      />
      <p>Name : {name}</p>

      <input type="number" 
      onChange={handleChangeQuantity}
      value={Quantity}
      style={{marginTop : 5}}
      placeholder='Enter quantity here '
      />
      <p>Quantity : {Quantity}</p>


      <select onChange={handleChangeChoose} value={choose} style={{marginTop : 5}}>
        <option value="">Select an bank</option>
        <option value="ABA bank">ABA</option>
        <option value="ACELEDS bank">ACELEDS</option>
        <option value="AngKor bank">AngKor bank</option>
      </select>
      <p>Selected option : {choose}</p>


        <label>
            <input type="radio" 
            value='Pick up motor' 
            onChange={handleChangeShipping}
            checked={shipping ==="Pick up motor"}/>
            Pick up motor
        </label><br/>
         <label>
            <input type="radio" 
            value='Delivery motor' 
            onChange={handleChangeShipping}
            checked={shipping ==="Delivery motor"}/>
            Delivery motor
        </label>
        <p>Shipping : {shipping}</p>

        <div>
            <h2>Summary</h2>
            <p>Name: {name}</p>
            <p>Quantity: {Quantity}</p>
            <p>Selected Bank: {choose}</p>
            <p>Shipping: {shipping}</p>
        </div>
    </div>

    

  )
}

export default MyComponent
