import React from 'react'
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native'

import CustomButton from '../components/CustomButton'

import GlobalStyles from '../utils/GlobalStyles'
import WeatherDetailsScreenStyle from '../styles/WeatherDetailsScreenStyle'

type WeatherDetailsScreenViewProps = {
  weatherData: any
}

const WeatherDetailsScreenView = (props: WeatherDetailsScreenViewProps ) => {
  const { weatherData } = props;
  console.log('weatherData in WeatherDetails', weatherData);
  

  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar/>
      <View style={GlobalStyles.horizontalCenterContainer}>
        <Image 
          resizeMode='contain'
          style={WeatherDetailsScreenStyle.image}
          source={{uri: weatherData.current.weather_icons[0]}}
        />
        <Text style={WeatherDetailsScreenStyle.capitalName}>{weatherData.location.name}</Text>
        <View style={WeatherDetailsScreenStyle.row}>
          <Text style={WeatherDetailsScreenStyle.field}>Temperature: </Text>
          <Text style={WeatherDetailsScreenStyle.data}>{weatherData.current.temperature} °C</Text>
        </View>
        <View style={WeatherDetailsScreenStyle.row}>
          <Text style={WeatherDetailsScreenStyle.field}>Precipitaion: </Text>
          <Text style={WeatherDetailsScreenStyle.data}>{weatherData.current.precip} %</Text>
        </View>
        <View style={WeatherDetailsScreenStyle.row}>
          <Text style={WeatherDetailsScreenStyle.field}>Wind Speed: </Text>
          <Text style={WeatherDetailsScreenStyle.data}>{weatherData.current.wind_speed} kmph</Text>
        </View>        
      </View>
    </SafeAreaView>
  )
}

export default WeatherDetailsScreenView