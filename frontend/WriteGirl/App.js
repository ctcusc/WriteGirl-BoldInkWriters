import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CreateAccountPage, ExamplePage} from "./src/pages" 
// TODO: add your page here!
import {HomePage} from "./src/pages" 



const Stack = createNativeStackNavigator()

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
        {/* <Stack.Screen name="example page" component={ExamplePage} /> */}
        {/* TODO: add your page here! */}
        <Stack.Screen name="home page" component={HomePage} />
        {/* <Stack.Screen name="Create Account Page" component={CreateAccountPage} /> */}
        
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
