// 1. Keys :
// keys are used to uniquely identify elements within a list or a set of child components.

const todoList = todos.map((todo) => 
    <li key={todo.id}>{todo.text}</li>
);

// 2. What are Keys?
// Keys are unique identifiers given to each element in a list. 
// They help React identify which items have changed, added, or removed, allowing React to optimize rendering.


const items = data.map((item) => 
    <View key={item.id}>
      <Text>{item.name}</Text>
    </View>
  );


// Why are Keys Important?

// 1. Efficient Re-rendering:
// When React Native re-renders a list, it uses the keys to determine which elements have changed,
// been added, or removed. This allows React Native to minimize unnecessary updates and only re-render
// the elements that actually need to change.


// 2. Preserving Element Identity:
// Keys help React Native keep track of each element's identity across renders. Without unique keys,
// React Native might incorrectly match elements, causing issues like losing input focus,
// incorrect animations, or other unexpected behaviors.

// 3. Optimized Performance:
// Using keys allows React Native to optimize performance by reducing the amount of work needed during re-renders.
// This is especially important for large lists or complex UI structures where frequent updates occur.

// 4. Stable Component Trees:
// Keys ensure that the component tree remains stable between renders. 
// This is crucial for maintaining the state and avoiding unnecessary re-renders of components that haven't changed.


// Uniqueness: 
// Ensure that each key is unique among siblings in a list. 
// Using unique IDs from your data is often the best approach.


// Consistency: 
// The key should remain consistent between renders. If the key changes, React Native may treat it as a completely
// different element, leading to unnecessary re-renders.