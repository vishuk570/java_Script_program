// https://medium.com/@fashad.ahmed20/how-to-implement-universal-links-in-react-native-19a424db4dcf - universal links
// deep linking and dynamic linking  and universal links ?


// Deep linking and dynamic linking in React Native are ways to allow users to navigate directly
// to specific content within your app from outside sources, such as a web browser, email, or other apps.
// They are essential for improving user experience and engagement by making it easier to access specific
// pages or features directly.


// 1. Deep Linking in React Native :
// Deep Linking refers to using a URL to link directly to a specific page or section within a mobile app. 
// This URL can be clicked from an external source, such as a web page or an email, and it will open the app
// to the designated content.

// URL Structure: https://myapp.com/page

// Implementation in React Native:

// 1. Define a Custom URL Scheme: 
// For iOS: Configure the URL scheme in your Info.plist file.
// For Android: Define the scheme in your AndroidManifest.xml file.



// ============================================================================================

// 2. Dynamic Linking in React Native :
// Dynamic Linking is a more advanced form of deep linking that can change based on certain 
// conditions or parameters.

// Dynamic links are typically used for marketing purposes, allowing you to create a single link
// that behaves differently depending on the user's device, location, or context.


// Key Features:
// Conditional Behavior: A dynamic link can open a specific screen within the app if the app is installed
// or redirect to the app store/play store if the app is not installed.

// Implementation in React Native:

// 1. Use a Service for Dynamic Links: Services like Firebase Dynamic Links or Branch.io

// 2. Create Dynamic Links:
// Create a dynamic link that includes specific parameters, such as target screen, custom data,
// and fallbacks for when the app is not installed.

// 3. Handle Dynamic Links in Your App:
// Similar to deep links, dynamic links are handled using the Linking module.


// ==================================================================================================

// Key Differences:

// Deep Linking: Primarily static, direct URLs to specific screens within app.

// Dynamic Linking: More flexible, allowing for customized behavior based on user context or app state.


// Both deep linking and dynamic linking are powerful tools for improving app navigation, user retention,
// and overall experience in your React Native application.

// ======================================================================================================

// universal links :
// Universal Links are a type of deep link that allows iOS apps to open specific content within the app
// instead of opening a web page.
// universal links are standard web URLs that are associated with a particular app.
// When a user clicks on a universal link, iOS determines whether the associated app is installed and opens
// the link in the app if it is. If the app is not installed, the link opens in the default web browser.

// How Universal Links Work
// 1.Association Between Your App and Domain:
// 2.Opening Content in the App:
// 3.Fallback: