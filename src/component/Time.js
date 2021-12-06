import React,{useState} from "react";
import "./time.css"

function Time({day}) {
    const [value, setValue] = useState('00:00');
console.log(value)
    return(

<div className="total">
<div>{day}</div> <div><input
      type="time"
      onChange={ev => setValue(ev.target.value)}
      min="00:00"
      max="23:59"
      step="60"
      value={value}
    />
     To 
      <input type="time"/> </div>

      <div> time is {value}</div>
</div>
    )
}


export default Time;