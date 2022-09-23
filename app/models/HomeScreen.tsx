import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { searchCountry } from "../services/SearchCountry";

import HomeScreenView from "../views/HomeScreenView";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchPhase, setSearchPhase] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

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
    console.log("handleSubmitPress running");
    const localArray = await searchCountry(searchPhase);
    if (localArray != null) {
      navigation.navigate("Country Details", { data: localArray });
    } else {
      alert("Invalid Input");
      console.log("Invalid Input");
    }
  };

  console.log("searchPhase", searchPhase);

  return (
    <HomeScreenView
      searchPhase={searchPhase}
      btnDisabled={btnDisabled}
      setSearchPhase={setSearchPhase}
      handelBtnStatus={handelBtnStatus}
      handleSubmitPress={handleSubmitPress}
    />
  );
};

export default HomeScreen;
