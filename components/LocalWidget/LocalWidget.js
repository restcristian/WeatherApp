import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Helper from '../../Global/Helper';

const LocalWidget = (props) => {
    const iconStyles = {
        size: 60,
        color: '#fff'
    };
    
    let weatherIcon = Helper.getWeatherIcon(iconStyles, props.status, props.isDay);
    
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