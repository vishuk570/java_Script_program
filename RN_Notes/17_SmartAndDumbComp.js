// 1. Smart Components (Container Components):

// Purpose: Focus on how things work. They manage state, handle data fetching,
// and provide data to Dumb components via props.
// State: They are often stateful and handle most of the business logic.
// Example: Components that fetch data, handle user input, and pass data down to Dumb components.



import React, { useState } from 'react';
import { View } from 'react-native';
import CounterDisplay from './CounterDisplay'; // Import the Dumb component

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => setCount(count + 1);
  const decreaseCounter = () => setCount(count - 1);

  return (
    <View style={{ padding: 20 }}>
      <CounterDisplay
        count={count}
        onIncrease={increaseCounter}
        onDecrease={decreaseCounter}
      />
    </View>
  );
};

// export default CounterContainer;


// =============================================================================================

// 2. Dumb Components (Presentational Components):

// Purpose: Focus on how things look. They receive data and callbacks via props
// and are primarily concerned with rendering the UI.
// State: They are typically stateless or have minimal state (like form inputs).
// Example: Button, Label, or any UI component that only receives props and displays content.

import React from 'react';
import { View, Text, Button } from 'react-native';

const CounterDisplay = ({ count, onIncrease, onDecrease }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Counter: {count}</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="Increase" onPress={onIncrease} />
        <Button title="Decrease" onPress={onDecrease} style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
};

export default CounterDisplay;


// ============================================================================================

// How It Works:
// The Smart Component (CounterContainer) manages the application state and logic.
// The Dumb Component (CounterDisplay) focuses solely on displaying the UI based on the props it receives.


// Key Benefits:
// Separation of Concerns: Dumb components focus on UI, while Smart components handle logic, 
// making the code easier to maintain.
// Reusability: Dumb components can be reused in different parts of the app,
// as they are not tied to specific business logic.