import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextDay from './NextDay/NextDay';

const NextDays = (props) => {
    const colorList = ["#d9a9ce", "#d29cc7", "#c586ba", "#ba75b1"];
    let forecast = props.forecastDays.map((item, idx) => {
        return (
            <NextDay
                key = {idx}
                date={item.date}
                status={item.day.condition.text}
                temperature={props.isFarenheit ? item.day.avgtemp_f : item.day.avgtemp_c}
                bgColor={colorList[idx]} />
        );
    });
    return (
        <View style={styles.container}>
            {forecast}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    
    },
    cal: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
   
    }
});
export default NextDays;