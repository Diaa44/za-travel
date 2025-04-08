import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography } from '@mui/material';

import Logo from '@features/ui/logo/Logo';

function FooterLanding() {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Logo />
      </Box>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography
          variant="body1"
          textAlign={'center'}
          color={'common.black'}
          sx={{ fontSize: '21px' }}
        >
          Get in touch
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={'21px'}
          lineHeight={'24px'}
          color={'text.secondary'}
          mt={1}
        >
          Contact us anytime for <br /> getting support
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body1"
            color="common.black"
            sx={{ fontSize: '26px' }}
          >
            contact@
            <Typography
              component="span"
              fontWeight="bold"
              color="grey.900"
              sx={{ fontSize: '26px' }}
            >
              zatravel
            </Typography>
            .com
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex', // Flexbox for row layout
          justifyContent: 'center', // Center the icons horizontally
          alignItems: 'center', // Align the icons vertically
          gap: 2, // Space between the icons
          flexDirection: 'row',
          mt: 2,
          mb: 5,
        }}
      >
        {/* Instagram Icon Box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px', // Set width for icon box
            height: '48px', // Set height for icon box
            backgroundColor: '#92B5582B',
            borderRadius: '8px',
            p: 2, // Padding around the icon
          }}
        >
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }} // Removes underline on hover
          >
            <InstagramIcon
              sx={{
                fontSize: '2rem',
                color: 'primary.main',
              }}
            />
          </a>
        </Box>

        {/* Twitter Icon Box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px',
            height: '48px',
            backgroundColor: '#92B5582B',
            borderRadius: '8px',
            p: 2,
          }}
        >
          <a
            href="https://www.Twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <FacebookSharpIcon
              sx={{
                fontSize: '2rem',
                color: 'primary.main',
              }}
            />
          </a>
        </Box>

        {/* Facebook Icon Box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px',
            height: '48px',
            backgroundColor: '#92B5582B',
            borderRadius: '8px',
            p: 2,
          }}
        >
          <a
            href="https://www.Facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <TwitterIcon
              sx={{
                fontSize: '2rem',
                color: 'primary.main',
              }}
            />
          </a>
        </Box>
      </Box>
    </>
  );
}

export default FooterLanding;
