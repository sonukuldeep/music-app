import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ComponentQueue from './Components/ContentQueue';
import UiBlock from './Components/UiBlock';
import NoteState from './Context/Notes/NoteState';
import { useState} from 'react'



function App() {
  // check if data loaded or not
  // const songData = useContext(NoteContext);
  const [isTrue, setIsTrue] = useState(false)
  const [triggerPlaylist, setTriggerPlaylist] = useState(false)

setTimeout(() => {
  setIsTrue(true)
}, 2000);

  return (
    <>
      <NoteState>
        <Router>
          {isTrue && <div className='container'>
            <ComponentQueue triggerFun={setTriggerPlaylist} triggerVal={triggerPlaylist} />
            <UiBlock trigger={triggerPlaylist} />
          </div>}
        </Router>
      </NoteState>
    </>
  );
}

export default App;
