import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextDay from './NextDay/NextDay';

const NextDays = (props) => {
    return (
        <View style={styles.container}>
            <NextDay
                day="Thursday"
                status="PART_CLOUDY_DAY"
                bgColor = "#d9a9ce"
                temperature={21} />
            <NextDay
                day="Friday"
                status="RAINY"
                bgColor = "#d29cc7"
                temperature={16} />
            <NextDay
                day="Saturday"
                status="SUNNY"
                bgColor = "#c586ba"
                temperature={19} />
            <NextDay
                day="Sunday"
                status="PART_CLOUDY_DAY"
                bgColor = "#ba75b1"
                temperature={26} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    cal: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9a9ce'
    }
});
export default NextDays;