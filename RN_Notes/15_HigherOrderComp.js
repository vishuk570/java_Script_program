// Higher-Order Component (HOC) : 
// A Higher-Order Component is a function that takes a component as an argument and returns a new component
// with additional props, behavior, or logic. 
// Higher-Order Component are a common pattern for reusing component logic.

// Key Points:
// Reusability: HOCs allow you to reuse logic across multiple components.
// Props Forwarding: The HOC passes any additional props down to the wrapped component (...props).
// Encapsulation: The original component’s implementation remains unchanged.


// ================================================================================================
// Example:
// Step 1: Create the withLoading HOC
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// This is the HOC function (withLoading).
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return <Component {...props} />;
  };
}

// export default withLoading;

// Step 2: Use the withLoading HOC with a Component UserList.js

import React from 'react';
import { View, Text } from 'react-native';

const UserList = ({ users }) => {
  return (
    <View>
      {users.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
};

// export default UserList;


// step 3: We can now wrap UserList with our withLoading HOC:
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import UserList from './UserList'; // Assume this is the component we created
import withLoading from './withLoading'; // Our HOC

const UserListWithLoading = withLoading(UserList);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </View>
  );
};

export default App;


// =================================================================




