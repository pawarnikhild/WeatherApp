import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import CountryDetailsScreenView from "../views/CountryDetailsScreenView";
import { searchCapitalWeather } from "../services/SearchCapitalWeather";

const CountryDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  const handleButtonPress = async () => {
    console.log("handleButtonPress working");
    const localObject = await searchCapitalWeather(data[0].capital[0]);
    // console.log("localObject", localObject);

    navigation.navigate("Weather Details", { weatherData: localObject });
  };

  return (
    <CountryDetailsScreenView
      data={data}
      handleButtonPress={handleButtonPress}
    />
  );
};

export default CountryDetailsScreen;
