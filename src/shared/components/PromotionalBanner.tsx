import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from 'shared/components/Button';
import { Link as RouterLink } from 'react-router-dom';

interface PromotionalBannerProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  to?: string;
  onButtonClick?: () => void;
  background?: string;
}

export function PromotionalBanner({
  title,
  subtitle,
  buttonLabel,
  to,
  onButtonClick,
  background = 'linear-gradient(45deg, #FBBF24 30%, #F59E0B 90%)',
}: PromotionalBannerProps) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: (theme) => `${theme.shape.borderRadius}px`,
        overflow: 'hidden',
        background,
        color: 'white',
        p: { xs: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 3,
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
        {subtitle}
      </Typography>
      <Button
        color="secondary"
        size="large"
        component={to ? RouterLink : 'button'}
        to={to}
        onClick={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}
