import React , {useState} from 'react'
import ComponentD from './componentD.jsx'
import { createContext } from 'react';
import ComponentB from './componentB.jsx';

export const UserContext = createContext();

function ComponentA() {

  const [user , setuser] = useState("Sokhey Smos");
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
          <ComponentB user= {user} />
        </UserContext.Provider>
        
        
    </div>
  )
}

export default ComponentA
