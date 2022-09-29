import React from 'react';
import PropTypes from 'prop-types';
import './TodoElement.css';
import {FormControl, Select, MenuItem } from '@mui/material';


export const FilterStatus = ({ onFilterChange, filters }) => {
    return (
        <div className="selects">
        <FormControl fullWidth>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={onFilterChange} >
                {filters.map((filter) => (
                <MenuItem key={filter.value} value={filter.value}>
                    {filter.value}
                </MenuItem>
                ))}
            </Select>
        </FormControl>
        </div>
    );
};

FilterStatus.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
};


