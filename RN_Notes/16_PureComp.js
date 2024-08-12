// Pure Component in React Native:

// A React component should always have pure rendering logic. 
// This means that it must return the same output if its props, state, and context haven’t changed. 
// A Pure Component is a component that only re-renders when its props or state change.
// it implements a shallow comparison on its props and state to decide whether the component should re-render.


// Why Use Pure Component?
// Performance Optimization: It can help to improve performance by preventing unnecessary re-renders.

// How It Works:
// Shallow Comparison: A shallow comparison means that the comparison checks whether the references
// to the props or state have changed, rather than their content.

// =============================================================================================


// Step 1: Create a Pure Component
import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends PureComponent {
  render() {
    console.log('Counter component re-rendered');
    return (
      <View>
        <Text>Counter: {this.props.count}</Text>
      </View>
    );
  }
}

// export default Counter;



// Step 2: Use the Pure Component in a Parent Component

import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Counter from './Counter'; // Import the PureComponent

class App extends Component {
  state = {
    count: 0,
    otherValue: 0,
  };

  increaseCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  changeOtherValue = () => {
    this.setState({ otherValue: this.state.otherValue + 1 });
  };

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Counter count={this.state.count} />
        <Button title="Increase Counter" onPress={this.increaseCounter} />
        <Button title="Change Other Value" onPress={this.changeOtherValue} />
      </View>
    );
  }
}

export default App;

// When you press "Increase Counter," the Counter component re-renders because the count prop changes.
// When you press "Change Other Value," the Counter component does not re-render because the count prop
// does not change.

// ====================================================================================================

// In functional components, we can achieve similar behavior to "PureComponent" using the "React.memo" function.

// React.memo is a higher-order component that prevents a functional component from re-rendering
// if its props haven't changed.


// Step 1: Create a Memoized Component

import React from 'react';
import { View, Text } from 'react-native';

const Counter = React.memo(({ count }) => {
  console.log('Counter component re-rendered');
  return (
    <View>
      <Text>Counter: {count}</Text>
    </View>
  );
});

// export default Counter;


// Step 2: Use the Memoized Component in a Parent Component

import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Counter from './Counter'; // Import the memoized functional component

const App = () => {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const changeOtherValue = () => {
    setOtherValue(otherValue + 1);
  };

  return (
    <View style={{ padding: 20 }}>
      <Counter count={count} />
      <Button title="Increase Counter" onPress={increaseCounter} />
      <Button title="Change Other Value" onPress={changeOtherValue} />
    </View>
  );
};

// export default App;

// What Happens:
// When you press "Increase Counter," the Counter component re-renders because the count prop changes.
// When you press "Change Other Value," the Counter component does not re-render because the count prop
// does not change.


// Key Points:
// React.memo: Works similarly to PureComponent but for functional components. 
// It memoizes the result and prevents re-renders if the props remain the same.

// Performance Optimization: Use React.memo to optimize functional components 
// when you know that they shouldn't re-render unless their props change.

