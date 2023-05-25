import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/PresentationLayer/screens/HomeScreen';

export default function App() {
  return (
    < >
      <StatusBar style="auto" />
      <HomeScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9EBEA'
  },
});
