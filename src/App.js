import React, {useState} from "react";
import "./App.css"
import Time from "./component/Time";




function App() {

const [valueStart , setvalueStart] = useState(["00:00", "00:00", "00:00","00:00", "00:00","00:00","00:00" ])
const [valueEnd , setvalueEnd] = useState(["00:00" , "00:00", "00:00","00:00", "00:00","00:00","00:00"])
const day = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]

function UpdateChangeStart(value , xid) {
  const x = [...valueStart];
  x[xid] = value;
  setvalueStart(x)
}

function UpdateChangeEnd(value , xid) {
  const y = [...valueStart];
  y[xid] = value;
  setvalueEnd(y)
}

function ShowList() {
  let Input = prompt("Please enter your name:", "MaryamXim");
  let Inputs = alert("Hi" +" "+ Input + "\n" +
  "These are your FreeTimes:" +"\n"+
  JSON.stringify(day[0])+": "+" From "+ "From"+JSON.stringify(valueStart[0]) +" To "+ JSON.stringify(valueStart[0])+ "\n" +
  JSON.stringify(day[1])+": "+" From "+JSON.stringify(valueStart[1]) +" To "+ JSON.stringify(valueStart[1])+ "\n"+
  JSON.stringify(day[2])+": "+" From "+JSON.stringify(valueStart[2]) +" To "+ JSON.stringify(valueStart[2])+ "\n"+
  JSON.stringify(day[3])+": "+" From "+JSON.stringify(valueStart[3]) +" To "+ JSON.stringify(valueStart[3])+ "\n"+
  JSON.stringify(day[4])+": "+" From "+JSON.stringify(valueStart[4]) +" To "+ JSON.stringify(valueStart[4])+ "\n"+
  JSON.stringify(day[5])+": "+" From "+JSON.stringify(valueStart[5]) +" To "+ JSON.stringify(valueStart[5])+ "\n"+
  JSON.stringify(day[6])+": "+" From "+JSON.stringify(valueStart[6]) +" To "+ JSON.stringify(valueStart[6])+ "\n" )
}

function Delete(){
  setvalueStart("00:00");
  setvalueEnd("00:00");
      // window.localStorage.clear()
      // window.location.reload()
}

  return (
    <div className="App">
      <div className="App-header">
     <Time day={day[0]}
      valueStart={valueStart[0]}
      valueEnd={valueEnd[0]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,0)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,0)}/>
     <Time day={day[1]}
      valueStart={valueStart[1]}
      valueEnd={valueEnd[1]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,1)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,1)}/>
     <Time day={day[2]}
      valueStart={valueStart[2]}
      valueEnd={valueEnd[2]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,2)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,2)}/>
     <Time day={day[3]}
      valueStart={valueStart[3]}
      valueEnd={valueEnd[3]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,3)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,3)}/>
     <Time day={day[4]}
      valueStart={valueStart[4]}
      valueEnd={valueEnd[4]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,4)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,4)}/>
     <Time day={day[5]}
      valueStart={valueStart[5]}
      valueEnd={valueEnd[5]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,5)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,5)}/>
     <Time day={day[6]}
      valueStart={valueStart[6]}
      valueEnd={valueEnd[6]}
      onChangeValueStart={ev => UpdateChangeStart(ev.target.value,6)}
      onChangeValueEnd= {ev => UpdateChangeEnd(ev.target.value,6)}/>

 <div className="buttons">
  <button onClick={Delete}>Cancel</button>
<button onClick={ShowList}> Save scheduler </button>
</div>

      </div>
    </div>
  );
}

export default App;
