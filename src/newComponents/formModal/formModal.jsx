import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './formModal.css';

export const FormModal = ({element, onAddElements, onEditElements, onCloseClick}) => {

    const [title, setTitle] = useState(element.id ? element.title : '');
    const [status, setStatus] = useState(element.id ? element.status : '');
    const [description, setDescription] = useState(element.id ? element.description : '');
    const [creation_date, setCreationDate] = useState(element.id ? element.creation_date : '');

    const titleChange = useCallback( (event) => {
        setTitle(event.target.value);
    }, [])

    const statusChange = useCallback( (event) => {
        setStatus(event.target.value);
    }, [])

    const descriptionChange = useCallback( (event) => {
        setDescription(event.target.value);
    }, [])

    const creationDateChange = useCallback( (event) => {
        setCreationDate(event.target.value);
    }, [])


    const onButtonClick = useCallback( () => {
        if (element.id){ 
            onEditElements({
                ...element,
                title,
                status,
                description,
                creation_date,

            });
            
        }
        onAddElements({
            title,
            status,
            description,
            creation_date,
        });

    }, [onAddElements, title, status, description, creation_date, onEditElements, element]);
    

    return (
        <div className='form'>
            <div className="input">
                <label htmlFor='title'>Title</label>
                <input id='title' onChange={titleChange} value={title}/>
            </div>

            <div className="input">
                <label htmlFor='status'>Status</label>
                <select id='status' onChange={statusChange} value={status}>
                <option value="nothing"></option>
                    <option value="Done">Done</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Open">Open</option>
                </select>
            </div>

            
            
            <div className="input">
                <label htmlFor='description'>Description</label>
                <input id='description' onChange={descriptionChange} value={description}/>
            </div>
            
            <div className="input">
                <label htmlFor='creation_date'>Creating date</label>
                <input id='creation_date' type={'date'} onChange={creationDateChange} value={creation_date} />
            </div>
        

            <div className="buttons">
                <button onClick={onButtonClick}>Save</button>
                <button onClick={onCloseClick}>Close</button>
            </div>
            
        </div>
    )
}


FormModal.defaultProps = {
    onAddElements: () => {},
}
FormModal.propTypes = {
    onAddElements: PropTypes.func,
    onEditElements: PropTypes.func,
    onCloseClick: PropTypes.func,
    element: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    creation_date: PropTypes.string,
    update_date: PropTypes.string,
    })
}    