import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';


import WeatherDetailsScreenView from '../views/WeatherDetailsScreenView'

const WeatherDetailsScreen = () => {
  const route = useRoute();
  const { weatherData } = route.params;
  return (
    <WeatherDetailsScreenView weatherData={weatherData} />
  )
}

export default WeatherDetailsScreen