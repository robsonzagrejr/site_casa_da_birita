import React from 'react';
import { Box, Container, Typography, Stack, alpha, Theme } from '@mui/material';
import Button from 'shared/components/Button';
import { Link as RouterLink } from 'react-router-dom';

interface HeroAction {
    label: string;
    to?: string;
    onClick?: () => void;
    variant?: 'contained' | 'outlined';
}

interface HeroProps {
    title: React.ReactNode;
    subtitle: string;
    primaryAction: HeroAction;
    secondaryAction?: HeroAction;
    background?: string;
    minHeight?: string | object;
}

export function Hero({
    title,
    subtitle,
    primaryAction,
    secondaryAction,
    background,
    minHeight = { xs: '60vh', md: '70vh' },
}: HeroProps) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight,
                display: 'flex',
                alignItems: 'center',
                borderRadius: (theme) => `${theme.shape.borderRadius}px`,
                overflow: 'hidden',
                background: background || ((theme: Theme) => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.9)} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`),
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4} sx={{ maxWidth: 700, color: 'white', position: 'relative', zIndex: 1 }}>
                    <Box>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                                lineHeight: 1.1,
                                mb: 2,
                                letterSpacing: '-2px',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                opacity: 0.9,
                                lineHeight: 1.5,
                                maxWidth: 600,
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </Box>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                            color="secondary"
                            size="large"
                            component={primaryAction.to ? RouterLink : 'button'}
                            to={primaryAction.to}
                            onClick={primaryAction.onClick}
                            sx={{ py: 2, px: 4, fontSize: '1.1rem', fontWeight: 800 }}
                        >
                            {primaryAction.label}
                        </Button>
                        {secondaryAction && (
                            <Button
                                color="inherit"
                                variant={secondaryAction.variant || "outlined"}
                                size="large"
                                component={secondaryAction.to ? RouterLink : 'button'}
                                to={secondaryAction.to}
                                onClick={secondaryAction.onClick}
                                sx={{
                                    py: 2,
                                    px: 4,
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    borderColor: 'white',
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                {secondaryAction.label}
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Container>

            {/* Subtle overlay decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                }}
            />
        </Box>
    );
}
