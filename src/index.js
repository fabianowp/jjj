// src/index.js

import Page1 from './Page1';
import Page2 from './Page2';


import { createMaterialTopTabNavigator } from 'react-navigation';

const TabNavigator = createMaterialTopTabNavigator({
  Home: Page1,
  About: Page2,
});

export default { TabNavigator };