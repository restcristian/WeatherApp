import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Temperature from './components/Temperature/Temperature';
import LocalWidget from './components/LocalWidget/LocalWidget';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';


export default class App extends React.Component {

  state = {
    isReady: false
  };

  componentDidMount() {
    
    this._loadFontsAsync();    
  }
  _loadFontsAsync = async() =>{
    await Font.loadAsync({
      'Helvetica-Light': require('./assets/fonts/HelveticaNeue-Light.ttf'),
      'Helvetica-Ultra-Light': require('./assets/fonts/HelveticaNeue-UltraLight.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    let content = null;
    if (this.state.isReady) {
      content = (
        <View>
          <LocalWidget />
          <Temperature value = {17} />
        </View>
      )
    }
    return(
      <ImageBackground style={styles.container} source={require('./assets/bg.png')}>
        {content}
      </ImageBackground>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
