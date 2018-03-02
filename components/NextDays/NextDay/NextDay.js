import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NextDay = (props) => {
    let weatherIcon = null;
    const iconStyles = {
        size: 48,
        color: '#fff'
    };
    let dayStyles = [styles.container];
    if(props.bgColor){
        let passedStyles = {
            backgroundColor:props.bgColor
        };
        dayStyles.push(passedStyles);
    }
    switch (props.status) {
        case 'SUNNY':
            weatherIcon = <Ionicons name="ios-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
            break;
        case 'NIGHT':
            weatherIcon = <Ionicons name="weather-night" size={iconStyles.size} color={iconStyles.color} />
            break;
        case 'CLOUDY':
            weatherIcon = <Ionicons name="ios-cloudy-outline" size={iconStyles.size} color={iconStyles.color} />
            break;
        case 'PART_CLOUDY_DAY':
            weatherIcon = <Ionicons name="ios-partly-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
            break;
        case 'PART_CLOUDY_NIGHT':
            weatherIcon = <Ionicons name="ios-cloudy-night-outline" size={iconStyles.size} color={iconStyles.color} />
            break;
        case 'RAINY':
            weatherIcon = <Ionicons name="ios-rainy-outline" size={iconStyles.size} color={iconStyles.color} />;
            break;
        default:
            weatherIcon = <Ionicons name="ios-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
            break;
    }
    return (
        <View style={dayStyles}>
            <Text style={[styles.txt, styles.txtDay]}>{props.day}</Text>
            <View>
                {weatherIcon}
            </View>
            <Text style={[styles.txt, styles.txtTemp]}>{props.temperature}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9a9ce',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        color: '#fff',
        fontFamily:'Helvetica-Light'
    },
    txtDay: {},
    txtTemp: {}
});

export default NextDay;