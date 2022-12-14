import React from 'react'
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native'

import GlobalStyles from '../utils/GlobalStyles'
import WeatherDetailsScreenStyle from '../styles/WeatherDetailsScreenStyle'

type WeatherDetailsScreenViewProps = {
  weatherData: any
}

const WeatherDetailsScreenView = (props: WeatherDetailsScreenViewProps) => {
  const { weatherData } = props;
  return (
    <SafeAreaView style={GlobalStyles.horizontalCenterContainer}>
      <StatusBar />
      <Image
        resizeMode='contain'
        style={WeatherDetailsScreenStyle.image}
        source={{ uri: weatherData.weatherIcon }}
      />
      <Text style={WeatherDetailsScreenStyle.capitalName}>{weatherData.capitalName}</Text>
      <View style={WeatherDetailsScreenStyle.row}>
        <Text style={WeatherDetailsScreenStyle.field}>Temperature: </Text>
        <Text style={WeatherDetailsScreenStyle.data}>{weatherData.temperature} °C</Text>
      </View>
      <View style={WeatherDetailsScreenStyle.row}>
        <Text style={WeatherDetailsScreenStyle.field}>Precipitaion: </Text>
        <Text style={WeatherDetailsScreenStyle.data}>{weatherData.precipitaion} %</Text>
      </View>
      <View style={WeatherDetailsScreenStyle.row}>
        <Text style={WeatherDetailsScreenStyle.field}>Wind Speed: </Text>
        <Text style={WeatherDetailsScreenStyle.data}>{weatherData.windSpeed} kmph</Text>
      </View>
    </SafeAreaView>
  )
}

export default WeatherDetailsScreenView