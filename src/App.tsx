import { Box, ThemeProvider, createTheme } from '@mui/material';

import './App.css';

import Main from './components/Main/Main';
import Actions from './components/Actions/Actions';
import { AppContextProvider } from './state/context';
import FilesTree from './components/FilesTree/FilesTree';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f8f2'
    },
    warning: {
      main: '#ff5555'
    }
  },
  typography: {
    fontSize: 12
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Box className="sidebar">
          <Actions />
          <FilesTree />
        </Box>
        <Box className="content">
          <Main />
        </Box>
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default App
