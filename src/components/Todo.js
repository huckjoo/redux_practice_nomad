import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';
import { Link } from 'react-router-dom';

function Todo({ id, text }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text.text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default Todo;
