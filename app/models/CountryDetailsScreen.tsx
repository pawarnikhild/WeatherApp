import React, { useState } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackNavigationParamList } from "../routes/StackNavigation";
import CountryDetailsScreenView from "../views/CountryDetailsScreenView";
import { searchCapitalWeather } from "../services/SearchCapitalWeather";

const CountryDetailsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParamList, 'CountryDetails'>>();
  const route = useRoute<RouteProp<StackNavigationParamList, 'CountryDetails'>>();
  const { data } = route.params;
  const [loading, setLoading] = useState(false);

  const handleButtonPress = async () => {
    setLoading(true);
    const CWData = await searchCapitalWeather(data.capital);
    if (CWData != null) {
      let capitalsWeatherData = {
        weatherIcon: CWData.current.weather_icons[0],
        capitalName: CWData.location.name,
        temperature: CWData.current.temperature,
        precipitaion: CWData.current.precip,
        windSpeed: CWData.current.wind_speed,
      }
      navigation.navigate("WeatherDetails", { weatherData: capitalsWeatherData });
    } else {
      alert("Error in getting weather data");
      console.log("Error in getting weather data");
    }
    setLoading(false);
  };

  return (
    <CountryDetailsScreenView
      data={data}
      loading={loading}
      handleButtonPress={handleButtonPress}
    />
  );
};

export default CountryDetailsScreen;
