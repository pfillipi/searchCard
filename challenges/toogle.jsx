import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false }
  }

  handleClick() {
    // todo
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.toggle ? "ON" : "OFF"}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);