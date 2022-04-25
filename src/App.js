
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
      <Route path="/0" element={<Description site={0} />}></Route>
      <Route path="/1" element={<Description site={1} />}></Route>
      <Route path="/2" element={<Description site={2} />}></Route>
      <Route path="/3" element={<Description site={3} />}></Route>
      <Route path="/4" element={<Description site={4} />}></Route>
      <Route path="/5" element={<Description site={5} />}></Route>
      <Route path="/6" element={<Description site={6} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
