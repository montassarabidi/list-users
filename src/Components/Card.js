import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({review,ind,setIndex}) => {
    return (
        <div onClick={()=> setIndex(ind)}>
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={review.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {review.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {review.job}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card></div>
    )
}

export default CardUser