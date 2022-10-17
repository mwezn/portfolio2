import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/Homepage'
import Description from './components/Description'
import JP from './components/jonespalmer/src/App.js'
import Crypto from './components/cryptod3/src/App.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/1" element={<Description site={1} />}></Route>
      <Route path="/jp" element={<JP />}></Route>
      <Route path="/cryptod3" element={<Crypto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
