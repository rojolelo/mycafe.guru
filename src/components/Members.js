import React from 'react';
import MemberInput from './MemberInput';

const Members = (props) => {
  const members = props.membersResults ? props.membersResults : {};
  return (
    <div className="section-container">
      <h3 className="subtitle">Members Development:</h3>
      <h4 className="subtitle">Calculated by: {props.mode}</h4>
      <table>
        <tbody>
          {Object.keys(members).map((number, i) => {
            return (
              <tr>
                <MemberInput
                  info={members[number]}
                  gems={members[number]['gems']}
                  rubies={members[number]['rubies']}
                  key={i}
                  number={number}
                  handleChanges={props.handleChanges}
                  handleTasksChanges={props.handleTasksChanges}
                  mode={props.mode}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
