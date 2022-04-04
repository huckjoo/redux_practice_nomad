import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';
function Todo({ id, text }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      {text.text} <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default Todo;
