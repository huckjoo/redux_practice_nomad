import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store';
import Todo from '../components/Todo';
function Home(props) {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state);
  console.log(toDos, '이게 toDo다');
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   //mapStateToProps, useSelector?
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return { dispatch };
// }

export default Home;
