import React from "react";
import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../models/HomeScreen";
import CountryDetailsScreen from "../models/CountryDetailsScreen";
import WeatherDetailsScreen from "../models/WeatherDetailsScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Country Details" component={CountryDetailsScreen} />
            <Stack.Screen name="Weather Details" component={WeatherDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
