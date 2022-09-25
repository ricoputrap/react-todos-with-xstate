import { createMachine } from "xstate";
import { Category, Color, Context, Todo } from "../types";

const mainMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBsB7dCAqAYggsJIIDcKBrMEtLPQ0pWq0EbCpnQAXXEwDaABgC6iUAAcKsXNKYqQAD0QBmACwAmEoYDsANmvHjARmN35AVkMAaEAE9El8w4Opq7yDtahAJyGrqYOAL5xXrw4BMQs+Fq46GQA+hBS6DlCEJB0AMIAMgCSZQDSOVUAKgCiALK66pra+LoGCK4RESQhDiGW467G-l6+CA4AHPMkDhHBtpbylg6WhtsJiSD4FCXwSCDJ-GnFtB0amTpnfYbWM4gDJBHzQSGGpr+GEScrgSSQwKQE6Uy2TyBSKVBKEFuXRkPUeiGsK2W8mc23mG2M83crwQhOG1lcdgizms0UCERB5zBlyISPuqNAfSCxIAtEESPIBYKIjZjIZ5INLPs4kA */
createMachine({
  context: {
    todos: [] as Todo[],
    categories: [] as Category[],
    colors: [] as Color[],

    highlightedIndex: -1 as number,
  },
  tsTypes: {} as import("./mainMachine.typegen").Typegen0,
  schema: {
    services: {} as {
      LOAD_INITIAL_DATA: {
        data: Context[];
      };
    },
    events: {} as { type: "CLICK_ITEM"; index: number },
  },
  id: "(machine)",
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
    initial_data_loaded: {
      on: {
        CLICK_ITEM: {
          actions: "SET_HIGHLIGHTED_ITEM",
        },
      },
    },
  },
});

export default mainMachine;