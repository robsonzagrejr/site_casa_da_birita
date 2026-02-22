import React from 'react';
import { IconButton, Badge, Drawer, Box, Typography, Button, Divider } from '@mui/material';
import { ShoppingCart, Delete, Add, Remove, Close } from '@mui/icons-material';
import styles from './Trolley.module.css';

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

export interface TrolleyProps {
  items: CartItem[];
  onQuantityChange?: (itemId: string | number, newQuantity: number) => void;
  onRemoveItem?: (itemId: string | number) => void;
  onCheckout?: () => void;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  checkoutLabel?: string;
  showIconButton?: boolean;
  iconSize?: 'small' | 'medium' | 'large';
}

export function Trolley({
  items,
  onQuantityChange,
  onRemoveItem,
  onCheckout,
  open: controlledOpen,
  onToggle,
  checkoutLabel = 'Finalizar Compra',
  showIconButton = true,
  iconSize = 'medium',
}: TrolleyProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onToggle?.(newOpen);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleQuantityChange = (itemId: string | number, delta: number) => {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      const newQuantity = Math.max(0, item.quantity + delta);
      if (newQuantity === 0) {
        onRemoveItem?.(itemId);
      } else {
        onQuantityChange?.(itemId, newQuantity);
      }
    }
  };

  const handleRemove = (itemId: string | number) => {
    onRemoveItem?.(itemId);
  };

  const trolleyButton = showIconButton && (
    <IconButton
      onClick={() => handleToggle(true)}
      size={iconSize}
      aria-label={`Carrinho com ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`}
      className={styles.trolleyButton}
    >
      <Badge badgeContent={totalItems} color="primary" max={99}>
        <ShoppingCart />
      </Badge>
    </IconButton>
  );

  return (
    <>
      {trolleyButton}

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => handleToggle(false)}
        PaperProps={{
          className: styles.drawerPaper,
          sx: {
            width: { xs: '100%', sm: '400px' },
            maxWidth: '90vw',
          },
        }}
      >
        <Box className={styles.drawerContent}>
          <Box className={styles.drawerHeader}>
            <Typography variant="h6" component="h2" className={styles.title}>
              Carrinho de Compras
            </Typography>
            <IconButton onClick={() => handleToggle(false)} aria-label="Fechar carrinho" size="small">
              <Close />
            </IconButton>
          </Box>

          <Divider />

          <Box className={styles.itemsContainer}>
            {items.length === 0 ? (
              <Box className={styles.emptyState}>
                <ShoppingCart sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
                <Typography variant="body1" color="text.secondary">
                  Seu carrinho está vazio
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Adicione produtos para começar
                </Typography>
              </Box>
            ) : (
              <>
                {items.map((item) => (
                  <Box key={item.id} className={styles.cartItem}>
                    {item.image && (
                      <Box component="img" src={item.image} alt={item.name} className={styles.itemImage} />
                    )}

                    <Box className={styles.itemDetails}>
                      <Typography variant="subtitle1" className={styles.itemName}>
                        {item.name}
                      </Typography>
                      {item.description && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={styles.itemDescription}
                        >
                          {item.description}
                        </Typography>
                      )}
                      <Typography variant="h6" className={styles.itemPrice}>
                        {formatPrice(item.price)}
                      </Typography>
                    </Box>

                    <Box className={styles.itemActions}>
                      <Box className={styles.quantityControls}>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          aria-label="Diminuir quantidade"
                          disabled={item.quantity <= 1}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography variant="body1" className={styles.quantity}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          aria-label="Aumentar quantidade"
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </Box>

                      <IconButton
                        size="small"
                        onClick={() => handleRemove(item.id)}
                        aria-label="Remover item"
                        color="error"
                        className={styles.removeButton}
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>

                    <Typography variant="subtitle2" className={styles.itemTotal}>
                      {formatPrice(item.price * item.quantity)}
                    </Typography>
                  </Box>
                ))}
              </>
            )}
          </Box>

          {items.length > 0 && (
            <>
              <Divider />
              <Box className={styles.drawerFooter}>
                <Box className={styles.totalSection}>
                  <Typography variant="h6" className={styles.totalLabel}>
                    Total:
                  </Typography>
                  <Typography variant="h5" className={styles.totalPrice}>
                    {formatPrice(totalPrice)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => {
                    onCheckout?.();
                    handleToggle(false);
                  }}
                  className={styles.checkoutButton}
                >
                  {checkoutLabel}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}

