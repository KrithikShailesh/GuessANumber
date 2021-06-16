import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import Card from '../Components/Card';

const GameScreen = props => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const enteredNumberHandler = inputText =>{
        setEnteredNumber(inputText.replace(/[^0-9]/g,''));
    };
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>
                Start a new game!
            </Text>
            <Card style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="  Enter a Number" 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={enteredNumberHandler}
                value={enteredNumber}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Confirm" onPress={() => {}}/>
                    <Button style={styles.button} title="Cancel" onPress={() => {}}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        marginBottom: "20%"
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
    },
    input:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginVertical: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 20
    },
    button: {
        
    }

});

export default GameScreen;