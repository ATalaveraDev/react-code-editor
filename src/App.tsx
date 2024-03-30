import { Box } from '@mui/material'
import './App.css'
import Actions from './components/Actions/Actions'
import FilesTree from './components/FilesTree/FilesTree'
import { AppContextProvider } from './state/context'
import Tabs from './components/Tabs/Tabs'

function App() {
  return (
    <AppContextProvider>
      <Box className="sidebar">
        <Actions />
        <FilesTree />
      </Box>
      <Box className="content">
        <Tabs />
      </Box>
    </AppContextProvider>
  )
}

export default App
