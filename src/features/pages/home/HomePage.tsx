import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, Stack, CircularProgress, Theme } from '@mui/material';
import { Card, PromotionalBanner, SectionHeader, Hero, Benefits, Carousel } from 'shared/components';
import { ProductCarousel } from 'features/catalog/components/ProductCarousel';
import { useProducts } from 'hooks/useProducts';
import * as homeData from 'data/homeData';

// Icons for benefits
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const iconMap: Record<string, React.ReactNode> = {
  LocalShipping: <LocalShippingIcon sx={{ fontSize: '2.5rem' }} />,
  VerifiedUser: <VerifiedUserIcon sx={{ fontSize: '2.5rem' }} />,
  SupportAgent: <SupportAgentIcon sx={{ fontSize: '2.5rem' }} />,
  CardGiftcard: <CardGiftcardIcon sx={{ fontSize: '2.5rem' }} />,
};

export function HomePage() {
  const { products, loading, error } = useProducts({ bestSellers: true });

  const mappedBenefits = (homeData.benefitsData || []).map((b) => ({
    ...b,
    icon: iconMap[b.icon] || <CardGiftcardIcon sx={{ fontSize: '2.5rem' }} />,
  }));

  return (
    <Box>
      <Box sx={{ mb: 8 }}>
        <Carousel
          items={homeData.heroes}
          renderItem={(h) => (
            <Hero
              title={h.title}
              subtitle={h.subtitle}
              primaryAction={h.primaryAction}
              secondaryAction={h.secondaryAction}
              background={h.background}
            />
          )}
          swiperProps={{
            autoplay: { delay: 5000 },
          }}
          pauseOnMouseEnter={false}
        />
      </Box>

      <Box sx={{ mb: 8 }}>
        <SectionHeader
          title="Destaques da Semana"
          subtitle="Os itens mais desejados da nossa vitrine, agora com preços especiais."
          viewAllLink="/collections/mais-vendidos"
        />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography color="error">Erro ao carregar produtos.</Typography>
          </Box>
        ) : (
          <ProductCarousel products={products} />
        )}
      </Box>

      <Box sx={{ mb: 8 }}>
        <Carousel
          items={homeData.banners}
          renderItem={(b) => (
            <PromotionalBanner
              title={b.title}
              subtitle={b.subtitle}
              buttonLabel={b.buttonLabel}
              to={b.to}
              background={b.background}
            />
          )}
          swiperProps={{
            autoplay: { delay: 4000 }
          }}
        />
      </Box>

      <Box sx={{ mb: 8 }}>
        <SectionHeader
          title="Explore Coleções"
          subtitle="Navegue por nossas categorias cuidadosamente selecionadas para cada ocasião."
        />

        <Grid container spacing={2}>
          {/* Featured Category - Large */}
          {homeData.categories[0] && (
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                component={RouterLink}
                to={homeData.categories[0].to}
                sx={{
                  position: 'relative',
                  height: { xs: 260, sm: 300, md: 500 },
                  borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,
                  overflow: 'hidden',
                  display: 'block',
                  textDecoration: 'none',
                  '&:hover .cat-img': { transform: 'scale(1.05)' },
                  '&:hover .cat-overlay': { bgcolor: 'rgba(0,0,0,0.3)' }
                }}
              >
                <Box
                  className="cat-img"
                  component="img"
                  src={homeData.categories[0].image}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                <Box
                  className="cat-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: { xs: 3, sm: 4, md: 6 },
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, mb: 1, fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
                    {homeData.categories[0].title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 400, display: { xs: 'none', sm: 'block' } }}>
                    {homeData.categories[0].text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )}

          {/* Smaller Categories Stack */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              {homeData.categories.slice(1).map((cat: any, idx: number) => (
                <Grid key={idx} size={{ xs: 6, md: 12 }}>
                  <Box
                    component={RouterLink}
                    to={cat.to}
                    sx={{
                      position: 'relative',
                      height: { xs: 180, sm: 200, md: 242 },
                      borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,
                      overflow: 'hidden',
                      display: 'block',
                      textDecoration: 'none',
                      '&:hover .cat-img': { transform: 'scale(1.05)' },
                      '&:hover .cat-overlay': { bgcolor: 'rgba(0,0,0,0.3)' }
                    }}
                  >
                    <Box
                      className="cat-img"
                      component="img"
                      src={cat.image}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                    <Box
                      className="cat-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: { xs: 2, sm: 3 },
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          mb: 0.5,
                          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                        }}
                      >
                        {cat.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          display: { xs: 'none', sm: 'block' },
                          fontSize: '0.75rem'
                        }}
                      >
                        {cat.text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Benefits items={mappedBenefits} />
    </Box>
  );
}
