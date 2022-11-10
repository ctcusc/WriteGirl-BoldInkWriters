export { default as ExamplePage } from './ExamplePage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExamplePage from './ExamplePage';
import RandomPage1 from './RandomPage1';
import RandomPage2 from './RandomPage2';
import RandomPage3 from './RandomPage3';
// TODO: add your page here!

const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
    <Tab.Navigator
        
    >
        <Tab.Screen name="Home" component={ExamplePage} />
        <Tab.Screen name="Resources" component={RandomPage1} />
        <Tab.Screen name="writing" component={RandomPage2} />
        <Tab.Screen name="others" component={RandomPage3} />
    </Tab.Navigator>
    )
  }
  