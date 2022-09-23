import React from "react";
import { View, Text, Button, SafeAreaView, StatusBar, TextInput, ImageBackground } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { AppColor } from "../utils/StyleConstants";

import GlobalStyles from "../utils/GlobalStyles";
import HomeScreenStyle from "../styles/HomeScreenStyle";

type HomeScreenViewProps = {
  searchPhase: string,
  btnDisabled: boolean,
  // setSearchPhase: () => void,
  setSearchPhase: (active: string) => void,
  handelBtnStatus: () => void,
  handleSubmitPress: () => void

}

const HomeScreenView = (props: HomeScreenViewProps) => {
  const { searchPhase, btnDisabled, setSearchPhase, handelBtnStatus, handleSubmitPress } = props;

  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <ImageBackground style={{flex: 1}} source={{uri: 'https://wallpapercave.com/wp/wp3082483.jpg'}}>
      <StatusBar />
      <Text style={HomeScreenStyle.heading}>Weather App</Text>
        {/* <Text style={HomeScreenStyle.heading}>Home Screen</Text> */}
      <View style={GlobalStyles.centerContainer}>
      <CustomTextInput
          style={HomeScreenStyle.customTextInput}
          placeholder='Enter Country'
          placeholderColor={AppColor.gray}
          value={searchPhase}
          onChnageText={(text) => {
            setSearchPhase(text);
            handelBtnStatus();
          }}
        />
        <View style={GlobalStyles.horizontalCenterContainer}>
        <CustomButton
          style={HomeScreenStyle.CustomButton}
          title="Press Me"
          btnDisabled={btnDisabled}
          color={AppColor.buttonColor}
          onPress={handleSubmitPress}
        />
        </View>    
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreenView;
