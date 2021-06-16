import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.header}>
                {props.title}
            </Text>
        </View>
        );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: "10%",
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize: 25,
        }  
});
export default Header;