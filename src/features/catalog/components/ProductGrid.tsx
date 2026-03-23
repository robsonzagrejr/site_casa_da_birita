import React from 'react';
import { Grid } from '@mui/material';
import { ProductCard, Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

/**
 * A responsive grid that renders ProductCard items.
 * 1 col on xs, 2 on sm, 3 on md, 4 on lg.
 */
export function ProductGrid({ products }: ProductGridProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
