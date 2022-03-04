// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular
  })
  return (
    <View style={styles.container}>
      <Home />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Lato_400Regular',
  },
});
