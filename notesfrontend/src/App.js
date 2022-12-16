import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NotesInput from './Components/NotesInput';
//import Notes from './Notes';
import UpdateForm from './Components/UpdateForm';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='update/:title/:id' element = {<UpdateForm/>}/>
        <Route path='/' element={<NotesInput/>}
        />
        </Routes>
        
     
    
     
    </div>
    </Router>
  );
}

export default App;
