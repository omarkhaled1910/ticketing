import React from 'react'
import { ColumnsProvider } from '../hooks/useTodoColumns'
import AddTodo from '../Components/AddTodo/AddTodo'
import TodoList from '../Components/TodoList/TodoList'


const Todo = () => {
  return (
    <div className="App bg-zinc-200 pt-20">
      <ColumnsProvider>
        <AddTodo />
        <TodoList />
      </ColumnsProvider>
    </div>
  );
}

export default Todo