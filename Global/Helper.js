import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export const getWeatherIcon = (iconStyles, status, isDay) => {
    let currentStatus = status.toUpperCase();
    let weatherIcon = <Ionicons name="ios-sunny-outline" {...iconStyles} />;

    if (isDay && currentStatus.match(/SUN|OVER/g)) {
        weatherIcon = <Ionicons name="ios-sunny-outline" {...iconStyles} />;
    }
    if (currentStatus.match(/RAIN|DRIZZ/g)) {
        weatherIcon = <Ionicons name="ios-rainy-outline" {...iconStyles} />;
    }
    if (currentStatus.match(/CLOUDY/g)) {
        weatherIcon = <Ionicons name="ios-cloudy-outline" {...iconStyles} />;
    }
    if (isDay && currentStatus.match(/CLOUD|SUN/g)) {
        weatherIcon = <Ionicons name="ios-partly-sunny-outline" {...iconStyles} />;
    }
    if (!isDay && currentStatus.match(/CLOUD|NIGHT/g)) {
        weatherIcon = <Ionicons name="ios-cloudy-night-outline" {...iconStyles} />;
    }
    return weatherIcon;
};

export const convertMinsToMil = (min) => {
    return min * 60 * 1000;
};