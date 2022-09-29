import React, { useCallback, useState, useMemo } from 'react';

import { Button, CardContent, CardActions, Card, Box, TextField, InputLabel, MenuItem, Select, FormControl} from '@mui/material';

import {useDispatch, useSelector} from 'react-redux';
import {selectEditItemId} from '../../redux/app/selector';
import {closeModal} from '../../redux/app/actions';
import {addItem, editItem} from '../../redux/todoList/actions';
import {selectTodoData} from '../../redux/todoList/selector';
import './formModal.css';



export const FormModal = () => {

    const editItemId = useSelector(selectEditItemId);
    const todoData = useSelector(selectTodoData);

    const element = useMemo( () => {
        if (!editItemId) {
            return null;
        }
        return todoData.find(e => e.id === editItemId)
    }, [todoData, editItemId])

    const [title, setTitle] = useState(element ? element.title : '');
    const [status, setStatus] = useState(element ? element.status : '');
    const [description, setDescription] = useState(element ? element.description : '');
    const [creation_date, setCreationDate] = useState(element ? element.creation_date : '');

    const dispatch = useDispatch();

    const onCloseClick = useCallback(() => {
        dispatch(closeModal())
    },[dispatch])

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
        if (element){ 
            dispatch(editItem({ 
                ...element,
                title,
                status,
                description,
                creation_date,
            }))
        } else {
        dispatch(addItem({
            title,
            status,
            description,
            creation_date,
        }));
    }
        dispatch(closeModal());
    }, [dispatch, title, status, description, creation_date, element]);
    

    return (


        <Box className="form">
        <Card>
            <CardContent className="input">
                <TextField id="standard-basic" label="Title" variant="standard" onChange={titleChange} value={title}/>
                <InputLabel >Status</InputLabel>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={statusChange} value={status}>
                        <MenuItem value={'Done'}>Done</MenuItem>
                        <MenuItem value={'In Progress'}>In Progress</MenuItem>
                        <MenuItem value={'Open'}>Open</MenuItem>
                        </Select>
                </FormControl>
                <TextField id="standard-basic" label="Description" variant="standard" onChange={descriptionChange} value={description}/>
                <InputLabel >Creating date</InputLabel>
                <TextField id="standard-basic" label="" variant="standard" type={'date'} onChange={creationDateChange} value={creation_date}/>
            </CardContent>
            <CardActions className="buttons">
                <Button onClick={onButtonClick} size="small">Save</Button>
                <Button onClick={onCloseClick} size="small">Close</Button>
            </CardActions>
        </Card>
    </Box>
    )





        // <div className='form'>
        //     <div className="input">
        //         <label htmlFor='title'>Title</label>
        //         <input id='title' onChange={titleChange} value={title}/>
        //     </div>

        //     <div className="input">
        //         <label htmlFor='status'>Status</label>
        //         <select id='status' onChange={statusChange} value={status}>
        //         <option value="nothing"></option>
        //             <option value="Done">Done</option>
        //             <option value="In Progress">In Progress</option>
        //             <option value="Open">Open</option>
        //         </select>
        //     </div>

            
            
        //     <div className="input">
        //         <label htmlFor='description'>Description</label>
        //         <input id='description' onChange={descriptionChange} value={description}/>
        //     </div>
            
        //     <div className="input">
        //         <label htmlFor='creation_date'>Creating date</label>
        //         <input id='creation_date' type={'date'} onChange={creationDateChange} value={creation_date} />
        //     </div>
        

        //     <div className="buttons">
        //         <button onClick={onButtonClick}>Save</button>
        //         <button onClick={onCloseClick}>Close</button>
        //     </div>
            
        // </div>
    
}


FormModal.defaultProps = {
    onAddElements: () => {},
}
  