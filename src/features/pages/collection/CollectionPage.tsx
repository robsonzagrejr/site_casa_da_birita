import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import { SectionHeader } from 'shared/components';
import { ProductGrid } from 'features/catalog/components/ProductGrid';
import { useProducts } from 'hooks/useProducts';
import { collections } from 'data/homeData';

/** Map collection slug → human-readable label */
function resolveTitle(slug: string | undefined): string {
  if (!slug) return 'Produtos';
  const match = collections.find((c) => c.slug === slug);
  return match?.label ?? slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();

  const params = useMemo(() => ({ collection: slug }), [slug]);
  const { products, loading, error } = useProducts(params);

  const title = resolveTitle(slug);

  return (
    <Box>
      <SectionHeader
        title={title}
        subtitle={
          loading
            ? 'Carregando produtos…'
            : `${products.length} produto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`
        }
      />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography color="error">Erro ao carregar produtos.</Typography>
        </Box>
      ) : products.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h6" color="text.secondary">
            Nenhum produto encontrado nesta coleção.
          </Typography>
        </Box>
      ) : (
        <ProductGrid products={products} />
      )}
    </Box>
  );
}
