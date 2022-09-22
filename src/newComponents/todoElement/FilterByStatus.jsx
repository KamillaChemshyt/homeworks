import React from 'react';
import PropTypes from 'prop-types';
import './TodoElement.css';



export const FilterStatus = ({ onFilterChange, filters }) => {
    return (
        <select className="selects" onChange={onFilterChange}>
            {filters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                    {filter.value}
                </option>
            ))}
        </select>
    );
};

FilterStatus.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
};


