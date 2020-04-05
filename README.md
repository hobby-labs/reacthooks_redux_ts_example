# 

```
npx create-react-app react_ts_example --template typescript
cd reacthook_redux_ts_example
```

```
npm install --save redux react-redux
npm install --save-dev @types/redux @types/react-redux
```

```
npm install --save redux-thunk
npm install --save-dev @types/redux-thunk
```

./src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import rootReducer from "./js/reducers/index";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

./src/store/actionTypes.js
```
export ActionTypes = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    countReset: "COUNT_RESET"
} as const;
```

./src/store/counter/types.ts
```
import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type Count = {
  value: number
};

interface IncrementAction extends Action {
  type: typeof ActionTypes.increment;
}

interface DecrementAction extends Action {
  type: typeof ActionTypes.decrement;
}

interface ResetAction extends Action {
  type: typeof ActionTypes.countReset;
}

export type CounterActionTypes = IncrementAction | DecrementAction | ResetAction;
```

./src/store/counter/actions.ts
```
import { ActionTypes } from "../actionTypes";
import { CounterActionTypes } from "./types";

export const incrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.increment,
  };
};

export const decrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.decrement,
  };
};

export const resetAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.countReset,
  };
};
```

./src/store/counter/reducer.ts
```
import { ActionTypes } from "../actionTypes";
import { Count, CounterActionTypes } from "./types";

const initialState: Count = {
  value: 0,
};

export const countReducer = (state = initialState, action: CounterActionTypes); Count => {
  switch (action.type) {
    case ActionTypes.increment:  // "INCREMENT"
      return { value: state.value + 1 };
    case ActionTypes.decrement:
      return { value: state.value === 0 ? 0 : state.value - 1 };
    case ActionTypes.countReset:
      return { value: 0 };
    default:
      const _: never = action;
      return state;
  }
};
```

./src/store/index.ts
```
import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter/reducer";

const rootReducer = combineReducers({
  counter: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;
```

./src/components/Counter.tsx
```
```

Reference:
https://qiita.com/ragnar1904/items/72631e4476f94057c630

