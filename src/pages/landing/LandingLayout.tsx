import { CardMedia, Stack, SxProps } from '@mui/material';

import { LANDING_PAGE_IMAGES } from '@features/trip/data';

interface LandingPageImage {
  title: string;
  description: string;
  imageIndex: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  sx?: SxProps;
}

const LandingLayout: React.FC<LandingPageImage> = ({ imageIndex }) => {
  const image = LANDING_PAGE_IMAGES[imageIndex];

  return (
    <>
      <Stack
        sx={{
          display: { xs: 'flex', sm: 'flex' },
          justifyContent: 'flex-start',
          position: 'relative',
          right: '10px',

          ...(imageIndex === 0
            ? {
                mb: { xs: 20, md: -23 },
                ml: { xs: -25, md: -8 },
                width: { xs: '125%', md: '660px' },

                top: { xs: '-69px', md: '14px' },
              }
            : {
                top: { xs: '55px', md: '140px' },
                left: { xs: '260px', sm: '160px', md: '580px' },
                width: { xs: '81px', sm: '90px', md: '97px' },
              }),
        }}
      >
        {image && (
          <CardMedia
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{
              width:
                imageIndex === 2
                  ? '40.875rem'
                  : imageIndex === 3
                  ? '200px'
                  : 'auto', // New condition for index 4
              maxWidth:
                imageIndex === 0
                  ? '660px'
                  : imageIndex === 3
                  ? '154px'
                  : imageIndex === 2
                  ? '29rem'
                  : '40rem',
              height: 'auto',
            }}
          />
        )}
      </Stack>
    </>
  );
};

export default LandingLayout;
