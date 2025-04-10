import { Box, Card, CardMedia, Stack } from '@mui/material';

import {
  LANDING_PAGE_IMAGES,
  TRAVEL_SECTION_IMAGES,
} from '@features/trip/data';
import { useBreakpoints } from '@hooks/useBreakpoints';

import LandingLayout from './LandingLayout';

interface TravelImagesProps {
  title: string;
  description: string;
  imageIndex: number;
}

const LandingImageCard: React.FC<TravelImagesProps> = ({ imageIndex }) => {
  const image = LANDING_PAGE_IMAGES[imageIndex]; // Get landing image by index
  const { md } = useBreakpoints(); // Detect medium breakpoint (desktop vs mobile)

  return (
    <>
      <Box>
        {/* Show LandingLayout only on desktop */}
        {md && (
          <>
            <LandingLayout title="" description="" imageIndex={0} />
            <LandingLayout title="" description="" imageIndex={1} />
          </>
        )}
      </Box>

      {image && <CardMedia component="img" image={image.src} alt={image.alt} />}

      {/* TRAVEL SECTION IMAGES */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' }, // Center on mobile, right-align on desktop
          width: '100%', // Ensure the box takes full width
          mt: { xs: -11, md: -3 },
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1, md: 3 }}
          sx={{
            width: '100%',
            maxWidth: '48%',
          }}
        >
          {/* Left column (Rectangle1 & Rectangle2 stacked vertically) */}
          <Stack spacing={{ xs: 1, md: 2 }}>
            {TRAVEL_SECTION_IMAGES.filter(
              (img) =>
                img.id === 'Rectangle1' || (md && img.id === 'Rectangle2'), // Rectangle2 only on desktop
            ).map((travelImage) => (
              <Card
                key={travelImage.id}
                sx={{
                  width: '100%', // Full width of parent
                  aspectRatio: '403 / 451', // Maintain original aspect ratio
                  borderRadius: '40px',
                  display: md ? 'block' : 'none', // Hide Rectangle1 and Rectangle2 on mobile
                }}
              >
                <CardMedia
                  component="img"
                  image={travelImage.src}
                  alt={travelImage.alt}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
            ))}
          </Stack>

          {/* Right side (Rectangle3) */}
          {md &&
            TRAVEL_SECTION_IMAGES.filter((img) => img.id === 'Rectangle3').map(
              // Rectangle3 only on desktop
              (travelImage) => (
                <Card
                  key={travelImage.id}
                  sx={{
                    width: { md: '364px' },
                    height: { md: '926px' },
                    borderTopRightRadius: '40px',
                    borderBottomRightRadius: '19px',
                    overflow: 'hidden',
                    display: md ? 'block' : 'none', // Hide Rectangle3 on mobile
                  }}
                >
                  <CardMedia
                    component="img"
                    image={travelImage.src}
                    alt={travelImage.alt}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              ),
            )}
        </Stack>
      </Box>

      {/* Adjust Rectangle2 size for mobile */}
      <Box
        sx={{
          display: { xs: 'none', md: 'none' },
          width: { xs: '389px', md: '403px' },
          height: { xs: '184px', md: '451px' },
        }}
      >
        <CardMedia
          component="img"
          image={
            TRAVEL_SECTION_IMAGES.find((img) => img.id === 'Rectangle2')?.src
          }
          alt="Rectangle 2"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '24px',
          }}
        />
      </Box>

      {/* Adjust Rectangle6 size for mobile */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' }, // Show only on mobile
          width: { xs: '384px', md: '100%' },
          height: '184px',
          top: '92px',
          left: '20px',
          position: 'relative', // Position it correctly on the screen
        }}
      >
        <CardMedia
          component="img"
          image={
            TRAVEL_SECTION_IMAGES.find((img) => img.id === 'Rectangle6')?.src
          }
          alt="Rectangle 6"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '24px',
          }}
        />
      </Box>
    </>
  );
};

export default LandingImageCard;
