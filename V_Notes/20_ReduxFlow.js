// redux flow
// Redux is a state management library that helps manage the state of an application in a predictable way. 
// The data flow in a Redux application follows a unidirectional cycle consisting of several key components:
// Actions, Reducers, Store, and Components.

// 1.Actions:
// Actions are plain JavaScript objects that describe what happened. 
// They have a type property that indicates the type of action being performed
// and can optionally have a payload that carries data.

// Example
const incrementCounter = () => {
    return {
      type: 'INCREMENT_COUNTER',
    };
};

// 2. Action Creators:
// These are functions that create and return action objects. 
// They provide a way to encapsulate the creation of actions.
const incrementCounterr = () => ({
    type: 'INCREMENT_COUNTER',
});


// 3. Reducers:
// Reducers are pure functions that take the current state and an action as arguments and return a new state.
// They specify how the state changes in response to actions.
const initialState = {
    counter: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          counter: state.counter + 1,
        };
      default:
        return state;
    }
  };


// 4. Store:
// The store holds the entire state tree of the application. 
// It is created using the createStore function from Redux.


import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);


// 5. Components:
// Components subscribe to the store to get the current state and dispatch actions to update the state.
// In a React Native project, you often use the connect function from react-redux to connect components 
// to the Redux store.

import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { incrementCounter } from './actions';

const CounterComponent = ({ counter, incrementCounter }) => (
  <View>
    <Text>{counter}</Text>
    <Button title="Increment" onPress={incrementCounter} />
  </View>
);

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  incrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);