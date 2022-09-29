import React, { useMemo, useState, useCallback } from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {selectTodoData} from '../../redux/todoList/selector';
import {removeItem, filterByCreatingDate, filterByUpdateDate} from '../../redux/todoList/actions';
import {showModal} from '../../redux/app/actions';

import { TodoElement } from '../todoElement/TodoElement';
import { AddElement } from '../todoElement/AddTodoElement';
import { FilterStatus } from '../todoElement/FilterByStatus';
import { FilterByDate } from '../todoElement/FilterByData';

import './TodoElementList.css';


export const filters = [
    {
        
        value: 'All',
    },
    {
        
        value: 'Open',
    },
    {
       
        value: 'In Progress',
    },
    {
       
        value: 'Done',
    },
];


export const TodoElementList = () => {

    const dispatch = useDispatch();

    const onRemoveElements = useCallback( (id) => {
        dispatch(removeItem(id))
    }, [dispatch]);
    const data = useSelector(selectTodoData);

    const onAddClicked = useCallback(() => {
        dispatch(showModal())
    }, [dispatch]);

    const onEditElements = useCallback((id) => {
        dispatch(showModal(id))
    }, [dispatch]);

    const filterByCreate = useCallback((creation_date) => {
        dispatch(filterByCreatingDate(creation_date));
    }, [dispatch]);

    const filterByUpdate = useCallback((update_date) => {
        dispatch(filterByUpdateDate(update_date));
    }, [dispatch]);


    


   




    const [currentFilter, setCurrentFilter] = useState('All');
    
    const memoizedData = useMemo(() => {
        
        const filteredData = data.filter((item) => {
            if (currentFilter === 'All') {
                return true;
            }

            return item.status === currentFilter;
        });

        return filteredData;
    }, [data, currentFilter]);

    const onFilterChange = (event) => {
        const { value } = event.target;
        setCurrentFilter(value);
    }
    


  


   
    return (
        <div >
           <div className='allButtons'>
            <AddElement onAddClick={onAddClicked} />
            <FilterByDate filterByCreate={filterByCreate} filterByUpdate = {filterByUpdate} />
            <FilterStatus onFilterChange={onFilterChange} filters={filters} />
            </div>
            <div className='elementList'>
            {!!memoizedData.length
                ? memoizedData.map((element) => (
                      <TodoElement
                          element={element}
                          key={element.id}
                          onRemoveElements={onRemoveElements}
                          onEditElements={onEditElements}
                      />
                  ))
                : 'No todos'}
                </div>
        </div>
    );
}



