import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type Action = {
  +type: string
};

export type State = {
  +stateProp: string
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

// type IncrementAction = {
//   type: 'INCREMENT_COUNTER',
//   payload: number
// };
// type DecrementAction = {
//   type: 'DECREMENT_COUNTER',
//   payload: number
// };
// export type Action =
//   | IncrementAction
//   | DecrementAction;
