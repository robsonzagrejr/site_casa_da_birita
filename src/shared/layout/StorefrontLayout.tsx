import React, { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ThemeToggle } from 'shared/components/ThemeToggle';
import { Trolley } from 'features/trolley/Trolley';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Coleções', to: '/collections/todas' },
  { label: 'Promoções', to: '/collections/promocoes' },
  { label: 'Mais vendidos', to: '/collections/mais-vendidos' },
];

export function StorefrontLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (open: boolean) => () => {
    setMobileMenuOpen(open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(2, 6, 23, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleMobileMenu(true)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            CASA DA BIRITA
          </Typography>

          <Stack direction="row" spacing={{ xs: 1, sm: 3 }} alignItems="center">
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
            <Trolley />
            <ThemeToggle />
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>MENU</Typography>
          <IconButton onClick={toggleMobileMenu(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.to}
                onClick={toggleMobileMenu(false)}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container component="main" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Container>

      <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          Developed with s2 by Robson Zagre Junior <br />
          © {new Date().getFullYear()} Casa da Birita
        </Typography>
      </Box>
    </Box>
  );
}

