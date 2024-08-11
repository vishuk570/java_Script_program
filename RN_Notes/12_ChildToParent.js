// how to pass data child to parent :

// Passing data from a child component to a parent component in React Native (or React)
// involves using callback functions.

// The parent component provides a function as a prop to the child component, 
// and the child component calls this function, passing the data as an argument.

// 1. Parent Component (App.js):

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ChildComponent from './ChildComponent';

const App = () => {
  const [childData, setChildData] = useState('');

  // Callback function to receive data from the child component
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Data from Child: {childData}</Text>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </View>
  );
};

export default App;


// 2. Child Component (ChildComponent.js):

import React from 'react';
import { View, Button } from 'react-native';

const ChildComponent = ({ sendDataToParent }) => {
  
  const sendData = () => {
    const data = 'Hello from Child!';
    sendDataToParent(data); // Sending data back to the parent
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Button title="Send Data to Parent" onPress={sendData} />
    </View>
  );
};
 


