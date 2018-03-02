import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExtraInfo = (props) => {

    const iconStyles = {
        size: 22,
        color: '#fff'
    };
    let windSpeed = null,
        rainChance = null,
        humidity = null;

    if (props.windSpeed) {
        windSpeed = (
            <View style={styles.col}>
                <Text style={styles.txt}>{props.windSpeed}</Text>
            </View>
        );
    }
    if(props.rainChance){
        rainChance = (
            <View style={styles.col}>
                <Ionicons name="ios-umbrella" size={iconStyles.size} color={iconStyles.color} />
                <Text style={styles.txt}>%{props.rainChance}</Text>
            </View>
        );
    }
    if(props.humidity){
        humidity = (
            <View style={styles.col}>
                <Ionicons name="ios-water" size={iconStyles.size} color={iconStyles.color} />
                <Text style={styles.txt}>%{props.humidity}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            {windSpeed}
            {rainChance}
            {humidity}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt: {
        color: '#fff',
        paddingLeft: 8,
        fontSize: 17
    },
    col: {
        flexDirection: 'row',
        paddingRight: 12,
        paddingLeft: 12
    }
})

export default ExtraInfo;