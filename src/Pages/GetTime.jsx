import React, { useState } from 'react';
import './App.css';
import swal from 'sweetalert';
import Time from '../component/Time';

// eslint-disable-next-line func-names
const App = function () {
  const [valueStart, setvalueStart] = useState([
    '00:00',
    '00:00',
    '00:00',
    '00:00',
    '00:00',
    '00:00',
    '00:00',
  ]);
  const [valueEnd, setvalueEnd] = useState([
    '00:00',
    '00:00',
    '00:00',
    '00:00',
    '00:00',
    '00:00',
    '00:00',
  ]);
  const day = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  function UpdateChangeStart(value, xid) {
    const x = [...valueStart];
    x[xid] = value;
    setvalueStart(x);
  }

  function UpdateChangeEnd(values, xids) {
    const y = [...valueEnd];
    y[xids] = values;
    setvalueEnd(y);
  }

  function ShowList() {
    swal('Please inter your name:', {
      content: 'input',
    }).then((value) => {
      swal(
        `${
          // eslint-disable-next-line no-useless-concat
          'Hi' + ' ' + `${value} ` + '\n' + 'These are your FreeTimes:' + '\n'
        }${JSON.stringify(day[0])}: `
          + ' From '
          + `From${JSON.stringify(valueStart[0])} To ${JSON.stringify(
            valueEnd[0],
          )}\n${JSON.stringify(day[1])}: `
          + ` From ${JSON.stringify(valueStart[1])} To ${JSON.stringify(
            valueEnd[1],
          )}\n${JSON.stringify(day[2])}: `
          + ` From ${JSON.stringify(valueStart[2])} To ${JSON.stringify(
            valueEnd[2],
          )}\n${JSON.stringify(day[3])}: `
          + ` From ${JSON.stringify(valueStart[3])} To ${JSON.stringify(
            valueEnd[3],
          )}\n${JSON.stringify(day[4])}: `
          + ` From ${JSON.stringify(valueStart[4])} To ${JSON.stringify(
            valueEnd[4],
          )}\n${JSON.stringify(day[5])}: `
          + ` From ${JSON.stringify(valueStart[5])} To ${JSON.stringify(
            valueEnd[5],
          )}\n${JSON.stringify(day[6])}: `
          + ` From ${JSON.stringify(valueStart[6])} To ${JSON.stringify(
            valueEnd[6],
          )}\n`,
      );
    });
  }

  function Delete() {
    setvalueStart([
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
    ]);
    setvalueEnd([
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
      '00:00',
    ]);
  }

  return (
    <div>
      <div className="Totalss">
        <div className="Total">
          <div className="Header">Set standard Hours</div>
          <div className="Caption">
            Configure the standard hours of operation
          </div>
        </div>
        <div className="App">
          <div className="App-header">
            {day.map((time, index) => (
              <Time
                key={time}
                day={time}
                valueStart={valueStart[index]}
                valueEnd={valueEnd[index]}
                onChangeValueStart={(ev) => UpdateChangeStart(ev.target.value, index)}
                onChangeValueEnd={(e) => UpdateChangeEnd(e.target.value, index)}
              />
            ))}

            <div className="buttons">
              <button type="button" onClick={Delete}>
                Cancel
              </button>
              <button type="button" onClick={ShowList}>
                {' '}
                Save scheduler
                {' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
