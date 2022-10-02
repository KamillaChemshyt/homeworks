import {Outlet} from 'react-router-dom';
import {useCallback} from 'react';
import { Button, TextField} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useState} from 'react';

import {GoodsList} from '../GoodsList/GoodsList';

import { filterByTitle, filterByWeight, filterByDescription, filterByCategory} from '../../redux/goods/actions';

import './DashboardPage.css';


const styles = {
    margin: '30px 10px 2px 10px',
}
export const DashboardPage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
   
    const [filter, setFilter] = useState('');


  


    // 


    const filterbyTitle = useCallback((title) => {
        dispatch(filterByTitle(title));
    }, [dispatch]);

    const filterbyWeight = useCallback((weight) => {
        dispatch(filterByWeight(weight));
    }, [dispatch]);

    const filterbyDescription = useCallback((description) => {
        dispatch(filterByDescription(description));
    }, [dispatch]);

    const filterbyCategory = useCallback((category) => {
        dispatch(filterByCategory(category));
    }, [dispatch]);




   
    const addItem = useCallback( () => {
        navigate('edit');
    }, [navigate]);
    
    return (
        <div className="dashboard">
            <div className="dashboardButtons">
                <Button sx={styles} variant="contained" onClick={addItem} size="small">Add item</Button>
                <Button sx={styles} variant="contained" onClick={filterbyTitle} size="small">Filter By Title</Button>
                <Button sx={styles} variant="contained" onClick={filterbyWeight} size="small">Filter By Weight</Button>
                <Button sx={styles} variant="contained" onClick={filterbyDescription} size="small">Filter By Description</Button>
                <Button sx={styles} variant="contained" onClick={filterbyCategory} size="small">Filter By Category</Button>
            </div>
            <div className="dashboardContent">
                <Outlet/>
            </div>
            <GoodsList/>
        </div>
    )
}