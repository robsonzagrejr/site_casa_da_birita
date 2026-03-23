import React, { useState } from 'react';
import { Outlet, Link as RouterLink, useNavigate } from 'react-router-dom';
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
  ListItemButton,
  Menu,
  MenuItem,
  Collapse
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon, 
  KeyboardArrowDown as ArrowDownIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import { ThemeToggle } from 'shared/components/ThemeToggle';
import { Trolley } from 'features/trolley/Trolley';
import * as homeData from 'data/homeData';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Coleções', to: '/collections/todas', hasSubmenu: true },
  { label: 'Promoções', to: '/collections/promocoes' },
  { label: 'Mais vendidos', to: '/collections/mais-vendidos' },
];

export function StorefrontLayout() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const toggleMobileMenu = (open: boolean) => () => {
    setMobileMenuOpen(open);
    if (!open) setMobileCollectionsOpen(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCollectionClick = (slug: string) => {
    navigate(`/collections/${slug}`);
    handleMenuClose();
    setMobileMenuOpen(false);
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
                link.hasSubmenu ? (
                  <Box key={link.label}>
                    <Link
                      component="button"
                      onClick={handleMenuOpen}
                      color="inherit"
                      underline="hover"
                      sx={{ 
                        fontWeight: 500, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        p: 0,
                        fontSize: 'inherit',
                        fontFamily: 'inherit'
                      }}
                    >
                      {link.label}
                      <ArrowDownIcon sx={{ fontSize: '1.2rem' }} />
                    </Link>
                    <Menu
                      anchorEl={anchorEl}
                      open={isMenuOpen}
                      onClose={handleMenuClose}
                      elevation={2}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        '& .MuiPaper-root': {
                          borderRadius: 2,
                          minWidth: 180,
                          mt: 1.5,
                          boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
                        }
                      }}
                    >
                      {homeData.collections.map((col) => (
                        <MenuItem 
                          key={col.slug} 
                          onClick={() => handleCollectionClick(col.slug)}
                          sx={{ 
                            fontWeight: 500,
                            py: 1.5,
                            '&:hover': {
                              color: 'primary.main',
                              bgcolor: 'primary.transparent',
                            }
                          }}
                        >
                          {col.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
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
                )
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
            <React.Fragment key={link.label}>
              {link.hasSubmenu ? (
                <>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}>
                      <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
                      {mobileCollectionsOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={mobileCollectionsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {homeData.collections.map((col) => (
                        <ListItemButton
                          key={col.slug}
                          sx={{ pl: 4 }}
                          onClick={() => handleCollectionClick(col.slug)}
                        >
                          <ListItemText primary={col.label} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={link.to}
                    onClick={toggleMobileMenu(false)}
                  >
                    <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
                  </ListItemButton>
                </ListItem>
              )}
            </React.Fragment>
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

