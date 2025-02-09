import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/Homepage'
import Description from './components/Description'
import Game from './components/tictactoe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/1" element={<Description site={1} />}></Route>
      <Route path="/tictactoe" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
