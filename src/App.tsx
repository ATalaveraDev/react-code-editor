import { Box } from '@mui/material'
import './App.css'
import Actions from './components/Actions/Actions'
import FilesTree from './components/FilesTree/FilesTree'
import { AppContextProvider } from './state/context'
import Tabs from './components/Tabs/Tabs'
import ContentEditor from './components/ContentEditor/ContentEditor'

function App() {
  return (
    <AppContextProvider>
      <Box className="sidebar">
        <Actions />
        <FilesTree />
      </Box>
      <Box className="content">
        <Tabs />
        <ContentEditor />
      </Box>
    </AppContextProvider>
  )
}

export default App
