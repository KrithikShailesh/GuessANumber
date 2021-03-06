import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.card,...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 6 ,
        marginBottom: 20
    }
});

export default Card;