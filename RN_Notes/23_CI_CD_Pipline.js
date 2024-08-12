// 1. What is CI/CD, and why is it important in React Native development?\

// Answer: CI/CD stands for Continuous Integration and Continuous Deployment. 
// CI involves automatically building, testing, and integrating code changes frequently,
// usually on every commit.

// CD extends CI by automatically deploying the application to production or staging environments
// after passing tests.

// In React Native development, CI/CD ensures that code changes are consistently
// integrated, tested, and delivered quickly, leading to faster release cycles, higher code quality,
// and early detection of bugs.

// =====================================================================================================

// 2. Which tools are commonly used for setting up a CI/CD pipeline for React Native?
// Answer: Common tools for CI/CD in React Native include:
// CI/CD Platforms: Jenkins, CircleCI, Travis CI, GitLab CI, Bitrise, and GitHub Actions.

// Build Tools: Fastlane (for automating builds, testing, and deployment), Xcode (for iOS builds),
// and Gradle (for Android builds).

// Testing Tools: Jest (for unit tests), Detox (for end-to-end testing), and Appium (for UI testing).

// Deployment: TestFlight (iOS), Google Play Console (Android), CodePush (for over-the-air updates).


// =======================================================================================================

// 3. How would you set up a CI/CD pipeline for a React Native app?

// Answer:
// Repository Setup: Store your code in a version control system like GitHub, GitLab, or Bitbucket.

// CI Configuration: Use a CI service (e.g., CircleCI, GitHub Actions) to trigger builds on every commit
// or pull request.

// Install Dependencies: Configure the CI pipeline to install dependencies (e.g., using npm install or yarn).

// Run Tests: Automate unit tests (e.g., with Jest) and end-to-end tests (e.g., with Detox).

// Build Process: Configure builds for both Android (using Gradle) and iOS (using Xcode) in the CI pipeline.

// Deployment: Automate deployment to platforms like TestFlight (for iOS), Play Store (for Android),
// or use CodePush for instant updates.

// Notifications: Set up notifications (e.g., Slack, email) for build success or failure.


// ==========================================================================================================

// 4. How do you handle environment-specific configurations in a CI/CD pipeline for React Native?

// Answer: Use environment variables to manage configurations for different environments 
// (e.g., development, staging, production). In React Native, this can be done by:

// CI/CD Tooling: Define environment variables in your CI/CD tool (e.g., CircleCI, GitHub Actions).

// Build Scripts: Use different build scripts or env files (.env.development, .env.production) 
// for each environment.

// React Native Config: Utilize libraries like react-native-config to manage environment variables
// and switch between configurations based on the environment.


// ==========================================================================================================

// 5. How would you implement automated testing in a CI/CD pipeline for React Native?
// Answer:
// Unit Tests: Write and run unit tests using Jest during the CI process to catch issues early.

// Integration/End-to-End Tests: Use Detox for automated end-to-end testing. Configure the CI pipeline
// to run these tests on real devices or emulators.

// Code Quality Checks: Integrate tools like ESLint for linting and Prettier for code formatting
// as part of the CI process.

// Test Reporting: Configure the CI pipeline to generate and display test reports, making it easier
// to identify failures.

// ======================================================================================================
