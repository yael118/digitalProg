import React, { useEffect, useState } from 'react';

export default function Microphone({id, isOpen}) {
const[isOpenState,setOpenState] = useState(isOpen);

useEffect(()=>{
  setOpenState(isOpen);
},[isOpen])
    return (
      <div className='micro-icon'>
        {isOpenState == true ?
        <i class="bi bi-mic-fill"></i> :
        <i class="bi bi-mic-mute"></i>
        }  
      </div>
      );
    }