import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../models/HomeScreen";
import CountryDetailsScreen from "../models/CountryDetailsScreen";
import WeatherDetailsScreen from "../models/WeatherDetailsScreen";

const Stack = createNativeStackNavigator<StackNavigationParamList>();

export type StackNavigationParamList = {
  Home: undefined,
  CountryDetails: { data: {
    flag: string
    name: string
    capital: string
    population: number
    lattitude: number
    longitude: number
  }}
  WeatherDetails: {weatherData:{
    weatherIcon: string
    capitalName: string
    temperature: number
    precipitaion: number
    windSpeed: number
  }}
}

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
            <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
