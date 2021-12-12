import React, { useState } from 'react';
import './firstname.css';

const FisrtName = function () {
  const [name, setName] = useState('');
  localStorage.setItem('name', JSON.stringify(name));
  return (
    <div>
      <div className="Totalss">
        <div className="Captions">Whats your name?</div>

        <div className="inputs">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="fullname"
          />
        </div>
        <div className="button-first">
          {' '}
          <a href="/FreeTime/showList">
            <input type="submit" value="Submit" />

          </a>
        </div>
      </div>
    </div>

  );
};

export default FisrtName;
