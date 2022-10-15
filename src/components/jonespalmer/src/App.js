import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import MyApp from './components/Carasol'
import Section3 from './components/Section3'
import Footer from './components/Footer'

import './App.css'




function App() {
  return (
    <body className='jpage'>
    <div>
    <Navbar></Navbar>
    <Section1></Section1>
    <MyApp></MyApp>
    <Section3></Section3>
    <Footer></Footer>
    </div>
    </body>

  );
}

export default App;
