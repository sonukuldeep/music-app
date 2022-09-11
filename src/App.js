import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ComponentQueue from './Components/ContentQueue';
import UiBlock from './Components/UiBlock';
import PlaylistState from './Context/Notes/PlaylistState';
import FilterState from './Context/Notes/FilterState';
import { useState} from 'react'




function App() {
  const [isTrue, setIsTrue] = useState(false)
  const [triggerPlaylist, setTriggerPlaylist] = useState(false)

setTimeout(() => {
  setIsTrue(true)
}, 2000);

  return (
    <>
      <PlaylistState>
        <FilterState>
        <Router>
          {isTrue && <div className='container'>
            <ComponentQueue triggerFun={setTriggerPlaylist} triggerVal={triggerPlaylist} />
            <UiBlock trigger={triggerPlaylist} />
          </div>}
        </Router>
        </FilterState>
      </PlaylistState>
    </>
  );
}

export default App;
