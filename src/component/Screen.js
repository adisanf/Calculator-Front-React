import React from 'react';

function OutputLine(props) {
  return <div className="outputLine">{props.value}</div>;
}

function Screen(props) {
  return (
    <div>
      {props.lines.map((line, i) => (
        <OutputLine key={i} value={line} />
      ))}
    </div>
  );
}

export { Screen };
