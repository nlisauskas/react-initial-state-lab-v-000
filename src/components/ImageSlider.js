// Bomb Component Code Goes Here
import React from 'react';

class ImageSlider extends React.Component {
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
