# poc-react-native
react native research project

react native research project

# [](https://github.com/mnhmilu/poc-react-native/edit/main/README.md#steps)

## Steps:

### Step 1: Getting Started with Expo [Ref](https://reactnative.dev/docs/0.62/typescript)
> npx expo run
### Step 2: Add React Native Element

[add react-native element for beautiful UI](https://github.com/react-native-elements/react-native-elements/tree/next)

[Icon Reference](https://icons.expo.fyi/)

### Step 3: Android APK generation

 1. Download Android studio and configure

> export ANDROID_HOME=$HOME/Android/Sdk

2. configure emulator
[Configure Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

> npx expo run:android --variant release

-- press a to open andriod emulator || r for reload

``` npx react-native log-android --verbose ```

> open another tab to see the log if application crash

 - build process  [Ref](https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae)
 
 **signup in expo.dev**

`expo login npm install -g expo-cli expo init MyTSProject` 
 will generate es file 

     npm install --global expo-cli eas-cli 

     eas build -p android --profile preview

>go to expo.dev web and see the build progress ,when finish press install button and rest of the installation process with QR code

 **Troubleshoot**

for app crash on physical device

    npm install @rneui/themed @rneui/base




