import { Box, Button } from '@mui/material';

import Logo from '@features/ui/logo/Logo';

function AppButtonPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
        py: '0.5rem',
        width: '110rem',
        maxWidth: { xs: '100%', sm: '98vw', md: '95vw' },
        mx: 'auto',
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
            mx: { md: '1rem' },
            mr: { xs: -4 },
            width: { xs: '80px', md: '80px' },
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
            display: { xs: 'none', md: 'block' },
            width: { md: '94px' },
            height: { md: '48px' },
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

export default AppButtonPage;
