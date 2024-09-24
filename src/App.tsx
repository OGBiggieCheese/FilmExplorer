import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './screens/homepage'; 
import Film from './screens/film/film';
import Profile from './screens/profile/profile';

function App() {
  return (
    <div className="App">
      <header>
     
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/film/:filmID' element={<Film/>}></Route>
            <Route path='/profile' element={<Profile/>}> </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
