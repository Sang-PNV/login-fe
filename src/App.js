import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element = {<LoginPage/>}/>
      <Route path="/" element = {<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
