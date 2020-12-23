import React from "react";

export const Incomplete = (props) => {
  const { todos, onClickComplete, onClickIncompleteDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete Area</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>complete</button>
              <button onClick={() => onClickIncompleteDelete(index)}>
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
