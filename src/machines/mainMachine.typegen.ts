// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.(machine).loading:invocation[0]": {
      type: "done.invoke.(machine).loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    LOAD_INITIAL_DATA: "done.invoke.(machine).loading:invocation[0]";
  };
  missingImplementations: {
    actions: "SET_INITIAL_DATA" | "SET_HIGHLIGHTED_ITEM";
    services: "LOAD_INITIAL_DATA";
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    SET_HIGHLIGHTED_ITEM: "CLICK_ITEM";
    SET_INITIAL_DATA: "done.invoke.(machine).loading:invocation[0]";
  };
  eventsCausingServices: {
    LOAD_INITIAL_DATA: "xstate.init";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "initial_data_loaded" | "loading";
  tags: never;
}
