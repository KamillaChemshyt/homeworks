import './App.css';
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import {WelcomePage} from './newComponents/WelcomePage/WelcomePage';
import{DashboardPage} from './newComponents/DashboardPage/DashboardPage';
import {NewForm} from './newComponents/NewForm/NewForm';



const App = () =>{


  return (
      <div>
        <Routes>
          <Route path='*' element={<WelcomePage/>}/>
          <Route path='/app' element={<DashboardPage/>}>
            <Route path='edit' element={<NewForm/>}/>
          </Route>
        </Routes>
      </div>
  );
}





export default App;