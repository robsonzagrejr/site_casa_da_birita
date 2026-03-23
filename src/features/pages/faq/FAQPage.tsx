import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { SectionHeader } from 'shared/components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  // {
  // q: "Qual o prazo de entrega?",
  // a: "Para a região metropolitana, entregamos em até 2 horas. Para outras regiões, o prazo varia de 2 a 5 dias úteis."
  // },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos todos os cartões de crédito, PIX."
  },
  // {
  //   q: "Como funciona a troca ou devolução?",
  //   a: "Você pode solicitar a troca ou devolução em até 7 dias após o recebimento, desde que a embalagem não tenha sido violada."
  // },
  {
    q: "As bebidas são originais?",
    a: "Sim! Trabalhamos apenas com fornecedores oficiais e garantimos a procedência de 100% do nosso catálogo."
  }
];

export function FAQPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <SectionHeader
        title="Dúvidas Frequentes"
        subtitle="Encontre respostas rápidas para as perguntas mais comuns."
      />
      <Box sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
