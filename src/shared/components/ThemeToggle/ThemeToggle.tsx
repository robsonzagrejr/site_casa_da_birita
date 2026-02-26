import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode, BrightnessAuto, Brightness4 } from '@mui/icons-material';
import { useThemeMode } from '../../../theme/ThemeModeProvider';

export function ThemeToggle() {
  const { mode, setMode } = useThemeMode();

  const handleClick = () => {
    // Cycle through: light → dark → system → light
    if (mode === 'light') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('system');
    } else {
      setMode('light');
    }
  };

  const getTooltipTitle = () => {
    if (mode === 'light') return 'Tema claro';
    if (mode === 'dark') return 'Tema escuro';
    return 'Automático';
  };

  return (
    <Tooltip title={getTooltipTitle()}>
      <IconButton
        size="small"
        onClick={handleClick}
        color={mode === 'system' ? 'primary' : 'inherit'}
        sx={{
          width: 23,
          height: 23,
          fontSize: '0.875rem',
          ...(mode === 'system' && {
            backgroundColor: 'action.selected',
          }),
        }}
        aria-label={getTooltipTitle()}
      >
        {mode === 'system' ? (
          <BrightnessAuto fontSize="small"/>
        ) : mode === 'light' ? (
          <LightMode fontSize="small"/>
        ) : (
          <DarkMode fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
}
