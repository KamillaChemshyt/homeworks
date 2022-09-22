import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import './TodoElement.css'
import {changeColorByStatus} from '../../status/elementsStatus'
export const TodoElement = ( {element, onRemoveElements = () => {}, onEditElements = () => {} }) => {

const cardStyle = useMemo( () => {
    return {backgroundColor: changeColorByStatus(element.status)}
}, [element.status])

const onRemoveClick = useCallback(() => {
    onRemoveElements(element.id)
},[element.id, onRemoveElements]);

const onEditClick = useCallback(() => {
    onEditElements(element.id)
},[element.id, onEditElements]);


    return (
        <div style = {cardStyle} className='element'>
            <div className='elemContainer'>
            <div>
                {element.title}
            </div>

            <div>
                {element.description}
            </div>

            <div>
                {element.status}
            </div>

            <div>
                {element.creation_date}
            </div>

            <div>
                {element.update_date}
            </div>
        </div>
            <div className="buttons">
                <button onClick={onRemoveClick}>Remove</button>
                <button onClick={onEditClick}>Edit</button>
            </div>
        </div>
    )
}



TodoElement.propTypes = {
    element: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    creation_date: PropTypes.string,
    update_date: PropTypes.string,
    }),
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,

}                


           


