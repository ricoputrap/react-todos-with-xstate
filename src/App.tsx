import React from 'react'
import useTodos from './hooks/useTodos';

function App() {

  const { todos, isLoading } = useTodos();

  return (
    <div>
      {isLoading ? <div>LOADING...</div> : todos.map(todo => (
        <div key={ todo.id }>{ todo.title }</div>
      ))}
    </div>
  )
}

export default App
