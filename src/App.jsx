import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './components/Button.jsx'
import Student from './Test_reactJs/Student.jsx'
import UserGeeting from './UserGeeting.jsx'
import List from './Test_reactJs/List.jsx'  



function App() {

   const fruits = [
        {id : 1 , name : "Apple" , calories :  100},
        {id : 2 , name : "Orange" ,calories : 200},
        {id : 3 , name : "Banana" , calories : 300},
        {id : 4 , name : "Mango" , calories : 400},
        {id : 5 , name : "Pineapple" , calories : 500},
        {id : 6 , name : "Grapes" , calories : 600},
        {id : 7 , name : "Watermelon" , calories : 700},
        {id : 8 , name : "Strawberry" , calories : 800},
        {id : 9 , name : "Blueberry" , calories : 900},
        {id : 10 , name : "Kiwi" , calories : 1000}
    ];
    const vegetable = [
        {id : 1 , name : "Carrot" , calories : 100},
        {id : 2 , name : "Broccoli" ,calories : 200},
        {id : 3 , name : "Spinach" , calories : 300},
        {id : 4 , name : "Cabbage" , calories : 400},
        {id : 5 , name : "Lettuce" , calories : 500},
        {id : 6 , name : "Tomato" , calories : 600},
        {id : 7 , name : "Cucumber" , calories : 700},
        {id : 8 , name : "Bell Pepper" , calories : 800},
        {id : 9 , name : "Onion" , calories : 900},
        {id : 10 , name : "Garlic" , calories : 1000}
    ]
  return(
    <div> 
      <Card/>
      <Button/>
      {/* <Student name= "Sokhy"  age ={44} grade="A" isStudent ={false}/>
      <Student name= "Sokhey"  age ={76} grade="B" isStudent ={false}/> */}
    ​​   <Student />
        <UserGeeting isLoaggedIn={true} username = "Sokhy"/>



        {fruits.length > 0 ? <List items ={fruits} /> : <h2>No Fruits Available</h2>}
        {vegetable.length > 0 ? <List items ={vegetable} category="Vegetables"/> : <h2>No Vegetables Available</h2>}
        

      
      

      {/* <Header/>
      <Food/>
      <Footer/> */}
    </div>
  )
}

export default App
