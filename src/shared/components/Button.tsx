import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size'> {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
  to?: string;
  href?: string;
  target?: string;
  component?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  color = 'primary',
  variant = 'contained',
  ...props
}) => {
  return (
    <MuiButton variant={variant} color={color} size={size} disableElevation {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
