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
        <Route path="/FreeTime" exact element={<FisrtName />} />
        <Route path="/FreeTime/showList" exact element={<GetTime />} />
        <Route path="/FreeTime/resualt" exact element={<ShowList />} />

      </Routes>
    </Router>
  );
};

export default MainRouter;
