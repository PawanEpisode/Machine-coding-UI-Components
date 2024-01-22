import './App.css'
import Folder from './components/Folder'
import { FILE_EXPLORER_UI_DATA } from './data/folderData'

function App() {
  return (
    <div>
      <Folder folderData={FILE_EXPLORER_UI_DATA}/>
    </div>
  )
}

export default App
