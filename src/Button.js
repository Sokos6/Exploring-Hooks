import React, { Component } from 'react'

export default class Button extends Component {
  constructor() {
    super();
    this.state = { buttonText: "Click Me" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { buttonText: "Thanks!" };
    });
  }

  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }

}
