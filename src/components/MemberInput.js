import React, { useState } from 'react';
import Gem from '../gemicon.png';
import Ruby from '../rubyicon.png';
import Trophy from '../trophyicon.png';
import Task from '../taskicon.png';

const MemberInput = (props) => {
  const [value, setValue] = useState('');
  const [taskValue, setTaskValue] = useState('');
  const symbolsRegexp = /[-!$%^&*()#_+|~=`{}\[\]:";'<>?,.\/]/g;
  const lettersRegexp = /[a-zA-Z]/g;

  const validation = (e) => {
    let newValue = e.target.value
      .replace(symbolsRegexp, '')
      .replace(lettersRegexp, '');
    setValue(newValue);
    if (newValue == '') newValue = 0;
    props.handleChanges(newValue, props.number);
  };

  const validationTasks = (e) => {
    let newValue = e.target.value
      .replace(symbolsRegexp, '')
      .replace(lettersRegexp, '');
    setTaskValue(newValue);
    if (newValue == '') newValue = 0;
    props.handleTasksChanges(newValue, props.number);
  };

  return (
    <React.Fragment>
      <td>
        <label className="member-label">Member </label>
        {props.number}
        <input
          className="member-input-name"
          type="text"
          placeholder="Name"
        ></input>
      </td>
      {props.mode != 'tasks' ? (
        <td>
          {/* <label>Trophies: </label> */}
          <img src={Trophy} alt="Trophy Icon" />
          <input
            type="text"
            className="member-input-trophies"
            onChange={validation}
            value={value}
            placeholder="Trophies"
          ></input>
        </td>
      ) : null}
      {props.mode != 'trophies' ? (
        <td>
          {/* <label>Tasks: </label> */}
          <img src={Task} alt="Task Icon" />
          <input
            type="text"
            className="member-input-tasks"
            onChange={validationTasks}
            value={taskValue}
            placeholder="Tasks"
          ></input>
        </td>
      ) : null}
      <td className="table-gems">
        <img src={Gem} alt="Gem Icon" />: {props.info.gems}
      </td>
      <td className="table-rubies">
        <img src={Ruby} alt="Gem Icon" />: {props.info.rubies}
      </td>
    </React.Fragment>
  );
};

export default MemberInput;
