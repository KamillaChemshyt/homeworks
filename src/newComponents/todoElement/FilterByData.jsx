import React from 'react';
import PropTypes from 'prop-types';
import { Button} from '@mui/material';

import './TodoElement.css'
export const FilterByDate = ( {filterByCreate, filterByUpdate} ) => {

    return (
        <div className="buttonsDate">
        <div className="dButtons">
            <Button className='dataButtons' variant="contained" onClick={filterByCreate} size="small">Creating date</Button>
            </div>
            <div className="dButtons">
            <Button  className='dataButtons'variant="contained" onClick={filterByUpdate} size="small">Updating date</Button>
        </div>
        </div>
    )
}


FilterByDate.propTypes = {
    filterByCreate: PropTypes.func.isRequired,
    filterByUpdate: PropTypes.func.isRequired,
}