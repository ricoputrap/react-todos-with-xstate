import { Checkbox } from '@chakra-ui/checkbox';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react'
import { Category, Color, Todo } from '../types'

type Props = {
  todo: Todo;
  isHighlighted: boolean;
  onClicked: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, isHighlighted, onClicked }) => {
  return (
    <Flex
      columnGap="10px"
      padding="5px 8px"
      background={isHighlighted ? "background !important" : "white"}
      borderRadius="4px"
      minHeight="48px"
      onClick={onClicked}
      _hover={{
        backgroundColor: "#F9F9F9",
        cursor: "pointer"
      }}
    >
      <Checkbox size="lg" />
      
      <Stack rowGap={0} justifyContent="center">
        <Text color={isHighlighted ? "white" : "primary"}>
          { todo.title }
        </Text>

        <Flex columnGap="4px" alignItems="center" marginTop="0px !important">
          <Box
            width="6px"
            height="6px"
            backgroundColor={ ((todo.category as Category).color as Color).name }
            borderRadius="100%"
          />
          <Text
            color={isHighlighted ? "white" : "secondary"}
            fontSize="10px"
            marginTop="0 !important"
          >
            { (todo.category as Category).name }
          </Text>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default TodoItem