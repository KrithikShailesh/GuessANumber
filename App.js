import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import GameScreen from './Screens/GameScreen';
import SecondScreen from './Screens/SecondScreen';



export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (confirm) => {
    setUserNumber(confirm);
  };

  let content = <GameScreen onStartGame={startGameHandler}/>;

  if(userNumber){
    content = <SecondScreen choiceNum={userNumber}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
