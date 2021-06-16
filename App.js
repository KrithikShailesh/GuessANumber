import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import GameScreen from './Screens/GameScreen';



export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      <GameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
