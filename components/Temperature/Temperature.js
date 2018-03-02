import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const Temperature = (props) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.tempText}>{props.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
    },
    tempText:{
        fontSize:Dimensions.get('window').width /3,
        color:'#fff',
        fontFamily:'Helvetica-Light',
    }
});

export default Temperature;