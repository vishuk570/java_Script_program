// 1. useState : 
// Purpose: Manages state in a functional component.
// Works: It returns a state variable and a function to update that state.



// 2. useEffect
// Purpose: Handles side effects in functional components, such as fetching data, setting up subscriptions,
// or manually changing the DOM.
// Works: It runs after every render by default but can be controlled to run only when certain values change.



// 3. useRef : 
// Purpose: Holds a mutable object that persists across renders. It’s often used to reference DOM elements
// or keep track of previous values.
// Works: It returns a mutable object whose ".current" property is initialized with the passed argument
// and can be updated.



// 4. useMemo
// Purpose: Optimizes performance by memoizing expensive calculations, ensuring they are only re-calculated
// when dependencies change.
// Works: It returns a memoized value, which only recomputes when one of the dependencies changes.



// 5. useCallback
// Purpose: Prevents unnecessary re-creations of functions, which is useful when passing callbacks to optimized
// child components.
// Works: It returns a memoized version of the callback function that only changes
// if one of the dependencies changes.




// 6. useContext
// Purpose: Accesses the value of a context within a functional component, 
// without needing to pass props down manually at every level.
// Works: It accepts a context object (the value returned from React.createContext)
// and returns the current context value.


import React, { useContext } from 'react';
import { Text, View } from 'react-native';

const ThemeContext = React.createContext('light');

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <View>
      <Text>Current Theme: {theme}</Text>
    </View>
  );
};

const App = () => (
  <ThemeContext.Provider value="dark">
    <ThemedComponent />
  </ThemeContext.Provider>
);


// 7. useReducer : 
// The useReducer hook in React (and React Native) is used to manage complex state logic in components. 
// It’s an alternative to useState.

// How useReducer Works:
// It takes in two arguments: 1. Reducer function  2. Initial state

// It returns : 1. The current state. 
// 2. A dispatch function that allows you to trigger state updates by dispatching actions.

// Syntax:
const [state, dispatch] = useReducer(reducer, initialState);

// 1.Reducer function: It takes the current state and an action, then returns the new state.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 2.Initial state: Defines the starting values of your state.
const initialState = { count: 0 };

// 3.Component: Using useReducer to manage state within the component.
import React, { useReducer } from 'react';

const Counter = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

export default Counter;

// useReducer is a great tool for managing more structured and scalable state transitions compared to useState.




// =========================================================================
// Why Redux Might Be Better Than useContext:

// Redux is often considered better than useContext for larger, more complex applications due to its
// centralized state management, scalability, middleware support, and advanced debugging tools. However, for
// smaller applications or localized state management, useContext can be a simpler and sufficient solution.