// What is Network Security and SSL Pinning?

// Network Security :
// Network Security in mobile app development refers to the measures and protocols used to protect data
// as it travels between the app and external servers over a network, such as the internet.

// It includes practices to ensure the confidentiality, integrity, and authenticity of the data being transmitted,
// preventing unauthorized access, data breaches, and attacks like man-in-the-middle (MITM) attacks.

// Key Aspects of Network Security in React Native:

// 1. Encryption:

// SSL/TLS Encryption: Ensures that data transmitted between the app and the server is encrypted, 
// making it unreadable to anyone who intercepts it.
// HTTPS: Using HTTPS instead of HTTP ensures that SSL/TLS is used, protecting data in transit.


// 2. Authentication:

// API Authentication: Ensures that only authorized users can access specific resources by using tokens, 
// API keys, or OAuth.
// User Authentication: Using methods like JWT (JSON Web Tokens) or OAuth to securely authenticate users.


// 3. Data Integrity:

// Message Integrity Checks: Using hashing algorithms to ensure that data hasn't been tampered
// with during transmission.
// Data Validation: Ensuring that all incoming and outgoing data is validated to prevent security
// vulnerabilities like injection attacks.


// 4. Security Best Practices:

// Input Validation: Preventing attacks like SQL injection by properly validating and sanitizing user input.
// Secure Storage: Storing sensitive data like API keys securely, avoiding hardcoding them in the app.


// ==================================================================================================


// SSL Pinning in React Native:
// SSL Pinning is a technique used to enhance the security of network communications in a mobile app.
// It ensures that the app only communicates with a specific, trusted server by "pinning" 
// the server's SSL certificate or public key.

// Even if an attacker manages to intercept the communication and tries to use a different SSL certificate,
// the app will detect this and block the connection.


// How SSL Pinning Works:

// 1.Pinning the Certificate/Public Key:
// The app is programmed to trust only a specific SSL certificate or public key from the server. 
// This certificate or key is hardcoded into the app.

// 2. During Connection:
// When the app makes a network request, it checks the server's SSL certificate against the pinned 
// certificate or key.
// If the certificate matches the pinned one, the connection is established.
// If it doesn't match, the connection is rejected, preventing potential MITM attacks.



// Implementing SSL Pinning in React Native:

// se libraries like react-native-ssl-pinning or react-native-cert-pinner. 
import axios from 'axios';
import { get } from 'react-native-ssl-pinning';

get({
  url: 'https://your-secure-server.com',
  method: 'GET',
  sslPinning: {
    certs: ['your-cert-name'] // Name of the certificate file in your project
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log('SSL Pinning Error:', error);
});

// ==========================================
// when we get the token 1st time then how can secure api call in this time ?
// how we can secure 1st api call in which we get the jwt token in react native ?

// Steps to Secure the First API Call in React Native:

// 1. Use HTTPS (SSL/TLS Encryption)
// 2. SSL Pinning
// 3. Device Security and Storage :
// Use Keychain (iOS) and Keystore (Android) to store any sensitive data like 
// passwords or user credentials securely.
// Do not store credentials in plain text or AsyncStorage.

// 4. Rate Limiting & Throttling :
// Protect the login API from brute force attacks by limiting the number of requests a single IP
// or user can make within a short period.
// This can be enforced server-side but is essential for protecting the first call.

// 5. Implement Captcha Verification:
// Google reCAPTCHA v3 (or any other CAPTCHA solution) can be added to prevent automated attacks.

// 6. Encrypt Sensitive Data Before Sending:
// Ensure that the sensitive data, like passwords, is encrypted before sending them to the server, 
// even if HTTPS is already being used.
// You can use public key encryption (like RSA) to encrypt passwords client-side before
// they are sent to the server.

// 7. Use Strong Authentication Parameters:
// Use strong parameters (e.g., username, password) and consider additional factors
// such as two-factor authentication (2FA) for an additional layer of security.

// 8. Use HMAC (Hash-Based Message Authentication Code) for Request Integrity:
// The server will verify the hash to make sure the request wasn’t tampered with. 
// Example:
// The client generates a hash of the request payload (like password) using a secret key.
// The hash is sent along with the request.
// The server verifies the hash before processing the request.

// Conclusion:
// By combining SSL Pinning, strong encryption practices, HTTPS, rate limiting, 
// captcha verification, and device security, you can ensure that the first API call
// made to retrieve the JWT token is as secure as possible.