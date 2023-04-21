import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
// TODO: add your page here!
import NavBar, {CreateAccountPage, HomePage, WritingExperiments, ExamplePage, ProfilePage, MonthlyExercises, SignInPage, ScreenSaverPage, ScreenSaverSetup, DoorActivity, DoorOpened, RandomizerWheelPage, AboutUsPage, ResourcesPage, OpenedExercise} from "./src/pages" 

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
      <Tab.Navigator 
        screenOptions={{
          headerShown: false
        }}
        
        // screenOptions={({ route }) => ({
        //   tabBarButton: [
        //     "Screen Saver Setup",
        //     "Screen Saver Page",
        //     "Door Opened"
        //   ].includes(route.name) 
        //     ? () => {
        //         return null;
        //       }
        //     : undefined,
        // })}
      >
          {/* <Tab.Screen name="Monthly Exercises" component={MonthlyExercises} /> */}
          {/* <Tab.Screen name="Monthly Exercise Opened" component={OpenedExercise} /> */}
          <Tab.Screen name="Home Page" component={HomePage} />
          <Tab.Screen name="Writing Experiments" component={WritingExperiments} />
          <Tab.Screen name="Resources" component={ResourcesPage} />
          {/* <Tab.Screen name="Screen Saver Setup" component={ScreenSaverSetup} /> */}
          <Tab.Screen name="About Us Page" component={AboutUsPage} /> 
          <Tab.Screen name="Profile Page" component={ProfilePage} />
      </Tab.Navigator>
  );
}


export default function App({navigation}) {
  const [loaded] = useFonts({
      DroidSans: require('./assets/fonts/DroidSans.ttf'),
      DroidSansBold: require('./assets/fonts/DroidSans-Bold.ttf'),
      Hubballi: require('./assets/fonts/Hubballi-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({ route }) => ({
          tabBarButton: [
            "Screen Saver Setup",
            "Screen Saver Page",
            "Door Opened",
            "Door Activity"
          ].includes(route.name) 
            ? () => {
                return null;
              }
            : undefined,
        })}>
            
            <Stack.Screen name="Sign In" component={SignInPage} />
            <Stack.Screen name="Create Account" component={CreateAccountPage} />
            <Stack.Screen name="Home Tabs" component={HomeTabs} />
            <Stack.Screen name="Profile Page" component={ProfilePage} />  
            <Stack.Screen name="Monthly Exercises" component={MonthlyExercises} />
            <Stack.Screen name="Monthly Exercise Opened" component={OpenedExercise} />
            <Stack.Screen name="Screen Saver Setup" component={ScreenSaverSetup} />
            <Stack.Screen name="Screen Saver Page" component={ScreenSaverPage} />
            <Stack.Screen name="Randomizer Wheel" component={RandomizerWheelPage} />
            <Stack.Screen name="Door Opened" component={DoorOpened} />
            <Stack.Screen name="Door Activity" component={DoorActivity} />
            
      </Stack.Navigator>
    </NavigationContainer>
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
