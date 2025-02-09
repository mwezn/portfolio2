import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  
import img1 from '../assets/flexclip.gif'
import img2 from '../assets/medicalmaths.png'


// Can be any JSX.Element tag
const items = [
  <img src={img1} alt="Image 1" />,
  <img src={img2} alt="Image 2" />,
  <div>Custom Content 1</div>,
];

function Slider() {
  return (
    <div className="App">
      <Carousel
        items={items}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
      />
    </div>
  );
}

export default Slider;