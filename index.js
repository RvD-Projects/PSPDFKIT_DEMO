/**
 * @format
 */
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
import {
  AppRegistry,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

NativeModules.PSPDFKIT;
AppRegistry.registerComponent(appName, () => App);

Platform.OS === "android"
  ? PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ])
  : null;
