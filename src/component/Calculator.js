import React from 'react';
import './App.css';
import { CalculatorService } from 'service/CalculatorService';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [''],
    };
  }

  handleClick(value) {
    const lines = this.state.lines.slice();

    if (value === '=') {
      if (lines[0] === '') {
        return;
      }
      if (this.checkCurrentExpressionIsEvaluable(lines[0])) {
        lines[0] = `${lines[0]} = ${eval(lines[0])}`;
      } else {
        lines[0] = `${lines[0]} = ERROR`;
      }
      lines.unshift('');
    } else {
      lines[0] += value;
    }
    this.setState({ lines: lines.slice(0, 10) });
  }

  checkCurrentExpressionIsEvaluable(expression) {
    try {
      eval(expression);
      return true;
    } catch (error) {
      return false;
    }
  }

  save() {
    CalculatorService.saveCurrentOperations();
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-input">
          <CalculatorInput
            onClick={classNames => this.handleClick(classNames)}
          />
        </div>
        <div className="calculator-screen">
          <CalculatorScreen lines={this.state.lines} />
        </div>
        <div className="button save" onClick={this.save}>
          Save
        </div>
      </div>
    );
  }
}

function Key(props) {
  return (
    <button className={props.classNames.join(' ')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class CalculatorInput extends React.Component {
  renderKey(value, ...classNames) {
    classNames = classNames.concat(['key']);
    return (
      <Key
        value={value}
        classNames={classNames}
        onClick={() => this.props.onClick(value)}
      ></Key>
    );
  }

  render() {
    return (
      <div>
        <div className="input-row">
          {this.renderKey('7')}
          {this.renderKey('8')}
          {this.renderKey('9')}
          {this.renderKey('/', 'special')}
        </div>
        <div className="input-row">
          {this.renderKey('4')}
          {this.renderKey('5')}
          {this.renderKey('6')}
          {this.renderKey('*', 'special')}
        </div>
        <div className="input-row">
          {this.renderKey('1')}
          {this.renderKey('2')}
          {this.renderKey('3')}
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

function CalculatorScreen(props) {
  return (
    <div>
      {props.lines.map((line, i) => (
        <OutputLine key={i} value={line} />
      ))}
    </div>
  );
}

export { Calculator };
