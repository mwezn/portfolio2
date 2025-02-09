import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio'
import Footer from './Footer'
import Slider from './Carousel'

const Homepage =()=>{
    return(
        <div>
        <Navbar></Navbar>
        <Home></Home>
        <Slider></Slider>
        <Portfolio></Portfolio>
        <Footer></Footer>
        </div>
    )
}
export default Homepage;
