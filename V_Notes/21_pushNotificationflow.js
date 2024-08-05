// Push notifications are a powerful way to engage users by sending messages directly to their devices. 
// Here's a step-by-step explanation of how the push notification flow works in a React Native application:\

// 1. Setup Push Notification Services
// For iOS (using Apple Push Notification Service - APNs):
// For Android (using Firebase Cloud Messaging - FCM):
// google-services.json  place it in the android/app


// 2. Integrate Push Notification Library in React Native
// install library react-native-push-notification or react-native-firebase


// 3. Request Permissions
// Request the necessary permissions from the user to receive push notifications.

// 4. Send Push Notifications
// From the Backend:

// Generate the Device Token:
// When the app registers for push notifications, it receives a device token that uniquely identifies the device. 
// Send this token to your backend server.


// Send Notification to APNs/FCM:
// Your backend server uses the device tokens to send notifications via APNs (for iOS) or FCM (for Android).

// 5. Handle Incoming Notifications in the App


// ===================================================================

// Flow Summary:

// 1.Setup Push Notification Services:
// Configure APNs for iOS and FCM for Android.

// 2.Integrate Push Notification Library:
// Use a library like react-native-push-notification to handle notifications.

// 3.Request Permissions:
// Request user permissions for receiving notifications.

// 4.Generate and Send Device Token:
// Register the device with APNs/FCM and send the token to the backend.

// 5.Send Notifications from Backend:
// Use the device token to send notifications via APNs/FCM.

// 6.Handle Notifications in the App:
// Handle incoming notifications and update the app’s UI or state as needed.