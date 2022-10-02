import React, {useEffect, useState, useCallback, useMemo} from 'react';
import { GoodsItem } from './GoodsItem';
import { CircularProgress, Typography, TextField} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux';
import {fetchThunk} from '../../redux/goods/thunks';
import {selectGoods, selectDataLoading, selectError} from '../../redux/goods/selectors';
import './GoodsList.css'

export const GoodsList = ({}) => {
    const dispatch = useDispatch();
    const goods = useSelector(selectGoods);
    const dataLoading = useSelector(selectDataLoading);
    const error = useSelector(selectError);

    const [filter, setFilter] = useState('');


    useEffect(() => {
        dispatch(fetchThunk())
    }, [dispatch]);

    const goodsFilter = useMemo(() =>{
        if (filter.length){
            return goods.filter(g => g.title.toLowerCase().includes(filter.toLowerCase()));
        }
        return goods;
    });

    const filterChange = useCallback((event) => {
        setFilter(event.target.value);
    })

    if (error) {
        return <Typography variant="h4">{error}</Typography>
    }
    if(dataLoading) {
        return <CircularProgress />
    }
    return (
        <>
            <div className="filter">
                <TextField 
                    id="outlined-basic"
                    margin="dense" 
                    fullWidth  
                    label="Filter by title" 
                    variant="outlined"
                    onChange={filterChange} 
                    value={filter}
                />
            </div>
            {goodsFilter.map((item, index) => <GoodsItem item={item} key={item.id} index={index} />)}
        </>
    )
}