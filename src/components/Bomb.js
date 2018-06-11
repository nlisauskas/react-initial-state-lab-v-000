// Bomb Component Code Goes Here
// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    <div className="ImageSlider">
      I am on slide {this.slide.currentSlideIndex}
    </div>
  }
}

export default Bomb;
