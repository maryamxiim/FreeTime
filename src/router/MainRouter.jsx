import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FisrtName from '../Pages/Firstname';
import GetTime from '../Pages/GetTime';
import ShowList from '../Pages/ShowList';

const MainRouter = function () {
  return (
    <Router>
      <Routes>
        <Route path="/FreeTime" element={<FisrtName />} />
        <Route path="/FreeTime/showList" element={<GetTime />} />
        <Route path="/FreeTime/resualt" element={<ShowList />} />

      </Routes>
    </Router>
  );
};

export default MainRouter;
