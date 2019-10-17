import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/main.less';

function Key(props) {
  return (
    <button className={props.classNames.join(' ')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class CalculatorInput extends React.Component {
  renderKey(i, ...classNames) {
    classNames = classNames.concat(['key']);
    return <Key value={i} classNames={classNames}></Key>;
  }

  render() {
    return (
      <div>
        <div className="input-row">
          {this.renderKey(7)}
          {this.renderKey(8)}
          {this.renderKey(9)}
          {this.renderKey('/', 'special')}
        </div>
        <div className="input-row">
          {this.renderKey(4)}
          {this.renderKey(5)}
          {this.renderKey(6)}
          {this.renderKey('x', 'special')}
        </div>
        <div className="input-row">
          {this.renderKey(1)}
          {this.renderKey(2)}
          {this.renderKey(3)}
          {this.renderKey('-', 'special')}
        </div>
        <div className="input-row">
          {this.renderKey('0')}
          {this.renderKey('.')}
          {this.renderKey('=', 'equals')}
          {this.renderKey('+', 'special')}
        </div>
      </div>
    );
  }
}

function OutputLine(props) {
  return <div className="outputLine">{props.value}</div>;
}

class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: ['1+1 = 2', '2+1*3 = 5'],
    };
  }

  render() {
    return (
      <div>
        {this.state.lines.map(line => (
          <OutputLine value={line} />
        ))}
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-input">
          <CalculatorInput />
        </div>
        <div className="calculator-screen">
          <CalculatorScreen />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
