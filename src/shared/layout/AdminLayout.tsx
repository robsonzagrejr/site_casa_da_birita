import React from 'react';
import { Outlet, NavLink as RouterNavLink } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography, Divider, Toolbar } from '@mui/material';

const drawerWidth = 240;

const NAV_ITEMS = [
  { path: '/admin', label: 'Dashboard', end: true },
  { path: '/admin/products', label: 'Produtos' },
  { path: '/admin/orders', label: 'Vendas' },
  { path: '/admin/stock', label: 'Estoque' },
];

export function AdminLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            Admin · Casa da Birita
          </Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={RouterNavLink}
                  to={item.path}
                  end={item.end}
                  sx={{
                    '&.active': {
                      bgcolor: 'action.selected',
                      borderRight: '4px solid',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
        <Toolbar /> {/* Spacer for potential top app bar later */}
        <Outlet />
      </Box>
    </Box>
  );
}

