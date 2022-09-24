import { useMachine } from "@xstate/react";
import { useMemo } from "react";
import { AnyEventObject, assign } from "xstate";
import mainMachine from "../machines/mainMachine";
import loadInitialData from "../services/loadInitialData";
import { Context, Todo } from "../types";

const useTodos = () => {
  const [state] = useMachine(mainMachine, {
    services: {
      LOAD_INITIAL_DATA: loadInitialData as any
    },
    actions: {
        SET_INITIAL_DATA: assign((context: Context, event: AnyEventObject) => {
          return event.data;
        })
    }
  });

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