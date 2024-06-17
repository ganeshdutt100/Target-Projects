import React, { useState , useRef ,useEffect} from 'react'

export const Countdown = () => {
    const [hours , setHours] =  useState(4);
    const [minutes , setMinutes] =  useState(0);
    const [second , setSecond] =  useState(10);
    const [isActive , setIsActive] =  useState(false);
    const timer = useRef(null);


    useEffect( () => {
        if(isActive){
            timer.current  = setInterval(() =>{
                if(second > 0 ){
                    setSecond( second -1);
                }
                else if( second === 0){
                       if(minutes === 0){
                        if( hours === 0){
                            clearInterval(timer.current);
                            setIsActive(false);
                        }
                        else{
                            setHours(hours-1);
                            setMinutes(59);
                            setSecond(59);
                        }
                        }

                        
                        else{
                            setMinutes(minutes-1);
                            setSecond(59);
                        }
            }
            },1000);
        }
       return () => clearInterval(timer.current);
    },[isActive,hours,minutes,second]);

    const start = () => {
        setIsActive(true)
    } 
    const stop = () => {
        setIsActive(false)
        clearInterval(timer.current);
        
    }



  return (
    <div>

        
        <h1>
           {hours < 10 ? `0${hours}`:hours}:  
           {minutes < 10 ? `0${minutes}`:minutes}:  
           {second < 10 ? `0${second}`:second}
    
        </h1>
       

        <button className='btn btn-danger' onClick={start} disabled={isActive} >Start</button>
        <button className='ms-3 btn btn-danger' onClick={stop} disabled={!isActive}>Stop</button>

    </div>
  )
}
