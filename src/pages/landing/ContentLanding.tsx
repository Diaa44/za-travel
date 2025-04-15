// src/pages/landing/ContentLandingPage.tsx
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Stack, Typography } from '@mui/material';
import { common } from '@mui/material/colors';

import AppButton from '@features/ui/AppButton';
import BorderedBox from '@features/ui/layout/landing/BorderedBox';
import { useBreakpoints } from '@hooks/useBreakpoints';

import AvatarSection from './LandingAvatar';

export default function ContentLandingPage() {
  const { md } = useBreakpoints();

  return (
    <>
      <Stack
        spacing={{ xs: 2, md: 4 }}
        sx={{
          maxWidth: { xs: '100%', md: '1200px' },
          mx: 'auto',
          width: '100%',
          ml: { xs: 2, md: 6 },
          px: { xs: -5, md: 3 },
          mt: { xs: 2, sm: -6 },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: '32px', md: '60px' },
            lineHeight: { xs: '48px', md: '70px' },
            color: 'text.primary',
            ml: { xs: 0, md: 4 },

            width: { xs: '382px', md: '668px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Your Ultimate Trip Companion
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '18px', md: '20px' },
            lineHeight: { xs: '30px', md: '30px' },
            letterSpacing: '0.15px',
            color: 'text.secondary',
            mt: { xs: 1, md: 2 },
            ml: { xs: 1, md: 4 },
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '382px', md: '668px' },
          }}
        >
          Welcome to ZaTravel – Your Passport to Seamless Adventures! Discover,
          plan, and track your journeys effortlessly with our intuitive web
          application.
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
            Start exploring now!
          </Box>
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          gap={{ xs: 1, md: 3 }}
          sx={{
            mt: { xs: 3, md: 5 },
            ml: { xs: 0, md: 4 },
          }}
        >
          <AppButton
            fullWidth={!md}
            type="submit"
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            sx={{
              width: { xs: '382px', md: '326px' },
              height: { xs: '56px', md: '56px' },
              mr: { xs: 2, md: 0 },
              mt: { xs: 5, md: 0 },
              mb: { xs: 2, md: 0 },
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: { xs: '18px', md: '18px' },
            }}
          >
            Plan your trip
          </AppButton>

          <AppButton
            fullWidth={!md}
            type="submit"
            variant="outlined"
            sx={{
              width: { xs: '380px', md: '326px' },
              height: { xs: '56px', md: '56px' },
              borderRadius: '8px',
              textTransform: 'none',
              color: 'text.grey.300',
              fontSize: { xs: '16px', md: '18px' },
              display: { xs: 'none', md: 'block' }, // Hides on mobile (xs), shows on sm+
            }}
          >
            Learn more
          </AppButton>
        </Box>
        <Box sx={{ mt: { xs: 0, md: 29 } }}>
          <BorderedBox
            topBorder
            bottomBorder
            sx={{
              width: { xs: '380px', md: '625px' },
              mt: { xs: 1, md: 13 },
              mx: { xs: 0, md: 0 },
              px: { xs: 1, md: 3 },
              ml: { xs: 0, md: 4 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: common.black,
                ml: { xs: -1, md: -3 },
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '22px', md: '32px' },
                whiteSpace: 'nowrap', // prevent it from breaking to next line
              }}
            >
              1200+ users
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'flex-start', md: 'flex-start' }} // <- changed!
              ml={{ xs: 9, md: 0 }}
              spacing={{ xs: 1, md: 5 }}
            >
              <AvatarSection />
            </Stack>
            {/* <-- Only shift the text on desktop */}
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '16px', md: '16px' },
                width: { xs: '382px', md: '167px' },
                textAlign: 'left',
                ml: { xs: -48, md: 0 },
                mt: { xs: 6, md: 0 },
                whiteSpace: { xs: 'nowrap', md: 'normal' }, // prevent it from breaking to next line
              }}
            >
              Track their trips in our App.
            </Typography>
          </BorderedBox>
        </Box>
      </Stack>
    </>
  );
}
