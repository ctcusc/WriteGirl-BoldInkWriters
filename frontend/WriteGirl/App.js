import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ExamplePage} from "./src/pages" 
// TODO: add your page here!
import {WritingExperiments} from "./src/pages"
import {DoorActivity} from "./src/pages"
import {DoorOpened} from "./src/pages"

const Stack = createNativeStackNavigator()

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: true,
          }}>
        {/* <Stack.Screen name="example page" component={ExamplePage} /> */}
        {/* TODO: add your page here! */}
        <Stack.Screen name="writing experiments" component={WritingExperiments} />
        <Stack.Screen name="door activity" component={DoorActivity} />
        <Stack.Screen name="door opened" component={DoorOpened} />
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
