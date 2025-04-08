// TravelAdvantagesSection.tsx
import { motion } from 'framer-motion';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { Box, Grid, Typography } from '@mui/material';
import { common } from '@mui/material/colors';

import AppButton from '@features/ui/AppButton';

import LandingLayout from './LandingLayout';

const AdvantagesSection = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          color: theme.palette.primary.main,
          textTransform: 'uppercase',
          textAlign: 'center',
          pt: { xs: 6, md: 28 },
          mb: { xs: 4, md: 8 },
        })}
      >
        advantages
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            mt: { xs: 0, md: 0 },

            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: { xs: '20px', md: '40px' },
            letterSpacing: '0.15px',
            color: 'text.primary',
            textAlign: 'center',
          }}
        >
          Why choose us?
        </Typography>
      </Box>
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        gap={10}
        mt={{ xs: 6, md: 15 }}
        justifyContent="center"
      >
        <Grid item sx={{ flex: 1, textAlign: 'center', maxWidth: '37.5rem' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '68px',
              height: '64px',
              mx: 'auto',
              backgroundColor: 'secondary.main',
              borderRadius: '8px',
              mb: 4,
            }}
          >
            <CameraAltOutlinedIcon
              sx={{ fontSize: '2rem', color: 'common.white' }}
            />
          </Box>
          <Typography variant="h6" sx={{ color: common.black }}>
            Keep memories from the trip
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Keeping your travel photos within <br />
            your trip-planning app is incredibly <br />
            practical.
          </Typography>
        </Grid>
        <Grid item sx={{ flex: 1, textAlign: 'center', maxWidth: '37.5rem' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '68px',
              height: '64px',
              mx: 'auto',
              backgroundColor: 'secondary.main',
              borderRadius: '8px',
              mb: 4,
            }}
          >
            <PlaceOutlinedIcon
              sx={{ fontSize: '2rem', color: 'common.white' }}
            />
          </Box>
          <Typography variant="h6" sx={{ color: common.black }}>
            Add places you want to visit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our user-friendly tools help you plan <br /> and organize your
            packing with ease.
          </Typography>
        </Grid>
        <Grid item sx={{ flex: 1, textAlign: 'center', maxWidth: '37.5rem' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '68px',
              height: '64px',
              mx: 'auto',
              backgroundColor: 'secondary.main',
              borderRadius: '8px',
              mb: 4,
            }}
          >
            <PermMediaOutlinedIcon
              sx={{ fontSize: '2rem', color: 'common.white' }}
            />
          </Box>
          <Typography variant="h6" sx={{ color: common.black }}>
            Centralize all your documents
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Simplify Your Life by Bringing Together All
            <br /> Your Essential Documents and Files in a<br /> Single, Easily
            Accessible Location.
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
    <Box
      sx={{
        position: 'relative',
        top: 170,
        ml: 105,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <LandingLayout imageIndex={2} title="" description="" />
    </Box>

    <Box
      sx={{
        top: { xs: '0', md: '284px' },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <LandingLayout title={''} description={''} imageIndex={0} />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <LandingLayout
          title={''}
          description={''}
          imageIndex={1}
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            zIndex: { xs: 0, md: -3 },
            height: { xs: '58px', md: '59px' },
            top: { xs: '0', md: '249px' },
            left: { xs: '0', md: '537px' },
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: { xs: 0, md: -1 },
          bottom: { xs: '0', md: '70px' },
          right: { xs: '0', md: '100px' },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <LandingLayout title="" description="" imageIndex={3} />
      </Box>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92B5582B',
        width: { xs: '426px', md: '100%' },
        height: { xs: '398px', md: '386px' },
        mt: { xs: 15, md: '0' },
        pt: { xs: 41, md: 0 },
      }}
    >
      <Box
        sx={{
          mb: 89,
          transform: 'rotate(7deg)',
          position: 'relative',
          left: { xs: '80px', md: '320px' },
          top: { xs: '-20px', md: '20px' },
          width: { xs: '50px', md: '15px' },
        }}
      >
        <LandingLayout title="" description="" imageIndex={3} />
      </Box>
      <Box
        sx={{
          mb: 89,
          transform: { md: 'rotate(7deg)' },
          position: 'relative',
          left: { xs: '40px', md: '270px' },
          top: { xs: '-1px', md: '30px' },
          width: { xs: '60px', md: '165px' },
        }}
      >
        <LandingLayout title="" description="" imageIndex={3} />
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: 'primary.main',
          fontWeight: 500,
          mr: 6,
          ml: { xs: -10, md: -10 },
          width: { xs: '382px', md: '842px' },
          fontSize: { xs: '30px', md: '50px' },
          textAlign: { xs: 'center' },
        }}
      >
        Let’s plan your next trip together?
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            ml: { xs: -4 },
          }}
        >
          <AppButton
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            sx={{
              width: { xs: '380px', md: '260px' },
              height: { xs: '56px', md: '57px' },
              ml: { xs: 5 },
            }}
          >
            Plan your trip
          </AppButton>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <LandingLayout
            title={''}
            description={''}
            imageIndex={1}
            sx={{
              transform: { xs: 'rotate(5.37deg)' },
            }}
          />
          <LandingLayout
            title={''}
            description={''}
            imageIndex={0}
            sx={{ width: { xs: '89px' } }}
          />
        </Box>
      </Typography>
    </Box>
  </>
);

export default AdvantagesSection;
