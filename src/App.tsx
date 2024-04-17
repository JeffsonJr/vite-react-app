import { StrictMode, useMemo } from 'react';

import {
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery
} from '@mui/material';

import { cyan, orange } from '@mui/material/colors';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: cyan['500']
          },
          secondary: {
            main: orange['A400']
          }
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Typography
        component='div'
        sx={{
          height: '100%',
          maxHeight: '100%',
          padding: 4
        }}
      >
        <Paper
          elevation={2}
          sx={{
            overflow: 'auto',
            height: '100%'
          }}
        >
          <StrictMode>{/* Put component here */}</StrictMode>
        </Paper>
      </Typography>
    </ThemeProvider>
  );
};

export default App;
