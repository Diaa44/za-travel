import { Box, Button } from '@mui/material';

import Logo from '@features/ui/logo/Logo';

function AppButtonPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: '0.5rem', md: '45px' },
        py: '16px',
        width: '1920px',
        maxWidth: { xs: '100%', md: '95vw' },
      }}
    >
      <Box sx={{ minWidth: { xs: '3rem', md: '6.25rem' } }}>
        <Logo />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 6 }}>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            color: 'text.main',
            textTransform: 'none',
            borderRadius: '8px',
            mx: { xs: '0', md: '16px' },
            fontSize: { xs: '16px', md: '16px' },
            mr: { xs: -4, md: 3 },
            width: { xs: '80px', md: '94px' },
            height: { xs: '48px', md: '48px' },
          }}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            color: 'text.grey',
            textTransform: 'none',
            borderRadius: '8px',
            fontSize: { xs: '', md: '16px' },
            display: { xs: 'none', md: 'block' },
            width: { xs: '80px', md: '94px' },
            height: { xs: '48px', md: '48px' },
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

export default AppButtonPage;
