import React from 'react';

const EarningsInput = (props) => {
  return (
    <input
      className="value-input"
      placeholder={props.placeholder}
      onChange={(e) => {
        props.change(e.target.value);
      }}
    ></input>
  );
};

export default EarningsInput;
