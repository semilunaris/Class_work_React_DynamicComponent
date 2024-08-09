import React from "react";

 const Controls =({onIncrement, onDecrement}) => {

   return( <div className='Counter_conntrols'>
    <button type='button'onClick = {onIncrement}>увеличить на 1</button>
    <button type='button' onClick = {onDecrement}>уменьшить на 1</button>
</div>
)}


export default Controls