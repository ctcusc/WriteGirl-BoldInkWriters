import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

// TODO: add your page here!
import NavBar, {CreateAccountPage, HomePage, WritingExperiments, ExamplePage, MonthlyExercises, SignInPage, ScreenSaverPage, ScreenSaverSetup, DoorActivity, DoorOpened, RandomizerWheelPage, AboutUsPage} from "./src/pages" 

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        headerShown: false
      }}
        
        // screenOptions={({ route }) => ({
        //   tabBarButton: [
        //     "Screen Saver Setup",
        //     "Screen Saver Page"
        //   ].includes(route.name) 
        //     ? () => {
        //         return null;
        //       }
        //     : undefined,
        // })}
      >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Create Account" component={CreateAccountPage} />
          {/* <Tab.Screen name="Writing Experiments" component={WritingExperiments} /> */}
          {/* <Tab.Screen name="Sign In Page" component={SignInPage} /> */}
          <Tab.Screen name="Monthly Exercises" component={MonthlyExercises} />
          <Tab.Screen name="Screen Saver Setup" component={ScreenSaverSetup} />
          <Tab.Screen name="Screen Saver Page" component={ScreenSaverPage} />      
          <Tab.Screen name="About Us Page" component={AboutUsPage} />  
          {/* <Tab.Screen name="Door Activity" component={DoorActivity} />
          <Tab.Screen name="Door Opened" component={DoorOpened} />
          <Tab.Screen name="Randomizer Wheel" component={RandomizerWheelPage} /> */}
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{
    //         headerShown: false,
    //       }}>
    //     {/* <Stack.Screen name="example page" component={ExamplePage} /> */}
    //     <Stack.Screen name="NavBar page" component={NavBar} />
    //     {/* TODO: add your page here! */}
    //     {/* <Stack.Screen name="Create Account Page" component={CreateAccountPage} /> */}
    //     {/* <Stack.Screen name="home page" component={HomePage} /> */}
    //     {/* <Stack.Screen name="writing experiments" component={WritingExperiments} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
