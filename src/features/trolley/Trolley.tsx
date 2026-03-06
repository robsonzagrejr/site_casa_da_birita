import React from 'react';
import { IconButton, Badge, Drawer, Box, Typography, Button, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, Stack } from '@mui/material';
import { ShoppingCart, Delete, Add, Remove, Close } from '@mui/icons-material';
import { useCart } from 'shared/context/CartContext';

export interface TrolleyProps {
  open?: boolean;
  onToggle?: (open: boolean) => void;
}

export function Trolley({
  open: controlledOpen,
  onToggle,
}: TrolleyProps) {
  const { items, addItem, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const [internalOpen, setInternalOpen] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onToggle?.(newOpen);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <>
      <IconButton
        onClick={() => handleToggle(true)}
        color="inherit"
        aria-label={`Carrinho com ${totalItems} itens`}
      >
        <Badge badgeContent={totalItems} color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => handleToggle(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 400 },
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6">Carrinho de Compras</Typography>
          <IconButton onClick={() => handleToggle(false)} aria-label="Fechar">
            <Close />
          </IconButton>
        </Box>
        <Divider />

        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
          {items.length === 0 ? (
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
              <ShoppingCart sx={{ fontSize: 64, mb: 2 }} />
              <Typography>Seu carrinho está vazio</Typography>
            </Box>
          ) : (
            <List disablePadding>
              {items.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{ px: 0, py: 2 }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => removeItem(item.id)} color="error">
                      <Delete />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={item.imageUrl} alt={item.name} sx={{ width: 56, height: 56, mr: 2 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <Box component="span">
                        <Typography variant="body2" color="text.primary" sx={{ my: 1 }}>
                          {formatPrice(item.price)}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Remove fontSize="inherit" />
                          </IconButton>
                          <Typography variant="body2">{item.quantity}</Typography>
                          <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Add fontSize="inherit" />
                          </IconButton>
                        </Stack>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {items.length > 0 && (
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1">Total</Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                {formatPrice(totalPrice)}
              </Typography>
            </Box>
            <Button variant="contained" fullWidth size="large">
              Finalizar Compra
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
}

