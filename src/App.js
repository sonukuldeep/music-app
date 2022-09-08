import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ComponentQueue from './Components/ContentQueue';
import UiBlock from './Components/UiBlock';
import NoteState from './Context/Notes/NoteState';
import {useState} from 'react'


function App() {
  const [triggerPlaylist, setTriggerPlaylist] = useState(false)
  return (
    <>
      <NoteState>
    <Router>
    <div className='container'>
    <ComponentQueue triggerFun={setTriggerPlaylist} triggerVal={triggerPlaylist}/>
    <UiBlock trigger={triggerPlaylist}/>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
