import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Box } from '@mui/material';
import Button from 'shared/components/Button';
import { useCart } from 'shared/context/CartContext';

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

/**
 * A card component to display a single product using MUI.
 */
export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    // Parse price string "R$ 24,90" to number
    const numericPrice = parseFloat(product.price.replace('R$ ', '').replace(',', '.'));
    addItem({
      id: String(product.id),
      name: product.name,
      price: numericPrice,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
      <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, bgcolor: 'background.paper' }}>
        <Box
          component="img"
          src={product.imageUrl}
          alt={product.name}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" noWrap gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button onClick={handleAddToCart} fullWidth variant="contained" size="medium">
          Adicionar
        </Button>
      </CardActions>
    </Card>
  );
};