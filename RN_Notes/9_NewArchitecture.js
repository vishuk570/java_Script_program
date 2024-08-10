// https://medium.com/coox-tech/deep-dive-into-react-natives-new-architecture-fb67ae615ccd

// Key Components of new Architecture:

// 1. Febric :
// Fabric is a new UI rendering system designed to improve performance and flexibility.
// It replaces the old rendering system with a more efficient and modular approach.

// Fabric uses a concept called "JSI" (JavaScript Interface) to communicate directly with the native code,
// reducing the need for bridging between JavaScript and native layers.

// Benefits : Improved Performance(Faster rendering and smoother animations ) , Concurrent Rendering


// =======================================================================================================


// 2. TurboModules :
// TurboModules is a new architecture for native modules, designed to make communication 
// between JavaScript and native code more efficient.

// It leverages the JavaScript Interface (JSI) to create a more direct and efficient way of calling
// native functions from JavaScript, compared to the traditional bridge approach.

// Benefits: Faster Execution ,  Lazy Loading (Modules are loaded only when needed)


// =======================================================================================================



// 3. JavaScript Interface (JSI) :
// JSI provides a new way for JavaScript code to interact with native code.
// It replaces the old bridge system used in React Native.


// JSI allows for more direct and efficient communication between JavaScript and native code
// without the overhead of JSON serialization and deserialization.


// Benefits: Reduced Overhead and Flexibility

// =======================================================================================================


// Benefits of the New Architecture:
// 1.Performance Improvements: Reduced latency and overhead, leading to smoother animations and faster load times.
// 2.Better Modularity: Easier to manage and extend modules, improving maintainability and flexibility.
// 3.Improved Concurrent Rendering: More efficient handling of concurrent updates and rendering, 
//   enhancing the user experience.
// 4.Enhanced Developer Experience: More predictable and easier-to-debug performance issues due
//   to the improved architecture.


// ============================================================================================================

// Hermes : 
// Hermes is an open-source JavaScript engine optimized for React Native. 
// For many apps, using Hermes will result in improved start-up time, decreased memory usage,
// and smaller app size when compared to JavaScriptCore. Hermes is used by default by React Native
// and no additional configuration is required to enable it.

// Key Features of Hermes:

// 1. Improved Performance:
// 2. Ahead-of-Time (AOT) Compilation:
// 3. Optimized Garbage Collection:
// 4. Smaller Binary Size:
// 5. Enhanced Debugging:


// ============================================================================================================

// Flipper:
// Flipper is a powerful developer tool from Meta (formerly Facebook) that provides a platform for debugging,
// inspecting, and monitoring mobile apps, particularly those built with React Native. 
// It’s an all-in-one tool designed to streamline the development process, making it easier to diagnose issues
// and optimize performance.


