import { Box } from '@mui/material'
import './App.css'
import Actions from './components/Actions/Actions'
import FilesTree from './components/FilesTree/FilesTree'
import { AppContextProvider } from './state/context'

function App() {
  return (
    <AppContextProvider>
      <Box className="sidebar">
        <Actions />
        <FilesTree />
      </Box>
      <Box></Box>
    </AppContextProvider>
  )
}

export default App
