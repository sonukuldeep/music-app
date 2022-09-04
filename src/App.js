import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ComponentQueue from './Components/ContentQueue';
import UiBlock from './Components/UiBlock';
import NoteState from './Context/Notes/NoteState';


function App() {
  return (
    <>
      <NoteState>
    <Router>
    <div className='container'>
    <ComponentQueue/>
    <UiBlock/>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
