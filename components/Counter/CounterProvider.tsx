import React, { useMemo, useReducer } from "react";
import { CounterContext, countReducer } from "$/contexts";

import type { CounterType } from "$/contexts";

const CounterProvider: React.FC = ({ children }) => {
  const [state, dispatchCount] = useReducer<
    typeof countReducer,
    CounterType["state"]
  >(countReducer, { count: 0 }, (state) => state);

  const value = useMemo(() => ({ state, dispatchCount }), [state]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
