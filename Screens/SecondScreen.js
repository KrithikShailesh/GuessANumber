import React, { useState, useRef } from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';

const generateRandomNumbers = (min, max, exclude) => {
    min=Math.ceil(min);
    max=Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max-min)) + min;

    if(randomNumber == exclude){
        return generateRandomNumbers(min,max,exclude);
    }
    else{
        return randomNumber;
    }
};

const SecondScreen = props => {
    
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumbers(1,100,props.choiceNum));
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
    
  const nextGuessHandler = direction => {
    if((direction === 'lower' && currentGuess < props.choiceNum ) || (direction === 'greater' && currentGuess > props.choiceNum)){
        Alert.alert('Don\'t lie!',"You know that this is wrong...",[{text:'Sorry', style: 'cancel'}]);
        return;
    }
    
    if(direction === 'lower'){
        currentHigh.current=currentGuess;
    }
    else{
        currentLow.current=currentGuess;
    }

    const currentNumber = generateRandomNumbers(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(currentNumber);
  };

  return(
      <View style={styles.screen}>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.buttonContainer}>
              <Button title='Lower than' onPress={nextGuessHandler.bind(this,'lower')}/>
              <Button title='Greater than' onPress={nextGuessHandler.bind(this,'greater')}/>
          </Card>
      </View>
  );  
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }

});
export default SecondScreen;