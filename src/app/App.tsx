import AppRouter from '@config/routes/AppRouter';
import { theme } from '@config/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
