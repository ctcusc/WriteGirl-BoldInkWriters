import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {ExamplePage} from "./src/pages"

const Stack = createStackNavigator()

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ExamplePage"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="ExamplePage" component={ExamplePage} />
            {/* add your screens here! */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <Text>Hi Friends! Edit this page to display your new page from your ticket!</Text>
    </View>
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
