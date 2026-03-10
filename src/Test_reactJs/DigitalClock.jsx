import React, { use } from 'react'
import { useState, useEffect } from 'react'

function DigitalClock() {

    const [time , setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date());

        }, 1000);

        return() => {
            clearInterval(interval);
        }

    }, []);

    function toTimeKhmer(num){
      const khmernum ={
        0:"០",1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩"
    }
    
    return num.toString().replace(/[0-9]/g, 
      function(digit){
        return khmernum[digit];
      });
    }

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        const formatted = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
        //const formatted = `${hours}}:${minutes}:${seconds}:${meridiem}`;
        return toTimeKhmer(formatted)

    }

    function padZero(number){
      return (number < 10 ? "0" : "") + number;
    
    }

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>

      </div>
    </div>
  )
}

export default DigitalClock
