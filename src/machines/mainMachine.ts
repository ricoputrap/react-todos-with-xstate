import { createMachine } from "xstate";
import { Category, Color, Context, Todo } from "../types";

const mainMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBsB7dCAqAYggsJIIDcKBrMEtLPQ0pWq0EbCpnQAXXEwDaABgC6iUAAcKsXNKYqQAD0QBmACwAmEoYDsANmvHjARmN35AVkMAaEAE9El8w4Opq7yDtahAJyGrqYOAL4JXvgUEHC6vDgExORUNPhQuuqa2vi6BgiG1l6+CK4RJBEAHEEhhqZthhFOrokgGfzZBFq46GQA+hBS6GNCqRCFGsM6SPqI1g71DvLODpaNltuN7tWIRySu1hfGEc7W0YERvf1ZRAvFMqUr5UEnCAC0QRI8mB8lM1kshiObXaPQScSAA */
createMachine({
  id: "(machine)",
  context: {
    todos: [] as Todo[],
    categories: [] as Category[],
    colors: [] as Color[],
  },
  initial: "loading",
  states: {
    loading: {
      invoke: {
        src: "LOAD_INITIAL_DATA",
        onDone: [
          {
            actions: "SET_INITIAL_DATA",
            target: "initial_data_loaded",
          },
        ],
      },
    },
    initial_data_loaded: {},
  },
  tsTypes: {} as import("./mainMachine.typegen").Typegen0,
  schema: {
    services: {} as {
      LOAD_INITIAL_DATA: {
        data: Context[]
      }
    }
  }
});

export default mainMachine;