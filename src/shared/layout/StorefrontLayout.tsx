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
  Collapse,
  Grid
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as ArrowDownIcon,
  ExpandLess,
  ExpandMore,
  WhatsApp as WhatsAppIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';
import { ThemeToggle } from 'shared/components/ThemeToggle';
import { Trolley } from 'features/trolley/Trolley';
import * as homeData from 'data/homeData';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Coleções', to: '/collections/todas', hasSubmenu: true },
  { label: 'Promoções', to: '/collections/promocoes' },
  { label: 'Mais vendidos', to: '/collections/mais-vendidos' },
  { label: 'Contato', to: '/contato' },
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

  const whatsappUrl = `https://wa.me/${homeData.contactData.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(homeData.contactData.whatsappMessage)}`;

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

      {/* Rich Subfooter */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', pt: 8, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Column 1: Brand */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
                CASA DA BIRITA
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300, lineHeight: 1.7 }}>
                A sua boutique de bebidas premium. Selecionamos os melhores rótulos para transformar seus momentos em celebrações inesquecíveis.
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  component={Link}
                  href={whatsappUrl}
                  target="_blank"
                  size="small"
                  sx={{ bgcolor: 'primary.transparent', color: 'primary.main' }}
                >
                  <ArrowDownIcon sx={{ transform: 'rotate(-45deg)', fontSize: '1.2rem' }} />
                  <WhatsAppIcon sx={{ fontSize: '1.2rem' }} />
                </IconButton>
                <IconButton
                  component={Link}
                  href={`https://instagram.com/${homeData.contactData.instagram.replace('@', '')}`}
                  target="_blank"
                  size="small"
                  sx={{ bgcolor: 'primary.transparent', color: 'primary.main' }}
                >
                  <InstagramIcon sx={{ fontSize: '1.2rem' }} />
                </IconButton>
              </Stack>
            </Grid>

            {/* Column 2: Shop */}
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                LOJA
              </Typography>
              <Stack spacing={1}>
                {homeData.collections.slice(0, 5).map((col) => (
                  <Link key={col.slug} component={RouterLink} to={`/collections/${col.slug}`} color="text.secondary" underline="hover" variant="body2">
                    {col.label}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Column 3: Help */}
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                AJUDA
              </Typography>
              <Stack spacing={1}>
                <Link component={RouterLink} to="/faq" color="text.secondary" underline="hover" variant="body2">Dúvidas Frequentes (FAQ)</Link>
                <Link component={RouterLink} to="/contato" color="text.secondary" underline="hover" variant="body2">Fale Conosco</Link>
                <Link component={RouterLink} to="/termos" color="text.secondary" underline="hover" variant="body2">Termos de Uso</Link>
                <Link component={RouterLink} to="/privacidade" color="text.secondary" underline="hover" variant="body2">Privacidade</Link>
              </Stack>
            </Grid>

            {/* Column 4: Institutions */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                INSTITUCIONAL
              </Typography>
              <Stack spacing={1}>
                <Link component={RouterLink} to="/sobre" color="text.secondary" underline="hover" variant="body2">Nossa História</Link>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {homeData.contactData.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {homeData.contactData.email}
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, pt: 4, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Developed with s2 by Robson Zagre Junior <br />
              © {new Date().getFullYear()} Casa da Birita. Todos os direitos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

