/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import headlessTask from './roamtest';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerHeadlessTask('RoamHeadlessService', headlessTask());

