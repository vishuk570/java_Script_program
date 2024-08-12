// Understanding Controlled and Uncontrolled Components in React Native

// 1. What are Controlled and Uncontrolled Components?
// Controlled components and uncontrolled components refer to different strategies for handling and managing
// user input in React Native applications.

// ===================================================================================

// 2. Controlled Components:
// The component’s state is the single source of truth for its rendered input elements.
// The component’s state is updated when the user interacts with the input, and the input value is controlled
// by the component’s state.
// This approach gives you precise control over the input’s value and behavior.


// Benefits and Drawbacks of Controlled Components

// Benefits:
// Precise control over input values.
// Easier to implement validation and custom behavior.
// Facilitates easier testing and debugging.
// A state-driven approach fits well with the React paradigm.

// Drawbacks:
// More boilerplate code to handle state updates
// Can be slower for complex forms due to frequent re-rendering.


// Implementing Controlled Components

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    // Use inputValue for further processing
  };

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        value={inputValue}
        onChangeText={handleChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

// export default ControlledForm;

// ================================================================================================

// 3. Uncontrolled Components:
// The input elements maintain their own state. You can access the input’s value through the DOM
// after user interactions.
// Uncontrolled components are less controlled by React state and are useful when you need to integrate
// with non-React code or when handling complex user interactions.


// Benefits and Drawbacks of Uncontrolled Components

// Benefits:
// Less code to manage, especially for simple forms.
// Integrates well with non-React code and libraries.
// Better performance for complex forms due to reduced re-rendering.

// Drawbacks:
// Harder to implement validation and custom behavior.
// Can be more challenging to test and debug.


// Implementing Uncontrolled Components

    import React, { useRef } from 'react';
    import { View, TextInput, Button } from 'react-native';
    
    function UncontrolledForm() {
      const inputRef = useRef();
    
      const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        // Use inputValue for further processing
      };
    
      return (
        <View>
          <TextInput
            style={{ borderWidth: 1, padding: 10 }}
            ref={inputRef}
          />
          <Button title="Submit" onPress = {handleSubmit} />
        </View>
      );
    }
    
    // export default UncontrolledForm;


// ====================================================================================================

// 4. Choosing the Right Approach:

// Use controlled components when you need precise control over input values, validation, or custom behavior.

// Choose uncontrolled components for simpler forms or when integrating with non-React code.

// Consider the performance implications when dealing with complex forms.