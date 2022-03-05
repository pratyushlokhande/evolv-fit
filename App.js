// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Home from "./screens/Home";
import Program from './screens/Program';
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

const Stack = createSharedElementStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular
  })
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Program" component={Program} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Lato_400Regular',
  },
});
