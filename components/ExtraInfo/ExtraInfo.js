import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExtraInfo = (props) => {

    const iconStyles = {
        size:20,
        color:'#fff'
    };
    return (
        <View style={styles.container}>
            <View style = {styles.col}>
                <Text style = {styles.txt}>4kph</Text>
            </View>
            <View style = {styles.col}>
                <Ionicons name="ios-umbrella-outline" size={iconStyles.size} color={iconStyles.color} />
                <Text style = {styles.txt}>%35</Text>
            </View>
            <View style = {styles.col}>
                <Ionicons name="ios-water-outline" size={iconStyles.size} color={iconStyles.color} />
                <Text style = {styles.txt}>%72</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt:{
        color:'#fff',
        paddingLeft:8
    },
    col:{
        flexDirection:'row',
        paddingRight:6,
        paddingLeft:6
    }
})

export default ExtraInfo;