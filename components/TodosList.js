import React from 'react';
import TodoItem from './todoItem';

function TodosList({ todos }) {
  return (
    <div className='flex flex-col bg-white rounded-md'>
      <TodoItem />
    </div>
  );
}

export default TodosList;
