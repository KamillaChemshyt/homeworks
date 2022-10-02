import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Typography, Button, CircularProgress, TextField} from '@mui/material';
import PropTypes from 'prop-types'; 

import {removeThunk, editThunk} from '../../redux/goods/thunks';
import {selectItemRemoving, selectItemUpdating} from '../../redux/goods/selectors';
import './GoodsItem.css';

export const GoodsItem = ({item, index}) => {

    const dispatch = useDispatch();

    const [editCurrentItem, setEditCurrentItem] = useState(false);
    const removeCurrentItem = useSelector(selectItemRemoving)[item.id];

    const updateCurrentItem = useSelector(selectItemUpdating)[item.id];
    
    const [editSomeItem, setEditSomeItem] = useState(item || {});



    const changeItem = useCallback((event) => {
        setEditSomeItem({
            ...editSomeItem,
            [event.target.name] : event.target.value,
    })
    }, [editSomeItem]);


    const removeItem = useCallback( () => {
        dispatch(removeThunk(item.id))
    }, [dispatch, item]);


    const saveItem = useCallback( () =>{
        dispatch(editThunk({
            ...editSomeItem,
        }))
    }, [dispatch, editSomeItem]);

    

    const editItem = useCallback( () => {
        if(editCurrentItem){
            saveItem();
        }
        setEditCurrentItem(!editCurrentItem);
    }, [editCurrentItem, saveItem]);



    


    return (
        <Grid container className="gridContainer" padding={1} margin={1}>
            <Grid item md={1}>
                <Typography variant="Caption">{index+1}</Typography>
            </Grid>
            <Grid item md={1}>
                { editCurrentItem ? (
                    <TextField 
                        id="standard-basic" 
                        name="title" 
                        margin="dense" 
                        fullWidth 
                        label="Title" 
                        variant="standard" 
                        onChange={changeItem} 
                        value={editSomeItem.title}
                    />) 
                    : <Typography variant="Caption">{editSomeItem.title}</Typography> }
            </Grid>
            <Grid item  md={1}>
            { editCurrentItem ? (
                <TextField 
                    id="standard-basic"
                    name="weight" 
                    margin="dense" 
                    fullWidth 
                    label="Weight" 
                    variant="standard" 
                    onChange={changeItem} 
                    value={editSomeItem.weight}
                    />) 
                    : <Typography variant="Caption">{editSomeItem.weight}</Typography> }
            </Grid>
            <Grid item  md={1}>
            { editCurrentItem ? (
                <TextField 
                    id="standard-basic"
                    name="description"  
                    margin="dense" 
                    fullWidth 
                    label="Description" 
                    variant="standard" 
                    onChange={changeItem} 
                    value={editSomeItem.description}
                    /> ) 
                    : <Typography variant="Caption">{editSomeItem.description}</Typography> }
            </Grid>
            <Grid item  md={1}>
            { editCurrentItem ? ( 
                <TextField 
                    id="standard-basic" 
                    name="category" 
                    margin="dense" 
                    fullWidth 
                    label="Category" 
                    variant="standard" 
                    onChange={changeItem} 
                    value={editSomeItem.category}
                    /> ) 
                    : <Typography variant="Caption">{editSomeItem.category}</Typography> }
            </Grid>
            <Grid item md={1}>
                { updateCurrentItem ? 
                    <CircularProgress size={24}/> : 
                    <Button variant="outlined" onClick={editItem} size="small">
                        {editCurrentItem? 'Save' : 'Edit'}
                    </Button> 
                }
            </Grid>
            <Grid item md={1} className="loader">
                {removeCurrentItem ? 
                    <CircularProgress size={24}/> : 
                    <Button variant="outlined" onClick={removeItem} size="small">Remove</Button> 
                }
            </Grid>
        </Grid>
    )
}


GoodsItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string
    }),
    index: PropTypes.number,
}