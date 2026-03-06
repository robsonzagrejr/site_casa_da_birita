import React from 'react';
import { Box, Grid, Typography, Stack, alpha } from '@mui/material';

export interface BenefitItem {
    icon: React.ReactNode;
    title: string;
    text: string;
}

interface BenefitsProps {
    items: BenefitItem[];
}

export function Benefits({ items }: BenefitsProps) {
    return (
        <Box sx={{ py: 8, borderTop: 1, borderBottom: 1, borderColor: 'divider', bgcolor: (theme) => alpha(theme.palette.background.paper, 0.5) }}>
            <Grid container spacing={4}>
                {items.map((benefit, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Stack spacing={2} alignItems="center" textAlign="center">
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    color: 'primary.main',
                                    mb: 1,
                                }}
                            >
                                {benefit.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                {benefit.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 220 }}>
                                {benefit.text}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
