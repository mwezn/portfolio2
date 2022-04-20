
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/Homepage'
import Description from './components/Description'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/test" element={<Description name="Mike" />}></Route>
      <Route path="/todo" element={<Description name="Mike" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
