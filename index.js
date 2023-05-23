/**
 * @format
 */
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

AppRegistry.registerComponent(appName, () => App);
