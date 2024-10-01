// React Native lifecycle methods are similar to React's component lifecycle methods. 

// These methods allow to run code at specific points in a component's life
// (e.g., when the component is being created, updated, or destroyed). 
// In functional components, lifecycle methods are managed by using  "useEffect"  hooks.


// after Initialization
// There are three Lifecycle Phases in react:

// 1. mounting Phase : When a component is being inserted into the DOM.
// 2. updating phase : When a component is being re-rendered as a result of changes to its props or state.
// 3. unmounting Phase : When a component is being removed from the DOM.

// =================================================================================

// Lifecycle Methods

// 1. Mounting Phase: 

// 1.1 constructor():
// 1.2 componentDidMount():

// =================================================================================

// 2. Updating Phase:

// 2.1 shouldComponentUpdate(nextProps, nextState):
// 2.2 componentDidUpdate(prevProps, prevState):


// ==================================================================================

// 3. Unmounting Phase:

// 3.1 componentWillUnmount():


// ===============================================================================================

// Lifecycle in Function Components
// useEffect() can handle all lifecycle phases by controlling when and how it runs with dependency arrays.

// 1. Mounting:

useEffect(() => {
    // This runs once after the component mounts
}, []);


// 2. Updating:

useEffect(() => {
    // This runs after every render (update)
});


// 3. Unmounting:

useEffect(() => {
    return () => {
      // This runs when the component is about to unmount
    };
}, []);

