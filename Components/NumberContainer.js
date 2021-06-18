import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NumberContainer = props => {
    return(
        <View style={styles.container}>
            <Text>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'lightblue',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5
    }
});

export default NumberContainer;