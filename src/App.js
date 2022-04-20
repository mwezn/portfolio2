
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Home />
      <Portfolio />
      <Footer></Footer>
      
    </div>
  );
}

export default App;
