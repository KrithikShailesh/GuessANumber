import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';

const GameScreen = props => {
    const [plHolder, setplHolder] = useState('Enter a number');
    const [enteredNumber, setEnteredNumber] = useState('');
    const [confirm, setConfirm] = useState();
    const [state, setState] = useState(false);

    const enteredNumberHandler = inputText =>{
        setEnteredNumber(inputText.replace(/[^0-9]/g,''));
    };

    const resetHandler = () => {
        setEnteredNumber('');
        setState(false);
    };

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        console.log(typeof chosenNumber);
        if(chosenNumber <= 0 || chosenNumber > 99 || isNaN(chosenNumber)){
            Alert.alert('Invalid Number!','Enter a number between 1 and 99',[{text: 'OK', style: 'destructive', onPress: resetHandler}]);
            return;
        }
        setState(true);
        setConfirm(chosenNumber);
        setEnteredNumber('');
        Keyboard.dismiss();
    };

    let confirmedNumber;

    if(state){
        confirmedNumber=(
        <Card>
        <Text>You Selected</Text>
        <NumberContainer>{confirm}</NumberContainer>
        <Button title='START GAME' onPress={() => props.onStartGame(confirm)}/>
        </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss();}}>
        <View style={styles.screen}>

            <Text style={styles.title}>
                Start a new game!
            </Text>
            <Card style={styles.inputContainer}>
                <TextInput style={styles.input} 
                textAlign= 'center'
                placeholder={plHolder} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={enteredNumberHandler}
                value={enteredNumber}
                
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button  title="Confirm" onPress={confirmHandler}/>
                    </View>
                    <View style={styles.button}>
                    <Button style={styles.button} title="Reset" color='red' onPress={resetHandler}/>
                    </View>
                </View>
            </Card>
            {confirmedNumber}
        </View>
        </TouchableWithoutFeedback>
        
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
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'black',
        marginVertical: 10,
        height: 50,
        borderColor: 'pink'
    },
    buttonContainer:{
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    button: {
        width: "50%",
        marginRight: 10
    }

});

export default GameScreen;