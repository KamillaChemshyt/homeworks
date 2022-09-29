import React from 'react';
import PropTypes from 'prop-types';
import { Button} from '@mui/material';

import './TodoElement.css'
export const AddElement = ( {onAddClick}) => {

    return (
        <div className="add">
            <Button className="addElement" variant="contained" onClick={onAddClick} >Add</Button>
    </div>
    )
}


AddElement.propTypes = {
    onAddClick: PropTypes.func.isRequired,
}
 
 