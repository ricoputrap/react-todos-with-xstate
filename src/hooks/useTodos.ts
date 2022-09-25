import { useMachine } from "@xstate/react";
import { useCallback, useMemo } from "react";
import { AnyEventObject, assign } from "xstate";
import mainMachine from "../machines/mainMachine";
import loadInitialData from "../services/loadInitialData";
import { Context, Todo } from "../types";

const useTodos = () => {
  const [state, send] = useMachine(mainMachine, {
    services: {
      LOAD_INITIAL_DATA: loadInitialData as any
    },
    actions: {
      SET_INITIAL_DATA: assign((context: Context, event: AnyEventObject) => {
        return event.data;
      }),
      SET_HIGHLIGHTED_ITEM: assign((context: Context, event: AnyEventObject) => {
        return {
          ...context,
          highlightedIndex: event.index
        }
      })
    }
  });

  const todos: Todo[] = useMemo<Todo[]>(() => {
    return state.context.todos;
  }, [state.context.todos]);

  const isLoading: boolean = useMemo<boolean>(() => {
    return state.matches("loading");
  }, [state.value]);

  const highlightedIndex: number = useMemo<number>(
    () => state.context.highlightedIndex,
    [state.context.highlightedIndex]
  );

  const setHighlightedItem = useCallback((index: number) => {
    const highlightedIndex: number = state.context.highlightedIndex;
    if (highlightedIndex == index)
      return;

    send({
      type: "CLICK_ITEM",
      index
    });
  }, [state.context.highlightedIndex]);

  return {
    todos,
    isLoading,
    highlightedIndex,
    setHighlightedItem
  }
}

export default useTodos;