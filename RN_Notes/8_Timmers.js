// Timers :

// Timers providing a way to schedule code to run at some point in the future. 
// There are four main types of timers you can use: 


// 1. setTimeout : Executes a function after a specified delay.
useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This runs after 2 seconds');
    }, 2000);

    // Cleanup on component unmount
    return () => clearTimeout(timer);
  }, []);



// 2. setInterval : Repeatedly executes a function with a fixed time delay between each call.
useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Runs every second

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);



// 3. setImmediate : Executes a function as soon as the current event loop cycle is finished. 
//                   It's like setTimeout with a delay of 0 milliseconds.
useEffect(() => {
    const immediate = setImmediate(() => {
      console.log('This runs immediately after the current event loop');
    });

    // Cleanup on component unmount
    return () => clearImmediate(immediate);
  }, []);



//   4. requestAnimationFrame :  Schedules a function to run in the next frame of the UI rendering process,
//                               which is often used for smooth animations.

useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      console.log('This runs on the next frame');
    });

    // Cleanup on component unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);








//   ======================================================================================================

// Common Use Cases:

// 1. setTimeout: Delay an action, such as showing a splash screen for a few seconds.
// 2. setInterval: Run a task repeatedly, such as updating a live timer.
// 3. setImmediate: Run a task after the current code execution is complete, without waiting for a timeout.
// 4. requestAnimationFrame: Smooth animations by scheduling a callback to be executed before the next repaint.




// ==========================================================================================================

// InteractionManager :

// InteractionManager in React Native is a tool that helps you manage complex tasks without affecting
// the user experience.

// InteractionManager helps app's animations smooth by waiting to do heavy work until after the animations
// or interactions are finished.



// Example:
// Imagine you have a button that, when clicked, fetches data from the server and also shows a nice animation.
// If you directly start fetching data, the animation might become choppy. 
// By using InteractionManager, you can delay the data fetching until after the animation is done,
// keeping everything smooth.

useEffect(() => {
  const interaction = InteractionManager.runAfterInteractions(() => {
    // This code runs after interactions/animations are complete
    console.log('Heavy task running after interactions');
  });

  // Cleanup if component unmounts
  return () => interaction.cancel();
}, []);



// How it Works:

// Delaying Tasks: When you have a task that might take some time 
// (like fetching data or processing something in the background), 
// you can use InteractionManager to delay that task until after the current user interaction
// or animation is finished.

// Smooth UI: This ensures that the app's animations and interactions remain smooth and responsive,
// without getting slowed down by heavy tasks.
