import React, {useState} from "react";
// import DatePicker from "react-datepicker";
// import TimePicker from "react-time-picker";
// import Time from "./component/Time";
import "./App.css"
import Time from "./component/Time";



       


function App() {

function myFunction() {
  // let text;
  let Input = prompt("Please enter your name:", "MaryamXim");

  
  // if (person == null || person == "") {
  //   text = "User cancelled the prompt.";
  // } else {
  //   text = "Hello " + person + "! How are you today?";
  // }
}

  return (
    <div className="App">
      <div className="App-header">
     <Time day={"Saturday"}/>
     <Time day={"Sunday"}/>
     <Time day={"Monday"}/>
     <Time day={"Tuesday"}/>
     <Time day={"Wednesday"}/>
     <Time day={"Thursday"}/>
     <Time day={"Friday"}/>

 <div className="buttons">
  <button>Cancel</button>
<button onClick={myFunction}> Save scheduler </button>
</div>

      </div>
    </div>
  );
}

export default App;
