<h1 align="center">
  <a href="https://github.com/SagredoIsmael/testMapit">
    Test Mapit
  </a>
</h1>

React native project with a fake api about motorcycle sale


## Contents

- [Requirements](#-requirements)
- [Building TestMapit app](#-building-TestMapit-app)
- [License](#-license)
- [Troubleshooting](#-troubleshooting)




## 📋 Requirements


*  You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS.

*  Android Studio
  
*  Built-in emulator in Android Studio

*  Node Package Manager (NPM)

*  Node.js (Version 8 or newer)

*  React Native command line interface (React Native CLI)

*  Java Development Kit (JDK 8 or newer)




## 🎉 Building TestMapit app


1. Download and install the latest version of Android Studio from https://developer.android.com/studio/

2. Configure the ANDROID_HOME environment variable. Open the System pane under System and Security in the Windows Control Panel, then click on Change settings. Open the Advanced tab and click on Environment Variables. Click on New to create a new ANDROID_HOME user variable that points to the path to your Android SDK.
 
3. Download and install the latest version of Node.js from https://nodejs.org/en/. Note: Npm is installed with Node.js.

4. Install React Native as described at https://facebook.github.io/react-native/docs/getting-started.html#content (You have to choose 'React Native CLI Quickstart')

5. Clone this repository (git clone https://github.com/SagredoIsmael/testMapit)

6. Install dependencies with npm, all required components will be installed automatically
    
    `$ npm install`

    *  iOS -> You have to install the pods with: 
        `$ cd ios && pod install`

        And start XCode and open generated testmapit.xcworkspace

    
    *  Android
        no steps required

7.  Link your device or simulator for launch app (Use this tutorial for help: [running on device](https://facebook.github.io/react-native/docs/running-on-device))

8.  Run your project from XCode (Cmd+R) for iOS, or use react-native run-android to run your project on Android.




## 📄 License

MIT



## 📖 Troubleshooting

Create keyStore for Android:
*  Launch command: $cd android/app && keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

Add Android SDK path:
*  Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file.

