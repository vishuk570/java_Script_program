// What is a Native Module in React Native?
// A Native Module in React Native allows you to write custom native code in Java/kotline (for Android)
// or Objective-C/Swift (for iOS) that can be accessed from your React Native JavaScript code. 
// This is useful when you need to access platform-specific APIs or functionalities that are not available
// through React Native's core libraries.


// 1. Creating a Native Module for Android

// Navigate to the Android Directory: In android/app/src/main/java/com/yourprojectname/,
// create a new Java file, e.g., MyNativeModule.java.


// 2.Link the Native Module to React Native:
// Create a new Java file, e.g., MyNativeModulePackage.java in the same directory:


// 3. Register the Module in MainApplication.java:
// import com.yourprojectname.MyNativeModulePackage; // Add this import

// @Override
// protected List<ReactPackage> getPackages() {
//     return Arrays.<ReactPackage>asList(
//         new MainReactPackage(),
//         new MyNativeModulePackage() // Add this line
//     );
// }


// ====================================================================

// 1.Create the Native Module in Objective-C or Swift

// Navigate to the iOS Directory:
// Create a New Objective-C/Swift Class:
// Create a new file in Xcode. For Objective-C, select a .m file. For Swift, create a .swift file.
// For Objective-C (MyNativeModule.m):
// And in MyNativeModule.swift:

// 2. Register the Module in AppDelegate.m (if using Objective-C):
// And in MyNativeModule-Bridging-Header.h (for Swift):