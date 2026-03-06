import React from 'react';
import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { Assessment, ShoppingBasket, People, Inventory } from '@mui/icons-material';

const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: `${color}.main`, color: 'white' }}>
            <Icon />
        </Box>
        <Box>
            <Typography variant="body2" color="text.secondary">{title}</Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{value}</Typography>
        </Box>
    </Paper>
);

export function DashboardPage() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Vendas Hoje" value="R$ 1.240,00" icon={ShoppingBasket} color="primary" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Novos Pedidos" value="12" icon={Assessment} color="info" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Novos Clientes" value="4" icon={People} color="success" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Estoque Baixo" value="2" icon={Inventory} color="error" />
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper', opacity: 0.6, border: '2px dashed', borderColor: 'divider' }}>
                <Typography color="text.secondary"> Gráficos de Vendas (Placeholder) </Typography>
            </Paper>
        </Box>
    );
}
