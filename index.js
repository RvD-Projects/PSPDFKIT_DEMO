/**
 * @format
 */

import {AppRegistry, NativeModules} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

NativeModules.PSPDFKIT
AppRegistry.registerComponent(appName, () => App);
