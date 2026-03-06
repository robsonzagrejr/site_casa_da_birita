import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card as MuiCard, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface CardProps {
  /** The URL for the image or illustration. */
  image: string;
  /** The title to display on the card. */
  title: string;
  /** The descriptive text for the card. */
  text: string;
  /** The path to link to when the card is clicked. */
  to: string;
}

/**
 * A reusable card component that acts as a link using MUI.
 */
export function Card({ image, title, text, to }: CardProps) {
  return (
    <MuiCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea component={RouterLink} to={to} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}