import './App.css';
import { useSelector} from 'react-redux';
import React, { useState } from 'react';


import {selectModalElementVisible} from './redux/app/selector';
import { v4 as uuidv4 } from 'uuid';
import { TodoElementList } from './newComponents/todoElemetList/TodoElementList'
import { FormModal } from './newComponents/formModal/formModal'




const startData = [];



const App = () =>{

  
  

  //console.log("data", data);
  //console.log("element", elementEdit);

  //onAddElements, onEditElements, onStartEditElements

  const modalElementVisible = useSelector(selectModalElementVisible);

  //console.log("modalElementVisible ", modalElementVisible);


  
  return (
      <div>
          <TodoElementList/>
          {modalElementVisible && (<FormModal/>)}
      </div>
  );
}





export default App;