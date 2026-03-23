import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { SectionHeader } from 'shared/components';

export function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionHeader
        title="Nossa História"
        subtitle="Conheça a Casa da Birita, sua boutique de bebidas premium."
      />
      <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          A Casa da Birita nasceu da paixão por momentos de celebração. Acreditamos que cada brinde
          é uma oportunidade de criar memórias inesquecíveis, e para isso, a bebida certa faz toda a diferença.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Nossa curadoria é feita por especialistas que buscam os melhores rótulos de vinhos,
          destilados raros e cervejas artesanais de micro-cervejarias locais e internacionais.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Mais do que uma loja, somos o seu parceiro em celebrações, garantindo entrega rápida,
          atendimento personalizado e produtos de procedência garantida.
        </Typography>
      </Box>
    </Container>
  );
}
