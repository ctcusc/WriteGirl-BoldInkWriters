import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar, {ExamplePage} from "./src/pages" 
// TODO: add your page here!

const Stack = createNativeStackNavigator()

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
        {/* <Stack.Screen name="example page" component={ExamplePage} /> */}
        <Stack.Screen name="NavBar page" component={NavBar} />
        {/* TODO: add your page here! */}
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
