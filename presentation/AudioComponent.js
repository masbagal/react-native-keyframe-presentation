// Import React
import React from 'react';

export default class Presentation extends React.Component {
  componentDidMount() {
    this.props.audio.play();
  }
  render() {
    return null;
  }
}