import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

type Props = {
  todos: Todo[];
  highlightedIndex: number;
  setHighlightedItem: (index: number) => void;
}

const Todos: React.FC<Props> = ({
  todos, highlightedIndex, setHighlightedItem
}) => {
  return (
    <Stack rowGap="4px" minWidth="280px">
      {todos.map((todo, index) => (
        <TodoItem
          key={ todo.id }
          todo={ todo }
          onClicked={() => {
            setHighlightedItem(index)
          }}
          isHighlighted={highlightedIndex == index}
        />
      ))}
    </Stack>
  )
}

export default Todos