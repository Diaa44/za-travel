import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Stack, Typography } from '@mui/material';

import { HOME_SECTION_IMAGES } from '@features/trip/data';
import AppButton from '@features/ui/AppButton';
import BorderedBox from '@features/ui/layout/landing/BorderedBox';

import AdvantagesSection from './AdvanatgesSection';

interface HomeLayoutProps {
  title: string;
  description: string;
  imageIndex: number;
}

const TravelFeatures: React.FC<HomeLayoutProps> = ({}) => {
  // Hook to detect scroll position for the first section
  const { ref: inViewRef1, inView: inView1 } = useInView({
    triggerOnce: false, // Change this to false to allow continuous triggering
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  // Hook to detect scroll position for the second section
  const { ref: inViewRef2, inView: inView2 } = useInView({
    triggerOnce: false, // Change this to false to allow continuous triggering
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: { xs: 6, md: 14 },
          width: '100%',
        }}
      >
        <Stack
          direction="column"
          spacing={{ xs: 4, md: 8 }}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '95vw' },
            alignItems: 'center',
          }}
        >
          {HOME_SECTION_IMAGES.length > 0 && (
            <motion.div
              ref={inViewRef1}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView1 ? 1 : 0,
                y: inView1 ? 0 : 50,
                transition: { duration: 0.8 },
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 5, md: 25 }}
                alignItems="center"
                justifyContent="center"
                sx={{ width: { xs: '100%', md: '100rem' } }}
              >
                <Box
                  sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                  <Box
                    component="img"
                    src={HOME_SECTION_IMAGES[0].src}
                    alt={HOME_SECTION_IMAGES[0].alt}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '90%', md: '50.625rem' },
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 'rgba(0, 0, 0, 0.3) -8px 8px 25px -5px',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    textAlign: 'left',
                    maxWidth: { xs: '90%', md: '37.5rem' },
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    Dashboard
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      color: 'common.black',
                      fontSize: { xs: '24px', md: '35px' },
                    }}
                  >
                    Organize All Your Trips in a Single Application
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      mt: { xs: 2, md: 4 },
                      width: { xs: '100%' },
                      fontSize: { xs: '18px', md: '20px' },
                    }}
                  >
                    With our intuitive application, you can effortlessly
                    organize all your trips in one convenient location. From
                    itinerary details and booking confirmations to travel notes
                    and essential documents, everything you need for a smooth
                    and stress-free journey is just a tap away. Enjoy a
                    clutter-free travel experience and stay in control of your
                    adventures with ease.
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      mt: 3,
                    }}
                  >
                    <AppButton
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                      sx={{ width: { xs: '382px', md: '260px' } }}
                    >
                      Plan your trip
                    </AppButton>
                  </Box>
                </Box>
              </Stack>
            </motion.div>
          )}
          <BorderedBox
            width="100%"
            maxWidth="77rem"
            sx={{
              maxWidth: { xs: '95%', md: '99rem' },
              borderWidth: '1px',
            }}
            children={undefined}
          />
          {HOME_SECTION_IMAGES.length > 1 && (
            <motion.div
              ref={inViewRef2}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView2 ? 1 : 0,
                y: inView2 ? 0 : 50,
                transition: { duration: 0.8 },
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 10, md: 20 }} // Adjusted spacing for different screen sizes
                justifyContent="center"
                sx={{
                  width: { xs: '100%', md: '100%' },
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    order: { xs: 1, md: 2 },
                  }}
                >
                  <Box
                    component="img"
                    src={HOME_SECTION_IMAGES[1].src}
                    alt={HOME_SECTION_IMAGES[1].alt}
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '90%', md: '47.625rem' },
                      mt: { xs: -5 },
                      borderRadius: 2,
                      boxShadow: 'rgba(0, 0, 0, 0.3) -8px 8px 25px -5px',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    textAlign: 'left',
                    maxWidth: { xs: '90%', md: '41.5rem' },
                    order: { xs: 2, md: 1 },
                    spacing: { xs: 0, md: 10 }, // Adjust the margin top here
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      textTransform: 'uppercase',
                      mt: { xs: -8, md: 22 },
                      ml: { xs: 2, md: -20 },
                    }}
                  >
                    Expenses
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      color: 'common.black',
                      ml: { xs: 2, md: -20 },
                      fontSize: { xs: '1.5rem', md: '2.25rem' },
                    }}
                  >
                    Expense Tracking for Your Travels
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      mt: 2,
                      ml: { xs: 2, md: -20 },
                      width: { xs: '100%' },
                      fontSize: { xs: '18px', md: '20px' },
                    }}
                  >
                    Keep a close watch on your travel costs with our
                    user-friendly expense tracking solution. Set budget goals,
                    receive real-time updates, and make informed decisions to
                    ensure you get the most out of your travel experiences
                    without any financial surprises. Travel with confidence,
                    knowing that your expenses are well-managed and under
                    control.
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      mt: 3,
                      ml: { xs: 2, md: -20 },

                      width: '100%',
                    }}
                  >
                    <AppButton
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                      sx={{ width: { xs: '383px', md: '260px' } }}
                    >
                      Plan your trip
                    </AppButton>
                  </Box>
                </Box>
              </Stack>
            </motion.div>
          )}
        </Stack>
      </Box>
      <AdvantagesSection />
    </>
  );
};

export default TravelFeatures;
