import './App.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoElementList } from './newComponents/todoElemetList/TodoElementList'
import { FormModal } from './newComponents/formModal/formModal'

const startData = [
  { 
    id: uuidv4(),
    title: 'Supermarket',
    description: 'Buy vegetables and fruit',
    status: 'Open',
    creation_date: new Date('2022-09-17').toISOString().split('T')[0],
    update_date: new Date().toISOString().split('T')[0],
  },

  { 
    id: uuidv4(),
    title: 'Cinema',
    description: 'Go to the cinema',
    status: 'In Progress',
    creation_date: new Date('2022-09-14').toISOString().split('T')[0],
    update_date: new Date().toISOString().split('T')[0],
  },

  { 
    id: uuidv4(),
    title: 'Pills',
    description: 'Take some pills',
    status: 'Open',
    creation_date: new Date('2022-09-18').toISOString().split('T')[0] ,
    update_date: new Date().toISOString().split('T')[0],
  },

  { 
    id: uuidv4(),
    title: 'Birthday Party',
    description: 'Go to the birthday party',
    status: 'Done',
    creation_date: new Date('2022-09-15').toISOString().split('T')[0],
    update_date: new Date().toISOString().split('T')[0],
  }
]



const App = () =>{

  const[modalElementVisible, setModalElementVisible] = useState(false);
  const [data, setData] = useState(startData);
  const [elementEdit, setElementEdit] = useState({});

  //console.log("data", data);
  //console.log("element", elementEdit);

  const onAddElements = (element) => {
    setData((data) => {
      const newElement = {
          ...element,
          id: uuidv4(),
          update_date: new Date().toISOString().split('T')[0],
      };
      return [...data, { ...newElement }];
    })
      
      setModalElementVisible(false);
  };

 

 




  const onRemoveElements = (id) => {
    const newTodos = data.filter((e) => e.id !== id);
    setData([...newTodos]);
  };

  const onEditElements = (element) => {
    setData(data.map(e => {
      if (e.id === element.id) {
        return element;
      } 
      return e;
    }));


    //console.log(data,'data')
    setModalElementVisible(false);
  };

  const onStartEditElements = (id) => {
    const editedElement = data.find(e => e.id === id);

    setElementEdit({ ...editedElement });
    setModalElementVisible(true);
  };

  const showModal = () => {
    setModalElementVisible(true);
  };

  const closeModal = () => {
    setModalElementVisible(false);
  };

  
  return (
      <div>
          <TodoElementList
              data={data}
              onAddClick={showModal}
              onRemoveElements={onRemoveElements}
              onEditElements={onStartEditElements}
          />
          {modalElementVisible && (
              <FormModal
                  onAddElements={onAddElements}
                  onCloseClick={closeModal}
                  onEditElements={onEditElements}
                  element={elementEdit}
              />
          )}
      </div>
  );
}





export default App;