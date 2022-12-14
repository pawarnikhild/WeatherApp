import React from "react";
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, ViewStyle } from "react-native";

import { AppColor, FontSize } from "../utils/StyleConstants";

type CustomButtonProps = {
  title: string;
  color: string;
  style?: ViewStyle;
  btnDisabled?: boolean;
  loading: boolean,
  onPress: () => void;
};

const CustomButton = (props: CustomButtonProps) => {
  let color = !props.btnDisabled ? props.color : "#ccc";
  let textColor = !props.btnDisabled ? AppColor.white : AppColor.gray;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        { ...styles.customButton, ...props.style },
        { backgroundColor: color },
      ]}
      disabled={props.btnDisabled}
      onPress={props.onPress}
    >
      {
        props.loading 
        ? <ActivityIndicator size={40} color={'white'} />
        : <Text style={[styles.text, { color: textColor }]}>{props.title}</Text>
      }
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    height: 46, // Here height is given instead of padding because of when activity indicator is rendered button height changes. 
    // padding: 8,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.Large,
  },
});
