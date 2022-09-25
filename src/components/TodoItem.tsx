import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react'
import { Category, Todo } from '../types'

type Props = {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <Flex
      columnGap="10px"
      padding="5px 8px"
      background="white"
      borderRadius="4px"
      minHeight="48px"
    >
      <Checkbox size="lg" />
      
      <Stack rowGap={0} justifyContent="center">
        <Text color="primary">
          { todo.title }
        </Text>
        <Text color="secondary" fontSize="10px" marginTop="0 !important">
          { (todo.category as Category).name }
        </Text>
      </Stack>
    </Flex>
  )
}

export default TodoItem