import './App.css'
import Actions from './components/Actions/Actions'
import FilesTree from './components/FilesTree/FilesTree'
import { AppContextProvider } from './state/context'

function App() {
  return (
    <AppContextProvider>
      <Actions />
      <FilesTree />
    </AppContextProvider>
  )
}

export default App
