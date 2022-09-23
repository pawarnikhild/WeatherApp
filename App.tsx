import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StackNavigation from './app/routes/StackNavigation';
import HomeScreen from './app/models/HomeScreen';

export default function App() {
  return (
    // <HomeScreen />
    <StackNavigation />
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
