// import logo from './logo.svg';
import './App.css';
// import NavBar from './Components/NavBar';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import HomePage from './Routes/HomePage';

function App() {
  return (
    <BrowserRouter basename='/trident'>
   <div>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
