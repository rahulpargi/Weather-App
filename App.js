import React from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import Weather from './components/Weather';
import {API_KEY} from './utils/WeatherAPiKeys'

export default class App extends React.Component {
  state={
    isLoading:false,
    temperature:0,
    weatherCondition:null,
    error:null
  };
  componentDidMount(){
    navigation.geolocation.getCurrentPosition(
      position=>{
        this.fetchWeather(position.coords.latitude,position.coords.longitude)
      },
    );
  }
  render() {
    const {isLoading}=this.state;
    return (
      <View style={styles.container}>
      {isLoading?(
        <Text>Fetching Weather</Text>
      ):(
        <View>
          <Text>Weather App</Text>
          <Weather/>
          
          
        </View>
        
      
      )}
      </View>
      
    );
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
