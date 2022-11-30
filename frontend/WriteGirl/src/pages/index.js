export { default as ExamplePage } from './ExamplePage'
// TODO: add your page here!
export { default as CreateAccountPage } from './CreateAccountPage/CreateAccountPage.js'
export { default as HomePage } from './HomePage/HomePage'
export { default as WritingExperiments} from './writing-experiments-CFC/writing-experiments-CFC'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExamplePage from './ExamplePage';
import RandomPage1 from './RandomPage1';
import RandomPage2 from './RandomPage2';
import RandomPage3 from './RandomPage3';

const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
    <Tab.Navigator
        
    >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Resources" component={RandomPage1} />
        <Tab.Screen name="Writing Experiments" component={WritingExperiments} />
        <Tab.Screen name="Profile" component={RandomPage3} />
    </Tab.Navigator>
    )
  }
  
