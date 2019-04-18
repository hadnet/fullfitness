// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import type { Action } from './types';

export default function createRootReducer(history: History) {
  return combineReducers<Object, Action>({
    router: connectRouter(history),
    counter
  });
}
