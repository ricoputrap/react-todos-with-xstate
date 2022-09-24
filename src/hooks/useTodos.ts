import { useMachine } from "@xstate/react";
import { useMemo } from "react";
import mainMachine from "../machines/mainMachine";
import { Todo } from "../types";

const useTodos = () => {
  const [state] = useMachine(mainMachine);

  const todos: Todo[] = useMemo<Todo[]>(() => {
    return state.context.todos;
  }, [state]);

  const isLoading: boolean = useMemo<boolean>(() => {
    return state.matches("loading");
  }, [state])

  return {
    todos,
    isLoading
  }
}

export default useTodos;