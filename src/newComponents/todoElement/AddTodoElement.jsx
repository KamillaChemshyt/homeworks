import React from 'react';
import PropTypes from 'prop-types';

import './TodoElement.css'
export const AddElement = ( {onAddClick}) => {

    return (
        <div className='element addElement' onClick={onAddClick}>
            Add
        </div>
    )
}


AddElement.propTypes = {
    onAddClick: PropTypes.func.isRequired,
}
 
 