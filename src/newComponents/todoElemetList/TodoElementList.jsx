import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { TodoElement } from '../todoElement/TodoElement';
import { AddElement } from '../todoElement/AddTodoElement';
import { FilterStatus } from '../todoElement/FilterByStatus';
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


export const TodoElementList = ({ data, onAddClick, onRemoveElements, onEditElements }) => {
    const [currentFilter, setCurrentFilter] = useState('All');
    
    const memoizedData = useMemo(() => {
        const sortedData = [...data].sort(
            (a, b) => new Date(a.creation_date) - new Date(b.creation_date)
        );
        const filteredData = sortedData.filter((item) => {
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
            <AddElement onAddClick={onAddClick} />
            <FilterStatus onFilterChange={onFilterChange} filters={filters} />
        </div>
    );
}



TodoElementList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    creation_date: PropTypes.string,
    update_date: PropTypes.string,
    })),
    onAddClick: PropTypes.func.isRequired,
    onRemoveElements: PropTypes.func.isRequired,
    onEditElements: PropTypes.func.isRequired,
}