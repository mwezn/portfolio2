//This is my customised version of the React-responsive-carousel
import React from 'react'
import arrow from '../assets/rightarrow.svg'
//import "react-responsive-carousel/lib/styles/custom.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Slide4,Slide5} from './Section2.js'
import "./carousel.css"

class MyApp2 extends React.Component {
    constructor(props) {
      super(props);
      this.state={autoplay:false, buttonVal:"play"}
    }
    
    
    render() {
  let slides = [
        <Slide4></Slide4>,
        <Slide5></Slide5>
      ];

      
      let cssWidth=window.innerWidth;
      console.log(cssWidth)
      return (
        <div>
        
        <div className="btmCar">
        <Carousel renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <button className="l" onClick={clickHandler}>
                  <img className="l" alt="larrow"
                          src={arrow} />
                  </button>
                    
                    )
            } renderArrowNext={(clickHandler, hasNext, labelNext) =>
              hasNext && (
                <button className='r' onClick={clickHandler}>
                <img className="r" alt="rarrow"
                    src={arrow} />
            </button>
                  
              )
          }
            
          showIndicators={false} width={"80vw"} height={"80%"} showStatus={false} showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={this.stateautoplay}>
        {slides}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  export default MyApp2

