import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {weatherConditions} from './WeatherConditions';
import PropTypes from 'prop-types';

const Weather=({weather,temperature,place})=>{
    return(
        <View style={styles.weatherContainer}>
            <View style={styles.headercontainer}>
                <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'}/>
                <Text style={styles.tempText}>{temperature}</Text>
                <Text style={styles.tempText}>{place}</Text>
                
                
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weather}</Text>
                <Text style={styles.title}>It hurts my eyes!</Text>

            </View>
        </View>
    );
 

};
Weather.propTypes={
    temperature:PropTypes.number.isRequired,
    weather:PropTypes.string
};

const styles=StyleSheet.create({
    weatherContainer:{
        flex:1,
        backgroundColor:'#f7b733'
    },
    headercontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    tempText:{
        fontSize:48,
        color:'#fff'
    },
    bodyContainer:{
        flex:2,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft:25,
        marginBottom:40
    },
    title:{
        fontSize:48,
        color:'#fff'
    },
    subtitle:{
        fontSize:24,
        color:'#fff'
    }
});


export default Weather;