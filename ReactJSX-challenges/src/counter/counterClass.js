import React, { Component } from 'react';

class CounterClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default CounterClassApp;
