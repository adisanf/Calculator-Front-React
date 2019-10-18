import React from 'react';
import { Calculator } from './Calculator.js';
import { History } from './History.js';
import 'style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalculatorShown: true,
    };
  }

  toggleIsCalculatorShown() {
    const state = {
      isCalculatorShown: !this.state.isCalculatorShown,
    };
    this.setState(state);
  }

  render() {
    return (
      <div className="calculator-app">
        <div
          className="button toggle-history"
          onClick={() => this.toggleIsCalculatorShown()}
        >
          {this.state.isCalculatorShown ? `Show History` : `Show Calculator`}
        </div>
        {this.state.isCalculatorShown ? <Calculator /> : <History />}
      </div>
    );
  }
}

export { App };
