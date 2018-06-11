// Bomb Component Code Goes Here
// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props
    }
  }

  render() {
    <div className="ImageSlider">
      I am on slide {this.slide.currentSlideIndex}
    </div>
  }
}

export default Bomb;
