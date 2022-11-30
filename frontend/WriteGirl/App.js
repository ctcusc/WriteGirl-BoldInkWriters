import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// TODO: add your page here!
import {CreateAccountPage, ExamplePage} from "./src/pages" 
import {HomePage} from "./src/pages" 
import {WritingExperiments} from "./src/pages"

const Stack = createNativeStackNavigator()

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
        {/* <Stack.Screen name="example page" component={ExamplePage} /> */}
        {/* TODO: add your page here! */}
        <Stack.Screen name="Create Account Page" component={CreateAccountPage} />
        {/* <Stack.Screen name="home page" component={HomePage} /> */}
        {/* <Stack.Screen name="writing experiments" component={WritingExperiments} /> */}
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
