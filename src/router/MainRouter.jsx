import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FisrtName from '../Pages/Firstname';
import GetTime from '../Pages/GetTime';

const MainRouter = function () {
  return (
    <Router>
      <Routes>
        <Route path="/FreeTime/" element={<FisrtName />} />
        <Route path="/FreeTime/showList" element={<GetTime />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
