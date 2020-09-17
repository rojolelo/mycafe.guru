import React from 'react';
import EarningsInput from './EarningsInput';
import Gem from '../gemicon.png';
import Ruby from '../rubyicon.png';
import Trophy from '../trophyicon.png';
import Task from '../taskicon.png';

const Earnings = (props) => {
  let showTasks = false;
  let showTrophies = true;
  if (props.mode == '75/25' || props.mode == 'tasks' || props.mode == '50/50')
    showTasks = true;
  if (props.mode == 'tasks') showTrophies = false;
  return (
    <div className="section-contaner earnings-container">
      {showTrophies ? (
        <div className="earnings-div">
          <label className="earnings-label">
            Trophies Achieved <img src={Trophy} /> :
          </label>
          <EarningsInput change={props.changeTrophies} placeholder="Trophies" />
        </div>
      ) : null}
      {showTasks ? (
        <div className="earnings-div">
          <label className="earnings-label">
            Total Finished Tasks <img src={Task} /> :
          </label>
          <EarningsInput change={props.changeTasks} placeholder="Tasks" />
        </div>
      ) : null}
      <div className="earnings-div">
        <label className="earnings-label">
          Gems <img src={Gem} /> :
        </label>
        <EarningsInput change={props.changeGems} placeholder="Gems" />
      </div>
      <div className="earnings-div">
        <label className="earnings-label">
          Rubies <img src={Ruby} /> :
        </label>
        <EarningsInput change={props.changeRubies} placeholder="Rubies" />
      </div>
    </div>
  );
};

export default Earnings;
