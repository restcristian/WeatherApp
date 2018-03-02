import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Helper from '../../../Global/Helper';
import dateFormat from 'dateformat';

const NextDay = (props) => {
   
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
    let weatherIcon = Helper.getWeatherIcon(iconStyles, props.status, props.isDay);
    return (
        <View style={dayStyles}>
            <Text style={[styles.txt, styles.txtDay]}>{dateFormat(props.date, "dddd")}</Text>
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