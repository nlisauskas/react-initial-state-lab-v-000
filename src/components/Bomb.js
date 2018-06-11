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
    <div className="SecondsLeft">
      {this.state.secondsLeft}
    </div>
  }
}

export default Bomb;
