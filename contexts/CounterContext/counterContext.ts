import { createContext } from "react";

export enum CounterActionEnum {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type ActionType = {
  type: CounterActionEnum;
};

export type CounterType = {
  state: {
    count: number;
  };
  dispatchCount: (action: ActionType) => void;
};

export const CounterContext = createContext<CounterType | null>(null);

CounterContext.displayName = "CounterContext";
