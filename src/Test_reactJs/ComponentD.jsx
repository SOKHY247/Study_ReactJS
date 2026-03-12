import React , {useContext}from 'react'
import { UserContext } from './componentA'
function ComponentD() {

  const user = useContext(UserContext);
  console.log(user)

 

  return (
    <div className='box'>
        <h1>Component D</h1>
        <h2>{`Hello ${user}`}</h2>
      
    </div>
  )
}

export default ComponentD
