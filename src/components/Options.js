import React from 'react';
import OptionsBtn from './OptionBtn';

const Options = (props) => {
  const trophies = 'trophies';
  const tasks = 'tasks';
  const fiftyfifty = '50/50';
  const seventyfivetwentyfive = '75/25';
  const custom = 'custom';

  return (
    <div className="section-container">
      <h2 className="subtitle calculated-by">Calculate by:</h2>
      <div className="options-container">
        <OptionsBtn option={trophies} changeMode={props.changeMode} />
        <OptionsBtn option={tasks} changeMode={props.changeMode} />
        <OptionsBtn option={fiftyfifty} changeMode={props.changeMode} />
        <OptionsBtn
          option={seventyfivetwentyfive}
          changeMode={props.changeMode}
        />
      </div>
    </div>
  );
};

export default Options;
