import React, { Component, PropTypes } from 'react';
// import './styles';


class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }

  render() {
    const { text } = this.props;
    const { number } = this.state;

    return (<h1 className="MyComponent">Hello, {text}! #{number}</h1>);
  }
}

MyComponent.propTypes = {
  text: PropTypes.string.isRequired,
};


export default MyComponent;
