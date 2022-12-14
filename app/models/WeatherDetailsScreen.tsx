import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';

import { StackNavigationParamList } from '../routes/StackNavigation';

import WeatherDetailsScreenView from '../views/WeatherDetailsScreenView'

const WeatherDetailsScreen = () => {
  const route = useRoute<RouteProp<StackNavigationParamList, 'WeatherDetails'>>();
  const { weatherData } = route.params;

  return (
    <WeatherDetailsScreenView weatherData={weatherData} />
  )
}

export default WeatherDetailsScreen