// Props drilling and how to avoid this?

// Props drilling is the process of passing data from a parent component to a deeply nested child component 
// through multiple layers of intermediate components.

// Example: 
const GreatGrandParent = () => {
    const user = { name: "John Doe", age: 25 };
  
    return <GrandParent user={user} />;
  };
  
  const GrandParent = ({ user }) => {
    return <Parent user={user} />;
  };
  
  const Parent = ({ user }) => {
    return <Child user={user} />;
  };
  
  const Child = ({ user }) => {
    return <div>{user.name}</div>;
};

// ====================================================================

// How to Avoid Props Drilling:

// 1. Context API
import React, { createContext, useContext } from 'react';

// Create a context
const UserContext = createContext();

const GreatGrandParent1 = () => {
  const user = { name: "John Doe", age: 25 };

  return (
    <UserContext.Provider value={user}>
      <GrandParent />
    </UserContext.Provider>
  );
};

const GrandParent1 = () => {
  return <Parent />;
};

const Parent1 = () => {
  return <Child />;
};

const Child1 = () => {
  // Access the context directly
  const user = useContext(UserContext);

  return <div>{user.name}</div>;
};

// ------------------------------------------------------------------


// 2. Use of Redux or Other State Management Libraries
// Assume Redux store is already set up
import { useSelector } from 'react-redux';

const Child2 = () => {
  // Access the Redux store directly
  const user = useSelector((state) => state.user);

  return <div>{user.name}</div>;
};


// ---------------------------------------------------------------------

// 3. Component Composition
// 4. Render Props

// -----------------------------------------------------------------------

// 5. Higher-Order Components (HOCs)
// A Higher-Order Component is a function that takes a component and returns a new component
// with additional props or behavior. 

// HOCs are commonly used to add functionality like data fetching or state management to components
// without modifying them directly.
