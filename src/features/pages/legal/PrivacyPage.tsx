import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { SectionHeader } from 'shared/components';

export function PrivacyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <SectionHeader
        title="Política de Privacidade"
        subtitle="Como tratamos seus dados e garantimos sua segurança."
      />
      <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: 'background.paper', border: 1, borderColor: 'divider', mt: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight={700}>1. Coleta de Dados</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Coletamos informações básicas como nome, sexo, idade, endereço de entrega, e-mail e telefone (WhatsApp) para processar seus pedidos e garantir uma entrega rápida e eficiente.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mt: 4 }}>2. Uso das Informações</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Seus dados são utilizados exclusivamente para o processamento de compras, comunicação sobre o status do pedido, envio de promoções exclusivas e novidades da Casa da Birita, além de análises internas que servirão para melhorar nossos serviços. Não compartilhamos seus dados com terceiros.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mt: 4 }}>3. Segurança do Pagamento</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Não armazenamos dados de cartões de crédito. Todas as transações são processadas por intermediadores de pagamento seguros que garantem a criptografia dos seus dados financeiros.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mt: 4 }}>4. Seus Direitos</Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Você tem o direito de solicitar a exclusão de seus dados de nossa base a qualquer momento, enviando uma solicitação através de nossos canais de atendimento.
        </Typography>
      </Paper>
    </Container>
  );
}
