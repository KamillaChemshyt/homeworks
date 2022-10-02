import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

import { Button, Box, TextField, CircularProgress} from '@mui/material';
import {createThunk} from '../../redux/goods/thunks';
import {selectDataAdding} from '../../redux/goods/selectors';



const styles = {
    box: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300px',
        margin: '30px',
    }
}

export const NewForm = () => {

    const {editItemId} = useParams();
    const inputRef = useRef(null);
    //const todoData = useSelector(selectTodoData);
    const dataAdding = useSelector(selectDataAdding);
    const navigate = useNavigate();
    const todoData = [];


    useEffect (()=> {
        inputRef?.current.focus();
    }, []);
    const element = useMemo( () => {
        if (!editItemId) {
            return null;
        }
        return todoData.find(e => e.id === editItemId)
    }, [todoData, editItemId])

    const [title, setTitle] = useState(element ? element.title : '');
    const [weight, setWeight] = useState(element ? element.weight : '');
    const [description, setDescription] = useState(element ? element.description : '');
    const [category, setCategory] = useState(element ? element.category : '');

    
    useEffect(()=> {
        if (element){
            setTitle(element.title);
            setWeight(element.weight);
            setDescription(element.description);
            setCategory(element.category)
        } else{
            setTitle('');
            setWeight('');
            setDescription('');
            setCategory('');
        }
    }, [element]);

    const dispatch = useDispatch();

    const onCloseClick = useCallback(() => {
        navigate('/app')
    },[]);

    const titleChange = useCallback( (event) => {
        setTitle(event.target.value);
    }, [])

    const weightChange = useCallback( (event) => {

        if (event.target.value.length === 0){
            setWeight('');
        }

        const number = parseInt(event.target.value);
        if (isNaN(number)){
            return;
        }
        setWeight(event.target.value);
    }, [])

    const descriptionChange = useCallback( (event) => {
        setDescription(event.target.value);
    }, [])

    const categoryChange = useCallback( (event) => {
        setCategory(event.target.value);
    }, [])


    const onButtonClick = useCallback( () => {
        dispatch(createThunk({
            title,
            weight,
            description,
            category,
        }))
    }, [dispatch, title, category, weight, description]);
    

    return (


        <Box sx={styles.box}>
            <TextField inputRef={inputRef} id="standard-basic" margin="dense" fullWidth label="Title" variant="standard" onChange={titleChange} value={title}/>
            <TextField id="standard-basic" margin="dense" fullWidth label="Weight" variant="standard" onChange={weightChange} value={weight}/>
            <TextField id="standard-basic" margin="dense" fullWidth label="Description" variant="standard" onChange={descriptionChange} value={description}/>
            <TextField id="standard-basic" margin="dense" fullWidth label="Category" variant="standard" onChange={categoryChange} value={category}/>
            { dataAdding ? <CircularProgress /> : <Button onClick={onButtonClick} size="small">Save</Button>}
            <Button onClick={onCloseClick} size="small">Close</Button>
        </Box>
    )


    
}


NewForm.defaultProps = {
    onAddElements: () => {},
}



