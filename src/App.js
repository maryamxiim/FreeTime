import React, {useState} from "react";
// import DatePicker from "react-datepicker";
// import TimePicker from "react-time-picker";
// import Time from "./component/Time";
import "./App.css"



       


function App() {
const [valueaStart, setValueStart] = useState('00:00');
const [valueEnd, setValuesEnd] = useState('00:00');

  return (
    <div className="App">
      <div className="App-header">
      <div className="total">
      <div>Saturday</div>
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

      <div> FreeTime is {valueaStart} to {valueEnd}</div>
</div>
{/* 
 <div className="buttons">
  <button>Cancel</button>
<button> Save scheduler </button>
</div> */}

      </div>
    </div>
  );
}

export default App;
