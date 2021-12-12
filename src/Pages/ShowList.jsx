import React from 'react';
// import GetTime from './GetTime';
import './ShowList.css';

const FisrtName = function () {
  const timeStartString = localStorage.getItem('valueStart');
  const timeStart = JSON.parse(timeStartString);
  const timeEndString = localStorage.getItem('valueEnd');
  const timeEnd = JSON.parse(timeEndString);
  const dayOfWeekString = localStorage.getItem('day');
  const dayOfWeek = JSON.parse(dayOfWeekString);

  // console.log(ss);
  return (
    <div className="Totalss">
      <div className="title">

        Hi Mr/Miss
        {' '}
        {localStorage.getItem('name')}
        {' '}
        <br />
        <br />
      </div>
      Your Free Times:
      <div className="maryamzim">
        <div className="daysofss">
          {dayOfWeek.map((first) => (
            <div>

              {' '}
              {first}
              {' '}
              {}

            </div>
          ))}
        </div>

        <div className="daysof">
          { timeStart.map((first) => (
            <div>
              From
              &nbsp;
              {' '}
              [
              {first}
              ]
              {' '}
              {}

            </div>
          ))}
        </div>

        <div className="daysof">
          { timeEnd.map((first) => (
            <div>
              &nbsp;
              To
              &nbsp;
              {' '}
              [
              {first}
              ]
              {' '}
              {}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FisrtName;
