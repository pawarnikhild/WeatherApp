import React from "react";
import { View, Text, SafeAreaView, StatusBar, ImageBackground } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { AppColor } from "../utils/StyleConstants";

import GlobalStyles from "../utils/GlobalStyles";
import HomeScreenStyle from "../styles/HomeScreenStyle";

type HomeScreenViewProps = {
  searchPhase: string,
  btnDisabled: boolean,
  loading: boolean,
  setSearchPhase: (active: string) => void,
  handelBtnStatus: () => void,
  handleSubmitPress: () => void
}

const HomeScreenView = (props: HomeScreenViewProps) => {
  const { searchPhase, btnDisabled, loading, setSearchPhase, handelBtnStatus, handleSubmitPress } = props;

  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <ImageBackground style={HomeScreenStyle.imageBackground} source={require('../assets/Clouds.jpg')}>
        <StatusBar />
        <Text style={HomeScreenStyle.heading}>Weather App</Text>
        <View style={GlobalStyles.VerticalCenterContainer}>
          <CustomTextInput
            placeholder='Enter Country'
            placeholderColor={AppColor.gray}
            style={HomeScreenStyle.customTextInput}
            value={searchPhase}
            onChnageText={(text) => {
              setSearchPhase(text);
              handelBtnStatus();
            }}
          />
            <CustomButton
              title="Press Me"
              color={AppColor.buttonColor}
              btnDisabled={btnDisabled}
              loading={loading}
              onPress={handleSubmitPress}
            />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreenView;
