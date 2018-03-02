import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, Switch, ActivityIndicator } from 'react-native';
import Temperature from './components/Temperature/Temperature';
import LocalWidget from './components/LocalWidget/LocalWidget';
import ExtraInfo from './components/ExtraInfo/ExtraInfo';
import NextDays from './components/NextDays/NextDays';
import { Font, Permissions, Location, ScreenOrientation } from 'expo';
import dateFormat from 'dateformat';
import * as WeatherApi from './Global/WeatherApi';
import * as Helper from './Global/Helper';


export default class App extends React.Component {

  state = {
    isReady: false,
    location: null,
    weatherInfo: null,
    isFarenheit: true,
    isMiles: true
  };

  componentDidMount() {
    this._loadFontsAsync();
    this._loadLocationAsync();
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    setInterval(() => {
      this._loadLocationAsync();
    }, Helper.convertMinsToMil(1));
  }
  _initData = async () => {
    if (this.state.location) {
      const locationInfo = {
        lat: this.state.location.coords.latitude,
        lgn: this.state.location.coords.longitude
      };

      let weatherInfo = await WeatherApi.getCurrentWeather(locationInfo, 4);
      this.setState({ weatherInfo: weatherInfo });
    }
  }
  _loadFontsAsync = async () => {
    await Font.loadAsync({
      'Helvetica-Light': require('./assets/fonts/HelveticaNeue-Light.ttf'),
      'Helvetica-Ultra-Light': require('./assets/fonts/HelveticaNeue-UltraLight.ttf')
    });
    this.setState({ isReady: true });
  }
  _loadLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('denied');
    } else {
      location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
      this.setState({ location: location }, this._initData);
    }
  };
  _toggleTemperature = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isFarenheit: !prevState.isFarenheit
      };
    });
  }
  _toggleWindSpeedUnit = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isMiles: !prevState.isMiles
      };
    });
  };
  render() {
    let content = <ActivityIndicator size = "large" color = "#fff"/>;

    if (this.state.isReady && this.state.weatherInfo) {
      let SwitchColor = '#d29cc7';
      let tintColor = '#d29cc7';
      content = (
        <View style={styles.content}>
          <View style={styles.switchWrapper}>
            <View style={styles.switchBox}>
              <Text style={styles.switchTxt}>{this.state.isFarenheit ? 'F' : 'C'}</Text>
              <Switch
                value={this.state.isFarenheit}
                thumbTintColor={SwitchColor}
                onValueChange={this._toggleTemperature}
                tintColor = {tintColor}
              />
            </View>
            <View style={styles.switchBox}>
              <Text style={styles.switchTxt}>{this.state.isMiles ? 'mph' : 'kph'}</Text>
              <Switch
                value={this.state.isMiles}
                thumbTintColor={SwitchColor}
                onValueChange={this._toggleWindSpeedUnit}
                tintColor = {tintColor}
              />
            </View>
          </View>
          <View style={styles.topSection}>
            <LocalWidget
              status={this.state.weatherInfo.current.condition.text}
              city={this.state.weatherInfo.location.region}
              isDay={!!this.state.weatherInfo.current.is_day}
              date={dateFormat(new Date(), "dddd, mmm dS")} />
            <Temperature value={this.state.isFarenheit ? this.state.weatherInfo.current.temp_f : this.state.weatherInfo.current.temp_c} />
            <ExtraInfo
              windSpeed={(this.state.isMiles) ? this.state.weatherInfo.current.wind_mph + 'mph' : this.state.weatherInfo.current.wind_kph + 'kph'}
              rainChance={this.state.weatherInfo.current.pressure_in}
              humidity={this.state.weatherInfo.current.humidity}
            />
          </View>
          <View style={styles.footerSection}>
            <NextDays
              isFarenheit={this.state.isFarenheit}
              forecastDays={this.state.weatherInfo.forecast.forecastday}
            />
          </View>
        </View>
      );
    }
    return (
      <ImageBackground style={styles.container} source={require('./assets/bg.png')}>

        {content}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  switchWrapper: {
    position: 'absolute',
    top: 50,
    right: 13,
    alignItems: 'flex-end'
  },
  switchBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchTxt: {
    color: '#fff',
    fontFamily: 'Helvetica-Light',
    fontWeight: 'bold',
    fontSize: 18
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerSection: {
    height: 120,
  }
});
