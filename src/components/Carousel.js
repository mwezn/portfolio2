import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  
import img1 from '../assets/flexclip.gif'
import img2 from '../assets/medicalmaths.png'


function Slider(props) {
  return (
    <div className="App">
      <Carousel
        items={props.items}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
      />
    </div>
  );
}

export default Slider;