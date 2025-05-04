import { Box, Stack, Typography } from '@mui/material';

import LandingHeader from '@features/ui/layout/landing/LandingHeader';
import { useBreakpoints } from '@hooks/useBreakpoints';

import ContentLanding from './landing/ContentLanding';
import FooterLanding from './landing/FooterLanding';
import LandingImageCard from './landing/LandingImageCard';
import TravelFeatures from './landing/TravelFeatures';

export default function HomePage() {
  const { md } = useBreakpoints();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflowX: { xs: 'hidden', md: 'hidden' }, // Hide overflow only for xs (mobile screens)
          position: 'relative', // Ensure proper positioning of child elements
        }}
      >
        {/* Your landing page content goes here */}

        {/* Landing Header Section */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            mb: md ? 3 : 2,
            width: '100%',
          }}
        >
          <LandingHeader />
        </Box>

        {/* Landing Image Card */}
        <Box sx={{ mt: md ? 9 : 1, width: '100%' }}>
          <LandingImageCard
            title="Explore"
            description="Discover the world"
            imageIndex={4}
          />
        </Box>

        {/* Absolute Positioned Content */}
        <Stack
          sx={{
            position: 'absolute',
            top: md ? '30rem' : '20rem',
            width: '100%',
          }}
        >
          <ContentLanding />
        </Stack>

        {/* Features Section Title */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 80, md: 10 }, // Reduced margin to prevent extra space
          }}
        >
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              textAlign: 'center',
              mt: { xs: 17, md: 20 },
            })}
          >
            Features
          </Typography>
        </Box>

        {/* Feature Description Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: { xs: 2, md: 3 }, // Reduced margin for a tighter layout on mobile
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: { xs: '24px', md: '40px' }, // Responsive font size
              letterSpacing: '0.15px',
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            {/* Conditional rendering for different screen sizes */}
            {window.innerWidth <= 600
              ? 'ZaTravel best solution for travelling'
              : 'ZaTravel best solution for travel'}
          </Typography>
        </Box>

        {/* Travel Features Component */}

        <TravelFeatures title={''} description={''} imageIndex={0} />
        <FooterLanding />
      </Box>
    </>
  );
}
