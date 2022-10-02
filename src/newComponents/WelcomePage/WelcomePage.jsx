import React, {useCallback} from 'react';

import { useNavigate } from "react-router-dom";
import {Typography, Button} from '@mui/material';

import './WelcomePage.css';

export const WelcomePage = () => {
    const navigate = useNavigate();
    const buttonClick = useCallback(() => {
        navigate('/app')
    },[navigate]);
    return(
        <div className="welcomePage">
            <Typography variant="h5" component="div">Welcome!</Typography>
            <Button onClick={buttonClick} variant="contained">Open</Button>
        </div>
    )
}