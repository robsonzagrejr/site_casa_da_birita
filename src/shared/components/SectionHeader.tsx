import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    viewAllLink?: string;
    viewAllLabel?: string;
}

export function SectionHeader({
    title,
    subtitle,
    viewAllLink,
    viewAllLabel = 'Ver tudo',
}: SectionHeaderProps) {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
            spacing={1}
            sx={{ mb: 4 }}
        >
            <Box>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 900,
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                        mb: subtitle ? 0.5 : 0,
                    }}
                >
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 600, fontWeight: 500 }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Box>

            {viewAllLink && (
                <Link
                    component={RouterLink}
                    to={viewAllLink}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        color: 'primary.main',
                        transition: 'gap 0.2s ease',
                        '&:hover': {
                            gap: 1,
                            textDecoration: 'none',
                        },
                    }}
                >
                    {viewAllLabel}
                    <ArrowForwardIosIcon sx={{ fontSize: '0.75rem' }} />
                </Link>
            )}
        </Stack>
    );
}
