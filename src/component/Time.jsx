import React from 'react';
import './time.css';

const Time = function ({
  day,
  valueStart,
  valueEnd,
  onChangeValueStart,
  onChangeValueEnd,
}) {
  return (
    <div className="total">
      <div>{day}</div>
      <div>
        <input
          type="time"
          onChange={onChangeValueStart}
          min="00:00"
          max="23:59"
          step="60"
          value={valueStart}
        />
        &nbsp; To &nbsp;
        <input
          type="time"
          onChange={onChangeValueEnd}
          min="00:00"
          max="23:59"
          step="60"
          value={valueEnd}
        />
        {' '}
      </div>
    </div>
  );
};

export default Time;
