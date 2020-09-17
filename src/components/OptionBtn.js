import React from 'react';

const OptionsBtn = (props) => {
  const action = () => {
    props.changeMode(props.option);
  };
  return (
    <button onClick={action}>
      {props.option.charAt(0).toUpperCase() + props.option.slice(1)}
    </button>
  );
};

export default OptionsBtn;
