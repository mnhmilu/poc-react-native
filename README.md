# poc-react-native

## react native research project

# [](https://github.com/mnhmilu/poc-react-native/edit/main/README.md#steps)


<details>
  <summary>Andriod Environment Preparation</summary>

  ### Andriod Environment

* Download Android studio and configure environment


> nano $HOME/.bashrc

Append below lines

```shell

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

```

### configure emulator


   [How to Configure Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)


> npx expo run:android --variant release

or 

-- press a to open andriod emulator || r for reload from regular command

To see log: 

`npx react-native log-android --verbose`


> open another tab to see the log if application crash



</details>

---
<details>
  <summary>Expo Environment Preparation</summary>


**signup in expo.dev**

`expo login`

`npm install -g expo-cli`

`expo init MyTSProject`

will generate es file

     npm install --global expo-cli eas-cli

     eas build -p android --profile preview

`npx expo run`


> go to expo.dev web and see the build progress ,when finish press install button and rest of the installation process with QR code

### Resources:

Getting Started with Expo [Ref](https://reactnative.dev/docs/0.62/typescript)


</details>  

---

<details>
  <summary>Add React Native Element for beautificaiton</summary>


[add react-native element for beautiful UI](https://github.com/react-native-elements/react-native-elements/tree/next)


[Icon Reference](https://icons.expo.fyi/)


</details>


---



<details>
  <summary>Andriod APK generation using Expo CI/CD</summary>


- build process [Ref](https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae)

**signup in expo.dev**

`expo login`

`npm install -g expo-cli`

`expo init MyTSProject`

will generate es file

     npm install --global expo-cli eas-cli

     eas build -p android --profile preview

> go to expo.dev web and see the build progress ,when finish press install button and rest of the installation process with QR code

</details>  

---

<details>
  <summary>SQLite Support</summary>
  
  ### Resources
  
> https://www.youtube.com/watch?v=1kSLd9oQX7c&t=15s

> https://github.com/chelseafarley/expo-sqlite-tutorial/blob/main/App.js

Note: sqlite don't run on web , use emulator or expo go mobile app to view the change

### Prerequisite

```js
// expo add expo-sqlite
// expo add expo-file-system
// expo add expo-document-picker
// expo add expo-sharing
// expo add expo-dev-client

```

</details>


---

**Troubleshoot**

for app crash on physical device

    npm install @rneui/themed @rneui/base

**Jira Link**
[ticket 1](https://mnhmilu.atlassian.net/browse/PER-46)
