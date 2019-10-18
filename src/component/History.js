import React from 'react';
import { Screen } from './Screen.js';
import { CalculatorService } from 'service/CalculatorService';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operations: ['Loading...'] };
    CalculatorService.getHistory().then(data => {
      this.setState({
        operations: data,
      });
    });
  }
  render() {
    return (
      <div className="history">
        <div className="calculator-screen">
          <Screen lines={this.state.operations} />
        </div>
      </div>
    );
  }
}

export { History };
