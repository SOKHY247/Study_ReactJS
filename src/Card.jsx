import React from 'react'
import  Profilers  from './assets/DSC_5903.webp'

function Card() {
  return (
    <div className='card'>
        <img className='card-imge' src={Profilers} alt="profiles picture" style={{width : 250, }}></img>
        <h2 className='card-title'>Card</h2>
        <p className='card-text'>This is a card and Lambogini</p>
    </div>
  )
}

export default Card
