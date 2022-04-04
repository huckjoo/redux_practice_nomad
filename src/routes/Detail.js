import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const title = toDos.find((toDo) => toDo.id === parseInt(id));
  // console.log(title);
  return (
    <>
      <h1>{title?.text.text}</h1>
      <h5>Created at: {id}</h5>
    </>
  );
};

export default Detail;
