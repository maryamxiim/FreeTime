import React,{useState} from "react";
import "./time.css"

function Time({day}) {
    const [valueaStart, setValueStart] = useState('00:00');
const [valueEnd, setValuesEnd] = useState('00:00');
    return(

        <div className="total">
        <div>{day}</div>
   <div><input
        type="time"
        onChange={ev => setValueStart(ev.target.value)}
        min="00:00"
        max="23:59"
        step="60"
        value={valueaStart}
      />
       To 
       <input
        type="time"
        onChange={ev => setValuesEnd(ev.target.value)}
        min="00:00"
        max="23:59"
        step="60"
        value={valueEnd}
      /> </div>
  
        <div> FreeTime in {day} is {valueaStart} to {valueEnd}</div>
  </div>
    )
}


export default Time;