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
