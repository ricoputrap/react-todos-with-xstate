import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

type Props = {
  todos: Todo[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <Stack rowGap="4px" minWidth="280px">
      {todos.map(todo => (
        <TodoItem key={ todo.id } todo={ todo } />
      ))}
    </Stack>
  )
}

export default Todos