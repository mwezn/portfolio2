import React from 'react'
import "./carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Slide1, Slide2,Slide3,Slide4} from './Section2.js'




class MyApp extends React.Component {
    constructor(props) {
      super(props)
      this.state= {autoplay :false, buttonVal:"play"}
    }
    
    pausePlay(){
        this.state.autoplay?this.setState({autoplay :false, buttonVal:"play"}):this.setState({autoplay:true,buttonVal:"X"})
        
    }
    
    render() {
     
      const btnStyle={width:"75px",height:"75px", position:"relative", top:"0px",backgroundColor:"rgb(1,1,1,0.7)",color:"white"}
      
      let slides2=[<Slide1></Slide1>,
         <Slide2></Slide2>,
         <Slide3></Slide3>,
         <Slide4></Slide4>
         ]
      return (
        <div>
        
        <div id="section2">
        <button style={btnStyle} onClick={(e)=>this.pausePlay()}>{this.state.buttonVal}</button>
        <Carousel statusFormatter={(current, total) => `${current} / ${total}`} showThumbs={false} infiniteLoop={true} interval={3000} autoPlay={this.state.autoplay}>
        {slides2}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  

  export default MyApp
