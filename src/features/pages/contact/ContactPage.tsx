import React from 'react';
import { Box, Typography, Container, Grid, Stack, Link, Paper } from '@mui/material';
import { SectionHeader } from 'shared/components';
import { contactData } from 'data/homeData';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from 'shared/components/Button';

export function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactData.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(contactData.whatsappMessage)}`;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SectionHeader
        title="Fale Conosco"
        subtitle="Estamos aqui para ajudar com suas dúvidas, sugestões ou pedidos especiais."
      />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* WhatsApp Highlight */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: 'primary.main',
              color: 'white',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -20,
                right: -20,
                width: 150,
                height: 150,
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
              }
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-1px' }}>
              Atendimento via WhatsApp
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400, maxWidth: 500 }}>
              Dúvidas sobre produtos, prazos de entrega ou pedidos personalizados? Converse diretamente com nossa equipe.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={whatsappUrl}
              target="_blank"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                py: 2,
                px: 6,
                fontSize: '1.2rem',
                fontWeight: 800,
                width: 'fit-content',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.02)'
                }
              }}
            >
              Iniciar Conversa
            </Button>
          </Paper>
        </Grid>

        {/* Other Contact Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: 1, borderColor: 'divider' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'primary.transparent', color: 'primary.main', borderRadius: 2 }}>
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">E-mail</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{contactData.email}</Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: 1, borderColor: 'divider' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'primary.transparent', color: 'primary.main', borderRadius: 2 }}>
                  <InstagramIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Instagram</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{contactData.instagram}</Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: 1, borderColor: 'divider' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'primary.transparent', color: 'primary.main', borderRadius: 2 }}>
                  <AccessTimeIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Horário de Funcionamento</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{contactData.businessHours}</Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: 1, borderColor: 'divider' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'primary.transparent', color: 'primary.main', borderRadius: 2 }}>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">Endereço</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{contactData.address}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
