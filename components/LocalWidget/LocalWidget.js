import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LocalWidget = (props) => {
    const iconStyles = {
        size: 60,
        color: '#fff'
    };
    let weatherIcon = <Ionicons name="ios-sunny-outline" size={iconStyles.size} color={iconStyles.color} />;
    // switch (props.status) {
    //     case 'SUNNY':
    //         weatherIcon = <Ionicons name="ios-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
    //         break;
    //     case 'NIGHT':
    //         weatherIcon = <Ionicons name="weather-night" size={iconStyles.size} color={iconStyles.color} />
    //         break;
    //     case 'CLOUDY':
    //         weatherIcon = <Ionicons name="ios-cloudy-outline" size={iconStyles.size} color={iconStyles.color} />
    //         break;
    //     case 'PART_CLOUDY_DAY':
    //         weatherIcon = <Ionicons name="ios-partly-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
    //         break;
    //     case 'PART_CLOUDY_NIGHT':
    //         weatherIcon = <Ionicons name="ios-cloudy-night-outline" size={iconStyles.size} color={iconStyles.color} />
    //         break;
    //     case 'RAINY':
    //         weatherIcon = <Ionicons name="ios-rainy-outline" size={iconStyles.size} color={iconStyles.color} />;
    //         break;
    //     default:
    //         weatherIcon = <Ionicons name="ios-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
    //         break;
    // }
    let currentStatus = props.status.toUpperCase();
    if(props.isDay && currentStatus.match(/SUN|OVER/g)){
        weatherIcon = <Ionicons name="ios-sunny-outline" size={iconStyles.size} color={iconStyles.color} />
    }
    if(currentStatus.match(/RAIN|DRIZZ/g)){
        weatherIcon = <Ionicons name="ios-rainy-outline" size={iconStyles.size} color={iconStyles.color} />;
    }
    if(currentStatus.match(/CLOUDY/g)){
        weatherIcon = <Ionicons name="ios-cloudy-outline" size={iconStyles.size} color={iconStyles.color} />;
    }
    if(props.isDay && currentStatus.match(/CLOUD|SUN/g)){
        weatherIcon = <Ionicons name="ios-partly-sunny-outline" size={iconStyles.size} color={iconStyles.color} />;
    }
    if(!props.isDay && currentStatus.match(/CLOUD|NIGHT/g)){
        weatherIcon = <Ionicons name="ios-cloudy-night-outline" size={iconStyles.size} color={iconStyles.color} />;
    }
    
    return (
        <View style={styles.container} >
            <View style={styles.colIcon}>
                {weatherIcon}
            </View>
            <View>
                <Text style={[styles.txt, styles.cityTxt]}>{props.city.toUpperCase()}</Text>
                <Text style={styles.txt}>{props.date.toUpperCase()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Helvetica-Light',
    },
    cityTxt: {
        fontSize: 18,
        marginBottom: 8
    },
    colIcon: {
        paddingRight: 5
    }
})

export default LocalWidget;