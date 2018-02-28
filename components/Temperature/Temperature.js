import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


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
        fontSize:200,
        color:'#fff',
        fontFamily:'Helvetica-Light',
    }
});

export default Temperature;