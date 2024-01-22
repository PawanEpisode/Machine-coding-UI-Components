import Folder from './components/Folder'
import { FILE_EXPLORER_UI_DATA } from './data/folderData'

import './App.css';

function App() {
  return (
    <div className='explorer'>
      <h1>File Explorer UI through JSON</h1>
      <Folder folderData={FILE_EXPLORER_UI_DATA}/>
    </div>
  )
}

export default App
