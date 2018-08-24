import React from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import Weather from './components/Weather';
import {API_KEY} from './utils/WeatherAPiKeys';
import {weatherCondition} from './components/WeatherCondition'


export default class App extends React.Component {
  state={
    isLoading:false,
    temperature:0,
    weatherCondition:null,
    error:null,
    place:null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position=>{
        this.fetchWeather(position.coords.latitude,position.coords.longitude);

      },
      error=>{
        this.setState({
          error:'Error Gettings Weather Condition'
        });
      }
    );
  }

  fetchWeather(lat=25,lon=25){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
    .then(res=>res.json())
    .then(json=>{
      //console.log(json);
      console.log(json.weather[0].main);
      console.log(json.name);
      this.setState({
        temperature:json.main.temp,
        weatherCondition:json.weather[0].main,
        isLoading:false,
        place:json.name
      
        
      });
    });
  }
  render() {
    const {isLoading}=this.state;
    return (
      <View style={styles.container}>
      {isLoading?(
        <Text>Fetching Weather</Text>
      ):<Weather weather={this.state.weatherCondition} temperature={this.state.temperature} place={this.state.place} />}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
