/**
 * @format
 */
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
import {AppRegistry, NativeModules} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

NativeModules.PSPDFKIT
AppRegistry.registerComponent(appName, () => App);
