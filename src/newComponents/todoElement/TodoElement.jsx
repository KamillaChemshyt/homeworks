import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import './TodoElement.css'
import {changeColorByStatus} from '../../status/elementsStatus'
import {Typography, Button, CardContent, CardActions, Card, Box} from '@mui/material';

const styles = {
    boxStyles: {
    width:  '230px',
    height: '250px',
    margin: '10px',
    },
    typographyStyles: {
        mb: 1.5,
    },
    cardContent: {
        height:'170px',
        textAlign: 'center',
    }
}

export const TodoElement = ( {element, onRemoveElements = () => {}, onEditElements = () => {} }) => {


const cardStyle = useMemo( () => {
    return [styles.boxStyles, {bgcolor: changeColorByStatus(element.status)}]
}, [element.status])

const onRemoveClick = useCallback(() => {
    onRemoveElements(element.id)
},[element.id, onRemoveElements]);

const onEditClick = useCallback(() => {
    onEditElements(element.id)
},[element.id, onEditElements]);


    return (
    <Box >
        <Card sx={cardStyle}>
            <CardContent sx={styles.cardContent}>
                <Typography variant="h5" component="div">{element.title}</Typography>
                <Typography sx={styles.typographyStyles} color="text.secondary">{element.description}</Typography>
                <Typography sx={styles.typographyStyles} color="text.secondary">{element.status}</Typography>
                <Typography sx={styles.typographyStyles} color="text.secondary">{element.creation_date}</Typography>
                <Typography sx={styles.typographyStyles} color="text.secondary">{element.update_date}</Typography>
            </CardContent>
            <CardActions className="buttons">
                <Button variant="contained" onClick={onRemoveClick} size="small">Remove</Button>
                <Button variant="contained" onClick={onEditClick} size="small">Edit</Button>
            </CardActions>
        </Card>
    </Box>
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







