import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackNavigationParamList } from "../routes/StackNavigation";
import { searchCountry } from "../services/SearchCountry";

import HomeScreenView from "../views/HomeScreenView";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigationParamList, 'Home'>>();
  const [searchPhase, setSearchPhase] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handelBtnStatus = () => {
    if (searchPhase.length <= 0) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    handelBtnStatus();
  }, [searchPhase.length]);

  const handleSubmitPress = async () => {
    setLoading(true);
    const data = await searchCountry(searchPhase);    
    if (data != null) {
      let countryData = {
        flag: data[0].flags.png,
        name: data[0].name.common,
        capital: data[0].capital[0],
        population: data[0].population,
        lattitude: data[0].latlng[0],
        longitude: data[0].latlng[1]
      }
      navigation.navigate("CountryDetails", { data: countryData });
    } else {
      alert("Invalid Input");
      console.log("Invalid Input");
    }
    setLoading(false);
  };

  return (
    <HomeScreenView
      searchPhase={searchPhase}
      btnDisabled={btnDisabled}
      loading={loading}
      setSearchPhase={setSearchPhase}
      handelBtnStatus={handelBtnStatus}
      handleSubmitPress={handleSubmitPress}
    />
  );
};

export default HomeScreen;
