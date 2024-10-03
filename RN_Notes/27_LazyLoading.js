// Lazy loading refers to the practice of delaying the loading of certain components, screens, or data
// until they are actually needed. 
// This helps improve the performance of the app by reducing the initial load time and memory usage.

// Why Lazy Loading?
// =====================
// It speeds up the app's launch time by loading only what's necessary.
// It reduces memory usage by not loading components or screens until they are needed.


// Example of Lazy Loading in React Native:
// Suppose you have a multi-screen app, and you don’t want all the screens to load at once when the app starts.
// Instead, you load each screen only when the user navigates to it.

import React, { Suspense, lazy } from 'react';
import { View, Text } from 'react-native';

// Lazy load the ProfileScreen component
const ProfileScreen = lazy(() => import('./ProfileScreen'));

const App = () => {
  return (
    <View>
      <Text>Main App Screen</Text>
      
      {/* Use Suspense to show a fallback while the ProfileScreen is loading */}
      <Suspense fallback={<Text>Loading...</Text>}>
        <ProfileScreen />
      </Suspense>
    </View>
  );
};

export default App;

// Explanation:
// ===============
// React.lazy(): This function tells React to load ProfileScreen only when it is needed.
// Suspense: It is used to show a fallback (like "Loading...") while the lazy-loaded component is being fetched.
// In this example, the ProfileScreen component will not be loaded until it is needed, 
// making the initial load of the app faster.