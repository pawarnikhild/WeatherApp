import React from "react";
import { StyleSheet, Text, View, TextInput, ViewStyle } from "react-native";
import { FontSize } from "../utils/StyleConstants";

type CustomTextInputProps = {
  // style: React.CSSProperties,
  style: ViewStyle;
  placeholder: string;
  placeholderColor: string;
  value: string;
  onChnageText: (active: string) => void;
};
const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <TextInput
      style={{ ...styles.CustomTextInput, ...props.style }}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderColor}
      value={props.value}
      onChangeText={props.onChnageText}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  CustomTextInput: {
    height: 48,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
    fontSize: FontSize.inputText,
  },
});
