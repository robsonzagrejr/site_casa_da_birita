import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { SectionHeader } from 'shared/components';

export function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <SectionHeader
        title="Termos de Uso"
        subtitle="Regras e condições para utilização dos serviços da Casa da Birita."
      />
      <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: 'background.paper', border: 1, borderColor: 'divider', mt: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight={700}>1. Aceitação dos Termos</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Ao acessar e utilizar o site da Casa da Birita, você concorda com os presentes termos. Este é um serviço de e-commerce local destinado a maiores de 18 anos.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mt: 4 }}>2. Venda de Bebidas Alcoólicas</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          A venda de bebidas alcoólicas é proibida para menores de 18 anos. No ato da entrega, poderá ser solicitada a apresentação de um documento oficial com foto para comprovação da idade.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mt: 4 }}>3. Pedidos e Entregas</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Como um serviço local, as entregas são realizadas após a confirmação do pagamento ou recebimento do pedido (conforme a modalidade escolhida).
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mt: 4 }}>4. Preços e Disponibilidade</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Os preços e a disponibilidade dos produtos podem sofrer alterações sem aviso prévio. Em caso de falta de algum item em estoque após a finalização do pedido, nossa equipe entrará em contato via WhatsApp para sugerir uma substituição ou estorno.
        </Typography>
      </Paper>
    </Container>
  );
}
