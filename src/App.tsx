import { Box } from '@chakra-ui/layout';
import React from 'react'
import Todos from './components/Todos';
import useTodos from './hooks/useTodos';

function App() {
  const {
    todos, isLoading,
    highlightedIndex, setHighlightedItem
  } = useTodos();

  return (
    <Box padding="20px" background="#E6E6E6">
      {isLoading
        ? <div>LOADING...</div>
        : (
          <Todos
            todos={ todos }
            highlightedIndex={highlightedIndex}
            setHighlightedItem={ setHighlightedItem }
          />
        )
      }
    </Box>
  )
}

export default App
